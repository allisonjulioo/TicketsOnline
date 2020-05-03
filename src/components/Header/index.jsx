import React from "react";
import "./styles.scss";
import Button from "@/components/Button";
import logo from "@/assets/logo.png";

export default () => {
  return (
    <div id="header">
      <div className="branding">
        <img src={logo} alt="Bilheteria" />
      </div>
      <div className="user">
        <Button type="primary">Allison Julio</Button>
      </div>
    </div>
  );
};
