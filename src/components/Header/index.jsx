import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import logoLight from "@/assets/logo-light.png";
import Button from "@/components/Button";
import UserDropdown from "./components/Dropdown";
import "./styles.scss";

export default (props) => {
  const history = useHistory();
  const [scrolled, setScrolled] = useState();
  const [logged, setLogged] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, true);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div id="header" className={scrolled ? "scrolled" : ""}>
      <div className="branding" style={{ display: scrolled ? "" : "none" }}>
        <img src={logoLight} alt="Bilheteria" height="40" />
      </div>
      {!logged && (
        <section>
          <Button type="outline sm" onClick={() => history.push(`/login`)}>
            Entrar
          </Button>
          <Button type="primary sm" onClick={() => history.push(`/register`)}>
            Cadastrar
          </Button>
        </section>
      )}
      {logged && <UserDropdown />}
    </div>
  );
};
