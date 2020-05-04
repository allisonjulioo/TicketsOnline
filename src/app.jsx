import React from "react";
import SideMenu from "@/components/SideMenu";
import Routes from "./routes";

export default () => {
  return (
    <div id="app">
      <div className="row">
        <SideMenu />
        <div className="container">
          <Routes />
        </div>
      </div>
    </div>
  );
};
