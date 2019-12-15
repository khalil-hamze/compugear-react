import React, { Component } from "react";
import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import About from "./components/About/About"

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron />
        <About />
      </div>
    );
  }
}

export default App;
