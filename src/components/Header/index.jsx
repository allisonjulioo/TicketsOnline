import React, { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import Button from "@/components/Button";
import logo from "@/assets/logo.png";
import logoLight from "@/assets/logo-light.png";
import "./styles.scss";

export default () => {
  const [scrolled, setScrolled] = useState();

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
      <div className="branding">
        <img src={logo} alt="Bilheteria" className="mb" />
        <img src={logoLight} className="dt" alt="Bilheteria" />
      </div>
      <div className="user">
        <Button type="primary mobile">
          <span className="name">Allison Julio</span>
          <FaUser />
        </Button>
      </div>
    </div>
  );
};
