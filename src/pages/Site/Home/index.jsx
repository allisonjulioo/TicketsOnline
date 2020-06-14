import React from "react";
import { Carousel } from "react-responsive-carousel";
import api from "@/services";
import MovieSlider from "@/components/MovieSlider";
import SideMenu from "@/components/SideMenu";
import Banner from "./components/Banner";
import Categories from "./components/Categories";
import "./styles.scss";
import { useState } from "react";
import { useEffect } from "react";

export default () => {
  const [banner, setBanner] = useState([]);
  async function getAllMovies() {
    await api("getAllMovies")
      .then((res) => res.json())
      .then(async (data) => {
        setBanner(data);
      })
      .catch(async (err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    getAllMovies();
  }, []);
  return (
    <div id="home">
      <SideMenu />
      <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false}>
        {banner.map((movie, index) => (
          <Banner movie={movie} key={index} />
        ))}
      </Carousel>
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
