import React from "react";
import Cover1 from "../../img/cover-1.jpeg";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <img className="d-block w-100" src={Cover1} alt="" />
      <div className="text">
        <h1 className="fw-bold" style={{ fontSize: "3vw" }}>
          Lifelong memories just a few seconds away...
        </h1>
        <h4 style={{ fontSize: "1.5vw" }} className="py-lg-2 fw-light">
          Let's start your journey with us, your dream will come true
        </h4>
        <button
          type="button"
          className="btn btn-primary px-4 py-2 my-lg-2"
          style={{ fontSize: "1.2vw" }}
        >
          Explore Destinations
        </button>
      </div>
    </div>
  );
};

export default Hero;
