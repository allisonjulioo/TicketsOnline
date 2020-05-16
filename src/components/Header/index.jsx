import React, { useEffect, useState } from "react";
import logo from "@/assets/logo.png";
import UserDropdown from "./components/Dropdown"; 
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
        <img src={logoLight} alt="Bilheteria" height="40" />
      </div>
      <UserDropdown />
    </div>
  );
};
