import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Home from "./Home";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

const Main = () => {
  const [darkMode, setDarkMode] = useState(false); // Make sure useState is imported correctly

  return (
    <>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Home darkMode={darkMode} />
      <Skills darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <Contact darkMode={darkMode} />
    </>
  );
};

export default Main;
