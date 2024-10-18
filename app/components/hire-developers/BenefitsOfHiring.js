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
          Benefits of Hiring Developers from India
          </h2>
       
        </div>

        {/* Circle 1 */}
        <div className="flex flex-col items-center justify-center w-full">
          <div className="flex flex-col items-center justify-center w-60 h-60 md:w-64 md:h-64 p-5 m-2 md:m-4 rounded-full bg-gradient-to-r from-sky-400 to-sky-600 shadow-lg transform hover:scale-105 transition-transform duration-300 animate__animated animate__fadeInUp">
            <FaCode className="text-3xl md:text-4xl mb-4" />
            <h3 className="text-lg md:text-xl font-bold mb-2 text-center">Cost-effective solutions that don’t sacrifice quality.</h3>

          </div>
        </div>

        {/* Circle 2 */}
        <div className="flex flex-col items-center justify-center w-full">
          <div className="flex flex-col items-center justify-center w-60 h-60 md:w-64 md:h-64 p-5 m-2 md:m-4 rounded-full bg-gradient-to-r from-green-400 to-green-600 shadow-lg transform hover:scale-105 transition-transform duration-300 animate__animated animate__fadeInUp">
            <FaCog className="text-3xl md:text-4xl mb-4" />
            <h3 className="text-lg md:text-xl font-bold mb-2 text-center">Access to a large talent pool of highly skilled developers.</h3>
          
          </div>
        </div>

        {/* Circle 3 */}
        <div className="flex flex-col items-center justify-center w-full">
          <div className="flex flex-col items-center justify-center w-60 h-60 md:w-64 md:h-64 p-5 m-2 md:m-4 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 shadow-lg transform hover:scale-105 transition-transform duration-300 animate__animated animate__fadeInUp">
            <FaClock className="text-3xl md:text-4xl mb-4" />
            <h3 className="text-lg md:text-xl font-bold mb-2 text-center">Flexible engagement models suited to any project size and requirement.</h3>
       
          </div>
        </div>

        {/* Circle 4 */}
        <div className="flex flex-col items-center justify-center w-full">
          <div className="flex flex-col items-center justify-center w-60 h-60 md:w-64 md:h-64 p-5 m-2 md:m-4 rounded-full bg-gradient-to-r from-indigo-400 to-indigo-600 shadow-lg transform hover:scale-105 transition-transform duration-300 animate__animated animate__fadeInUp">
            <FaLaptopCode className="text-3xl md:text-4xl mb-4" />
            <h3 className="text-lg md:text-xl font-bold mb-2 text-center">Proven track record of successful project deliveries for global clients.</h3>
       
          </div>
        </div>

    
      </div>
      <p className="text-center bg-blue-600 p-4 text-xl font-bold text-white mt-10">
      Hire developers in India from Rytsense Tech for top-tier software development and unmatched expertise.
      </p>
    </div>
  );
};

export default BenefitsOfHiring;
