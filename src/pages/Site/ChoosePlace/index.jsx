import React from "react";
import "./styles.scss";
import banner from "@/assets/banner.png";
import Places from "./components/Places";
import BreadCrumbs from "@/components/BreadCrumbs";

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
        <BreadCrumbs path="place"/>
        <div className="body">
          <Places />
        </div>
      </div>
    </div>
  );
};
