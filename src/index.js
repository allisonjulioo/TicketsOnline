import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./styles/index.scss";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
