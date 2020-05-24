import React from "react";
import { useHistory } from "react-router-dom";
import { FaPrint, FaCheck } from "react-icons/fa";
import banner from "@/assets/banner.png";
import BreadCrumbs from "@/components/BreadCrumbs";
import Ticket from "./components/Ticket";
import Button from "@/components/Button";
import "./styles.scss";

export default () => {
  const history = useHistory();
  function printDiv(divName) {
    window.print();
  }
  return (
    <div id="checkout" className="tickets">
      <div id="banner" className="banner">
        <div className="title container-md ">
          <h1>Blood Shot 2020</h1>
          <p>Retire seu ticket</p>
        </div>
        <img src={banner} alt="" />
      </div>
      <div className="container-md">
        <BreadCrumbs path="ticket" />
        <div className="body">
          <h4>
            <FaCheck /> Compra realizada com sucesso
          </h4>
          <p>Imprima aqui sues ingressos</p>
          <div className="content" id="tickets">
            <Ticket seat="g22" />
            <Ticket seat="g23" />
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
