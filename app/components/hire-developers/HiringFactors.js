"use client"

import React, { useState } from "react";
import {
  FaUserTie,
  FaTools,
  FaComments,
  FaClock,
  FaMoneyBill,
  FaMapMarkerAlt,
  FaHandshake,
} from "react-icons/fa";
import 'animate.css';

const HiringFactors = () => {
  const [activeTab, setActiveTab] = useState(0);

  const factors = [
    {
      icon: <FaTools className="text-3xl text-blue-600 mb-2" />,
      title: "Expertise and Skills",
      description: "Ensure the developer has the necessary skills for your project.",
    },
    {
      icon: <FaUserTie className="text-3xl text-green-600 mb-2" />,
      title: "Experience",
      description: "Verify that the developer has relevant experience in your industry.",
    },
    {
      icon: <FaComments className="text-3xl text-yellow-600 mb-2" />,
      title: "Communication and Collaboration",
      description: "Evaluate the developer’s communication skills and commitment to effective collaboration.",
    },
    {
      icon: <FaClock className="text-3xl text-purple-600 mb-2" />,
      title: "Availability",
      description: "Confirm the developer’s availability aligns with your project timeline.",
    },
    {
      icon: <FaMoneyBill className="text-3xl text-red-600 mb-2" />,
      title: "Budget and Cost",
      description: "Balance hiring costs with expected quality and deliverables.",
    },
    {
      icon: <FaMapMarkerAlt className="text-3xl text-teal-600 mb-2" />,
      title: "Location",
      description: "Consider whether you need a local developer or prefer to outsource, weighing the pros and cons of each.",
    },
    {
      icon: <FaHandshake className="text-3xl text-amber-600 mb-2" />,
      title: "Cultural Fit",
      description: "Determine if the developer aligns with your company’s culture and values.",
    },
  ];

  return (
    <div className="px-4 py-10 md:px-20 md:py-20 bg-gradient-to-b from-white to-rose-50 text-gray-800">
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4 animate__animated animate__fadeInDown">
          Factors to Consider While Hiring Developers
        </h2>
      </div>

      <div className="flex flex-col">
        {/* Horizontal Tabs */}
        <div className="flex flex-wrap mb-6">
          {factors.map((factor, index) => (
            <button
              key={index}
              className={`flex flex-col items-center p-4 w-full sm:w-1/2 lg:w-1/6 text-center transition duration-300 ${
                activeTab === index
                  ? "bg-sky-200 text-gray-700 font-bold"
                  : "bg-white text-gray-600"
              }`}
              onClick={() => setActiveTab(index)}
            >
              {factor.icon}
              <span className="mt-2 text-sm md:text-base">{factor.title}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="flex-grow bg-white p-6 rounded-lg shadow-lg">
          <div className="animate__animated animate__fadeIn">
            <h3 className="text-xl md:text-2xl font-bold mb-4">
              {factors[activeTab].title}
            </h3>
            <p className="text-base md:text-lg">{factors[activeTab].description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HiringFactors;
