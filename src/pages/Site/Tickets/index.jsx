import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { FaPrint, FaCheck } from "react-icons/fa";
import banner from "@/assets/banner.png";
import BreadCrumbs from "@/components/BreadCrumbs";
import Ticket from "./components/Ticket";
import Button from "@/components/Button";
import "./styles.scss";

export default (props) => {
  const [movie, setMovie] = useState([]);
  const order = JSON.parse(localStorage.getItem("tickets"));
  const id = props.match.params.id;
  const history = useHistory();
  function printDiv() {
    window.print();
  }
  useEffect(() => {
    setMovie(JSON.parse(localStorage.getItem("session")));
  }, []);

  return (
    <div id="checkout" className="tickets">
      <div id="banner" className="banner">
        <div className="title container-md ">
          <h1>{movie.name}</h1>
          <p>Retire seu ticket</p>
        </div>
        <img src={banner} alt="" />
      </div>
      <div className="container-md">
        <BreadCrumbs path="ticket" id={id} />
        <div className="body">
          <h4>
            <FaCheck /> Compra realizada com sucesso
          </h4>
          <p>Imprima aqui sues ingressos</p>
          <div className="content" id="tickets">
            {order.cadeirascompradas.map((seat, index) => (
              <Ticket order={order} seat={seat} key={index} movie={movie} />
            ))}
          </div>
        </div>
        <Button type="light  " onClick={() => history.push("/main")}>
          <FaPrint /> voltar para a home
        </Button>
        <Button type="primary confirm" onClick={() => printDiv("ticket")}>
          <FaPrint /> imprimir / salvar
        </Button>
      </div>
    </div>
  );
};
