import React from "react";
import website from "../components/image/website.png";

const Experience = () => {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8" id="Experience">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Experience</h2>

        <div className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-2xl font-semibold text-gray-900">
            HeadhunterSolutions.com Website Development
          </h3>
          <p className="mt-4 text-gray-700 leading-relaxed">
            HeadhunterSolution.com is a service provider website that connects
            professionals with job opportunities based on their skills. I built
            a responsive, user-friendly website using HTML, CSS, and JavaScript.
            I also integrated the Formbold API for form submissions and
            automated email responses.
          </p>

          <div className="mt-6">
            <h4 className="font-medium text-gray-800">Technologies Used:</h4>
            <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Formbold API</li>
            </ul>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <a
              href="https://www.headhuntersolutions.com"
              target="www.headhuntersolutions.com"
              rel="noopener noreferrer"
              className="text-blue-600 font-medium hover:underline"
            >
              🌐 Visit Website
            </a>

            <img
              src={website}
              alt="Project Screenshot"
              className="rounded-xl shadow w-full sm:w-80"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
