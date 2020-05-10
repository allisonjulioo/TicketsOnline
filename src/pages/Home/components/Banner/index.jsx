import React from "react";
import { useHistory } from "react-router-dom";
import { FaPlay, FaStar } from "react-icons/fa";
import Button from "@/components/Button";
import "./styles.scss";

export default ({ movie }) => {
  const history = useHistory();
  const { title, description, img } = movie;
  return (
    <div id="banner">
      <div className="title">
        <h1>{title}</h1>
        <p>{description}</p>
        <div className="rating">
          {[1, 2, 3, 4, 5].map((star) => (
            <FaStar key={star} color="#FFC107" />
          ))}
        </div>
        <Button type="primary mobile" onClick={() => history.push(`/movie/2`)}>
          <FaPlay />
        </Button>
        <div className="row">
          <Button type="primary" onClick={() => history.push(`/movie/2`)}>
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
