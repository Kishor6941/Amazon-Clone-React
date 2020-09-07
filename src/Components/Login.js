import React, { useState } from "react";
import "./CSS/Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../Components/Firebase/Firebase";
const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = (event) => {
    event.preventDefault(); // this stops the refresh
    // do login Logic
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        // logged in , redirect to home page
        history.push("/");
      })
      .catch((e) => alert(e.message));
    //.catch((e) => alert("Enter a Valid Email and Password"));
  };

  const register = (event) => {
    event.preventDefault(); // this stops the refresh
    // do register Logic
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //create a user and logged in.. redirect to homepage
        history.push("/");
      })
      .catch((e) => alert(e.message));
    //.catch((e) => alert("Enter a Valid Email and Password"));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Sign - In</h1>
        <form>
          <h5>E-mail</h5>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            autoComplete="off"
          />
          <h5>Password</h5>
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            autoComplete="off"
          />
          <button onClick={login} type="submit" className="login__signInButton">
            Sign In
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
        <button onClick={register} className="login__registerButton">
          Create your Amazon account
        </button>
      </div>
    </div>
  );
};

export default Login;
