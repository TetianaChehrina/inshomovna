"use client";
import styles from "@/styles/courseCard.module.css";
import Link from "next/link";
import { Course } from "@/types/course";

interface Props {
  course: Course;
}

export default function CourseCard({ course }: Props) {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{course.title}</h3>
      <p className={styles.description}>{course.shortDescription}</p>
      <Link href={`/courses/${course.slug}`} className={styles.button}>
        Читати більше
      </Link>
    </div>
  );
}
