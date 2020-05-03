import React from "react";
import Header from "@/components/Header";
import SideMenu from "@/components/SideMenu";
import Routes from "./routes";

export default () => {
  return (
    <div id="app">
      <Header />
      <div className="row">
        <SideMenu />
        <div className="container">
          <Routes />
        </div>
      </div>
    </div>
  );
};
