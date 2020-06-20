import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import CreditCard from "./components/CreditCard";
import BreadCrumbs from "@/components/BreadCrumbs";
import api from "@/services/";
import Button from "@/components/Button";
import "./styles.scss";
import Invoice from "./components/Invoice";

export default (props) => {
  const [numeroCartao, setNumber] = useState([]);
  const [nomeCartao, setName] = useState();
  const [validade, setValid] = useState();
  const [cvv, setSecurity] = useState();
  const [chairs, setChairs] = useState([]);
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);
  const id = props.match.params.id;
  const history = useHistory();

  useEffect(() => {
    setChairs(JSON.parse(localStorage.getItem("session")).chairs);
    setMovie(JSON.parse(localStorage.getItem("session")));
  }, []);

  function deleteTicket(index, ch) {
    if (chairs.length > 1) {
      setChairs(chairs.filter((c) => c !== ch));
    }
  }
  function checkout() {
    setLoading(true);
    const order = {
      userId: JSON.parse(localStorage.getItem("user")).cpf,
      sessaoId: JSON.parse(localStorage.getItem("session")).id,
      qtIngressos: chairs.length,
      valorIngresso: 12,
      valorTotal: chairs.length * 12,
      chairs: chairs.join(","),
      numeroCartao,
      nomeCartao,
      validade,
      cvv,
    };
    finishOrder(order);
  }
  function finishOrder(session) {
    api("transacao", {
      method: "POST",
      body: session,
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("tickets", JSON.stringify(data));
        setLoading(false);
        history.push(`/movie/${id}/ticket`);
      })
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
          <h1>{movie.name}</h1>
          <p>Confirme seu pedido</p>
        </div>
        <img src={movie.poster} alt="" />
      </div>
      <div className="container-md">
        <BreadCrumbs path="checkout" id={id} />
        <div className="body">
          <h5>Ingressos</h5>
          <div className="content">
            {chairs.map((chair, index) => (
              <Invoice
                isDelete={chairs.length > 1}
                index={index}
                chair={chair}
                key={index}
                movie={movie}
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
          blocked={chairs.length < 1 || !validade}
        >
          PAGAR R$ {chairs.length * 12},00
        </Button>
      </div>
    </div>
  );
};
