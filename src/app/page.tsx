import css from "./page.module.css";
import HeroSlider from "../components/HeroSlider";

export default function Home() {
  return (
    <div>
      <section className={css.hero_section}>
        <HeroSlider />
      </section>
    </div>
  );
}
