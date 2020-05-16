import React from "react";
import { Carousel } from "react-responsive-carousel";
import MovieSlider from "@/components/MovieSlider";
import SideMenu from "@/components/SideMenu";
import Banner from "./components/Banner";
import Categories from "./components/Categories";
import "./styles.scss";

export default () => {
  const high = [
    {
      title: "Blood Shot 2020",
      description: `Baseado no best-seller de banda desenhada, Vin Diesel protagoniza
    "Bloodshot" na pele de Ray Garrison, um soldado recentemente morto em
    combate e ressuscitado como o super-humano Bloodshot da empresa RST.`,
      img: require("@/assets/banner.png"),
    },
    {
      title: "Viúva Negra",
      description: `Em Viúva Negra, após seu nascimento, Natasha Romanoff (Scarlett Johansson) é dada à KGB, que a prepara para se tornar sua agente definitiva. Quando a URSS rompe, o governo tenta matá-la enquanto a ação se move para a atual Nova York, onde ela trabalha como freelancer.`,
      img: require("@/assets/viuva-negra.jpg"),
    },
  ];
  return (
    <div id="home">
      <SideMenu />
      <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false}>
        {high.map((movie, index) => (
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
