import React from "react";
import html from "../../src/components/image/html.png";
import css from "../../src/components/image/css.jpg";
import javascript from "../../src/components/image/javascript.png";
import reactjs from "../../src/components/image/reactjs.png";
import mongodb from "../../src/components/image/mongodb.jpg";
import node from "../../src/components/image/node.png";
import express from "../../src/components/image/express.png";
function Experiance() {
  const cardItem = [
    {
      id: 1,
      logo: html,
      name: "HTML"
    },
    {
      id: 2,
      logo: css,
      name: "CSS"
    },
     {
      id: 3,
      logo: javascript,
      name: "JavaScript"
    },
    {
      id: 4,
      logo: mongodb,
      name: "mongoDb"
    },
   
    {
      id: 5,
      logo: reactjs,
      name: "ReactJs"
    },
    {
      id: 6,
      logo: node,
      name: "Nodejs"
    },
    {
      id: 7,
      logo: express,
      name: "ExpressJs"
    },
  ];
  return (
    <div
      name="Experiance"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Experiance</h1>
        <p className="  ">
          I've more than 1 years of experiance in below technologies.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className=" flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img src={logo} className="w-[150px] rounded-full" alt="" />
              <div>
                <div className="">{name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experiance;