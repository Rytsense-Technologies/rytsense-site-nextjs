"use client";

import React, { useState } from "react";
import {
  FaMoneyBillWave,
  FaUniversity,
  FaUserPlus,
  FaBell,
} from "react-icons/fa";

const featuresData = [
  {
    icon: <FaMoneyBillWave className="text-4xl mb-4 mx-auto text-black" />,
    title: "AI-Driven Financial Advisory (Robo-Advisors)",
    description:
      "Leverage AI to offer personalized financial advice, automated investment strategies, and portfolio optimization based on user goals and risk tolerance. This can be expanded with predictive analytics to offer proactive advice.",
  },
  {
    icon: <FaUniversity className="text-4xl mb-4 mx-auto text-black" />,
    title: "Smart Contracts on Blockchain",
    description:
      "Implement blockchain-based smart contracts for automating transactions, loan approvals, or insurance claims processing. These contracts are self-executing and provide transparency, reducing fraud risks and intermediaries.",
  },
  {
    icon: <FaUserPlus className="text-4xl mb-4 mx-auto text-black" />,
    title: "AI-Based Fraud Detection",
    description:
      "Integrate machine learning algorithms that continuously monitor transaction patterns and flag unusual activity in real-time, reducing fraud risks. This can be enhanced with behavioral biometrics for user authentication.",
  },
  {
    icon: <FaBell className="text-4xl mb-4 mx-auto text-black" />,
    title: "Open Banking Integration",
    description:
      "Enable open banking to provide users with aggregated financial data from multiple banks and financial institutions via APIs. Users can manage all their accounts in one place, and third-party services can be seamlessly integrated.",
  },
  {
    icon: <FaMoneyBillWave className="text-4xl mb-4 mx-auto text-black" />,
    title: "Voice and Chat-Based Financial Management",
    description:
      "Implement voice and chatbot assistants that allow users to perform transactions, check balances, make investment decisions, and set budgets using natural language commands, enhancing ease of use.",
  },
  {
    icon: <FaUniversity className="text-4xl mb-4 mx-auto text-black" />,
    title: "Peer-to-Peer (P2P) Lending Platforms",
    description:
      "Create a platform for direct lending between users, cutting out traditional financial institutions. Implement rating systems, AI risk assessments, and smart contracts to enhance trust and streamline the lending process.",
  },
  {
    icon: <FaUniversity className="text-4xl mb-4 mx-auto text-black" />,
    title: "Real-Time Personal Financial Insights",
    description:
      "Provide users with real-time analysis of their spending habits, budget recommendations, and personalized insights using AI and data analytics. Notifications can guide users toward better financial decisions.",
  },
];

const FeatureSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // State to track the current index
  const cardsToShow = 3; // Number of cards to show at a time

  const nextSlide = () => {
    if (currentIndex + cardsToShow < featuresData.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleButtonClick = () => {
    window.open("https://calendly.com/ramkumar_p/call-schedule", "_blank");
  };

  return (
    <section className="py-16">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center mb-12">
        {/* Left Text Section */}
        <div className="text-left lg:w-2/3 w-full mb-6 md:mb-0">
          <h2 className="text-4xl font-bold mb-4">
            Our FinTech Solutions Come Integrated With Unique Features
          </h2>
          <p className="text-lg">
            Code Brew offers high-end financial app development solutions that
            are loaded with exclusive features to meet your unique user needs.
          </p>
        </div>

        {/* Right Arrows Section */}
        <div className="flex justify-end space-x-4">
          <button
            className="bg-gray-300 hover:bg-gray-400 p-2 rounded-full disabled:bg-gray-200"
            onClick={prevSlide}
            disabled={currentIndex === 0}
          >
            ←
          </button>
          <button
            className="bg-gray-300 hover:bg-gray-400 p-2 rounded-full disabled:bg-gray-200"
            onClick={nextSlide}
            disabled={currentIndex + cardsToShow >= featuresData.length}
          >
            →
          </button>
        </div>
      </div>

      {/* Cards Section */}
      <div className="relative overflow-hidden">
        <div
          className="flex"
          style={{
            transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`,
            transition: "transform 0.3s ease-in-out",
            width: `${(featuresData.length / cardsToShow) * 100}%`,
          }}
        >
          {featuresData.map((feature, index) => (
            <div key={index} className="min-w-1/3 px-4">
              <div className="border border-green-300 rounded-lg p-6  hover:shadow-lg transition-shadow duration-300">
                {feature.icon}
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="mb-4">{feature.description}</p>
                <button
                  className="text-sky-500 font-semibold cursor-pointer"
                  onClick={handleButtonClick}
                >
                  Get Started →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSlider;
