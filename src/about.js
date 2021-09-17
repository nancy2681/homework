import React, { Component } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export class about extends Component {
  state = {
    width: 0,
    height: 0,
  };

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }
  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  };

  render() {
    return (
      <div>
        <div
          className="App"
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginLeft: "1%",
          }}
        >
          <Navbar bg="transparent" expand="lg">
            <Container>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Link to="/home">
                    <Nav.Link
                      href="#home"
                      style={{
                        color: "#882E11",
                        fontSize: 17,
                        textDecorationLine: "underline",
                      }}
                    >
                      Home
                    </Nav.Link>
                  </Link>
                  <Link to="/homework">
                    <Nav.Link
                      href="#homework"
                      style={{
                        color: "#882E11",
                        fontSize: 17,
                        textDecorationLine: "underline",
                      }}
                    >
                      Homework
                    </Nav.Link>
                  </Link>
                  <Link to="/account">
                    <Nav.Link
                      href="#account"
                      style={{
                        color: "#882E11",
                        fontSize: 17,
                        textDecorationLine: "underline",
                      }}
                    >
                      Account
                    </Nav.Link>
                  </Link>

                  <Link to="/about">
                    <Nav.Link
                      href="#about"
                      style={{
                        color: "#882E11",
                        fontSize: 17,
                        textDecorationLine: "underline",
                      }}
                    >
                      About
                    </Nav.Link>
                  </Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
        <div
          style={{
            backgroundColor: "#0F6C7A",
            marginTop: "1%",
            display: "flex",
            justifyContent: "center",
            width: "33%",
            borderTopRightRadius: "32px",
            borderBottomRightRadius: "32px",
          }}
        >
          <span
            style={{
              color: "white",
              fontWeight: "bolder",
              letterSpacing: "4px",
              fontSize: 30,
              textDecorationLine: "underline",
              padding: "8%",
            }}
          >
            ABOUT US
          </span>
        </div>
        <div>
          <img
            src="https://img.pngio.com/-png-student-student-doing-homework-png-650_529.jpg"
            alt="no img"
            style={{ width: "25%", marginLeft: "70%" }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              backgroundColor: "#0F6C7A",
              width: "50%",
            }}
          ></div>
          <div
            style={{
              backgroundColor: "#0F6C7A",
              width: "50%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <p style={{ color: "white", marginTop: "5%" }}>
              dtfgvbhjkq3w4se5dr6ft7gyhujoikpo frdtufyihvb rcytuvhb 4e5r6
              8t79weqh8rw d57tf8qygwduoea
            </p>
          </div>
          <div
            style={{
              backgroundColor: "#0F6C7A",
              width: "50%",
              height: this.state.height * 0.32,
            }}
          ></div>
        </div>
      </div>
    );
  }
}

export default about;
