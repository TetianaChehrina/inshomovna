import css from "./page.module.css";
export default function Home() {
  console.log("Test CI run");
  return (
    <>
      <main className={css.page_Home}>
        <p>HomePage</p>
      </main>
    </>
  );
}
