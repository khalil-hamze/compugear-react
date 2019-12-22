import React from "react";
import "./About.css";

function About() {
  return (
    <section id="about-us">
      <div className="container">
        <div className="title">
          <h1 className="font-weight-bold">About Us</h1>
        </div>
        <div className="about-content">
          <h3 className='title-content'>Who We Are</h3>
          <p align='justify'>
            Founded in 2013, Compugnear offer quality IT solutions for home and
            business users at a price that everyone can afford. Our customers
            will always receive one-on-one personal attention at a very
            affordable price. Our customers will receive the highest quality of
            customer service available.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
