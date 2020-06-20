import React, { useState } from "react";
import "./styles.scss";
import api from "@/services/";
import Places from "./components/Places";
import BreadCrumbs from "@/components/BreadCrumbs";

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
  return (
    <div id="place">
      <div id="banner" className="banner">
        <div className="title container-md ">
          <h1>{movie.name}</h1>
          <p>Selecione o lugar</p>
        </div>
        <img src={movie.poster} alt="" />
      </div>
      <div className="container-md">
        <BreadCrumbs path="place" id={id} />
        <div className="body">
          <Places id={id} />
        </div>
      </div>
    </div>
  );
};
