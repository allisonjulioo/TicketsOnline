import React from "react";
import { FaTrash } from "react-icons/fa";
import Button from "@/components/Button";
import "./styles.scss";

export default ({ chair, index, deleteTicket, isDelete, movie }) => {
  return (
    <div id="invoice">
      <div className="title">
        {index + 1}º {movie.name}
      </div>
      <ul className="details">
        <li className="item">
          <small>Sessão</small>
          <Button type="light sm">
            {movie.selectHour} <br /> {movie.selectHour}
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
            <Button type="light sm" blocked={true}>
              Meia
            </Button>
            <Button type="secondary sm">Inteira</Button>
          </div>
        </li>
      </ul>
      <div className="subtotal">Subtotal R$ 12,00</div>
      {isDelete && (
        <Button
          type="icon p-0"
          title="Excluir ingresso"
          onClick={() => deleteTicket(index, chair)}
        >
          <FaTrash size={12} color="#505050" />
        </Button>
      )}
    </div>
  );
};
