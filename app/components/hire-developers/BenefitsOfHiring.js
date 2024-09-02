import React from "react";
import { FaCode, FaCog, FaClock, FaLayerGroup, FaLaptopCode, FaCertificate, FaLightbulb } from "react-icons/fa";
import 'animate.css';

const BenefitsOfHiring = () => {
  return (
    <div className="relative p-4 md:p-8 bg-cover bg-center text-gray-800 lg:px-40 lg:py-20">
      {/* Circles Container */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center items-center text-white">
        {/* Title Block */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-4 p-4 text-center">
          <h2 className="text-xl md:text-3xl font-extrabold text-gray-900 mb-4 animate__animated animate__fadeInDown">
            Benefits of Hiring Programmers in India
          </h2>
          <p className="text-base md:text-lg text-gray-700 animate__animated animate__fadeInUp">
            Hiring developers offers numerous benefits, including technical expertise, custom solutions, time and cost savings, and more.
          </p>
        </div>

        {/* Circle 1 */}
        <div className="flex flex-col items-center justify-center w-full">
          <div className="flex flex-col items-center justify-center w-60 h-60 md:w-64 md:h-64 p-5 m-2 md:m-4 rounded-full bg-gradient-to-r from-sky-400 to-sky-600 shadow-lg transform hover:scale-105 transition-transform duration-300 animate__animated animate__fadeInUp">
            <FaCode className="text-3xl md:text-4xl mb-4" />
            <h3 className="text-lg md:text-xl font-bold mb-2 text-center">Technical Expertise</h3>
            <p className="text-center text-xs md:text-sm">Skilled developers bring proficiency in various programming languages, frameworks, and development tools.</p>
          </div>
        </div>

        {/* Circle 2 */}
        <div className="flex flex-col items-center justify-center w-full">
          <div className="flex flex-col items-center justify-center w-60 h-60 md:w-64 md:h-64 p-5 m-2 md:m-4 rounded-full bg-gradient-to-r from-green-400 to-green-600 shadow-lg transform hover:scale-105 transition-transform duration-300 animate__animated animate__fadeInUp">
            <FaCog className="text-3xl md:text-4xl mb-4" />
            <h3 className="text-lg md:text-xl font-bold mb-2 text-center">Custom Solutions</h3>
            <p className="text-center text-xs md:text-sm">Get tailored solutions that meet your project needs and help you stand out in a competitive market.</p>
          </div>
        </div>

        {/* Circle 3 */}
        <div className="flex flex-col items-center justify-center w-full">
          <div className="flex flex-col items-center justify-center w-60 h-60 md:w-64 md:h-64 p-5 m-2 md:m-4 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 shadow-lg transform hover:scale-105 transition-transform duration-300 animate__animated animate__fadeInUp">
            <FaClock className="text-3xl md:text-4xl mb-4" />
            <h3 className="text-lg md:text-xl font-bold mb-2 text-center">Time and Cost Savings</h3>
            <p className="text-center text-xs md:text-sm">Save time and cost by efficiently handling complex challenges, delivering faster results.</p>
          </div>
        </div>

        {/* Circle 4 */}
        <div className="flex flex-col items-center justify-center w-full">
          <div className="flex flex-col items-center justify-center w-60 h-60 md:w-64 md:h-64 p-5 m-2 md:m-4 rounded-full bg-gradient-to-r from-indigo-400 to-indigo-600 shadow-lg transform hover:scale-105 transition-transform duration-300 animate__animated animate__fadeInUp">
            <FaLaptopCode className="text-3xl md:text-4xl mb-4" />
            <h3 className="text-lg md:text-xl font-bold mb-2 text-center">Latest Technologies</h3>
            <p className="text-center text-xs md:text-sm">Skilled developers are up-to-date with the latest trends, providing competitive solutions.</p>
          </div>
        </div>

        {/* Circle 5 */}
        <div className="flex flex-col items-center justify-center w-full">
          <div className="flex flex-col items-center justify-center w-60 h-60 md:w-64 md:h-64 p-5 m-2 md:m-4 rounded-full bg-gradient-to-r from-rose-400 to-rose-600 shadow-lg transform hover:scale-105 transition-transform duration-300 animate__animated animate__fadeInUp">
            <FaLayerGroup className="text-3xl md:text-4xl mb-4" />
            <h3 className="text-lg md:text-xl font-bold mb-2 text-center">Scalability</h3>
            <p className="text-center text-xs md:text-sm">Indian developers offer scalable and flexible solutions, essential as your project needs evolve.</p>
          </div>
        </div>

        {/* Circle 6 */}
        <div className="flex flex-col items-center justify-center w-full">
          <div className="flex flex-col items-center justify-center w-60 h-60 md:w-64 md:h-64 p-5 m-2 md:m-4 rounded-full bg-gradient-to-r from-lime-400 to-lime-600 shadow-lg transform hover:scale-105 transition-transform duration-300 animate__animated animate__fadeInUp">
            <FaCertificate className="text-3xl md:text-4xl mb-4" />
            <h3 className="text-lg md:text-xl font-bold mb-2 text-center">Quality Assurance</h3>
            <p className="text-center text-xs md:text-sm">Experienced developers follow best practices, ensuring high-quality products through thorough testing.</p>
          </div>
        </div>

        {/* Circle 7 */}
        <div className="flex flex-col items-center justify-center w-full">
          <div className="flex flex-col items-center justify-center w-60 h-60 md:w-64 md:h-64 p-2 m-2 md:m-4 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 shadow-lg transform hover:scale-105 transition-transform duration-300 animate__animated animate__fadeInUp">
            <FaLightbulb className="text-3xl md:text-4xl mb-4" />
            <h3 className="text-lg md:text-xl font-bold mb-2 text-center">Diverse Perspectives</h3>
            <p className="text-center text-xs md:text-sm">Dedicated developers from India bring fresh perspectives and ideas, leading to innovative solutions.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsOfHiring;
