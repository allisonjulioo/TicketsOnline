import React, { useMemo, useEffect, useState } from "react";
import { Chart } from "react-charts";
import api from "@/services";
import "./styles.scss";
import Tabs from "../components/Tabs";

export default (props) => {
  useEffect(() => {
    getCountTransactions("site");
    getCountTransactions("manual");
  }, []);

  const [siteTransactions, setSiteTransactions] = useState(-1);
  const [manualTransactions, setManualTransactions] = useState(-1);

  function getCountTransactions(method) {
    api(`countTransacoes/count/${method}`)
      .then((res) => res.json())
      .then((data) => {
        if (method === "site") {
          setSiteTransactions(data);
        } else {
          setManualTransactions(data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  const cards = [
    {
      total: siteTransactions === -1 ? "..." : siteTransactions,
      label: "Vendas pelo site",
    },
    {
      total: manualTransactions === -1 ? "..." : manualTransactions,
      label: "Vendas nas bilheterias",
    },
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
  return (
    <div id="dashboard" className="container p-2">
      <h3>Dashboard</h3>
      <div className="container">
        <Tabs path={props.match.path} />
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
      </div>
    </div>
  );
};
