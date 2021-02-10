import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import "./App.css";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import FormSignup from "./Components/FormSignup";
import FormSuccess from "./Components/FormSuccess";

function App() {
  const [isSubmitted, setSubmitted] = useState(false);

  function submitForm() {
    setSubmitted(true);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         React Form
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Container>
        <Box>
          {!isSubmitted ? (
            <FormSignup submitForm={submitForm} />
          ) : (
            <FormSuccess />
          )}
        </Box>
      </Container>
      </header>
     
     
    </div>
  );
}

export default App;
