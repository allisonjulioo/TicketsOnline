import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { FaPlay, FaStar, FaHeart, FaClock } from "react-icons/fa";
import MovieSlider from "@/components/MovieSlider";
import Button from "@/components/Button";
import img from "@/assets/banner.png";
import "./styles.scss";

export default () => {
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
  const [selectHour, setSelectHour] = useState(hours[0]);
  const history = useHistory();
  return (
    <div id="single">
      <div id="banner">
        <div className="title container-md ">
          <h1>Blood Shot 2020</h1>
          <p>TIS Eng. Software</p>
          <label className="info primary">2020</label>
          <div className="row">
            <Button type="outline">
              <FaPlay /> <span>trailer</span>
            </Button>
            <Button type="icon">
              <FaHeart />
            </Button>
          </div>

          <div className="rating">
            <div className="starts">
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar key={star} color="#FFC107" />
              ))}
              <p htmlFor="">2000 votos</p>
            </div>
            <h1>9,7</h1>
          </div>
        </div>
        <img src={img} alt="" />
      </div>
      <div className="body container-md">
        <div className="infos">
          <label className="info">
            <FaClock />
            2h 20min
          </label>
          <label className="info light">Ação</label>
          <label className="info light">Ficção científica</label>
          <label className="info light">Marvel</label>
        </div>
        <div className="row">
          <div>
            <h4 className="title">SESSÕES</h4>
            <section className="row wrap">
              {hours.map((hr) => (
                <Button
                  key={hr}
                  onClick={() => setSelectHour(hr)}
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
                  return <img key={cin.name} src={cin.logo} alt="" />;
                }
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
            real e o que não é, mas está decidido a descobrir a verdade.
          </p>
        </div>
        <div className="cta">
          <h5>Bora assistir com um desconto?</h5>
          <Button type="primary">ESCOLHER MEU LUGAR</Button>
        </div>
        <div className="others">
          <h4 className="title">OUTRO TÍTULOS</h4>
          <MovieSlider desk={3} />
        </div>
      </div>
    </div>
  );
};
