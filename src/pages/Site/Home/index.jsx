import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import api from "@/services";
import MovieSlider from "@/components/MovieSlider";
import SideMenu from "@/components/SideMenu";
import Banner from "./components/Banner";
import bn from "@/assets/cinema.jpg";
import Categories from "./components/Categories";
import "./styles.scss";

export default () => {
  const [banner, setBanner] = useState([{ name: "Cinema", poster: bn, id: 1 }]);
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
        {banner.filter(m => m.carousel).map((mv, index) => (
          <Banner movie={mv} key={index} />
        ))}
      </Carousel>
      <div className="container">
        <h4 className="title">Populares</h4>
        <MovieSlider banner={banner} />
      </div>
      <div className="container">
        <h4 className="title">Categorias</h4>
        <Categories />
      </div>
    </div>
  );
};
