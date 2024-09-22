"use client"
import React, { useEffect, useRef, useState } from "react";
import "../../css/mobileview.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import { allCaseStudies } from "../../mock/allCaseStudies";


const infiniteCardData = [...allCaseStudies, ...allCaseStudies];

const MobileViewCaseStudy = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = allCaseStudies.length;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalSlides - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === totalSlides - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="carouselContainer">
      <div
        className="carouselInner"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {infiniteCardData.map((card, index) => (
          <div key={index} className="carouselSlide">
            <div className="carouselCard">
              <div
                className="carouselCardImage"
                style={{ backgroundImage: card.image }}
              >
                <img src={card.topimage} alt={card.heading} style={{ display: 'none' }} />
              </div>
              <div className="flex flex-col gap-2 mt-2">
                    <span className="bg-gray-200 text-gray-800 w-28 text-center text-xs font-medium px-2.5 py-0.5 rounded-full">
                      {card.sub}
                    </span>
                    <div className="text-xl font-bold text-left">{card.heading}</div>
                    <span className="text-indigo-800 cursor-pointer font-semibold text-left">
                      Read more →
                    </span>
                  </div>
            </div>
          </div>
        ))}
      </div>
      <div className="carouselControls">
        <button onClick={handlePrev} className="carouselControlPrev">
          &#9664;
        </button>
        <button onClick={handleNext} className="carouselControlNext">
          &#9654;
        </button>
      </div>
    </div>
  );
  };
  
  export default MobileViewCaseStudy;
