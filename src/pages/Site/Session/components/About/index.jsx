import React from "react";
import { FaPlay, FaStar, FaHeart, FaClock } from "react-icons/fa";
import Button from "@/components/Button"; 
import "./styles.scss";

export default ({ poster, categories }) => {
  return (
    <section id="about">
      <figure className="banner">
        <div className="bg" style={{ backgroundImage: `url(${poster})` }}></div>
        <img src={poster} alt="" />
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
          {categories &&
            categories.map((cat, index) => (
              <label className="info light" key={index}>
                {cat.toLowerCase()}
              </label>
            ))}
        </div>
      </div>
      <div className="row">
        <Button type="secondary">
          <FaPlay /> <span>trailer</span>
        </Button>
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
    </section>
  );
};
