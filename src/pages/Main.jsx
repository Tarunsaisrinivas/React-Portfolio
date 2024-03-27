import React from "react";
import Navbar from "../components/Navbar";
import Home from "./Home";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";


const Main = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Skills />
      <Projects/>
      <Contact />
    </>
  );
};

export default Main;
