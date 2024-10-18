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
    <section className=" py-16">
      <div className="container mx-auto px-5">
        <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-10">
          Why Choose Rytsense Tech for Hiring Developers?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          <div className="flex items-start bg-sky-200 p-4">
            <FaCheckCircle className="text-sky-500 text-3xl mr-4" />
            <p className="text-lg text-gray-700  leading-relaxed">
              Proven track record of delivering successful software solutions for businesses worldwide.
            </p>
          </div>
          <div className="flex items-start bg-rose-200 p-4">
            <FaCheckCircle className="text-sky-500 text-3xl mr-4" />
            <p className="text-lg text-gray-700 leading-relaxed">
              Highly experienced developers proficient in technologies like Java, Python, React, AI, and blockchain.
            </p>
          </div>
          <div className="flex items-start bg-orange-200 p-4">
            <FaCheckCircle className="text-sky-500 text-3xl mr-4" />
            <p className="text-lg text-gray-700 leading-relaxed">
              Competitive pricing with no compromise on quality and performance.
            </p>
          </div>
          <div className="flex items-start bg-green-200 p-4">
            <FaCheckCircle className="text-sky-500 text-3xl mr-4" />
            <p className="text-lg text-gray-700 leading-relaxed">
              Customized engagement models: hire a dedicated development team or choose freelance developers based on your project needs.
            </p>
          </div>
          <div className="flex items-start bg-indigo-200 p-4">
            <FaCheckCircle className="text-sky-500 text-3xl mr-4" />
            <p className="text-lg text-gray-700 leading-relaxed">
              Commitment to timely project delivery with ongoing support and maintenance.
            </p>
          </div>
          <div className="col-span-1 md:col-span-2 lg:col-span-2 text-center mt-8">
            <p className="text-xl font-semibold text-gray-900">
              Hire dedicated developers in India with Rytsense Tech and experience exceptional software development that drives business success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyHireUs;
