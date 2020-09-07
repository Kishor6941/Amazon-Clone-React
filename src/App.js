import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Checkout from "./Components/Checkout";
import Login from "./Components/Login";
import { useStatevalue } from "./Context API/StateProvider";
import { auth } from "./Components/Firebase/Firebase";
function App() {
  const [{ user }, dispatch] = useStatevalue();
  // useEffect()
  // Piece of code which runs based on a given condition
  useEffect(() => {
    const unsubscibe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user is logged in..
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user is logged out..
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    return () => {
      // Any cleanup operation go in here..
      unsubscibe();
    };
  }, []);
  console.log("User IS >>>", user);
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          {/* // This is the default part */}
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
