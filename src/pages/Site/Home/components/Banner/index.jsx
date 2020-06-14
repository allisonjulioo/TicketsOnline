import React from "react";
import { useHistory } from "react-router-dom";
import { FaPlay, FaStar } from "react-icons/fa";
import Button from "@/components/Button";
import "./styles.scss";

export default ({ movie }) => {
  const history = useHistory();
  const { id, name, synopsis, poster } = movie;
  const img = require(`@/assets/${movie.name
    .toLocaleLowerCase()
    .replace(" ", "_")}.jpg`);
  return (
    <div id="banner">
      <div className="title">
        <h1>{name}</h1>
        <p>{synopsis}</p>
        <div className="rating">
          {[1, 2, 3, 4, 5].map((star) => (
            <FaStar key={star} color="#FFC107" />
          ))}
        </div>
        <Button
          type="primary mobile"
          onClick={() => history.push(`/movie/${id}`)}
        >
          <FaPlay />
        </Button>
        <div className="row">
          <Button type="primary" onClick={() => history.push(`/movie/${id}`)}>
            ingresso
          </Button>
          <Button type="outline">
            <FaPlay /> <span>trailer</span>
          </Button>
        </div>
      </div>
      <img src={img} alt="" />
    </div>
  );
};
