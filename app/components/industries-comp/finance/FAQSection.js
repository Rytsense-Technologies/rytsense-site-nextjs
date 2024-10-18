"use client";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null); // Change to null for better logic

  const faqs = [
    {
      question: "What is a FinTech App?",
      answer:
        "A FinTech app is an application that focuses on financial technology solutions to offer financial services efficiently and effectively.",
    },
    {
      question: "How Can I Build FinTech App?",
      answer:
        "Now you can build your FinTech app by choosing the best financial software development company. Just share your requirements with us, and we will transform your idea into real-time applications.",
    },
    {
      question: "How Much Does It Cost To Build FinTech App?",
      answer:
        "The cost depends on various factors such as complexity, features, platform, and development time. Contact us for a detailed quote.",
    },
    {
      question: "How Long It Takes To Build FinTech App?",
      answer:
        "The development time depends on the scope and complexity of the app. On average, it can take from a few weeks to several months.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle between the selected and null
  };

  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">
        Frequently Asked Questions
      </h2>

      {faqs.map((faq, index) => (
        <div key={index} className="border-b border-gray-300 mb-4">
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full text-left flex justify-between items-center py-4 focus:outline-none"
            aria-expanded={activeIndex === index}
            aria-controls={`faq-${index}`}
          >
            <span className="text-lg font-semibold">{faq.question}</span>
            {activeIndex === index ? (
              <FaChevronUp className="text-xl text-green-500" />
            ) : (
              <FaChevronDown className="text-xl text-black" />
            )}
          </button>

          <div
            id={`faq-${index}`}
            className={`overflow-hidden transition-all duration-300 ${
              activeIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            {activeIndex === index && (
              <p className="py-4 text-gray-500 text-lg">{faq.answer}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQSection;
