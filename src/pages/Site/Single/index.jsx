import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import MovieSlider from "@/components/MovieSlider";
import BreadCrumbs from "@/components/BreadCrumbs";
import Button from "@/components/Button";
import About from "./components/About";
import img from "@/assets/banner.png";
import "./styles.scss";

export default () => {
  const history = useHistory();
  const hours = ["11h45", "15h30", "18h00", "22h20"];
  const cinemas = [
    {
      name: "cineart",
      logo: require("@/assets/cineart.png"),
      sections: ["11h45", "15h30", "18h00", "22h20"],
    },
    {
      name: "cinepolis",
      logo: require("@/assets/cinepolis.png"),
      sections: ["15h30", "18h00"],
    },
  ];
  const [selectedCinema, setSelectedCinema] = useState(cinemas[0].name);
  const [selectHour, setSelectHour] = useState(hours[0]);
  return (
    <div id="single">
      <div id="banner">
        <div className="title container-md ">
          <h1>Blood Shot 2020</h1>
          <p>Sobre o filme e sessões</p>
        </div>
        <img src={img} alt="" />
      </div>
      <div className="body container-md">
        <BreadCrumbs path="sections" />
        <About />
        <div className="row">
          <div>
            <h4 className="title">SESSÕES</h4>
            <section className="row wrap">
              {hours.map((hr) => (
                <Button
                  key={hr}
                  onClick={() => {
                    setSelectHour(hr);
                    setSelectedCinema(cinemas[0].name);
                  }}
                  type={`${selectHour === hr ? "outline" : "light"} sm`}
                >
                  {hr}
                </Button>
              ))}
            </section>
          </div>
          <div>
            <h4 className="title">CINEMAS</h4>
            <section className="row wrap cinemas">
              {cinemas.map((cin) => {
                if (cin.sections.includes(selectHour)) {
                  return (
                    <figure
                      key={cin.name}
                      className={`${
                        selectedCinema === cin.name ? "active" : ""
                      } selectCine`}
                      onClick={() => setSelectedCinema(cin.name)}
                    >
                      <img src={cin.logo} alt="" />
                    </figure>
                  );
                }
                return "";
              })}
            </section>
          </div>
        </div>
        <div className="sinopse">
          <h4 className="title">SINOPSE</h4>
          <p>
            Baseado no best-seller de banda desenhada, Vin Diesel protagoniza
            "Bloodshot" na pele de Ray Garrison, um soldado recentemente morto
            em combate e ressuscitado como o super-humano Bloodshot da empresa
            RST. Com um exército de nanotecnologia nas suas veias, Ray é uma
            força imparável - mais forte do que nunca e capaz de se curar
            instantaneamente. Mas, ao controlar o seu corpo, a empresa controla
            também a sua mente e as suas memórias. Agora, Ray não sabe o que é
            real e o que não é, mas está decidido a descobrir a verdade.{" "}
            <a href="#/">ler mais</a>
          </p>
        </div>
        <div className="cta">
          <Button
            type="primary"
            onClick={() =>
              history.push(
                `/movie/1/place`
              )
            }
          >
            ESCOLHER MEU LUGAR
          </Button>
        </div>
        <div className="others">
          <h4 className="title">OUTRO TÍTULOS</h4>
          <MovieSlider desk={3} />
        </div>
      </div>
    </div>
  );
};
