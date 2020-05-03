import React, { useState } from "react";
import "./styles.scss";

export default () => {
  const [active, setActive] = useState("Descobrir");
  const menu = [
    "Descobrir",
    "Tendências",
    "Em breve",
    "Favoritos",
    "Assistir depois",
  ];
  return (
    <div id="side-menu">
      <ul className="menu">
        {menu.map((menu) => (
          <li
            onClick={() => setActive(menu)}
            className={active === menu ? "active" : ""}
            key={menu}
          >
            {menu}
          </li>
        ))}
      </ul>
    </div>
  );
};
