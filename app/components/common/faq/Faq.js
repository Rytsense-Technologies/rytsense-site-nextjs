"use client";
import React, { useState } from "react";
import "../../../css/faq.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown, faAnglesUp } from "@fortawesome/free-solid-svg-icons";

const Faq = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faqcontainer flex flex-col items-center justify-center px-4 md:px-10">
      <div className="text-2xl md:text-4xl font-bold headfaq text-center mb-8">
        Frequently Asked Questions
      </div>
      <div className="flex flex-col faqcards w-full md:w-3/4">
        {faqs?.map((faq, index) => (
          <div key={index} className="w-full mb-5">
            <button
              onClick={() => toggleDropdown(index)}
              className="toggle-button w-full text-left flex items-center justify-between h-28 md:h-20 px-4 md:px-6 bg-opacity-70 rounded-md"
              style={{
                boxShadow:
                  "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
              }}
              aria-expanded={openIndex === index}
            >
              <span className="text-lg md:text-xl sm:text-xs">{faq.question}</span>
              <span className="ml-auto">
                {openIndex === index ? (
                  <FontAwesomeIcon icon={faAnglesUp} />
                ) : (
                  <FontAwesomeIcon icon={faAnglesDown} />
                )}
              </span>
            </button>

            <div
              className={`dropdown inter-semibold text-sm md:text-md px-4 md:px-6 transition-all duration-300 ease-in-out ${
                openIndex === index ? "open" : "max-h-0 overflow-hidden"
              }`}
            >
              <p className={`mt-2 ${openIndex === index ? "opacity-100" : "opacity-0"}`}>
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
