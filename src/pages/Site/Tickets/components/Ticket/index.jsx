import React from "react";
import qr from "@/assets/qr.png";
import "./styles.scss";

export default ({ order, seat, movie }) => {
  return (
    <div id="ticket">
      <div className="cardWrap">
        <div className="card cardLeft">
          <h1>Cineart</h1>
          <div className="title">
            <span>usuário</span>
            <h2>{order.nomePagador}</h2>
          </div>
          <div className="name">
            <span>filme</span>
            <h2>{movie.name}</h2>
          </div>
          <div className="seat">
            <span>assento</span>
            <h2>{seat.id}</h2>
          </div>
          <div className="time">
            <span>sessão</span>
            <h2>{movie.selectHour}</h2>
          </div>
          <div className="time">
            <span>Entrada</span>
            <h2>INTEIRA</h2>
          </div>
        </div>
        <div className="card cardRight">
          <div className="eye"></div>
          <div className="number">
            <h3>{seat.id}</h3>
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
