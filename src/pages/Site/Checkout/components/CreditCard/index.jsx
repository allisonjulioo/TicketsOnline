import React, { useState, useEffect } from "react";
import InputMask from "react-input-mask";
import mastercard from "@/assets/mastercard.png";
import chip from "@/assets/chip.png";
import "./styles.scss";

export default ({ change }) => {
  const [number, setNumber] = useState([]);
  const [name, setName] = useState("JOSE DAS QUANTAS");
  const [valid, setValid] = useState("88/88");
  const [security, setSecurity] = useState("***");
  const [securityFocus, setSecurityFocus] = useState(false);

  function creditCardNumber(num) {
    const str = num.toString().split(".");
    str[0] = str[0].replace(/(\d)(?=(\d{4})+$)/g, "$1,");
    setNumber(str[0].split(","));
  }
  useEffect(() => creditCardNumber("888888888888"), []);

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
      number: number.join(""),
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
            className="uppercase"
            type="text"
            onChange={(e) => creditCardValues("name", e.target.value)}
          />
        </label>
        <label>
          <p>Numero</p>
          <InputMask
            type="text"
            mask="9999-9999-9999-9999"
            maskChar={null}
            onChange={(e) => creditCardValues("number", e.target.value)}
          />
        </label>
        <div className="row">
          <label>
            <p>Validade</p>
            <InputMask
              type="text"
              mask="99/99"
              maskChar={null}
              onChange={(e) => creditCardValues("valid", e.target.value)}
            />
          </label>
          <label>
            <p>Código de segurança</p>
            <InputMask
              onBlur={(e) => setSecurityFocus(false)}
              onFocus={(e) => setSecurityFocus(true)}
              type="text"
              mask="999"
              maskChar={null}
              onChange={(e) => creditCardValues("security", e.target.value)}
            />
          </label>
        </div>
      </form>

      <div className={`flip-card ${securityFocus ? "security" : ""}`}>
        <div className="card flip-card-inner">
          <div className="front flip-card-front">
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
          <div className="back flip-card-back">
            <div className="top">4004-0000</div>
            <div className="strip"></div>
            <div className="sec">{security}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
