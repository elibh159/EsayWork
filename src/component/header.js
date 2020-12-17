import React, { useState } from "react";
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
  Input,
} from "reactstrap";
import { ReactComponent as Search } from "../assets/icons/search.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="header-box">
      <Container>
        <Navbar
          expand="md"
          className={isOpen ? "navbar-is-open m-auto" : ""}
          dark
        >
          <NavbarBrand href="/">
            <img src="/assets/images/logo.png" alt="Esay Work" />
          </NavbarBrand>
          <NavbarToggler onClick={toggle} className={isOpen ? "is-open" : ""} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="justify-content-center w-100" navbar>
              <NavItem>
                <NavLink href="/" active>
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/about-us">About Us</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/services">Services</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/pricing">Pricing</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/careers">Careers</NavLink>
              </NavItem>
            </Nav>
            <NavbarText>
              <div className="search-box d-none d-lg-block">
                <Search />
                <Input bsSize="sm" />
              </div>
            </NavbarText>
          </Collapse>
        </Navbar>
      </Container>
    </div>
  );
};

export default Header;
