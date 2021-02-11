import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import WindowWidth from "./Components/WindowWidth";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <WindowWidth />
      </header>
    </div>
  );
}

export default App;
