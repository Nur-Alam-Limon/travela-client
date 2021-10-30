import React from "react";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Events from "../Events/Events";
import Hero from "../Hero/Hero";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Events></Events>
      <About></About>
      <Contact></Contact>
    </div>
  );
};

export default Home;
