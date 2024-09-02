import React from "react";
import 'animate.css';
import { FaCode, FaCheckCircle, FaClipboardCheck, FaLightbulb, FaTools } from "react-icons/fa";

const ValuesAndBenefits = () => {
  return (
    <div className="px-4 py-10 md:px-8 md:py-20 bg-gradient-to-r from-gray-50 via-white to-gray-50 text-gray-800">
      {/* Values Section */}
      <header className="text-center mb-8 md:mb-12">
        <h1 className="text-2xl md:text-4xl font-extrabold text-blue-600 mb-4 animate__animated animate__fadeInDown">Our Values</h1>
        <p className="text-base md:text-lg text-gray-700 animate__animated animate__fadeInLeft">
          At the core of our development process is a strong emphasis on code quality. We implement stringent testing,
          detailed reviews, and industry best practices to deliver software that excels in both functionality and longevity.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 animate__animated animate__fadeInUp">
        {/* Card 1: Code Quality */}
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
          <FaCode className="text-blue-600 text-4xl mb-4 mx-auto" />
          <h3 className="text-xl md:text-2xl font-bold mb-2 text-center">Code Quality</h3>
          <p className="text-sm md:text-base text-gray-700 text-center">
            We implement stringent testing, detailed reviews, and industry best practices to deliver software that excels in both functionality and longevity.
          </p>
        </div>

        {/* Card 2: Coding Best Practices */}
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
          <FaCheckCircle className="text-green-600 text-4xl mb-4 mx-auto" />
          <h3 className="text-xl md:text-2xl font-bold mb-2 text-center">Coding Best Practices</h3>
          <p className="text-sm md:text-base text-gray-700 text-center">
            We use descriptive variable names, in-code comments, and comprehensive documentation to ensure clarity and ease of future updates.
          </p>
        </div>

        {/* Card 3: Unit Testing */}
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
          <FaClipboardCheck className="text-purple-600 text-4xl mb-4 mx-auto" />
          <h3 className="text-xl md:text-2xl font-bold mb-2 text-center">Unit Testing</h3>
          <p className="text-sm md:text-base text-gray-700 text-center">
            Rigorous unit testing is conducted to ensure the reliability and functionality of our code.
          </p>
        </div>

        {/* Card 4: Code Review Practices */}
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
          <FaTools className="text-orange-600 text-4xl mb-4 mx-auto" />
          <h3 className="text-xl md:text-2xl font-bold mb-2 text-center">Code Review Practices</h3>
          <p className="text-sm md:text-base text-gray-700 text-center">
            We follow stringent code review practices to maintain the highest standards of quality.
          </p>
        </div>

        {/* Card 5: Code Quality Metrics */}
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
          <FaLightbulb className="text-yellow-600 text-4xl mb-4 mx-auto" />
          <h3 className="text-xl md:text-2xl font-bold mb-2 text-center">Code Quality Metrics</h3>
          <p className="text-sm md:text-base text-gray-700 text-center">
            Our code quality is measured using industry-standard metrics to ensure excellence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ValuesAndBenefits;
