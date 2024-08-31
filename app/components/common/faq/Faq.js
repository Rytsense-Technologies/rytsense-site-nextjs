"use client"
import React, { useState } from "react";
import "../../../css/faq.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown, faAnglesUp } from "@fortawesome/free-solid-svg-icons";

const Faq = ({faqs}) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className=" faqcontainer flex flex-row items-center justify-center ">
      <div className="text-4xl inter-bold headfaq">
        Frequently asked questions
      </div>
      <div className="flex flex-col faqcards  ">
        {faqs?.map((faq, index) => (
          <div key={index} className="w-full ">
            <button
              onClick={() => toggleDropdown(index)}
              className="toggle-button w-full text-left flex mb-5 items-center justify-between h-20 md:ml-10 inter-semibold  bg-opacity-70"
              style={{boxShadow: "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px"}}
            >
              <span>{faq.question}</span>
              <span className="ml-auto">
                {openIndex === index ? (
                  <FontAwesomeIcon icon={faAnglesUp} />
                ) : (
                  <FontAwesomeIcon icon={faAnglesDown} />
                )}
              </span>
            </button>

            <div
              className={`dropdown inter-semibold text-md md:ml-10 ${
                openIndex === index ? "open" : ""
              }`}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
