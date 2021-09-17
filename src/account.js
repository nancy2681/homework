import React, { Component } from "react";
import { Container, Navbar, Nav, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import firebase from "firebase";
import Modal from "@material-ui/core/Modal";

export class account extends Component {
  componentDidMount = () => {
    firebase
      .database()
      .ref("/user/" + this.props.location.state.id)
      .once("value", (snapshot) => {
        this.setState({ hw: snapshot.val().homework });
      });
  };

  state = {
    width: 0,
    height: 0,
    open: false,
    hw: [],
    obj: {},
    description: "",
    name: "",
    subject: "",
    status: "",
    index: 0,
  };

  handleOpen = (n, index) => {
    this.setState({ open: true });
    this.setState({ obj: n });
    this.setState({ index });
  };
  handleClose = () => {
    this.setState({ open: false });
  };

  rend = () => {
    return this.state.hw.map((x) => {
      return <tr>{this.asd(x)}</tr>;
    });
  };
  asd = (t) => {
    return Object.keys(t).map((key, index) => {
      return <td>{t[key]}</td>;
    });
  };
  changeNameValue = (het) => {
    this.setState({ name: het.target.value });
  };
  changeDescriptionValue = (nancy) => {
    this.setState({ description: nancy.target.value });
  };

  changeSubjectValue = (pinki) => {
    this.setState({ subject: pinki.target.value });
  };
  changeStatusValue = (swar) => {
    this.setState({ status: swar.target.value });
  };
  save = async () => {
    let temp = this.state.obj;
    if (this.state.description !== "")
      temp.description = this.state.description;
    if (this.state.name !== "") temp.name = this.state.name;
    if (this.state.status !== "") temp.status = this.state.status;
    if (this.state.subject !== "") temp.subject = this.state.subject;
    // hw na this.state.index ne update karvanu che
    let temp1 = this.state.hw;
    temp1[this.state.index] = temp;
    await this.setState({ hw: temp1 });
    // await firebase
    //   .database()
    //   .ref("/user/" + this.props.location.state.id)
    //   .update({ homework: temp1 });
    this.handleClose();
  };
  bekar = () => {
    return this.state.hw.map((n, index) => {
      return (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "40%",
          }}
        >
          <button type="button" onClick={() => this.handleOpen(n, index)}>
            Edit
          </button>
          <Modal
            style={{
              display: "flex",
              justifyContent: "center",
            }}
            open={this.state.open}
            onClose={this.handleClose}
          >
            <div
              style={{
                backgroundColor: "white",
                height: "275px",
                alignSelf: "center",
                width: "450px",
              }}
            >
              <form
                style={{
                  margin: "20px",
                }}
              >
                <br />
                <input
                  style={{ width: "100%", marginBottom: "12px" }}
                  placeholder={this.state.obj.description}
                  onChange={this.changeDescriptionValue}
                />
                <br />
                <input
                  style={{ width: "100%", marginBottom: "12px" }}
                  placeholder={this.state.obj.name}
                  onChange={this.changeNameValue}
                />
                <br />
                <input
                  style={{ width: "100%", marginBottom: "12px" }}
                  placeholder={this.state.obj.status}
                  onChange={this.changeStatusValue}
                />
                <br />
                <input
                  style={{ width: "100%" }}
                  placeholder={this.state.obj.subject}
                  onChange={this.changeSubjectValue}
                />
              </form>
              <button
                onClick={this.handleClose}
                style={{
                  marginLeft: "65%",
                  borderColor: "#24a0ed",
                  backgroundColor: "#24a0ed",
                  color: "white",
                  borderRadius: "5px",
                  padding: "3px",
                  width: "60px",
                  height: "30px",
                  fontSize: 15,
                }}
              >
                cancel
              </button>
              <button
                onClick={this.save}
                style={{
                  marginLeft: "3%",
                  height: "30px",
                  borderColor: "#24a0ed",
                  backgroundColor: "#24a0ed",
                  color: "white",
                  width: "50px",
                  borderRadius: "5px",
                  padding: "3px",
                  fontSize: 15,
                }}
              >
                save
              </button>
            </div>
          </Modal>
        </div>
      );
    });
  };
  logout = () => {
    window.location.href = "/login";
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
            ACCOUNT
          </span>
        </div>
        <br />
        <div
          style={{
            justifyContent: "center",
            display: "flex",
            marginTop: "3%",
          }}
        >
          <span
            style={{
              fontSize: 25,
              letterSpacing: "3px",
              textDecorationLine: "overline",
              color: "gray",
            }}
          >
            Record
          </span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <div style={{}}>
            <Table
              striped
              bordered
              hover
              style={{
                marginTop: "3%",
                width: "800px",
                flexDirection: "column",
              }}
            >
              <thead>
                <tr>
                  <th>Date </th>
                  <th>Description</th>
                  <th>Name</th>
                  <th>Status</th>
                  <th>Subject</th>
                  <th>Edit</th>
                </tr>
              </thead>
              <tbody>{this.rend()}</tbody>
            </Table>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "4.8%",
              marginLeft: "-4%",
            }}
          >
            {this.bekar()}
          </div>
        </div>

        <div
          style={{
            justifyContent: "center",
            display: "flex",
            marginTop: "8%",
          }}
        >
          <button
            style={{
              padding: "5px",
              fontSize: 20,
              borderRadius: "5px",
              width: "25%",
              borderColor: "gray",
              color: "#FFFFFF",
              backgroundColor: "#1282A2",
            }}
            onClick={this.logout}
          >
            Log out
          </button>
        </div>
      </div>
    );
  }
}

export default account;
