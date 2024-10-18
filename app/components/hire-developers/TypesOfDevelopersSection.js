import React from "react";
import { FaUsers, FaUserTie, FaCode } from "react-icons/fa";

const TypesOfDevelopersSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 via-white to-blue-50 py-16">
      <div className="container mx-auto px-5">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">
          Types of Developers You Can Hire
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Card 1 - Dedicated Developers */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center justify-center mb-6">
              <FaUsers className="text-blue-500 text-6xl" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800 text-center">
              Dedicated Developers
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              Build a long-term development team with deep domain expertise and continuous support.
            </p>
            <div className="mt-6 text-center">
              <button className="text-white bg-blue-500 hover:bg-blue-600 rounded-full px-6 py-2 font-semibold transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>

          {/* Card 2 - Freelance Developers */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center justify-center mb-6">
              <FaUserTie className="text-green-500 text-6xl" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800 text-center">
              Freelance Developers
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              Hire software developers freelance for short-term projects or specific development tasks, ensuring flexibility and speed.
            </p>
            <div className="mt-6 text-center">
              <button className="text-white bg-green-500 hover:bg-green-600 rounded-full px-6 py-2 font-semibold transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>

          {/* Card 3 - Development Teams */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center justify-center mb-6">
              <FaCode className="text-purple-500 text-6xl" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800 text-center">
              Development Teams
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              Need full technical support? Hire a dedicated development team from Rytsense Tech to handle large-scale projects from start to finish with robust project management and expert developers.
            </p>
            <div className="mt-6 text-center">
              <button className="text-white bg-purple-500 hover:bg-purple-600 rounded-full px-6 py-2 font-semibold transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TypesOfDevelopersSection;
