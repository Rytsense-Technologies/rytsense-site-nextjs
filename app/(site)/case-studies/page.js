"use client";
import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import "../../css/productclutch.css";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { allCaseStudies } from "../../mock/allCaseStudies";
import Image from "next/image";



const page = () => {
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
                key={index}
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
                {filteredStudies.map((casestudy, index) => (
                  <CSSTransition key={index} classNames="fade" timeout={1000}>
                    <div
                      onClick={() => handleCaseStudyClick(casestudy)}
                      className="case-study-card bg-sky-100"
                    >
                      <div className="case-study-content">
                        <h3 className="case-study-heading inter-semibold">
                          {casestudy.heading}
                        </h3>
                        <div
                          className="image-container"
                          style={{
                            backgroundImage: casestudy.image,
                          }}
                        ></div>
                        <div className="tags">
                          {casestudy.tags.map((tag, idx) => (
                            <div key={idx} className="tag">
                              <h1 className="tag-text inter-semibold">{tag}</h1>
                            </div>
                          ))}
                        </div>
                        <h3 className="case-study-sub inter-semibold">
                          {casestudy.sub}
                        </h3>
                        <p className="case-study-description inter-med">
                          {casestudy.about}
                        </p>
                      </div>
                      <div className="rating-review">
                        <p className="rating">
                          <FontAwesomeIcon icon={faStar} />
                          <FontAwesomeIcon icon={faStar} className="star" />
                          <FontAwesomeIcon icon={faStar} className="star" />
                          <FontAwesomeIcon icon={faStar} className="star" />
                          <FontAwesomeIcon icon={faStar} className="star" />
                        </p>
                        <div className="review-source">
                          <span className="review-text">Reviewed on</span>
                          <Image
                            className="clutch-logo"
                            src="https://res.cloudinary.com/dlg3i3ari/image/upload/v1725257360/clutch-text2_eydh33.png"
                            alt="clutch"
                            width={40}
                            height={40}
                          />
                        </div>
                      </div>
                    </div>
                  </CSSTransition>
                ))}
              </TransitionGroup>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
