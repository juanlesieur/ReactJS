import React from "react";
import "./Navbar.css";
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap';
import CartWidget from "../CartWidget/Cartwidget";
import "../CartWidget/CartWidget.css";
import {Link} from "react-router-dom";

export default function NavBar () {
          return (
            <div className="App">
              <Navbar bg="dark" variant="dark"
                sticky="top" collapseOnSelect expand="sm">
                <Container>
                  <Navbar.Brand href="/" id="logo"><img src='./PSX_20220123_175005.jpg' width='70'/></Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                      <Nav.Link href="/">Home</Nav.Link>
                      <NavDropdown title="Products" id="basic-nav-dropdown">
                      <NavDropdown.Item href="/buzos/">Mates</NavDropdown.Item>
                      <NavDropdown.Item href="/remeras/">Mates especiales</NavDropdown.Item>
                      <NavDropdown.Item href="/aritos/">Mates con Bandejas</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="/">Ver todos los productos</NavDropdown.Item>
                      </NavDropdown>
                      <Nav.Link href="/aboutus">About Us</Nav.Link>
                      <Nav.Link href="/contact">Contact Us</Nav.Link>
                      <CartWidget/> 
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            </div>
          );
}