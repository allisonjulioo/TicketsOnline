import React from "react";
import Header from "./../../components/Header";
import SideMenu from "./../../components/SideMenu";
import "./styles.scss";

export default () => {
  return (
    <div id="home">
      <Header />
      <div className="row">
        <SideMenu />
        <div className="container">
          <h2>works</h2>
        </div>
      </div>
    </div>
  );
};
