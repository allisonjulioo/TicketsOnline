import React from "react";
import "./styles.scss";

export default ({ type, children, onClick }) => {
  return (
    <button id="button" className={type} onClick={onClick}>
      <span>{children}</span>
    </button>
  );
};
