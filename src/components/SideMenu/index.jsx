import React, { useState } from "react"; 
import { BrowserRouter, Link } from "react-router-dom";
import * as FontAwesome from "react-icons/fa";
import logoLight from "@/assets/logo-light.png";
import favicon from "@/assets/movie-tickets.png";
import "./styles.scss";

export default () => { 
  const [active, setActive] = useState("Início");
  const [compress, setCompress] = useState(true);
  const menu = [
    { name: "Início", icon: "FaHome" },
    { name: "Tendências", icon: "FaBolt" },
    { name: "Em breve", icon: "FaClock" },
    { name: "Favoritos", icon: "FaHeart" },
    { name: "Assistir depois", icon: "FaBell" },
  ];
  return (
    <div id="side-menu" className="compress">
      <div className="branding">
        <img src={logoLight} className="dt" alt="Bilheteria" />
        <img src={favicon} className="mb" alt="Bilheteria" />
      </div>
      <ul className="menu">
        <BrowserRouter>
          {menu.map((menu, index) => {
            const icon = React.createElement(FontAwesome[menu.icon]);
            return (
              <Link
                to="/"
                key={index}
                onClick={() => {
                  setActive(menu.name);
                  setCompress(!compress);
                }}
                className={active === menu.name ? "active" : ""}
              >
                {icon} <span>{menu.name}</span>
              </Link>
            );
          })}
        </BrowserRouter>
      </ul>
    </div>
  );
};
