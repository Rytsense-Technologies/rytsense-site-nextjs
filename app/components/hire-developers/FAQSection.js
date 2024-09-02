"use client"

import React, { useState } from "react";
import {
  FaChevronDown,
  FaChevronUp,
  FaLaptopCode,
  FaDollarSign,
  FaComments,
  FaHandsHelping,
} from "react-icons/fa";
import 'animate.css';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How can I hire developers at Rytsense Technologies?",
      answer: "To hire developers in India, visit our website and fill out the contact form, or reach out via email, chat, or phone. Our team will respond promptly to connect with you.",
      icon: <FaLaptopCode className="text-blue-600" />,
    },
    {
      question: "What is the cost of hiring developers from Rytsense Technologies?",
      answer: "The cost depends on the project size, the number of developers required, and the technologies used. We offer competitive rates tailored to your business needs.",
      icon: <FaDollarSign className="text-green-600" />,
    },
    {
      question: "How can I communicate with my developer?",
      answer: "Communicate with our dedicated developers through various channels, including email, chat, video calls, and more.",
      icon: <FaComments className="text-purple-600" />,
    },
    {
      question: "How do you help businesses fulfill their development needs?",
      answer: "Rytsense Technologies connects you with the best software programmers for your business needs, ensuring high-quality outcomes and a smooth development process.",
      icon: <FaHandsHelping className="text-orange-600" />,
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="px-4 py-10 md:px-20 md:py-20 bg-gradient-to-b from-white to-gray-100 text-gray-800">
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4 animate__animated animate__fadeInDown">
          FAQs about Hiring Developers at Rytsense Technologies
        </h2>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white p-4 md:p-6 rounded-lg shadow-lg">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleAccordion(index)}
            >
              <div className="flex items-center">
                {faq.icon}
                <h3 className="text-base md:text-lg font-bold text-gray-900 ml-4">{faq.question}</h3>
              </div>
              <div>
                {activeIndex === index ? (
                  <FaChevronUp className="text-gray-600" />
                ) : (
                  <FaChevronDown className="text-gray-600" />
                )}
              </div>
            </div>
            {activeIndex === index && (
              <div className="mt-4 text-gray-700 animate__animated animate__fadeIn">
                <p className="text-sm md:text-lg">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
