import React, { useState } from "react";
import firebase from "firebase";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  //const [data, setData] = useState([]);
  const [error, setError] = useState("");

  const em = (sun) => {
    setEmail(sun.target.value);
  };
  const password = (moon) => {
    setPass(moon.target.value);
  };

  const func = async () => {
    console.log("sdljfn");
    await firebase
      .database()
      .ref("/")
      .once("value", async (snapshot) => {
        //await setData(snapshot.val().user);
        var data = snapshot.val().user;
        console.log(snapshot.val().user);
        var emails = [];
        var passwords = [];
        for (let i = 1; i < data.length; i++) {
          emails.push(data[i].email);
          passwords.push(data[i].pass);
        }
        console.log("object", emails.length);
        for (let i = 0; i < emails.length; i++) {
          if (emails[i] === email && passwords[i] === pass) {
            console.log("hey there");
            await setError("");
            // i+1
            props.history.push({
              pathname: "/home",
              state: {
                id: i + 1,
              },
            });
            // window.location.href = "/home";
          }
          if (emails[i] !== email || passwords[i] !== pass) {
            setError("Incorrect email or password!");
          }
        }
      });
  };

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
          height: "30rem",
          width: "35%",
          marginTop: "10%",
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
              fontSize: 35,
              alignSelf: "center",
              fontFamily: "serif",
              letterSpacing: "2px",
              marginTop: "8%",
              fontWeight: "bolder",
            }}
          >
            Log in
          </span>
          <form
            style={{
              color: "black",
              fontFamily: "serif",
              marginLeft: "20%",
              marginTop: "6%",
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
              onChange={em}
            />

            <label style={{ marginTop: "8%" }}>Password</label>
            <input
              onChange={password}
              type="text"
              placeholder="Enter password"
              style={{
                width: "85%",
                fontSize: 20,
              }}
            />
            <span style={{ color: "red", marginLeft: "1%" }}>{error}</span>
          </form>
          <button
            style={{
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
            onClick={func}
          >
            Log in
          </button>
          <button
            style={{
              alignSelf: "center",
              marginTop: "5%",
              color: "blue",
              border: "transparent",
              borderRadius: "5px",
              textDecorationLine: "underline",
              backgroundColor: "white",
            }}
          >
            Forgot password?
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
