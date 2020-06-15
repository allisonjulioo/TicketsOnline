import React, { useMemo, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Chart } from "react-charts";
import Button from "@/components/Button";
import api from "@/services";
import "./styles.scss";

export default (props) => {
  useEffect(() => {
    getCountTransactions("site");
    getCountTransactions("manual");
  });

  const [siteTransactions, setSiteTransactions] = useState(-1);
  const [manualTransactions, setManualTransactions] = useState(-1);

  async function getCountTransactions(metodo) {
    await fetch("http://localhost:4567/countTransacoes", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        metodo,
      }),
    })
    .then((res) => res.text())
    .then((data) => {
      if(metodo === "site") {setSiteTransactions(data)}
      else {setManualTransactions(data)}
    })
    .catch(async (err) => {
      console.log(err);
    });
  }


  const cards = [
    { total: siteTransactions === -1 ? '...' : siteTransactions, label: "Vendas pelo site" },
    { total: manualTransactions === -1 ? '...' : manualTransactions, label: "Vendas nas bilheterias" },
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
        <Link to="/admin/transaction/new">
          <Button>Cadastrar transação manual</Button>
        </Link>
      </div>
    </div>
  );
};
