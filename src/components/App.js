// import logo from './logo.svg';
import React, { useState } from 'react';
import useLocalStorage from "use-local-storage";

import './App.css';
import { Toggle } from './Toggle'

function App() {
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useLocalStorage("isDark", preference);

  return (
    <div className="App" data-theme={isDark ? "dark" : "light"}>
      <div className="container">
        <Toggle
          isChecked={isDark}
          handleChange={() => setIsDark(!isDark)} />
        <h1>🌗 Jonas Moons 🌓</h1>
        <h2>title boxes</h2>
        <p>Start of my portfolio.</p>
        <a href="#">unpressed link</a><br/>
        <button>unpressed button</button>
        <button className="active">pressed button</button>
      </div>
    </div>
  );
  }

  export default App;

  // <div className="App">
  //   <header className="App-header">
  //     <img src={logo} className="App-logo" alt="logo" />
  //     <p>
  //       Edit <code>src/App.js</code> and save to reload.
  //     </p>
  //     <a
  //       className="App-link"
  //       href="https://reactjs.org"
  //       target="_blank"
  //       rel="noopener noreferrer"
  //     >
  //       Learn React
  //     </a>
  //   </header>
  // </div>
