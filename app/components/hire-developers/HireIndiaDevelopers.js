"use client"
import React, { useState } from "react";
import { FaUserCheck, FaGlobe, FaClock, FaBolt, FaLaptopCode, FaHandshake } from "react-icons/fa";

const HireIndiaDevelopers = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabContent = [
    {
      icon: <FaUserCheck className="text-green-600 text-4xl mb-4 mx-auto" />,
      title: "Pool of Expert Developers",
      description: "Gain access to a large pool of certified and talented software programmers.",
    },
    {
      icon: <FaGlobe className="text-blue-600 text-4xl mb-4 mx-auto" />,
      title: "English-Speaking Programmers",
      description:
        "Our Indian programmers speak, write, and understand English, ensuring smooth communication with international clients.",
    },
    {
      icon: <FaClock className="text-yellow-600 text-4xl mb-4 mx-auto" />,
      title: "Flexible Work Hours",
      description: "Indian developers can easily adapt to your business needs with flexible timing.",
    },
    {
      icon: <FaBolt className="text-orange-600 text-4xl mb-4 mx-auto" />,
      title: "Rapid Onboarding Process",
      description:
        "Get your team up and running quickly with minimal to no training required, thanks to globally accepted methodologies.",
    },
    {
      icon: <FaLaptopCode className="text-purple-600 text-4xl mb-4 mx-auto" />,
      title: "Expertise in Top Technologies",
      description:
        "Hire programmers experienced in the most in-demand technologies, ensuring the best results for your projects.",
    },
    {
      icon: <FaHandshake className="text-teal-600 text-4xl mb-4 mx-auto" />,
      title: "Reliable Partner Credentials",
      description:
        "Choosing Rytsense Technologies, a reputable offshore development company in India, guarantees the success of your project.",
    },
  ];

  return (
    <div className="px-4 py-10 md:px-8 md:py-20 bg-gradient-to-r from-green-50 via-white to-green-50 text-gray-800 overflow-hidden">
      <header className="text-center mb-8 md:mb-12">
        <h1 className="text-2xl md:text-4xl font-extrabold text-sky-800 mb-4">
          Why Hire Software Developers in India?
        </h1>
        <p className="text-base md:text-lg text-gray-700">
          Discover the unique advantages of hiring top-tier software developers from India.
        </p>
      </header>

      {/* Tab Header */}
      <div className="flex justify-center mb-8 space-x-4">
        {tabContent.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-4 py-2 text-sm md:text-base font-semibold rounded ${
              activeTab === index ? "bg-sky-800 text-white" : "bg-gray-200 text-gray-800"
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="flex justify-center">
        <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg transform transition duration-500">
          {tabContent[activeTab].icon}
          <h3 className="text-xl md:text-2xl font-bold mb-2 text-center">{tabContent[activeTab].title}</h3>
          <p className="text-gray-700 text-center text-sm md:text-base">{tabContent[activeTab].description}</p>
        </div>
      </div>
    </div>
  );
};

export default HireIndiaDevelopers;
