import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import api from "@/services/";
import MovieSlider from "@/components/MovieSlider";
import BreadCrumbs from "@/components/BreadCrumbs";
import Button from "@/components/Button";
import About from "./components/About";
import "./styles.scss";

export default (props) => {
  const dispatch = useDispatch();
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);
  const [moviesBy, setMoviesBy] = useState([]);
  const id = props.match.params.id;
  const history = useHistory();
  const hours = ["11h45", "15h30", "18h00", "22h20"];
  const cinemas = [
    {
      id: 1,
      name: "cineart",
      logo: require("@/assets/cineart.png"),
      sections: ["11h45", "15h30", "18h00", "22h20"],
    },
  ];
  const [selectedCinema, setSelectedCinema] = useState(cinemas[0]);
  const [selectHour, setSelectHour] = useState(hours[0]);
  async function getMovie() {
    dispatch(setLoadings(true));
    await api(`filmebyId/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
        if (data) {
          dispatch(setLoadings(false));
        }
      });
  }
  useState(() => {
    getMovie();
  }, []);
  useState(() => {
    api(`getAllMovies`)
      .then((res) => res.json())
      .then((datamv) => {
        setMoviesBy(datamv);
      });
  }, []);

  function nextStep() {
    setLoading(true);
    const session = {
      userId: JSON.parse(localStorage.getItem("user")).cpf,
      movieId: id,
      cineId: selectedCinema.id.toString(),
      date: selectHour.replace("h", ":"),
    };
    api(`addSessao`, {
      method: "POST",
      body: session,
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem(
          "session",
          JSON.stringify({ ...data, ...movie, selectHour })
        );
        setLoading(false);
        history.push(`/movie/${id}/place`);
      });
  }

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
        <BreadCrumbs path="sections" id={id} />
        <About movie={movie} />
        <div className="row">
          <div>
            <h4 className="title">SESSÕES</h4>
            <section className="row wrap">
              {hours.map((hr) => (
                <Button
                  key={hr}
                  onClick={() => {
                    setSelectHour(hr);
                    setSelectedCinema(cinemas[0]);
                  }}
                  type={`${selectHour === hr ? "tertiary" : "light"} sm`}
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
                        selectedCinema.name === cin.name ? "active" : ""
                      } selectCine`}
                      onClick={() => setSelectedCinema(cin)}
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
          <Button type="primary" onClick={() => nextStep()} disabled={loading}>
            ESCOLHER MEU LUGAR
          </Button>
        </div>
        <div className="others">
          <h4 className="title">OUTRO TÍTULOS</h4>
          <MovieSlider desk={3} banner={moviesBy} />
        </div>
      </div>
    </div>
  );
};
const setLoadings = (isLoading) => {
  return { type: "NOW_LOADING", isLoading };
};
