import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { Chart } from "react-charts";
import Button from "@/components/Button";
import "./styles.scss";

export default (props) => {
  const cards = [
    { total: 100, label: "Vendas pelo site" },
    { total: 200, label: "Vendas nas bilheterias" },
    { total: 2, label: "Vendas cambistas" },
  ];
  const data = useMemo(
    () => [
      {
        label: "Series 1",
        data: [
          [0, 1],
          [1, 2],
          [2, 4],
          [3, 2],
          [4, 7],
        ],
      },
      {
        label: "Series 2",
        data: [
          [0, 3],
          [1, 1],
          [2, 5],
          [3, 6],
          [4, 4],
        ],
      },
    ],
    []
  );

  const axes = useMemo(
    () => [
      { primary: true, type: "linear", position: "bottom" },
      { type: "linear", position: "left" },
    ],
    []
  );
  function openCity(event, string) {
    console.log(event, string);
  }
  return (
    <div id="dashboard" className="container" style={{ padding: "2em" }}>
      <h3>Dashboard</h3>
      <div className="container">
        <div className="tab">
          <button
            className="tablinks"
            onClick={(event) => openCity(event, "London")}
          >
            London
          </button>
          <button className="tablinks" onClick={(event) => openCity(event, "Paris")}>
            Paris
          </button>
          <button className="tablinks" onClick={(event) => openCity(event, "Tokyo")}>
            Tokyo
          </button>
        </div>
        <div className="card-list">
          {cards.map((card, index) => (
            <div className="card" key={index}>
              <h3>{card.total}</h3>
              <span>{card.label}</span>
            </div>
          ))}
        </div>
        <div className="charts">
          <div className="card">
            <div>
              <Chart
                data={data}
                axes={axes}
                tooltip
                style={{
                  width: "400px",
                  height: "300px",
                }}
              />
            </div>
          </div>
        </div>
        <Link to="/">
          <Button>Voltar</Button>
        </Link>
        <Link to="/admin/movie/new">
          <Button>Cadastrar filme</Button>
        </Link>
      </div>
    </div>
  );
};
