import React from "react";
import { useSelector } from "react-redux";
import Header from "@/components/Header";
import Routes from "./routes";
import Loading from "@/components/Loading";

export default () => {
  const loading = useSelector((state) => state.isLoading);
  return (
    <div id="app">
      {loading && <Loading loading={true} />}
      <div className="row">
        <div className="container">
          <Header />
          <Routes />
        </div>
      </div>
    </div>
  );
};
