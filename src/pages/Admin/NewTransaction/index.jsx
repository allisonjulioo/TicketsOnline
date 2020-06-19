import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import api from "@/services";
import Button from "@/components/Button";
import "./styles.scss";
import Tabs from "../components/Tabs";

export default (props) => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [venda, setVenda] = useState("");
  const [sessao, setSessao] = useState("");
  const [qtdeIngressos, setQtdeIngressos] = useState("");

  async function register(event) {
    setLoading(true);
    event.preventDefault();
    api("addManualTransaction", {
      method: "POST",
      body: {
        venda,
        sessao,
        qtdeIngressos,
      },
    })
      .then(() => {
        setLoading(false);
        history.push("/admin/dashboard");
      })
      .catch((err) => {
        setLoading(false);
      });
  }

  return (
    <div id="transaction-register" className="container p-2">
      <h3>Cadastrar transação</h3>
      <Tabs path={props.match.path} />
      <div className="header">
        <p>
          Para cadastrar uma transação manual, precisamos que você informe as
          informações abaixo:
        </p>
      </div>
      <form onSubmit={register}>
        <label>
          <p>Valor da Venda</p>
          <input
            placeholder="Insira o valor da venda"
            type="text"
            value={venda}
            onChange={(event) => setVenda(event.target.value)}
            style={{ color: "black" }}
          />
          <input
            placeholder="Insira a sessão"
            type="text"
            value={sessao}
            onChange={(event) => setSessao(event.target.value)}
            style={{ color: "black" }}
          />
          <input
            placeholder="Insira a quantidade de ingressos"
            type="text"
            value={qtdeIngressos}
            onChange={(event) => setQtdeIngressos(event.target.value)}
            style={{ color: "black" }}
          />
        </label>
        <Button type="secondary" disabled={loading}>
          Realizar Cadastro
        </Button>
      </form>
    </div>
  );
};
