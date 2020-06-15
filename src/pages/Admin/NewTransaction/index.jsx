import React, { useState } from "react";
import "./styles.scss";
import Button from "@/components/Button";
import { Redirect } from "react-router-dom";



export default () => {
  const [loading, setLoading] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [venda, setVenda] = useState("");
  const [sessao, setSessao] = useState("");
  const [qtdeIngressos, setQtdeIngressos] = useState("");

  async function register(event) {
    setLoading(true);
    event.preventDefault();
    await fetch("http://localhost:4567/addManualTransaction", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        venda,
        sessao,
        qtdeIngressos
      }),
    })
      .then(() => {
        alert("Transação cadastrada com sucesso");
        setLoading(false);
        setCompleted(true);
      })
      .catch((err) => {
        alert("Erro ao cadastrar a transação!");
        setLoading(false);
      });
  }

  if (completed === true) {
    return <Redirect to="/admin/dashboard" />;
  }

  return (
    <div id="transaction-register">
      <div className="header">
        <h1>Cadastrar transação</h1>
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
            style={{color: 'black'}}
          />
          <input
            placeholder="Insira a sessão"
            type="text"
            value={sessao}
            onChange={(event) => setSessao(event.target.value)}
            style={{color: 'black'}}
          />
          <input
            placeholder="Insira a quantidade de ingressos"
            type="text"
            value={qtdeIngressos}
            onChange={(event) => setQtdeIngressos(event.target.value)}
            style={{color: 'black'}}
          />
        </label>
        <Button type="secondary" disabled={loading}>
          Realizar Cadastro
        </Button>
      </form>
    </div>
  );
};
