import React from "react";
import { useHistory } from "react-router-dom";
import * as FontAwesome from "react-icons/fa";
import "./styles.scss";

export default ({ path, id }) => {
  const history = useHistory();
  const breadcrumbs = [
    { url: "/main", name: "HOME", icon: "FaHome", path: "main" },
    { url: `/movie/${id}`, name: "SESSÕES", icon: "FaClock", path: "sections" },
    {
      url: `/movie/${id}/place`,
      name: "LUGARES",
      icon: "FaChair",
      path: "place",
    },
    {
      url: `/movie/${id}/checkout`,
      name: "CHECKOUT",
      icon: "FaCreditCard",
      path: "checkout",
    },
    {
      url: `/movie/${id}/ticket`,
      name: "INGRESSO",
      icon: "FaTicketAlt",
      path: "ticket",
    },
  ];
  return (
    <div id="breadcrumbs">
      <ul className="list">
        {breadcrumbs.map((menu, index) => (
          <li
            key={index}
            className={`
            ${path === menu.path ? "active" : ""}
            ${
              index > breadcrumbs.map((e) => e.path).indexOf(path) ||
              (path === "ticket" &&
                menu.path !== "main" &&
                index < breadcrumbs.map((e) => e.path).indexOf(path))
                ? "disabled"
                : "passed"
            }
            
            item`}
            onClick={() => history.push(menu.url)}
          >
            {React.createElement(FontAwesome[menu.icon])}
            <span>{menu.name} </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
