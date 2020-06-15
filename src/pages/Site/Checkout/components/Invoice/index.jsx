import React from "react";
import { FaTrash } from "react-icons/fa";
import Button from "@/components/Button";
import "./styles.scss";

export default ({ chair, index, deleteTicket }) => {
  return (
    <div id="invoice">
      <div className="title">1º Bloodshot</div>
      <ul className="details">
        <li className="item">
          <small>Sessão</small>
          <Button type="light sm">
            31/05/2020 <br /> 22H20
          </Button>
        </li>
        <li className="item">
          <small>Cinema</small>
          <Button type="light sm">Cineart</Button>
        </li>
        <li className="item">
          <small>Assento</small>
          <Button type="light sm">{chair}</Button>
        </li>
        <li className="item">
          <small>Sala</small>
          <div className="row">
            <Button type="secondary sm">normal</Button>
            <Button type="light sm">3d</Button>
          </div>
        </li>
        <li className="item">
          <small>Entrada</small>
          <div className="row">
            <Button type="secondary sm">Meia</Button>
            <Button type="light sm">Inteira</Button>
          </div>
        </li>
      </ul>
      <div className="subtotal">Subtotal R$ 30,00</div>
      <Button
        type="icon"
        title="Excluir ingresso"
        onClick={() => deleteTicket(index, chair)}
      >
        <FaTrash size={12} color="#505050" />
      </Button>
    </div>
  );
};
