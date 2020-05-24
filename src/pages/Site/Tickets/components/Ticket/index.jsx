import React from "react";
import qr from "@/assets/qr.png";
import "./styles.scss";

export default ({ seat }) => {
  return (
    <div id="ticket">
      <div className="cardWrap">
        <div className="card cardLeft">
          <h1>
            Cineart <span>Shopping cidade</span>
          </h1>
          <div className="title">
            <span>usuário</span>
            <h2>Allison Julio</h2>
          </div>
          <div className="name">
            <span>filme</span>
            <h2>Blood Shot 2020</h2>
          </div>
          <div className="seat">
            <span>assento</span>
            <h2>{seat}</h2>
          </div>
          <div className="time">
            <span>sessão</span>
            <h2>18:30</h2>
          </div>
          <div className="time">
            <span>Entrada</span>
            <h2>Meia</h2>
          </div>
        </div>
        <div className="card cardRight">
          <div className="eye"></div>
          <div className="number">
            <h3>{seat}</h3>
            <span>assento</span>
          </div>
          <div className="barcode">
            <img src={qr} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
