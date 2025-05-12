import React from "react";
import java from "../../src/components/image/java.png";
import wordpress from "../../src/components/image/website.png";
import reactjs from "../../src/components/image/reactjs.png";
import ajio from "../../src/components/image/carrental.png";
import pic from "../../src/components/image/photo-ram.jpeg";

function Projects() {
  const cardItem = [
    {
      id: 1,
      logo: reactjs,
      name: "TextUtils (Reactjs)",
      text: "A single-page application for text manipulation built using ReactJS.",
      sourcecode: "https://github.com/Rammsharma/TextUtils_React.git",
      liveLink: "https://textutils-reactjs.netlify.app", // add your live link
    },
    {
      id: 2,
      logo: wordpress,
      name: "Website for company (HTML CSS JS)",
      text: "Headhunter solutions is a service provided to company and students",
      sourcecode: "",
      liveLink: "https://www.headhuntersolutions.com", // example
    },
    {
      id: 3,
      logo: ajio,
      name: "Car Rental (MERN)",
      text: "It's a car booking website Here you can easily book your car ride",
      sourcecode: "https://github.com/Rammsharma/Rammsharma.github.io.git",
      liveLink: "https://mern-car-rental.netlify.app", // add actual URL
    },
    {
      id: 4,
      logo: pic,
      name: "Portfolio",
      text: "My personal portfolio built with ReactJS showcasing projects and skills.",
      sourcecode: "https://github.com/Rammsharma/Portfolio.git",
      liveLink: "http://localhost:5173/", // your portfolio live link
    },
  ];

  return (
    <div
      name="Portfolio"
      id="Projects"
      className="max-w-screen-2xl mx-auto px-4 md:px-20 mt-10"
    >
      <h1 className="text-4xl font-bold mb-2">Projects</h1>
      <p className="text-lg text-gray-600 mb-6">Featured Projects</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {cardItem.map(({ id, logo, name, text, sourcecode, liveLink }) => (
          <div
            key={id}
            className="bg-white rounded-xl shadow-md border hover:shadow-xl transition-shadow duration-300 p-4 flex flex-col justify-between"
          >
            <div className="flex justify-center mb-4">
              <img
                src={logo}
                alt={name}
                className="w-24 h-24 rounded-full border object-contain"
              />
            </div>
            <div className="text-center mb-4">
              <h2 className="text-xl font-semibold mb-1">{name}</h2>
              <p className="text-gray-700 text-sm">{text}</p>
            </div>

            <div className="text-center space-x-2">
              {sourcecode && (
                <a href={sourcecode} target="_blank" rel="noopener noreferrer">
                  <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-3 py-2 rounded transition-colors duration-200">
                    Source Code
                  </button>
                </a>
              )}
              {liveLink && (
                <a href={liveLink} target="_blank" rel="noopener noreferrer">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-3 py-2 rounded transition-colors duration-200">
                    Open Live
                  </button>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
