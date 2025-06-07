import styles from "@/styles/coursesSection.module.css";
import { getCourses } from "@/lib/api/courses";
import CourseCard from "./CourseCard";
import Container from "./Container";

export default async function CoursesSection() {
  const courses = await getCourses();

  if (!courses) return null;

  return (
    <section id="courses" className={styles.section}>
      <Container>
        <h2 className={styles.heading} data-aos="fade-up" data-aos-delay="300">
          Наші курси
        </h2>
        <div
          className={styles.wrapper}
          data-aos="fade-left"
          data-aos-delay="1000"
        >
          {courses.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </div>
      </Container>
    </section>
  );
}
