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
        {/* <Button type="primary mobile">
          <FaUser />
        </Button> */}
        <NavItem icon={<FaUser />}>
            <DropdownMenu/>
        </NavItem>
        <span className="mb">Allison</span>
      </div>
    </div>
  );
  function NavItem(props){
    const [open, setOpen] = useState(false);

    return(
      <li className = "nav-item">
        <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
          {props.icon}  
        </a>

        {open && props.children}
      </li>
    );
  }
  function DropdownMenu() {

    function DropdownItem(props) {
      return(
        <a href = "#" className="menu-item">
          <span className = "icon-button">{props.leftIcon}</span>

          {props.children}

          <span className = "icon-right">{props.rightIcon}</span>


        </a>
      );
    }

    
  return (
    <div className="dropdown">
        <DropdownItem leftIcon={<FaUser />}>Configurações</DropdownItem>
        <DropdownItem leftIcon={<FaUser />}>Meu Perfil</DropdownItem>
    </div>
  
    );
  }
};
