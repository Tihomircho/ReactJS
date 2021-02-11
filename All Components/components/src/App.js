import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import Nav from "./Components/Nav";
import Counter from "./Components/Counter";
import ShopCounter from "./Components/ShopCounter";
import WindowWidth from "./Components/WindowWidth";
import FormSignup from "./Components/FormSignup";
import FormSuccess from "./Components/FormSuccess";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [isSubmitted, setSubmitted] = useState(false);

  function submitForm() {
    setSubmitted(true);
  }
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Nav />
          <Switch>
            <Route path="/counter" component={Counter} />
            <Route path="/shopcounter" component={ShopCounter} />
            <Route path="/windowwidth" component={WindowWidth} />
            <Route
              path="/formsignup"
              component={FormSignup}
              {...(!isSubmitted ? (
                <FormSignup submitForm={submitForm} />
              ) : (
                <FormSuccess />
              ))}
            />
          </Switch>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    </Router>
  );
}

export default App;
