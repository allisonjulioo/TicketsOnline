import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./styles/index.scss";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
