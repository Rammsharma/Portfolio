import React from "react";
import { FaSchool } from "react-icons/fa";
import { IoSchool } from "react-icons/io5";
import skillss from "../../src/components/image/skillss.jpeg";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">About</h1>
        <p>
          Hello, I'm Ram, a passionate Web developer with a keen eye for MERN
          Stack . With a background in IT, I strive to create impactful and
          visually stunning Software solutions that leave a lasting impression.
        </p>
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Education & Skills
        </h1>
        <span className="space-y-4">
          <div>
          <FaSchool /> 
          <h3 className="font-bold">Rakhee Public School </h3> 
          [2019-20] <br />
          12th <br />
          61% <br />
          PCM
          </div>
         
          <div>
          <IoSchool />
           <h3 className="font-bold">Quantum University</h3>  
          [2020-23] <br />
          BCA <br />
          64%
          </div>
          
          <div>
          <IoSchool />
          <h3 className="font-bold">DIT University </h3>
          [2023-25] <br />
          MCA <br />
          Persuing
          </div>
          
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          
        </h1>
        <span>
          <img src={skillss} alt=""  />
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Professional Experience
        </h1>
        <span className="space-y-4">
        <div> 
        <h3 className="font-bold">six month web developer program </h3>
        From Cousera <br />
        [2022] 
        </div>
       
        <br />
        <div>
        <h1 className="font-bold">six month web developer internship</h1> 
        From Sunshine Education Society <br />
        [2023] 
        <br />
        </div>
        
          
        </span>
        <br />
        <br />
       
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Mission Statement
        </h1>
        <p>
          My mission is to leverage my skills and creativity to deliver
          innovative [Your Field] solutions that exceed client expectations and
          contribute positively to the digital landscape. I am committed to
          continuous learning and growth, always seeking new challenges and
          opportunities to expand my horizons.
        </p>
      </div>
    </div>
  );
}

export default About;