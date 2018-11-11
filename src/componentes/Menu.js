import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem } from "react-bootstrap";

export class Menu extends Component {
  render() {
    return (
      <Navbar>
        <Nav>
          <NavItem
            componentClass={Link}
            href="/"
            to="/"
            active={window.pathname === "/"}
          >
            Inicio
          </NavItem>
          <NavItem
            componentClass={Link}
            href="/saludar"
            to="/saludar"
            active={window.pathname === "/saludar"}
          >
            Saludar
          </NavItem>
          <NavItem
            componentClass={Link}
            href="/peliculas"
            to="/peliculas"
            active={window.pathname === "/"}
          >
            Peliculas
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}

Menu.propTypes = {};

export default Menu;
