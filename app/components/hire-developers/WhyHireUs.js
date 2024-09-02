import React from "react";
import {
  FaCheckCircle,
  FaLaptopCode,
  FaUsers,
  FaClock,
  FaChartLine,
} from "react-icons/fa";

const WhyHireUs = () => {
  const steps = [
    {
      number: 1,
      title: "High Quality/Cost Ratio",
      icon: <FaCheckCircle className="text-blue-500 inline mr-2" />,
      description:
        "Hire Silicon Valley caliber talent at half the cost: Access the top 1% of over 1.5 million developers from 150+ countries who have applied to Rytsense Technologies.",
    },
    {
      number: 2,
      title: "100+ Skills Available",
      icon: <FaLaptopCode className="text-green-500 inline mr-2" />,
      description:
        "Hire experts in React, Node, Python, Angular, Swift, React Native, Android, Java, Rails, Golang, DevOps, Machine Learning, Data Engineering, and more.",
    },
    {
      number: 3,
      title: "Rigorous Testing and Interviews",
      icon: <FaUsers className="text-purple-500 inline mr-2" />,
      description:
        "Our process is more thorough than typical Silicon Valley interviews, testing for 100+ skills, including data structures, algorithms, systems design, and software specializations.",
    },
    {
      number: 4,
      title: "Seniority Tests",
      icon: <FaClock className="text-orange-500 inline mr-2" />,
      description:
        "We select developers who excel in communication and can take ownership of business and product objectives without needing micromanagement.",
    },
    {
      number: 5,
      title: "Effective Collaboration",
      icon: <FaChartLine className="text-blue-500 inline mr-2" />,
      description: (
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong className="text-blue-600">Daily Updates:</strong> Rytsense
            Workspace offers you full visibility into your remote developer’s
            work with automatic time tracking and virtual daily stand-ups.
          </li>
          <li>
            <strong className="text-blue-600">Easy Management:</strong> High
            visibility makes our developers easy to manage, ensuring they stay
            focused on what’s most valuable to you.
          </li>
          <li>
            <strong className="text-blue-600">Time Zone Compatibility:</strong>{" "}
            Our developers match your time zone, overlapping at least 4 hours
            with your workday.
          </li>
        </ul>
      ),
    },
  ];

  return (
    <div className="px-4 py-10 md:px-8 md:py-20 bg-gradient-to-r from-blue-50 via-white to-blue-50 text-gray-800">
      {/* Header Section */}
      <header className="text-center mb-8 md:mb-12">
        <h1 className="text-2xl md:text-4xl font-extrabold text-blue-600 mb-4">
          Why Choose Rytsense Technologies?
        </h1>
        <p className="text-base md:text-lg text-gray-700">
          Hire the best global talent at half the cost, with unparalleled
          expertise and a seamless hiring process.
        </p>
      </header>

      {/* Custom Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <div className="shadow-lg p-6 rounded-lg bg-white">
          <h2 className="text-lg md:text-xl font-bold mb-4">
            <span className="inline-block w-8 h-8 bg-sky-500 text-white rounded-full text-center mr-3">
              1
            </span>
            {steps[0].title}
          </h2>
          <div className="text-gray-700 text-sm md:text-lg leading-relaxed">
            {steps[0].description}
          </div>
        </div>
        <div className="shadow-lg p-6 rounded-lg bg-white">
          <h2 className="text-lg md:text-xl font-bold mb-4">
            <span className="inline-block w-8 h-8 bg-sky-500 text-white rounded-full text-center mr-3">
              2
            </span>
            {steps[1].title}
          </h2>
          <div className="text-gray-700 text-sm md:text-lg leading-relaxed">
            {steps[1].description}
          </div>
        </div>
        <div className="shadow-lg p-6 rounded-lg bg-white">
          <h2 className="text-lg md:text-xl font-bold mb-4">
            <span className="inline-block w-8 h-8 bg-sky-500 text-white rounded-full text-center mr-3">
              3
            </span>
            {steps[2].title}
          </h2>
          <div className="text-gray-700 text-sm md:text-lg leading-relaxed">
            {steps[2].description}
          </div>
        </div>
        <div className="shadow-lg p-6 rounded-lg bg-white">
          <h2 className="text-lg md:text-xl font-bold mb-4">
            <span className="inline-block w-8 h-8 bg-sky-500 text-white rounded-full text-center mr-3">
              4
            </span>
            {steps[3].title}
          </h2>
          <div className="text-gray-700 text-sm md:text-lg leading-relaxed">
            {steps[3].description}
          </div>
        </div>
        <div className="md:col-span-2 lg:col-span-2 shadow-lg p-6 rounded-lg bg-white">
          <h2 className="text-lg md:text-xl font-bold mb-4 text-center">
            <span className="inline-block w-8 h-8 bg-sky-500 text-white rounded-full text-center mr-3">
              5
            </span>
            {steps[4].title}
          </h2>
          <div className="text-gray-700 text-sm md:text-lg leading-relaxed">
            {steps[4].description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyHireUs;
