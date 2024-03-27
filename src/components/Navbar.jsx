import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const handleSetActive = (to) => {
    setActiveLink(to);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-4 bg-gray-800 border-b border-white ">
      <div className="flex items-center justify-between mx-auto max-w-7xl">
        <div className="text-lg font-bold text-white">Logo</div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        <div className="hidden space-x-4 md:flex">
          <Link
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className={`cursor-pointer text-white hover:text-gray-300 ${
              activeLink === "home" ? "transition-all  border-yellow-600 border-b-2" : ""
            }`}
            to="home"
            activeClass="active"
            onSetActive={() => handleSetActive("home")}
          >
            Home
          </Link>
          <Link
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className={`cursor-pointer text-white hover:text-gray-300 ${
              activeLink === "project" ? "border-yellow-600 border-b-2" : ""
            }`}
            to="skills"
            activeClass="active"
            onSetActive={() => handleSetActive("project")}
          >
           Skills
          </Link>
          <Link
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className={`cursor-pointer text-white hover:text-gray-300 ${
              activeLink === "services" ? "border-yellow-600 border-b-2" : ""
            }`}
            to="projects"
            activeClass="active"
            onSetActive={() => handleSetActive("services")}
          >
            Project
          </Link>
          <Link
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className={`cursor-pointer text-white hover:text-gray-300 ${
              activeLink === "contact" ? "border-yellow-600 border-b-2" : ""
            }`}
            to="contact"
            activeClass="active"
            onSetActive={() => handleSetActive("contact")}
          >
            Contact
          </Link>
        </div>
      </div>

      {isOpen && (
        <div className="mt-4 md:hidden">
          <Link
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className={`block px-4 py-2 text-white ${
              activeLink === "home" ? "border-yellow-600 w-16 border-b-2" : ""
            }`}
            to="home"
            activeClass="active"
            onSetActive={() => handleSetActive("home")}
          >
            Home
          </Link>
          <Link
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className={`block px-4 py-2 text-white ${
              activeLink === "project" ? "border-yellow-600 border-b-2" : ""
            }`}
            to="skills"
            activeClass="active"
            onSetActive={() => handleSetActive("project")}
          >
            Skills
          </Link>
          <Link
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className={`block px-4 py-2 text-white ${
              activeLink === "services" ? "border-yellow-600 border-b-2" : ""
            }`}
            to="services"
            activeClass="active"
            onSetActive={() => handleSetActive("services")}
          >
            Services
          </Link>
          <Link
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className={`block px-4 py-2 text-white ${
              activeLink === "contact" ? "border-yellow-600 border-b-2" : ""
            }`}
            to="contact"
            activeClass="active"
            onSetActive={() => handleSetActive("contact")}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
