import React from "react";
import "./styles.scss";

export default ({ type, children }) => {
  return (
    <button id="button" className={type}>
      <span>{children}</span>
    </button>
  );
};
