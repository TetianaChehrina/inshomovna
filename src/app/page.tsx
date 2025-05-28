import Container from "@/components/Container";
import css from "./page.module.css";

export default function Home() {
  return (
    <Container>
      <p className={css.page_home}>HomePage</p>
    </Container>
  );
}
