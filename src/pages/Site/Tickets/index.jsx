import React from "react";
import { useHistory } from "react-router-dom";
import { FaPrint } from "react-icons/fa";
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
    <div id="checkout">
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
          <div className="content" id="tickets">
            <Ticket seat="g22" />
            <Ticket seat="g23" />
          </div>
        </div>
        <Button type="light  " onClick={() => history.push('/main')}>
          <FaPrint /> voltar para a home
        </Button>
        <Button type="primary confirm" onClick={() => printDiv("ticket")}>
          <FaPrint /> imprimir
        </Button>
      </div>
    </div>
  );
};
