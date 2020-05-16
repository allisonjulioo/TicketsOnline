import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.scss";
import Button from "@/components/Button";

export default () => {
  const [cpf, setCPF] = useState("");
  const [password, setPassword] = useState("");

  function login(event) {
    event.preventDefault();
    console.log(cpf, password);
  }

  return (
    <div id="auth-login">
      <div className="header">
        <h1>Bem vindo</h1>
        <p>Para continuar, favor fazer o login</p>
      </div>
      <form onSubmit={login}>
        <label>
          <p>CPF</p>
          <input
            type="number"
            value={cpf}
            onChange={(event) => setCPF(event.target.value)}
          />
        </label>
        <label>
          <p>Senha</p>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <Button type="primary">Login</Button>
        <small>
          Não possui conta? Clique <Link to="/register">aqui</Link> para se
          cadastrar
        </small>
      </form>
    </div>
  );
};
