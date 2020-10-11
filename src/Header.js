import React, {useState} from "react";
import "./css/App.css";

import {Link} from "react-router-dom";

//import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, /*NavLink */} from "reactstrap";

import logo from "./assets/logo.png";

function Navi() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <header>
        <Navbar color="dark" dark expand="md">
          <div className="logo_wrapper">
            <a className="logoN" href="/FlashTech/"><img className="logo" src={logo} alt="logo" /></a>
            </div>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <div className="nav_wrapper">
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <Link className="header_link first" to="/">Home</Link>
                    </NavItem>
                    <NavItem>
                        <Link className="header_link second" to="/about">About</Link>
                    </NavItem>
                    <NavItem>
                        <Link className="header_link third" to="/services">Our Services</Link>
                    </NavItem>
                    <NavItem>
                        <Link className="header_link fourth" to="/careers">Careers</Link>
                    </NavItem>
                </Nav>
                </div>
            </Collapse>
        </Navbar>
    </header>
  );
}

class Header extends React.Component {
  render() {
    return(
      <Navi />
    );
  }
}

export default Header;