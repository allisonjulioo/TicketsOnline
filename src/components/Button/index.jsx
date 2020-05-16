import React from "react";
import "./styles.scss";
import loadingIcon from "@/assets/loading.gif";

export default ({ type, children, onClick, disabled = false }) => {
  return (
    <button id="button" className={type} onClick={onClick} disabled={disabled}>
      {disabled && <img height="32" src={loadingIcon} alt="" />}
      {!disabled && <span>{children}</span>}
    </button>
  );
};
