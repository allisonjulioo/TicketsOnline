import React, { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import Button from "@/components/Button";
import logo from "@/assets/logo.png";
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
      <div className="branding" style={{ display: scrolled ? "" : "none" }}>
        <img src={logo} alt="Bilheteria" height="40" />
      </div>
      <div className="user">
        <Button type="primary mobile">
          <FaUser />
        </Button>
        <span className="mb">Allison</span>
      </div>
    </div>
  );
};
