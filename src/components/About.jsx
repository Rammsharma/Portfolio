import React from "react";
import { FaSchool } from "react-icons/fa";
import { IoSchool } from "react-icons/io5";
import skillss from "../../src/components/image/skillss.jpeg";

function About() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6" id="About">
      {/* About Section */}
      <div>
        <h2 className="text-3xl font-bold mb-4">About</h2>
        <p className="text-lg leading-relaxed text-gray-700">
          Hi, I'm Ram Sharma — a dedicated Web Developer with a strong focus on
          the MERN stack. With a solid background in Information Technology, I
          am passionate about crafting clean, efficient, and visually engaging
          web applications. My goal is to deliver impactful digital experiences
          that combine functionality with aesthetics.
        </p>
      </div>

      {/* Education Section */}
      <div>
        <h2 className="text-3xl font-bold text-green-600 mb-4">
          Education & Skills
        </h2>

        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold">🏫 Rakhee Public School</h3>
            <p className="text-gray-600">2019 – 2020 | 12th (PCM)</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">🎓 Quantum University</h3>
            <p className="text-gray-600">
              2020 – 2023 | Bachelor of Computer Applications (BCA)
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">🎓 DIT University</h3>
            <p className="text-gray-600">
              2023 – 2025 (Ongoing) | Master of Computer Applications (MCA)
            </p>
          </div>
        </div>

        {/* Optional: Skills Image */}
      </div>
    </div>
  );
}

export default About;
