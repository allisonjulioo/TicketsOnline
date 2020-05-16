import React, { useState } from "react";
import { FaUser, FaCog, FaSignOutAlt } from "react-icons/fa";
import "./styles.scss";

export default () => {
  const [open, setOpen] = useState(false);
  return (
    <div id="dropdown">
      <div className="user" onClick={() => setOpen(!open)}>
        <div className="nav-item">
          <span className="icon-button">
            <FaUser />
          </span>
          <span>Allison</span>
          {open && (
            <div className="dropdown">
              <ul>
                <li className="menu-item">
                  <FaCog />
                  <span>Configurações</span>
                </li>
                <li className="menu-item">
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
