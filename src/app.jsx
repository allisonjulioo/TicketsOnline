import React from "react"; 
import Header from "@/components/Header";
import Routes from "./routes";

export default () => {
  return (
    <div id="app">
      <div className="row">
        <div className="container">
          <Header />
          <Routes />
        </div>
      </div>
    </div>
  );
};
