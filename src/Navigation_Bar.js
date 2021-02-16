import react from "react";
import "./Navigation_Bar.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/Form";

function Navigation_Bar() {
  return (
    <div>
      <Navbar expand="lg" variant="light" className="navbar_main">
        <Navbar.Brand href="#home">
          <a href="/">
            <img id="brandLogo" src="brand_logo.png"></img>
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className="nav_item" href="/">
              Home
            </Nav.Link>

            <Nav.Link className="nav_item" href="/products">
              Products
            </Nav.Link>
            <Nav.Link className="nav_item" href="/about">
              About Us
            </Nav.Link>
            <Nav.Link className="nav_item" href="/contact">
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation_Bar;
