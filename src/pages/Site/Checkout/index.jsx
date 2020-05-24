import React from "react";
import { FaPen } from "react-icons/fa";
import banner from "@/assets/banner.png";
import CreditCard from "./components/CreditCard";
import BreadCrumbs from "@/components/BreadCrumbs";
import Button from "@/components/Button";
import "./styles.scss";

export default () => {
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
          <h2>Detalhes da compra</h2>
          <div className="content">
            <div className="details">
              <section>
                <p>Sessão</p>
                <p>
                  <strong> 22/03/2020 - 18:30</strong>
                  <Button type="icon">
                    <FaPen size={10} />
                  </Button>
                </p>
              </section>
              <section>
                <p>Lugares</p>
                <p>
                  <strong>G22</strong>, <strong> G23</strong>
                  <Button type="icon">
                    <FaPen size={10} />
                  </Button>
                </p>
              </section>
              <section>
                <p>Cinema</p>
                <p>
                  <strong>Cinepolis</strong>
                  <Button type="icon">
                    <FaPen size={10} />
                  </Button>
                </p>
              </section>
              <section>
                <p>Tipo de sessão</p>
                <p>
                  <strong>Normal</strong>
                  <Button type="icon">
                    <FaPen size={10} />
                  </Button>
                </p>
              </section>
            </div>
            <div className="payments">
              <CreditCard />
            </div>
          </div>
          <Button type="primary">CONFIRMAR PAGAMENTO</Button>
        </div>
      </div>
    </div>
  );
};
