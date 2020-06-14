import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { FaUser, FaCog, FaSignOutAlt } from "react-icons/fa";
import "./styles.scss";

export default ({ user }) => {
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const classes = ["user", "nav-item", "items", "menu-item"];
  useEffect(() => {
    const click = (e) => {
      if (!classes.includes(e.target.className)) {
        setOpen(false);
      }
    };
    window.addEventListener("click", click, true);
    return () => {
      window.removeEventListener("click", click);
    };
  }, [classes]);
  return (
    <div id="dropdown">
      <div
        className={open ? "user open" : "user"}
        onClick={() => setOpen(!open)}
      >
        <div className="nav-item">
          <span className="icon-button">
            <FaUser />
          </span>
          <span>{user.name.split(" ")[0] + " " + user.name.split(" ")[1]}</span>
          {open && (
            <div className="dropdown">
              <ul className="items">
                <li className="menu-item">
                  <FaCog />
                  <span>Perfil</span>
                </li>
                <li
                  className="menu-item"
                  onClick={() => {
                    localStorage.clear();
                    history.push("/main");
                  }}
                >
                  <FaSignOutAlt />
                  <span>Sair</span>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
