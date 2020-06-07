import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

export default (props) => {
  return (
    <div id="dashboard" style={{ marginTop: "110px" }}>
      <h3>Dashboard</h3>
      <Link to="/">Voltar</Link>
    </div>
  );
};
