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
