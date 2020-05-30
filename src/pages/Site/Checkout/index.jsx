import React from "react";
import { useHistory } from "react-router-dom";
import banner from "@/assets/banner.png";
import CreditCard from "./components/CreditCard";
import BreadCrumbs from "@/components/BreadCrumbs";
import Button from "@/components/Button";
import "./styles.scss";
import Invoice from "./components/Invoice";

export default () => {
  const history = useHistory();
  return (
    <div id="checkout">
      <div id="banner" className="banner">
        <div className="title container-md ">
          <h1>Blood Shot 2020</h1>
          <p>Confirme seu pedido</p>
        </div>
        <img src={banner} alt="" />
      </div>
      <div className="container-md">
        <BreadCrumbs path="checkout" />
        <div className="body">
          <h5>Ingressos</h5>
          <div className="content">
            {["A5", "A6"].map((chair, index) => (
              <Invoice chair={chair} key={index} />
            ))}
            <div className="payments"></div>
          </div>
        </div>
        <h5>Pagamento</h5>
        <CreditCard />
        <Button
          type="primary confirm"
          onClick={() => history.push("/movie/2/ticket")}
        >
          PAGAR R$ 60,00
        </Button>
      </div>
    </div>
  );
};
