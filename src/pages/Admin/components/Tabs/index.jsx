import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./styles.scss";

export default ({ path }) => {
  const [active, setActive] = useState([]);

  useEffect(() => {
    setActive(path.split("/"));
  }, []);
  console.log(active);
  const history = useHistory();
  function navigate(to) {
    history.push(to);
  }
  return (
    <section id="tabs">
      <div className="tab">
        <button
          className={`${active.includes("dashboard") ? "active" : ""} tablinks`}
          onClick={() => navigate("/admin/dashboard")}
        >
          Dashboard
        </button>
        <button
          className={`${active.includes("movie") ? "active" : ""} tablinks`}
          onClick={() => navigate("/admin/movie/new")}
        >
          Cadastrar filme
        </button>
        <button
          className={`${active.includes("transaction") ? "active" : ""} tablinks`}
          onClick={() => navigate("/admin/transaction/new")}
        >
          Nova transação
        </button>
      </div>
    </section>
  );
};
