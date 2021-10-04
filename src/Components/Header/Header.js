import React from "react";
import './Header.css';
import { Navbar, Container, Nav} from "react-bootstrap";
import { Link } from "react-router-dom";


const Header = () => {
    return (

  <Navbar bg="light" expand="lg">
  <Container>
    <Link to="/home" className="header-logo"><img src="../programin-logo.png" alt="" /></Link>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
      <Nav >
        <Link className="header-link" to="/home">Home</Link>
        <Link className="header-link" to="/courses">Our Courses</Link>
        <Link className="header-link" to="/about">About Us</Link>
        <Link className="header-link" to="/blog">Blogs</Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  );
};

export default Header;
