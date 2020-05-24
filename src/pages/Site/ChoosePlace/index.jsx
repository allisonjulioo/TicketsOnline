import React from "react";
import "./styles.scss";
import banner from "@/assets/banner.png";
import Places from "./components/Places";

export default () => {
  return (
    <div id="place">
      <div id="banner" className="banner">
        <div className="title container-md ">
          <h1>Blood Shot 2020</h1>
          <p>Selecione o lugar</p>
        </div>
        <img src={banner} alt="" />
      </div>
      <div className="container-md">
        <div className="body">
          <Places />
        </div>
      </div>
    </div>
  );
};
