import React, { useState } from "react";
import MovieSlider from "@/components/MovieSlider";
import "./styles.scss";

export default () => {
  const [active, setActive] = useState("Ação");
  const categories = ["Ação", "Aventura", "Romance", "Drama", "Luta", "Terror", "Ficção científica"];
  return (
    <div id="categories">
      <ul className="list row">
        {categories.map((cat, index) => (
          <li
            onClick={() => setActive(cat)}
            className={active === cat ? "active" : ""}
            key={index}
          >
            {cat}
          </li>
        ))}
      </ul>
      <MovieSlider />
    </div>
  );
};
