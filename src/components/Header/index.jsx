import React from "react";
import "./styles.scss";
import logo from "./../../assets/logo.png";

export default () => {
  return (
    <div id="header">
      <div className="branding">
        <img src={logo} alt="Bilheteria" />
      </div>
      <div className="user">
        <span>Allison Julio</span>
      </div>
    </div>
  );
};
