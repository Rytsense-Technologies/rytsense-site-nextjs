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
      question: "How can I hire software developers in India with Rytsense Tech?",
      answer: "We offer a streamlined hiring process that lets you choose the best developers for your needs, whether for long-term projects or short-term engagements.",
      icon: <FaLaptopCode className="text-blue-600" />,
    },
    {
      question: "What are the benefits of hiring a dedicated development team?",
      answer: "Dedicated teams provide continuity, deep understanding of your project, and long-term support for business growth.",
      icon: <FaDollarSign className="text-green-600" />,
    },
    {
      question: "Can I hire Indian developers for short-term projects?",
      answer: "Yes, we offer flexible freelance options to meet your specific short-term development goals.",
      icon: <FaComments className="text-purple-600" />,
    },
    {
      question: "How does Rytsense Tech ensure project quality and timely delivery?",
      answer: "We follow a structured project management process and provide continuous updates, ensuring high-quality results and on-time delivery.",
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
