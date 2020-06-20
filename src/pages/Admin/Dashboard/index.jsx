import React, { useMemo, useEffect, useState } from "react";
import { Chart } from "react-charts";
import axios from "axios";
import api from "@/services";
import "./styles.scss";
import Tabs from "../components/Tabs";

export default (props) => {
  const [series, setSeries] = useState([]);
  const [siteTransactions, setSiteTransactions] = useState(-1);
  const [manualTransactions, setManualTransactions] = useState(-1);
  const { cpf, password } = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    getCountTransactions("site");
    getCountTransactions("manual");
    getDataChart();
  },[]);

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
      .post("https://bilheteria-online.herokuapp.com/getDataRelatorios", {
        cpf,
        password,
      })
      .then((response) => {
        response.data.data.filter((res) =>
          res.data.filter((date) => {
            return date[0] = new Date(date[0]).getDay();
          })
        );
        console.log(response.data.data);
        setSeries(response.data.data);
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
    { total: "R$ 3400", label: "Total de vendas" },
  ];
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
                data={series}
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
