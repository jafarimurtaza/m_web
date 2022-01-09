import React from "react";
import "./App.css";
import Article from "./components/Intro/Article";
import Intro from "./components/Intro/Intro";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <div className="app">
      <Nav />
      <Intro />
      <Article />

    </div>
  );
}

export default App;
