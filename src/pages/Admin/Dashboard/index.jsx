import React, { useMemo, useEffect, useState } from "react";
import { Chart } from "react-charts";
import axios from "axios";
import api from "@/services";
import "./styles.scss";
import Tabs from "../components/Tabs";

export default (props) => {
  const [siteTransactions, setSiteTransactions] = useState(-1);
  const [manualTransactions, setManualTransactions] = useState(-1);
  const { cpf, password } = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    getCountTransactions("site");
    getCountTransactions("manual");
    getDataChart();
  }, []);

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
      .catch((err) => {});
  }
  async function getDataChart() {
    axios
      .post("http://localhost:4567/getDataRelatorios", {
        cpf,
        password,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
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
    { total: 'R$ 3400', label: "Total de vendas" },
  ];
  const data = useMemo(
    () => [
      {
        label: "Fisico",
        data: [
          [20, 7],
          [25, 10],
        ],
      },
      {
        label: "Online",
        data: [
          [18, 5],
          [19, 4],
          [19, 1],
          [19, 1],
          [19, 1],
          [20, 2],
          [25, 1],
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
