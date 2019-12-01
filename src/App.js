import React from "react";
import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Jumbotron from "./components/Jumbotron/Jumbotron";

function App() {
  return (
    <div>
      <Navbar />
      <Jumbotron />
    </div>
  );
}

export default App;
