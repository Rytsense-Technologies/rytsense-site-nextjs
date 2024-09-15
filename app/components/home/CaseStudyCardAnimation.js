"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import "../../css/CaseStudyCard.css";
import { allCaseStudies } from "../../mock/allCaseStudies";

const CaseStudyCardAnimation = () => {
  const [expandedCard, setExpandedCard] = useState(null);
  const sliderRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const [cards, setCards] = useState([]);

  const colors = [
    "#FEFAE0",
    "#F6FB7A",
    "#FFB22C",
    "#A3D8FF",
    "#EADBC8",
    "#CDFADB",
    "#FC6736",
  ];

  useEffect(() => {
    setCards([...allCaseStudies, ...allCaseStudies]);
    // if (window.innerWidth <= 768) {
    //   setExpandedCard(0); // Default expand the first card on mobile
    // }
  }, []);

  const handleExpandClick = (index) => {
    setExpandedCard(expandedCard === index ? null : index);

    const slider = sliderRef.current;
    const card = slider.querySelector(`[data-index="${index}"]`);
    if (card) {
      const cardRect = card.getBoundingClientRect();
      const sliderRect = slider.getBoundingClientRect();
      const cardCenter = cardRect.left + cardRect.width / 2;
      const sliderCenter = sliderRect.left + sliderRect.width / 2;
      const offset = cardCenter - sliderCenter;

      slider.scrollTo({
        left: slider.scrollLeft + offset,
        behavior: "smooth",
      });
    }
  };

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - sliderRef.current.offsetLeft;
    scrollLeft.current = sliderRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX.current) * 2; // Scroll faster
    sliderRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleScroll = () => {
    const slider = sliderRef.current;
    const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
    if (slider.scrollLeft === 0) {
      slider.scrollLeft = maxScrollLeft / 2; // Reset to the "end" (middle of the cloned cards)
    } else if (slider.scrollLeft >= maxScrollLeft) {
      slider.scrollLeft = maxScrollLeft / 2; // Reset to the "start" (middle of the cloned cards)
    }
  };

  return (
    <div className="py-10">
      <div
        className="slider-container"
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onScroll={handleScroll}
      >
        <div className="card-slider">
          {cards.map((card, index) => (
            <div
              key={index}
              data-index={index % allCaseStudies.length}
              className={`caseStudyCard ${
                expandedCard === index % allCaseStudies.length ? "expanded" : ""
              }`}
              onClick={() => handleExpandClick(index % allCaseStudies.length)}
              style={{ backgroundColor: colors[index % colors.length] }}
            >
              <div className="text-content text-gray-800">
                <h3 className="text-gray-600">RESEARCH / DESIGN / STRATEGY</h3>
                <h1 className="font-serif font-semibold">{card.heading}</h1>
                <div className="flex justify-between gap-20 mt-10">
                  <div className="logo">CULDESAC</div>
                  <div className="cta-text">
                    <Link href={`/single-case-study/${card.id}`} passHref>
                      <p className="text-md font-bold cursor-pointer">
                        Read Case Study
                      </p>
                    </Link>
                    <div className="arrow">→</div>
                  </div>
                </div>
              </div>
              <div className="image-content">
                <Image src={card.topimage} alt="" layout="fill" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudyCardAnimation;
