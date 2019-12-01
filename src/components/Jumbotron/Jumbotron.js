import React from "react";
import "./Jumbotron.css";
import Particles from "react-particles-js";

const particleOpt = {
  particles: {
    number: {
      value: 150,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
};

function Jumbotron() {
  return (
    <section id="home">
      <div class="landing">
        <div class="home-wrap">
          <div id="particles-js">
            <Particles />
          </div>
          <div class="caption text-center">
            <span>Welcome to COMPUGEAR</span>
            <h3>Perform your Computer</h3>
            <a class="btn btn-outline-light btn-lg" href="#">
              Who we are
            </a>
            <a class="btn btn-outline-light btn-lg" href="#">
              products
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Jumbotron;
