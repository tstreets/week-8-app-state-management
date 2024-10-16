import pageStyles from "./page.module.css";
import ShowcaseImage from "@/components/ShowcaseImage";

export default function Home() {
  return (
    <main>
      <h1>The Squigly Zebra</h1>
      <section className={pageStyles.zebraShowcaseImages}>
        <ShowcaseImage title="On the beach!" shortDesc="Summer 2023" />
        <ShowcaseImage title="Snowboarding!" shortDesc="Spring 2024" />
        <ShowcaseImage title="Rockclimbing!" shortDesc="Fall 2023" />
      </section>
    </main>
  );
}
