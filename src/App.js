import React from "react";
import { Component } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";
import HomeWork from "./hw";
import Home from "./home";
import Account from "./account";
import About from "./about";
import Login from "./login";
import Signup from "./signup";
import "./index.css";
import firebase from "firebase";
import { BrowserRouter, Switch, Route } from "react-router-dom";

var firebaseConfig = {
  apiKey: "AIzaSyCReQdZHVmRbmseDT27Gg7QPZyw8m-CSko",
  authDomain: "homework-caa0d.firebaseapp.com",
  projectId: "homework-caa0d",
  storageBucket: "homework-caa0d.appspot.com",
  messagingSenderId: "1055075439678",
  appId: "1:1055075439678:web:5506fc0988e9d4d6566d6f",
  measurementId: "G-2QW236N82Z",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

class App extends Component {
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
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Signup} />
          <Route path="/homework" component={HomeWork} />
          <Route path="/account" component={Account} />
          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />
          <Route path="/home" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
