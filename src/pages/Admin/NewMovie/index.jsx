import React, { useState } from "react";
import InputMask from "react-input-mask";
import "./styles.scss";
import api from "@/services";
import Button from "@/components/Button";
import Tabs from "../components/Tabs";

export default (props) => {
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [releaseData, setReleaseData] = useState("");
  const [finalDate, setFinalDate] = useState("");

  async function register(event) {
    setLoading(true);
    event.preventDefault();
    await api("addFilme", {
      method: "POST",
      body: {
        cpf: JSON.parse(localStorage.getItem("user")).cpf,
        password: JSON.parse(localStorage.getItem("user")).password,
        title,
        year,
        releaseData,
        finalDate,
      },
    })
      .then(() => {
        alert("Filme cadastrado com sucesso");
        setLoading(false);
      })
      .catch((err) => {
        alert("Erro ao cadastrar o filme!");
        setLoading(false);
      });
  }

  return (
    <div id="movie-register" className="container p-2">
      <h3>Cadastrar filme</h3>
      <Tabs path={props.match.path} />
      <div className="header">
        <p>
          Para cadastrar um novo filme precisamos que você informe as
          informações abaixo:
        </p>
      </div>
      <form onSubmit={register}>
        <label>
          <p>Título</p>
          <input
            placeholder="Insira o título do filme"
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </label>
        <label>
          <p>Ano</p>
          <InputMask
            placeholder="Ano do filme"
            type="text"
            mask="9999"
            maskChar={null}
            onChange={(event) => setYear(event.target.value)}
          />
        </label>
        <label>
          <p>Data de estreia</p>
          <InputMask
            placeholder="Data de incio da sessão"
            type="text"
            mask="99/99/9999"
            maskChar={null}
            onChange={(event) => setReleaseData(event.target.value)}
          />
        </label>
        <label>
          <p>Data final de exibição</p>
          <InputMask
            placeholder="Insira a data final para exibição"
            type="text"
            mask="99/99/9999"
            maskChar={null}
            onChange={(event) => setFinalDate(event.target.value)}
          />
        </label>
        <Button type="secondary" disabled={loading}>
          Realizar Cadastro
        </Button>
      </form>
    </div>
  );
};
