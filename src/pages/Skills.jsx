import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Skills = ({ darkMode }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      id="skills"
      className={`flex items-center justify-center min-h-screen ${
        darkMode ? "bg-gray-300" : ""
      } bg-gray-800`}
    >
      <div className="max-w-6xl p-8">
        <h2
          className={`mb-8 text-3xl font-bold ${
            darkMode ? "text-gray-800 " : "text-white"
          }`}
        >
          Skills
        </h2>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
          {/* HTML */}
          <div
            className="p-4 text-white bg-gray-700 rounded-lg shadow-md hover:bg-blue-400 hover:cursor-pointer hover:transition-all"
            data-aos="fade-up"
          >
            <img
              src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png"
              alt="HTML"
              className="w-full mb-4 rounded-lg"
            />
            <h3 className="text-xl font-semibold text-center">HTML</h3>
          </div>

          {/* CSS */}
          <div
            className="p-4 text-white bg-gray-700 rounded-lg shadow-md hover:bg-blue-400 hover:cursor-pointer hover:transition-all"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <img
              src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png"
              alt="CSS"
              className="w-full mb-4 rounded-lg"
            />
            <h3 className="text-xl font-semibold text-center">CSS</h3>
          </div>

          {/* JavaScript */}
          <div
            className="p-4 text-white bg-gray-700 rounded-lg shadow-md hover:bg-blue-400 hover:cursor-pointer hover:transition-all"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <img
              src="https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_1280.png"
              alt="JavaScript"
              className="w-full mb-4 rounded-lg"
            />
            <h3 className="text-xl font-semibold text-center">JavaScript</h3>
          </div>

          {/* React */}
          <div
            className="p-4 text-white bg-gray-700 rounded-lg shadow-md hover:bg-blue-400 hover:cursor-pointer hover:transition-all"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <img
              src="https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-svg-vector.svg"
              alt="React"
              className="w-full mb-4 rounded-lg"
            />
            <h3 className="text-xl font-semibold text-center">React</h3>
          </div>

          {/* Tailwind CSS */}
          <div
            className="p-4 text-white bg-gray-700 rounded-lg shadow-md hover:bg-blue-400 hover:cursor-pointer hover:transition-all"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            <img
              src="https://via.placeholder.com/150"
              alt="Tailwind CSS"
              className="w-full mb-4 rounded-lg"
            />
            <h3 className="text-xl font-semibold text-center">
              Tailwind CSS
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
