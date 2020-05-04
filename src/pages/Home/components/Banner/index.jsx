import React from "react";
import { FaPlay, FaStar } from "react-icons/fa";
import Banner from "@/assets/banner.png";
import Button from "@/components/Button";
import "./styles.scss";

export default () => {
  return (
    <div id="banner">
      <div className="title">
        <h1>Blood Shot 2020</h1>
        <p>
          Baseado no best-seller de banda desenhada, Vin Diesel protagoniza
          "Bloodshot" na pele de Ray Garrison, um soldado recentemente morto em
          combate e ressuscitado como o super-humano Bloodshot da empresa RST.
        </p>
        <div className="rating">
          {[1, 2, 3, 4, 5].map((star) => (
            <FaStar key={star} color="#FFC107" />
          ))}
        </div>
        <Button type="primary mobile">
          <FaPlay />
        </Button>
        <div className="row">
          <Button type="primary">ingresso</Button>
          <Button type="outline">
            <FaPlay /> <span>trailer</span>
          </Button>
        </div>
      </div>
      <img src={Banner} alt="" />
    </div>
  );
};
