import { React, useState, useEffect } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./index.css";

const App = (props) => {
  const [myData, setMyData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://api.quotable.io/random?tags=inspirational"
      );
      const data = await res.json();
      setMyData(data);
    };
    fetchData();
  }, []);

  return (
    <div
      style={{
        backgroundColor: "white",
        backgroundImage: `url(${"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/book-quotes-1531945007.jpg"})`,
      }}
    >
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
                      color: "#0F6C7A",
                      fontSize: 17,
                      textDecorationLine: "underline",
                    }}
                  >
                    Home
                  </Nav.Link>
                </Link>
                <Link
                  to={{ pathname: "/homework", id: props.location?.state?.id }}
                >
                  <Nav.Link
                    href="#homework"
                    style={{
                      color: "#0F6C7A",
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
                      color: "#0F6C7A",
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
                      color: "#0F6C7A",
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
          backgroundColor: "white",
          backgroundImage: `url(${"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/book-quotes-1531945007.jpg"})`,
          display: "flex",
          justifyContent: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          flexDirection: "column",

          height: "700px",
          // alignItems: "center",
        }}
      >
        <span
          style={{
            color: "#001a66",
            fontSize: 40,
            fontFamily: "serif",
            marginLeft: "34%",
            // marginLeft: "20%",
            fontWeight: "bolder",
          }}
        >
          Live • Learn • Grow{props.location.state.id}
        </span>
        <span
          style={{
            fontSize: 25,
            maxWidth: "80%",
            color: "	 #0099e6",
            fontWeight: "bold",
            fontFamily: "cursive",
            marginTop: "3%",
            marginLeft: "34%",
          }}
        >
          "{myData?.content}"
        </span>
        <span
          style={{
            fontSize: 20,
            marginLeft: "34%",
            marginTop: "2%",
            textDecorationLine: "underline",
            color: "#001a66",
            fontStyle: "italic",
          }}
        >
          ~{myData?.author}
          {props.location?.state?.id}
        </span>
      </div>
    </div>
  );
};

export default App;
