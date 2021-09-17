import React, { Component } from "react";
import firebase from "firebase";

export class signup extends Component {
  state = {
    email: "",
    pass: "",
    nov: 0,
    confpass: "",
    error1: "",
    error2: "",
  };

  button = () => {
    window.location.href = "/login";
  };
  em = (asd) => {
    this.setState({ email: asd.target.value });
    setTimeout(async () => {
      if (!this.state.email.includes("gmail.com")) {
        await this.setState({ error1: "Please enter correct input" });
      }
      if (this.state.email.includes("gmail.com")) {
        this.setState({ error1: "" });
      }
    }, 3000);
  };
  password = (text) => {
    console.log("asdf");
    this.setState({ pass: text.target.value });
  };
  confirm = async (ast) => {
    await this.setState({ confpass: ast.target.value });
    if (this.state.confpass === this.state.pass) {
      this.setState({ error2: "" });
    }
    if (this.state.confpass !== this.state.pass) {
      this.setState({ error2: "Invalid password" });
    }
    if (this.state.confpass === this.state.pass) {
      this.setState({ error2: "" });
    }
  };

  nancy = async () => {
    if (
      this.state.pass === this.state.confpass &&
      this.state.pass !== "" &&
      this.state.confpass !== ""
    ) {
      await firebase
        .database()
        .ref("/")
        .once("value", (snapshot) => {
          this.setState({ nov: snapshot.val().nov + 1 });
        });

      await firebase
        .database()
        .ref("/user/" + this.state.nov)
        .update({
          email: this.state.email,
          pass: this.state.pass,
        });

      await firebase.database().ref("/").update({
        nov: this.state.nov,
      });

      window.location.href = "/home";
    }
  };

  render() {
    return (
      <div
        style={{
          backgroundColor: "#1282A2",
          height: "47rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            height: "34rem",
            width: "35%",
            marginTop: "8%",
            borderRadius: "15px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "100%",
              flexDirection: "column",
            }}
          >
            <span
              style={{
                color: "black",
                fontSize: 38,
                alignSelf: "center",
                fontFamily: "serif",
                letterSpacing: "2px",
                marginTop: "5%",
                fontWeight: "bolder",
              }}
            >
              Sign up
            </span>
            <button
              style={{
                alignSelf: "center",
                fontSize: 16,
                marginTop: "1%",
                color: "blue",
                textDecorationLine: "underline",
                border: "none",
                backgroundColor: "white",
              }}
              onClick={this.button}
            >
              Already have an account? <b> Log in</b>
            </button>
            <form
              style={{
                color: "black",
                fontFamily: "serif",
                marginLeft: "20%",
                marginTop: "5%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <label>Email</label>

              <input
                type="text"
                placeholder="Enter your email"
                style={{
                  width: "85%",
                  fontSize: 20,
                }}
                onChange={this.em}
              />
              <span style={{ color: "red" }}>{this.state.error1}</span>
              <label style={{ marginTop: "7%" }}>Password</label>
              <input
                type="password"
                placeholder="Enter password"
                style={{
                  width: "85%",
                  fontSize: 20,
                }}
                onChange={this.password}
              />

              <label style={{ marginTop: "7%" }}>Confirm Password</label>
              <input
                type="password"
                placeholder="Enter password"
                style={{
                  width: "85%",
                  fontSize: 20,
                }}
                onChange={this.confirm}
              />
              <span style={{ color: "red" }}>{this.state.error2}</span>
            </form>

            <button
              style={{
                alignSelf: "center",
                color: "black",
                width: "40%",
                fontSize: 20,
                fontWeight: "bold",
                alignSelf: "center",
                padding: "2px",
                marginTop: "10%",
                backgroundColor: "silver",
                borderColor: "white",
                borderRadius: "5px",
              }}
              onClick={this.nancy}
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default signup;
