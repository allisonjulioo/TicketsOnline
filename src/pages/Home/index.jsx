import React from "react";
import Header from "@/components/Header";
import MovieSlider from "@/components/MovieSlider";
import Banner from "./components/Banner";
import Categories from "./components/Categories";
import "./styles.scss";

export default () => {
  return (
    <div id="home">
      <Header />
      <Banner />
      <div className="container">
        <h4 className="title">Populares</h4>
        <MovieSlider />
      </div>
      <div className="container">
        <h4 className="title">Categorias</h4>
        <Categories />
      </div>
    </div>
  );
};
