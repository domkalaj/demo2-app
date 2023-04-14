import React from "react";
import PhotoGrid from "../images/airbnb-virtual1.png";

function Hero() {
  return (
    <section className="hero-section">
      <img src={PhotoGrid} className="hero-photo" alt="airbnb experiences" />
      <h1 className="hero-header">Online Experiences Dummy Header</h1>
      <p className="hero-text">
        Airbnb experiences are vetted for qulaity. Led by locals who love where
        they are from and what they do. Every experience is reviewed for unique
        access.
      </p>
    </section>
  );
}

export default Hero;
