import React from "react";

import { Container, Navbar, Nav, Image } from "react-bootstrap";

import "./index.css";

function home() {
  return (
    <div className="App" style={{ backgroundColor: "blue" }}>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="https://www.youtube.com/watch?v=PTfDIKgzaRI">
                Home
              </Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Image
        src="https://i.pinimg.com/originals/10/da/df/10dadfc4bf399bbd2487ae1137a3561b.png"
        rounded
      />
    </div>
  );
}

export default home;
