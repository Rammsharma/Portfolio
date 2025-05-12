import React from "react";

const skills = {
  frontend: ["HTML", "CSS", "JavaScript", "ReactJS"],
  backend: ["NodeJS", "ExpressJS", "MongoDB"],
  devops: ["Git", "API Integration", "Website Deployment"],
};

const SkillTree = () => {
  return (
    <div className="relative flex flex-col items-center py-10">
      {/* Central SKILLS box */}
      <div className="bg-yellow-300 px-6 py-3 rounded font-bold text-lg shadow z-10">
        SKILLS
      </div>

      {/* Vertical line below SKILLS */}
      <div className="h-6 w-0.5 bg-black"></div>

      {/* Wrapper for skill branches */}
      <div className="w-full flex flex-col lg:flex-row justify-center items-center lg:items-start relative">
        {/* Horizontal line for large screens */}
        <div className="hidden lg:block absolute top-0 left-1/2 transform -translate-x-1/2 w-[70%] h-0.5 bg-black z-0"></div>

        {Object.values(skills).map((section, index) => (
          <div
            key={index}
            className="flex flex-col items-center relative z-10 lg:mx-20 my-6 lg:my-0"
          >
            {/* Vertical line for each column */}
            <div
              className="w-0.5 bg-black absolute top-0 left-1/2 transform -translate-x-1/2 z-0"
              style={{ height: `${section.length * 85}px` }}
            ></div>

            {/* Skill boxes */}
            {section.map((skill, i) => (
              <div
                key={i}
                className="bg-blue-100 text-black font-semibold px-4 py-2 my-8 rounded shadow z-10"
              >
                {skill}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillTree;
