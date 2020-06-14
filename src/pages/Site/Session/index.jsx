import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import api from "@/services/";
import MovieSlider from "@/components/MovieSlider";
import BreadCrumbs from "@/components/BreadCrumbs";
import Button from "@/components/Button";
import About from "./components/About";
import "./styles.scss";

export default (props) => {
  const [movie, setMovie] = useState({});
  const id = props.match.params.id;
  useState(() => {
    api(`filmebyId/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
      });
  }, []);
  useState(() => {
    api(`getAllMovies`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);

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
    <div id="session">
      <div id="banner">
        <div className="title container-md ">
          <h1>{movie.name}</h1>
          <p>Sobre o filme e sessões</p>
        </div>
        <img src={movie.poster} alt="" />
      </div>
      <div className="body container-md">
        <BreadCrumbs path="sections" />
        <About poster={movie.poster} categories={movie.categoryList} />
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
            {movie.synopsis}
            <a href="#/">ler mais</a>
          </p>
        </div>
        <div className="cta">
          <Button type="primary" onClick={() => history.push(`/movie/1/place`)}>
            ESCOLHER MEU LUGAR
          </Button>
        </div>
        <div className="others">
          <h4 className="title">OUTRO TÍTULOS</h4>
          <MovieSlider desk={3}   />
        </div>
      </div>
    </div>
  );
};
