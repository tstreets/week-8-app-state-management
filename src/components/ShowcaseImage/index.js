import showcaseStyles from "./showcase.module.css";

export default function ShowcaseImage({ title, shortDesc }) {
  return (
    <div>
      <h4>{title}</h4>
      <p>{shortDesc}</p>
      <button className={showcaseStyles.showcaseButton}>See More</button>
    </div>
  );
}
