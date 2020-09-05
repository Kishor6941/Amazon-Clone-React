import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Components/Header";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <h1>Checkout</h1>
          </Route>
          <Route path="/login">
            <h1>Login</h1>
          </Route>
          {/* // This is the default part */}
          <Route path="/">
            <Header />
            <h1>Home page</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
