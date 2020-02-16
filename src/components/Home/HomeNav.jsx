import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const HomeNav = () => (
  <Navbar collapseOnSelect expand="md" className="animated bounceInDown mb-5">
    <Navbar.Brand>hiraganas.com</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

    <Navbar.Collapse>
      <Nav className="ml-auto">
        <Nav.Link href="/charts">Hiragana charts</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default HomeNav;
