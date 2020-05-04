import React from "react";
import { FaUser } from "react-icons/fa";
import Button from "@/components/Button";
import logo from "@/assets/logo.png";
import "./styles.scss";

export default () => {
  return (
    <div id="header">
      <div className="branding">
        <img src={logo} alt="Bilheteria" />
      </div>
      <div className="user">
        <Button type="primary mobile">
          <span className="name">Allison Julio</span>
          <FaUser />
        </Button>
      </div>
    </div>
  );
};
