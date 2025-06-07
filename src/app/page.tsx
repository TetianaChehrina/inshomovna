import styles from "./page.module.css";
import HeroSlider from "../components/HeroSlider";
import WhyUsSection from "../components/WhyUsSection";
import OurMissionSection from "@/components/OurMissionSection";
import CoursesSection from "@/components/CoursesSection";

export default function Home() {
  return (
    <div className={styles.home_page}>
      <HeroSlider />
      <WhyUsSection />
      <OurMissionSection />
      <CoursesSection />
    </div>
  );
}
