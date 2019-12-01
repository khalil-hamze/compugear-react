import React from "react";
import './Navbar.css';

function Navbar() {
  return (
    <section id="nav-bar">
      <nav class="navbar navbar-expand-md navbar-light bg-light sticky-top">
        <a class="navbar-brand" href="#"
          ><img src="images/logo-compugear.png"
        /></a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="#company">Company</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#products&solutions"
                >Products&Solutions</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#ourcustomers">Customers</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  );
}

export default Navbar;
