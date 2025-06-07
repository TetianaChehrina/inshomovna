"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import styles from "@/styles/ourMission.module.css";
import Container from "./Container";
import { getOurMissionContent, updateMission } from "@/lib/api/ourMission";
import { OurMissionContent } from "@/types/ourMission";

type FormInputs = {
  title: string;
  subtitle: string;
  description: string;
  file?: FileList;
};

export default function OurMissionSection() {
  const [data, setData] = useState<OurMissionContent | null>(null);
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const { data: session } = useSession();
  const isAdmin = session?.user?.role === "admin";
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInputs>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getOurMissionContent();
        setData(res);
        reset({
          title: res.title,
          subtitle: res.subtitle,
          description: res.description,
        });
      } catch (err) {
        console.error(err);
        setError("Failed to load data.");
      }
    };
    fetchData();
  }, [reset]);

  const onSubmit = async (values: FormInputs) => {
    if (!data) return;

    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("subtitle", values.subtitle);
    formData.append("description", values.description);
    if (values.file?.[0]) {
      formData.append("file", values.file[0]);
    }

    try {
      setLoading(true);
      const updated = await updateMission(data._id, formData);
      setData(updated);
      setSuccess(true);
      setEditMode(false);
    } catch (err) {
      console.error(err);
      setError("Не вдалося оновити дані місії.");
    } finally {
      setLoading(false);
    }
  };

  const cancelEdit = () => {
    if (data) {
      reset({
        title: data.title,
        subtitle: data.subtitle,
        description: data.description,
      });
    }
    setEditMode(false);
    setError("");
    setSuccess(false);
  };

  if (!data) return null;

  const videoUrl = data.videoUrl;

  return (
    <section id="about" className={styles.ourMission_section}>
      <Container>
        <div className={styles.top}>
          {editMode ? (
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                {...register("title", { required: true })}
                className={styles.input}
                placeholder="Заголовок"
              />
              {errors.title && (
                <p className={styles.error}>Заголовок обовʼязковий</p>
              )}

              <input
                {...register("subtitle", { required: true })}
                className={styles.input}
                placeholder="Підзаголовок"
              />
              {errors.subtitle && (
                <p className={styles.error}>Підзаголовок обовʼязковий</p>
              )}

              <div className={styles.videoWrapper}>
                <video src={videoUrl} controls className={styles.video} />
                {isAdmin && (
                  <input
                    type="file"
                    accept="video/*"
                    {...register("file")}
                    className={styles.input_file}
                  />
                )}
              </div>

              <textarea
                {...register("description", { required: true })}
                className={styles.textarea}
                placeholder="Опис"
              />
              {errors.description && (
                <p className={styles.error}>Опис обовʼязковий</p>
              )}

              <div className={styles.button_group}>
                <button
                  type="submit"
                  className={styles.save_btn}
                  disabled={loading}
                >
                  {loading ? "Зберігаю..." : "Зберегти"}
                </button>
                <button
                  type="button"
                  className={styles.cancel_btn}
                  onClick={cancelEdit}
                >
                  Скасувати
                </button>
              </div>
            </form>
          ) : (
            <>
              <h2 className={styles.title} data-aos="fade-in">
                <span className={styles.line}></span>
                <span className={styles.white}>
                  {data.title.split(" ")[0]}
                </span>{" "}
                <span className={styles.purple}>
                  {data.title.split(" ").slice(1).join(" ")}
                </span>
                <span className={styles.line}></span>
              </h2>

              <p className={styles.subtitle}>{data.subtitle} </p>

              {isAdmin && (
                <button
                  type="button"
                  className={styles.edit_btn}
                  onClick={() => setEditMode(true)}
                >
                  Редагувати
                </button>
              )}
            </>
          )}
        </div>

        {!editMode && (
          <>
            <div className={styles.video_wrapper}>
              <video
                src={videoUrl}
                controls
                className={styles.video}
                data-aos="fade-up"
              />
            </div>
            <p className={styles.description}>{data.description}</p>
          </>
        )}

        {error && <p className={styles.error}>{error}</p>}
        {success && <p className={styles.success}>Успішно оновлено!</p>}

        <div className={styles.bottom}>
          <button
            type="button"
            className={styles.readMore_btn}
            onClick={() => router.push("/about")}
          >
            Дізнатися більше
          </button>
        </div>
      </Container>
    </section>
  );
}
