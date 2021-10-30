import React from "react";
import { Spinner } from "react-bootstrap";
import useAuth from "../../Context/useAuth";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Events from "../Events/Events";
import Hero from "../Hero/Hero";

const Home = () => {
  const { isLoading } = useAuth();
  if (isLoading) {
    return <Spinner animation="border" variant="primary"></Spinner>;
  }
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
