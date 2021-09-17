import React from "react";
import { Component } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaRegCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import firebase from "firebase";

export class hw extends Component {
  state = {
    width: 0,
    height: 0,
    startDate: new Date(),
    subject: "",
    name: "",
    description: "",
    homework: "",
  };

  name = (asd) => {
    this.setState({ name: asd.target.value });
  };
  subject = (xyz) => {
    this.setState({ subject: xyz.target.value });
  };
  description = (abc) => {
    this.setState({ description: abc.target.value });
  };
  handleChange = (date) => {
    this.setState({ startDate: date });
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
  submit = async () => {
    await firebase
      .database()
      .ref("/user/" + this.props.location?.id + "/homework")
      .once("value", async (snapshot) => {
        let temp = await snapshot.val();
        // temp not null toh push else temp is empty array then push
        if (temp == null) temp = [];
        temp.push({
          name: this.state.name,
          subject: this.state.subject,
          description: this.state.description,
          date: this.state.startDate,
          status: "unfinished",
        });
        await firebase
          .database()
          .ref("/user/" + this.props.location?.id)
          .update({ homework: temp });

        this.props.history.push({
          pathname: "/account",
          state: {
            id: this.props.location.id,
          },
        });
      });
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
            display: "flex",
            justifyContent: "center",
            marginTop: "1%",
          }}
        >
          <span
            style={{
              color: "white",
              fontSize: "35px",
              letterSpacing: "4px",
              fontFamily: "monospace",
            }}
          >
            HOMEWORK
          </span>
        </div>

        <div
          style={{
            justifyContent: "center",
            display: "flex",
            marginTop: "3%",
          }}
        >
          <span
            style={{
              fontSize: "25px",
              textDecorationLine: "underline",
              color: "gray",
            }}
          >
            Add a Homework{this.props.location.name}
          </span>
        </div>
        <br />
        <div style={{ marginLeft: "25%" }}>
          <input
            type="text"
            onChange={this.subject}
            placeholder="Subject"
            style={{ width: "65%", fontSize: 25, padding: "5px" }}
          />
        </div>
        <br />
        <div style={{ marginLeft: "25%" }}>
          <input
            type="text"
            placeholder="Name"
            onChange={this.name}
            style={{ width: "65%", fontSize: 25, padding: "5px" }}
          />
        </div>
        <br />
        <div style={{ marginLeft: "25%" }}>
          <textarea
            rows="3"
            placeholder="Description"
            onChange={this.description}
            style={{ width: "65%", fontSize: 25, padding: "5px" }}
          ></textarea>
        </div>
        <br />
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ marginLeft: "24.5%" }}>
            <FaRegCalendarAlt color="gray" size="1.5rem" />
          </div>
          <div
            style={{
              marginLeft: "0.3%",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <DatePicker
              selected={this.state.startDate}
              onChange={this.handleChange}
              name="startDate"
              dateFormat="yyyy/MM/dd"
              popperPlacement="left-start"
            />
          </div>
        </div>
        <br />
        <div
          style={{
            justifyContent: "center",
            display: "flex",
            marginTop: "3%",
          }}
        >
          <button
            onClick={this.submit}
            style={{
              padding: "5px",
              fontSize: 20,
              borderRadius: "5px",
              width: "25%",
              borderColor: "gray",
              color: "#FFFFFF",
              backgroundColor: "#1282A2",
            }}
          >
            Add Homework{this.props.location?.id}
          </button>
        </div>
      </div>
    );
  }
}

export default hw;
