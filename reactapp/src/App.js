/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/
import * as React from "react";

import Path from "./Path/Path";
import NavBar from "./components/NavBar/NavBar";
import TopBar from "./components/TopBar/TopBar";
import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <TopBar />
      <NavBar />
      <Path />
      <Footer />
    </div>
  );
}


export default App;
