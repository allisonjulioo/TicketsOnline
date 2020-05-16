import React, { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import Button from "@/components/Button";
import logoLight from "@/assets/logo-light.png";
import { Link } from "react-router-dom";
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
        <img src={logoLight} alt="Bilheteria" />
      </div>
      <div className="user">
      <Link to="/login">
        <Button type="primary mobile">
          <FaUser />
        </Button>
      </Link>
        <span className="mb">Allison</span>
      </div>
    </div>
  );
};
