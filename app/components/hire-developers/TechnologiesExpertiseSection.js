import React from "react";
import { FaMobileAlt, FaLaptopCode, FaCloud, FaBrain, FaCogs } from "react-icons/fa";

const TechnologiesExpertiseSection = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-5">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-10">
          Technologies and Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Card 1 - Full-Stack Development */}
          <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <FaLaptopCode className="text-sky-500 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Full-Stack Development</h3>
            <p className="text-base text-gray-700 text-center">
              Front-end and back-end solutions for complete software development.
            </p>
          </div>

          {/* Card 2 - Mobile App Development */}
          <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <FaMobileAlt className="text-sky-500 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Mobile App Development</h3>
            <p className="text-base text-gray-700 text-center">
              iOS and Android app solutions to reach your audience on any device.
            </p>
          </div>

          {/* Card 3 - Custom Software Development */}
          <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <FaCogs className="text-sky-500 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Custom Software Development</h3>
            <p className="text-base text-gray-700 text-center">
              Tailored software solutions designed specifically for your business needs.
            </p>
          </div>

          {/* Card 4 - Cloud Integration */}
          <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <FaCloud className="text-sky-500 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Cloud Integration</h3>
            <p className="text-base text-gray-700 text-center">
              Scalable and efficient infrastructure for seamless cloud integration.
            </p>
          </div>

          {/* Card 5 - AI and Machine Learning */}
          <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <FaBrain className="text-sky-500 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">AI & Machine Learning</h3>
            <p className="text-base text-gray-700 text-center">
              Data-driven innovation to bring intelligence to your applications.
            </p>
          </div>

          {/* Closing Statement */}
          <div className="col-span-1 md:col-span-2 lg:col-span-3 text-center mt-8">
            <p className="text-xl font-semibold text-gray-900">
              Hire Indian developers with expertise in emerging technologies and build the future of your business with Rytsense Tech.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesExpertiseSection;
