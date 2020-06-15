import React, { useState, useEffect } from "react";
import mastercard from "@/assets/mastercard.png";
import chip from "@/assets/chip.png";
import "./styles.scss";

export default ({ change }) => {
  const [number, setNumber] = useState([]);
  const [name, setName] = useState("CARLOS GERMANO");
  const [valid, setValid] = useState("02/27");
  const [security, setSecurity] = useState("100");

  function creditCardNumber(num) {
    const str = num.toString().split(".");
    str[0] = str[0].replace(/(\d)(?=(\d{4})+$)/g, "$1,");
    setNumber(str[0].split(","));
  }
  useEffect(() => creditCardNumber(1111111111111111), []);

  function creditCardValues(t, value) {
    switch (t) {
      case "number":
        creditCardNumber(value);
        break;
      case "name":
        setName(value);
        break;
      case "valid":
        setValid(value);
        break;
      case "security":
        setSecurity(value);
        break;
      default:
        break;
    }
    change({
      number: number.join(''),
      name,
      valid,
      security,
    });
  }
  return (
    <div id="creditCard">
      <form action="">
        <label>
          <p>Nome no cartão</p>
          <input
            type="text"
            onChange={(e) => creditCardValues("name", e.target.value)}
          />
        </label>
        <label>
          <p>Numero</p>
          <input
            max="12"
            type="number"
            onChange={(e) => creditCardValues("number", e.target.value)}
          />
        </label>
        <div className="row">
          <label>
            <p>Validade</p>
            <input
              type="text"
              onChange={(e) => creditCardValues("valid", e.target.value)}
            />
          </label>
          <label>
            <p>Código de segurança</p>
            <input
              type="text"
              onChange={(e) => creditCardValues("security", e.target.value)}
            />
          </label>
        </div>
      </form>

      <div className="card">
        <div className="front">
          <div className="flag">
            <img src={mastercard} alt="" height="30" />
          </div>
          <img src={chip} alt="" height="28" />
          <div className="number">
            {number.map((num, index) => (
              <span key={index}>{num}</span>
            ))}
          </div>
          <div className="footer">
            <div className="name">{name}</div>
            <div className="valid">{valid}</div>
          </div>
        </div>
        <div className="back">{security}</div>
      </div>
    </div>
  );
};
