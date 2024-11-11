"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "../../css/productclutch.css";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { allCaseStudies } from "../../mock/allCaseStudies";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  const [popupContact, setPopupContact] = useState(false);
  const [activeType, setActiveType] = useState("All");
  const [filteredStudies, setFilteredStudies] = useState(allCaseStudies);

  const caseStudyTypes = [
    "All",
    "Education",
    "Trading Platform",
    "AI",
    "Hospitality",
    "Service",
    "Blockchain",
  ];

  const handleTypeChange = (type) => {
    setActiveType(type);
    if (type === "All") {
      setFilteredStudies(allCaseStudies);
    } else {
      const filtered = allCaseStudies.filter((study) =>
        study.tags.includes(type)
      );
      setFilteredStudies(filtered);
    }
  };

  const handleCaseStudyClick = (casestudy) => {
    // Implement your click handler logic here
  };

  return (
    <>
      <div className="py-28">
        <div className="content-wrapper">
          <div className="header text-center px-4 sm:px-8 md:px-16 lg:px-32 py-4">
            <h1 className="main-heading font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-2">
              Transform Your Business
            </h1>
            <h1 className="sub-heading inter-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl">
              Elevate Your Success with Our Innovative Solutions
            </h1>
          </div>
          <div className="case-types flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 px-4 py-2">
            {caseStudyTypes.map((type) => (
              <button
                key={type}
                onClick={() => handleTypeChange(type)}
                className={`px-3 sm:px-4 py-2 inter-semibold rounded-full border border-gray-400 focus:outline-none ${
                  activeType === type
                    ? "bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-indigo-400 to-90% text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 px-4 sm:px-8 md:px-16 lg:px-40">
            {filteredStudies.map((casestudy) => (
              <Link
                key={casestudy.id}
                href={`/single-case-study/${casestudy.id}`}
              >
                <div className="max-w-sm rounded overflow-hidden shadow-lg mb-5">
                  <img
                    className="w-full h-48 md:h-72 object-cover"
                    src={casestudy.topimage}
                    alt="Sunset in the mountains"
                  />
                  <div className="px-4 py-4">
                    <div className="font-bold text-lg md:text-xl mb-2">
                      {casestudy.heading}
                    </div>
                  </div>
                  <div className="px-4 pt-2 pb-4">
                    {casestudy.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
