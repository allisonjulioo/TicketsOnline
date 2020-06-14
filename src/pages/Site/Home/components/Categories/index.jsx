import React, { useState } from "react";
import MovieSlider from "@/components/MovieSlider";
import "./styles.scss";

export default ({ movies }) => {
  const arr = movies.map((mv) => mv.categoryList);
  const concat = [].concat.apply([], [...arr]);
  const categories = concat.filter((item, pos) => concat.indexOf(item) === pos);
  const [active, setActive] = useState(categories[0]);
  const [moviesBy, setMoviesBy] = useState([]);

  useState(() => {
    if (movies && movies.length) {
      setActive("ACAO");
      setMoviesBy(movies.filter((mv) => mv.categoryList.includes("ACAO")));
    }
  }, [movies]);
  function activeCategory(cat) {
    setMoviesBy(movies.filter((mv) => mv.categoryList.includes(cat)));
    setActive(cat);
  }
  return (
    <div id="categories">
      <ul className="list row">
        {categories.map((cat, index) => (
          <li
            onClick={() => activeCategory(cat)}
            className={active === cat ? "active" : ""}
            key={index}
          >
            {cat}
          </li>
        ))}
      </ul>
      <MovieSlider banner={moviesBy} />
    </div>
  );
};
