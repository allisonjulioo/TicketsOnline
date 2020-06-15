import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import CreditCard from "./components/CreditCard";
import BreadCrumbs from "@/components/BreadCrumbs";
import api from "@/services/";
import Button from "@/components/Button";
import "./styles.scss";
import banner from "@/assets/banner.png";
import Invoice from "./components/Invoice";

export default (props) => {
  const [numeroCartao, setNumber] = useState([]);
  const [session, setSession] = useState({});
  const [nomeCartao, setName] = useState();
  const [validade, setValid] = useState();
  const [cvv, setSecurity] = useState();

  const [loading, setLoading] = useState(false);
  const id = props.match.params.id;
  const chair = JSON.parse(localStorage.getItem("session"));
  const history = useHistory();

  function deleteTicket(index, chair) {
    console.log(chair.chairs);
    chair.chairs.splice(index, 1);
  }
  function checkout() {
    setLoading(true);
    setSession({
      user_id: JSON.parse(localStorage.getItem("user")).cpf,
      qtIngressos: chair.chairs.length,
      valorIngresso: 12,
      valorTotal: chair.chairs.length * 12,
      chairs: chair.chairs,
      numeroCartao,
      nomeCartao,
      validade,
      cvv,
    });
    finishOrder();
  }
  function finishOrder() {
    api("transacao", {
      method: "POST",
      body: session,
    })
      .then((res) => res.json())
      .then(
        (data) => {
          console.log(data);
          setLoading(false);
          // history.push(`/movie/${id}/ticket`);
        },
        (result) => console.log(result)
      )
      .catch(() => setLoading(false));
  }
  function change(value) {
    setNumber(value.number);
    setName(value.name);
    setValid(value.valid);
    setSecurity(value.security);
  }

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
        <BreadCrumbs path="checkout" id={id} />
        <div className="body">
          <h5>Ingressos</h5>
          <div className="content">
            {chair.chairs.map((chair, index) => (
              <Invoice
                index={index}
                chair={chair}
                key={index}
                deleteTicket={(index, chair) => deleteTicket(index, chair)}
              />
            ))}
            <div className="payments"></div>
          </div>
        </div>
        <h5>Pagamento</h5>
        <CreditCard change={change} />
        <Button
          disabled={loading}
          type="primary confirm"
          onClick={() => checkout()}
        >
          PAGAR R$ {chair.chairs.length * 12},00
        </Button>
      </div>
    </div>
  );
};
