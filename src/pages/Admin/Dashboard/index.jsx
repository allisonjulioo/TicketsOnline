import React from "react";
import Button from "@/components/Button";
import { Link } from "react-router-dom";
import "./styles.scss";

export default (props) => {
  return (
    <div id="dashboard" className="container" style={{ padding: "2em" }}>
      <h3>Dashboard</h3>
      <Link to="/">
        <Button>Voltar</Button>
      </Link>
      <Link to="/admin/movie/new">
        <Button>Cadastrar filme</Button>
      </Link>
    </div>
  );
};
