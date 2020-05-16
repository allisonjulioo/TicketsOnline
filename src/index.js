import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./styles/index.scss";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
