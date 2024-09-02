import React from "react";
import {
  FaUser,
  FaUsers,
  FaCheckCircle,
  FaExclamationCircle,
  FaComments,
} from "react-icons/fa";
import "animate.css";

const HiringComparison = () => {
  return (
    <div className="px-6 py-10 md:px-20 md:py-20 bg-gradient-to-b from-white to-gray-50 text-gray-800">
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4 animate__animated animate__fadeInDown">
          Hiring Freelancers vs. Dedicated Developers
        </h2>
        <p className="text-base md:text-lg text-gray-600">
          The choice between freelancers and dedicated developers depends on
          your project’s specific needs:
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Freelancers */}
        <div className="flex-1 bg-blue-50 p-6 rounded-lg shadow-lg animate__animated animate__fadeInLeft">
          <h3 className="text-xl md:text-2xl font-bold text-blue-700 mb-4 flex items-center">
            <FaUser className="mr-2" /> Freelancers
          </h3>
          <div className="mb-4">
            <h4 className="text-lg md:text-xl font-semibold text-blue-600 mb-2 flex items-center">
              <FaCheckCircle className="mr-2" /> Pros:
            </h4>
            <ul className="list-disc list-inside text-sm md:text-base">
              <li>Flexibility</li>
              <li>Cost-effectiveness for short-term projects</li>
              <li>Access to specific skills</li>
              <li>Ability to hire for particular tasks</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg md:text-xl font-semibold text-blue-600 mb-2 flex items-center">
              <FaExclamationCircle className="mr-2" /> Cons:
            </h4>
            <ul className="list-disc list-inside text-sm md:text-base">
              <li>Limited availability for long-term projects</li>
              <li>Communication barriers</li>
              <li>Less accountability</li>
            </ul>
          </div>
        </div>

        {/* Dedicated Developers */}
        <div className="flex-1 bg-green-50 p-6 rounded-lg shadow-lg animate__animated animate__fadeInRight">
          <h3 className="text-xl md:text-2xl font-bold text-green-700 mb-4 flex items-center">
            <FaUsers className="mr-2" /> Dedicated Developers
          </h3>
          <div className="mb-4">
            <h4 className="text-lg md:text-xl font-semibold text-green-600 mb-2 flex items-center">
              <FaCheckCircle className="mr-2" /> Pros:
            </h4>
            <ul className="list-disc list-inside text-sm md:text-base">
              <li>Long-term commitment</li>
              <li>Better integration with your team</li>
              <li>Higher accountability</li>
              <li>Consistent availability</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg md:text-xl font-semibold text-green-600 mb-2 flex items-center">
              <FaExclamationCircle className="mr-2" /> Cons:
            </h4>
            <ul className="list-disc list-inside text-sm md:text-base">
              <li>Higher cost for short-term projects</li>
              <li>Less flexibility in resource allocation</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HiringComparison;
