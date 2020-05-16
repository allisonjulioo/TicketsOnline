import React, { useState } from "react";
import "./styles.scss";
import Button from "@/components/Button";

export default () => {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [releaseData, setReleaseData] = useState("");
  const [finalDate, setFinalDate] = useState("");

  async function register(event) {
    event.preventDefault();
    await fetch("http://localhost:4567/addFilme", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title.replace(" ", ""),
        year,
        releaseData,
        finalDate,
      }),
    })
      .then(() => alert("Filme cadastrado com sucesso"))
      .catch((err) => alert("Erro ao cadastrar o filme!"));
  }

  return (
    <div id="movie-register">
      <div className="header">
        <h1>Cadastrar filme</h1>
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
          <input
            placeholder="Ano do filme"
            type="number"
            value={year}
            onChange={(event) => setYear(event.target.value)}
          />
        </label>
        <label>
          <p>Data de estreia</p>
          <input
            placeholder="Data de incio da sessão"
            type="date"
            value={releaseData}
            onChange={(event) => setReleaseData(event.target.value)}
            name=""
            id=""
          />
        </label>
        <label>
          <p>Data final de exibição</p>
          <input
            placeholder="Insira a data final para exibição"
            type="date"
            value={finalDate}
            onChange={(event) => setFinalDate(event.target.value)}
          />
        </label>
        <Button type="primary">Realizar Cadastro</Button>
      </form>
    </div>
  );
};
