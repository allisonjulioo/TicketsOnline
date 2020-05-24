import React from "react";
import { FaPlay, FaStar, FaHeart, FaClock } from "react-icons/fa";
import Button from "@/components/Button";
import bloodshot from "@/assets/bloodshot-banner.jpg";
import "./styles.scss";

export default () => {
  return (
    <section id="about">
      <figure className="banner">
        <img src={bloodshot} alt="" />
        <Button type="icon">
          <FaHeart />
        </Button>
      </figure>
      <div className="row">
        <label className="info primary">2020</label>
        <div className="infos">
          <label className="info">
            <FaClock />
            2h 20min
          </label>
          <label className="info light">Ação</label>
          <label className="info light">Ficção científica</label>
          <label className="info light">Marvel</label>
        </div>
      </div>
      <div className="row">
        <Button type="secondary">
          <FaPlay /> <span>trailer</span>
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
    </section>
  );
};
