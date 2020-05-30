import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from "@/services";
import "./styles.scss";
import { useHistory } from "react-router-dom";
import Button from "@/components/Button";

export default () => {
  const [loading, setLoading] = useState(false);
  const [cpf, setCPF] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  async function login(event) {
    event.preventDefault();
    setLoading(true);
    api("login", {
      method: "POST",
      body: { cpf, password },
    })
      .then((data) => {
        console.log(data);
        setLoading(false);
        localStorage.setItem("logged", true);
        alert("Login realizado com sucesso");
        history.push(`/home`);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        alert("Erro ao Logar, usuário ou senha inválidos");
        history.push(`/home`);
      });
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
        <Button disabled={loading} type="primary">
          Login
        </Button>
        <small>
          Não possui conta? Clique <Link to="/register">aqui</Link> para se
          cadastrar
        </small>
      </form>
      <Button onClick={() => history.push(`/home`)} type="light">
        Voltar para a home
      </Button>
    </div>
  );
};
