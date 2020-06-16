import React, { useMemo, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Chart } from "react-charts";
import Button from "@/components/Button";
import api from "@/services";
import "./styles.scss";

export default (props) => {
  useEffect(() => {
    getInfoTransactions("count", "site");
    getInfoTransactions("count", "manual");
    getInfoTransactions("total", "site");
    getInfoTransactions("total", "manual");
  }, []);

  const [countSiteTransactions, setCountSiteTransactions] = useState(-1);
  const [countManualTransactions, setCountManualTransactions] = useState(-1);
  const [totalSiteTransactions, setTotalSiteTransactions] = useState(-1);
  const [totalManualTransactions, setTotalManualTransactions] = useState(-1);

  const [vendasBilheteria, setVendasBilheteria] = useState([]);
  const [vendasSite, setVendasSite] = useState([]);

  async function getInfoTransactions(method, filter) {
    api(`countTransacoes/${method}/${filter}`)
      .then((res) => res.text())
      .then((data) => {
        if (method === "count") {
          if (filter === "site") {
            setCountSiteTransactions(data);
          } else {
            setCountManualTransactions(data);
          }
        } else {
          if (filter === "site") {
            setTotalSiteTransactions(data);
          } else {
            setTotalManualTransactions(data);
          }
        }
      })
      .catch(async (err) => {
        console.log(err);
      });

    api(`totalBySession`)
      .then((res) => res.text())
      .then((data) => {
        buildGraphData(JSON.parse(data));
      })
      .catch(async (err) => {
        console.log(err);
      });
  }

  function buildGraphData(data) {
    let vendasBilheteria = [];
    let vendasSite = [];

    data.forEach((elem) => {
      vendasBilheteria.push([parseInt(elem.sessaoId), elem.totalBilheteria]);
      vendasSite.push([parseInt(elem.sessaoId), elem.totalSite]);
    });

    setVendasBilheteria([...vendasBilheteria]);
    setVendasSite([...vendasSite]);
  }

  const cards = [
    {
      total: countSiteTransactions === -1 ? "..." : countSiteTransactions,
      label: "Número de vendas pelo site",
    },
    {
      total:
        totalSiteTransactions === -1 ? "..." : "R$ " + totalSiteTransactions,
      label: "Valor total de vendas pelo site",
    },
    {
      total: countManualTransactions === -1 ? "..." : countManualTransactions,
      label: "Vendas nas bilheterias",
    },
    {
      total:
        totalManualTransactions === -1
          ? "..."
          : "R$ " + totalManualTransactions,
      label: "Valor total de vendas nas bilheterias",
    },
  ];

  const data = useMemo(
    () => [
      {
        label: "Vendas na bilheteria (em R$)",
        data: vendasBilheteria,
      },
      {
        label: "Vendas pelo site (em R$)",
        data: vendasSite,
      },
    ],
    [vendasBilheteria, vendasSite]
  );

  const axes = useMemo(
    () => [
      {
        primary: true,
        type: "ordinal",
        position: "bottom",
        show: data.length !== 0,
      },
      { type: "linear", position: "left", show: data.length !== 0 },
    ],
    [data]
  );

  function renderChart() {
    if (vendasBilheteria.length === 0) {
      return null;
    }

    return (
      <div className="charts">
        <div className="card chart">
          <div>
            <div className="y-axis">Valor de vendas por meio</div>
            <Chart
              data={data}
              axes={axes}
              tooltip
              style={{
                width: "400px",
                height: "300px",
              }}
            />
            <div className="x-axis">Sessão</div>
          </div>
        </div>
      </div>
    );
  }

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
          <button
            className="tablinks"
            onClick={(event) => openCity(event, "Paris")}
          >
            Paris
          </button>
          <button
            className="tablinks"
            onClick={(event) => openCity(event, "Tokyo")}
          >
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
        {renderChart()}
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
