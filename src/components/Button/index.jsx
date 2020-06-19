import React from "react";
import "./styles.scss";
import loadingIcon from "@/assets/loading.gif";

export default ({
  type,
  children,
  onClick,
  disabled = false,
  blocked = false,
  title,
}) => {
  return (
    <button
      id="button"
      title={title}
      className={type}
      onClick={onClick}
      disabled={disabled || blocked}
    >
      {disabled && <img height="32" src={loadingIcon} alt="" />}
      {!disabled && <span>{children}</span>}
    </button>
  );
};
