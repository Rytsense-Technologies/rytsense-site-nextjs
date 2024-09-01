"use client";

import React, { useState } from "react";

const IndustryFaq = ({ faq }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [arrowRotation, setArrowRotation] = useState({});

  const handleAccordionClick = (index) => {
    console.log("Before Click:", activeIndex, arrowRotation);
    const prevIndex = activeIndex;
    const newIndex = prevIndex === index ? null : index;
    setArrowRotation((prevRotation) => ({
      ...prevRotation,
      [index]: prevIndex === index ? "0deg" : "180deg",
    }));

    setActiveIndex(newIndex);
    console.log("After Click:", activeIndex, arrowRotation);
  };

  return (
    <div>
      <div className="max-w-7xl p-5 mx-auto xl:max-w-5xl">
        <div>
          <h1 className="text-3xl font-bold ">Frequently asked questions</h1>
        </div>
        <div className="mt-10 flex gap-5 flex-wrap">
          {faq.map((item, index) => (
            <div key={index} className="w-full">
              <div
                className="cursor-pointer border-b border-gray-300 p-5"
                onClick={() => handleAccordionClick(index)}
              >
                <h2 className="text-lg font-semibold flex justify-between items-center hover:text-blue1">
                  {item.heading}{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={`w-6 h-6 transform transition-transform ${
                      arrowRotation[index] ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75"
                    />
                  </svg>
                </h2>
              </div>
              {activeIndex === index && (
                <div className="p-5 text-slate-700">
                  <p>{item.passage}</p>
                  {item.passagearray && (
                    <ul className="mt-5 flex flex-col gap-3 list-disc">
                      {item.passagearray.map((array, index) => (
                        <li key={index} className="ml-4">
                          {array}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndustryFaq;
