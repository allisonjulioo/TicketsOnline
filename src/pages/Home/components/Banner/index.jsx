import React from "react";
import "./styles.scss";
import Banner from "./../../../../assets/banner.png";

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
        <div className="row">
        <button>ingresso</button>
        <button>trailer</button>
        </div>
      </div>
      <img src={Banner} alt="" />
    </div>
  );
};
