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
          <div className="header">
            <h1 className="main-heading font-bold">Transform Your Business</h1>
            <h1 className="sub-heading inter-semibold">
              Elevate Your Success with Our Innovative Solutions
            </h1>
          </div>
          <div className="case-types">
            {caseStudyTypes.map((type, index) => (
              <button
                key={type} // Changed from index to type for better key uniqueness
                onClick={() => handleTypeChange(type)}
                className={`px-4 py-2 inter-semibold rounded-full  border-gray-400 focus:outline-none ${
                  activeType === type
                    ? "bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-indigo-400 to-90% text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
          <div className="case-studies">
            <div className="case-studies-grid">
              <TransitionGroup component={null}>
                {filteredStudies.map((casestudy) => (
                  <Link
                    key={casestudy.id}
                    href={`/single-case-study/${casestudy.id}`}
                  >
                    <CSSTransition classNames="fade" timeout={1000}>
                      <div className="case-study-card bg-sky-100">
                        <div className="case-study-content">
                          <h3 className="case-study-heading inter-semibold">
                            {casestudy.heading}
                          </h3>
                          <div
                            className="image-container"
                            style={{
                              backgroundImage: `url(${casestudy.topimage})`,
                            }}
                          ></div>
                          <div className="tags">
                            {casestudy.tags.map((tag, index) => (
                              <span key={index} className="tag">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CSSTransition>
                  </Link>
                ))}
              </TransitionGroup>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
