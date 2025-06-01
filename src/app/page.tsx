import css from "./page.module.css";
import HeroSlider from "../components/HeroSlider";
import WhyUsSection from "../components/WhyUsSection";

export default function Home() {
  return (
    <section className={css.hero_section} data-aos="fade-up">
      <HeroSlider />
      <WhyUsSection />
    </section>
  );
}
