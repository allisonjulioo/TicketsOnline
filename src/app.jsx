import React from "react";
import SideMenu from "@/components/SideMenu";
import Header from "@/components/Header";
import Routes from "./routes";

export default () => {
  return (
    <div id="app">
      <div className="row">
        <SideMenu />
        <div className="container">
          <Header />
          <Routes />
        </div>
      </div>
    </div>
  );
};
