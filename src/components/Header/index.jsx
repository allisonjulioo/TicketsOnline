import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import logoLight from "@/assets/logo-light.png";
import Button from "@/components/Button";
import UserDropdown from "./components/Dropdown";
import "./styles.scss";

export default () => {
  const isAdmin = useSelector((state) => state.isAdmin);
  // TODO refatorar userSelector mutando variavel isAdmin

  const history = useHistory();
  const [scrolled, setScrolled] = useState();
  const user = JSON.parse(localStorage.getItem("user"));
  const logged = !!user && user.name;

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
    <div
      id="header"
      className={(scrolled ? "scrolled" : "", isAdmin ? "admin" : "")}
    >
      <div
        className="branding"
        style={{ opacity: scrolled || isAdmin ? "1" : "0" }}
        onClick={() => history.push(`/main`)}
      >
        {isAdmin && (
          <img
            src={logoLight}
            alt="Bilheteria"
            className="admin-branding"
            height="40"
          />
        )}
        {scrolled && <img src={logoLight} alt="Bilheteria" height="40" />}
      </div>
      {!logged && (
        <section className="actions">
          <Button
            type={`${isAdmin ? "primary" : "outline"} sm`}
            onClick={() => history.push(`/auth/login`)}
          >
            Entrar
          </Button>
          <Button
            type="secondary sm"
            onClick={() => history.push(`/auth/register`)}
          >
            Cadastrar
          </Button>
        </section>
      )}
      {logged && <UserDropdown user={user} />}
    </div>
  );
};
