import React from "react";
import {
  FaSearch,
  FaGlobe,
  FaComments,
  FaCheckCircle,
  FaLock,
  FaDollarSign,
} from "react-icons/fa";
import 'animate.css';

const HiringChallenges = () => {
  const challenges = [
    {
      icon: <FaSearch className="text-4xl text-blue-600 mb-4" />,
      title: "Skill Shortage",
      description: "Finding developers with the right skill set can be time-consuming.",
    },
    {
      icon: <FaGlobe className="text-4xl text-green-600 mb-4" />,
      title: "Cultural Fit",
      description: "Overcoming cultural differences when hiring offshore developers requires extra effort.",
    },
    {
      icon: <FaComments className="text-4xl text-yellow-600 mb-4" />,
      title: "Communication Barriers",
      description: "Communication can be challenging when developers are in different time zones or speak different languages.",
    },
    {
      icon: <FaCheckCircle className="text-4xl text-purple-600 mb-4" />,
      title: "Quality Concerns",
      description: "Not all developers deliver the same level of quality, making it crucial to verify their expertise and experience.",
    },
    {
      icon: <FaLock className="text-4xl text-red-600 mb-4" />,
      title: "Data Security & IP",
      description: "Data security is a concern when sharing sensitive project information.",
    },
    {
      icon: <FaDollarSign className="text-4xl text-teal-600 mb-4" />,
      title: "Cost Management",
      description: "Balancing cost and quality is essential, as the cost of hiring developers can vary significantly.",
    },
  ];

  return (
    <div className="px-6 py-10 md:px-20 md:py-20 bg-gradient-to-b from-white to-sky-100 text-gray-800">
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4 animate__animated animate__fadeInDown">
          Typical Challenges in Hiring Developers
        </h2>
        <p className="text-base md:text-lg text-gray-600 mb-4">
          Despite the benefits, hiring developers can present challenges:
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {challenges.map((challenge, index) => (
          <div
            key={index}
            className={`bg-white p-6 rounded-lg shadow-lg animate__animated animate__fadeInUp`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex flex-col items-center text-center">
              {challenge.icon}
              <h3 className="text-lg md:text-xl font-bold mb-2">
                {challenge.title}
              </h3>
              <p className="text-sm md:text-base">{challenge.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HiringChallenges;
