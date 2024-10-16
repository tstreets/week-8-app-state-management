import showcaseStyles from "./showcase.module.css";

export default function ShowcaseImage({ title, shortDesc }) {
  return (
    <div
      style={{ backgroundColor: "#a2c9d6", height: "300px", display: "flex" }}
    >
      <div className={showcaseStyles.showcaseText}>
        <h4>{title}</h4>
        <p>{shortDesc}</p>
        <button className={showcaseStyles.showcaseButton}>See More</button>
      </div>
    </div>
  );
}
