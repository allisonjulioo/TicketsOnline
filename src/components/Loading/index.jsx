import React from "react";
import pipoca from "@/assets/comp-pipoca.gif";
import "./styles.scss";

export default ({ loading }) => {
  return (
    <div>
      {loading && (
        <div className="loading" id="load">
          <h3>Aguarde...</h3>
          <img src={pipoca} alt="" />
        </div>
      )}
    </div>
  );
};
