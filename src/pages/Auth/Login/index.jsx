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
      <h1>Bem Vindo</h1>
      <p>Para continuar, favor fazer o login</p>

      <form onSubmit={login}>
        <label>
          <p>CPF</p>
          <input
            type="text"
            value={cpf}
            onChange={(event) => setCPF(event.target.value)}
            name=""
            id=""
          />
        </label>
        <label>
          <p>Senha</p>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            name=""
            id=""
          />
        </label>
        <Button>Login</Button>
        <p>Não possui conta? Clique</p>
        <Link to="/register">aqui</Link> para acessar
      </form>
    </div>
  );
};
/*
export default () => {
    const s = async ()  => {
        const resposta = await fetch("http://localhost:4567/addFilme",
        {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "title":"sonic",
                "year": "2020",
                "releaseData": "2020-05-10",
                "finalDate": "2020-07-12"
            })
        })

        const data = await resposta.json();
        console.log(data)
    }

    useEffect(() => {s()},[]);

    return (
        <div className="container"><h2>

            Teste Request


            </h2></div>
    );
}*/
