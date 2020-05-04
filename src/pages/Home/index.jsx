import React from "react";
import MovieSlider from "@/components/MovieSlider";
import Banner from "./components/Banner";
import Categories from "./components/Categories";
import "./styles.scss";

export default () => {
  return (
    <div id="home">
      <Banner />
      <div className="container">
        <h4 className="title">Categorias</h4>
        <MovieSlider />
      </div>
      <div className="container">
        <h4 className="title">Populares</h4>
        <Categories />
      </div>
    </div>
  );
};
