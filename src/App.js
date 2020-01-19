import React, { Component } from "react";
import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import About from "./components/About/About";
import Product from "./components/Product/Product";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Jumbotron />
        <Product />
        {/* <About /> */}
      </React.Fragment>
    );
  }
}

export default App;
