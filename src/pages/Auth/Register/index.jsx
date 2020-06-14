import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import api from "@/services";
import "./styles.scss";
import Button from "@/components/Button";

export default () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [cpf, setCPF] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [birth, setBirth] = useState("");
  const [sex, setSex] = useState("");

  async function register(event) {
    setLoading(true);
    event.preventDefault();
    api("addUsuario", {
      method: "POST",
      body: { cpf, name, address, password, birth, sex },
    })
      .then((res) => res.json())
      .then(async (data) => {
        if (data && data.password) {
          loginAfterRegister(data);
        }
      })
      .catch(async (err) => {
        console.log(err);
        alert("Erro ao cadastrar");
        setLoading(false);
      });
  }

  async function loginAfterRegister({ cpf, password }) {
    api("login", {
      method: "POST",
      body: { cpf, password },
    })
      .then((res) => res.json())
      .then(
        (data) => {
          if (data && data.userType) {
            setLoading(false);
            localStorage.setItem("user", JSON.stringify(data));
            history.push(`/main`);
          }
        },
        (result) => console.log(result)
      );
  }

  return (
    <div id="auth-register">
      <div className="header">
        <h1>Bem Vindo ao Cadastro</h1>
        <p>
          Com o cadastro, você tem mais comodidade para realizar suas escolhas !
        </p>
        <p>Para isso, precisamos que você informe as informações abaixo:</p>
      </div>
      <form onSubmit={register}>
        <label>
          <p>Nome Completo</p>
          <input
            placeholder="Insira seu Nome Completo"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        <label>
          <p>CPF</p>
          <input
            placeholder="Insira seu CPF"
            type="number"
            value={cpf}
            onChange={(event) => setCPF(event.target.value)}
          />
        </label>
        <label>
          <p>Senha</p>
          <input
            placeholder="Insira sua senha"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            name=""
            id=""
          />
        </label>
        <label>
          <p>Endereço</p>
          <input
            placeholder="Insira seu endereço"
            type="text"
            value={address}
            onChange={(event) => setAddress(event.target.value)}
          />
        </label>
        <label>
          <p>Data Nascimento</p>
          <input
            placeholder="Insira sua Data de Nascimento"
            type="text"
            value={birth}
            onChange={(event) => setBirth(event.target.value)}
          />
        </label>
        <label>
          <p>Sexo</p>
          <select onChange={(event) => setSex(event.target.value)}>
            <option> -- Selecione o sexo -- </option>
            <option value="M">Masculino</option>
            <option value="F">Feminino</option>
          </select>
        </label>
        <Button disabled={loading} type="primary">
          Realizar Cadastro
        </Button>
        <small>
          Já é cadastrado? então <Link to="/auth/login">entre</Link> na sua
          conta
        </small>
      </form>
      <Button onClick={() => history.push(`/main`)} type="light">
        Voltar para a home
      </Button>
    </div>
  );
};
