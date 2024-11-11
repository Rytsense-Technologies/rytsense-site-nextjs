"use client";
import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const caseStudies = [
  {
    id: 1,
    title: "Blue Field System",
    description:
      "Transforming Field Operations for ONEIC with Real-Time Task Management, Asset Tracking, and Customized Dashboards",
    image:
      "https://res.cloudinary.com/dlg3i3ari/image/upload/v1729663880/image_zrbsjm.png",
    downloads: "800K+",
    rating: "4.5/5",
    valuation: "$4M",
  },
  // Other case studies can be added here
];

const PortfolioSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === caseStudies.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? caseStudies.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-8 px-4 sm:px-8 md:px-16 lg:px-20">
      <div className="container mx-auto">
        {/* Heading Section */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5 mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-3xl font-bold mb-4 lg:mb-0">
            Explore Our Incredible App Development Portfolio Across UAE
          </h2>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg">
            Our diversified app development portfolio in Dubai and other UAE
            regions serves as proof that we are the best mobile application
            development company when it comes to creating mobile apps.
          </p>
        </div>

        {/* Portfolio Content */}
        <div className="bg-sky-900 rounded-lg overflow-hidden relative flex flex-col lg:flex-row items-center">
          {/* Left Navigation Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg"
          >
            <FaArrowLeft className="w-4 h-4 sm:w-6 sm:h-6" />
          </button>

          {/* Image and Content */}
          <div className="flex flex-col lg:flex-row items-center w-full">
            {/* Left Section: App Image */}
            <div className="w-full lg:w-1/2 flex justify-center items-center p-4">
              <Image
                src={caseStudies[currentIndex].image}
                alt={caseStudies[currentIndex].title}
                className="rounded-lg"
                width={500}
                height={500}
              />
            </div>

            {/* Right Section: Text and Info */}
            <div className="w-full lg:w-1/2 text-white p-6 sm:p-8 lg:p-16">
              <h3 className="text-xl sm:text-2xl font-bold mb-4">
                {caseStudies[currentIndex].title}
              </h3>
              <p className="mb-4 text-sm sm:text-base">
                {caseStudies[currentIndex].description}
              </p>

              {/* Stats */}
              <div className="flex space-x-4 sm:space-x-8 mb-6 text-center">
                <div>
                  <p className="text-lg sm:text-2xl font-bold">
                    {caseStudies[currentIndex].downloads}
                  </p>
                  <p className="text-xs sm:text-sm">Downloads</p>
                </div>
                <div>
                  <p className="text-lg sm:text-2xl font-bold">
                    {caseStudies[currentIndex].rating}
                  </p>
                  <p className="text-xs sm:text-sm">Rating</p>
                </div>
                <div>
                  <p className="text-lg sm:text-2xl font-bold">
                    {caseStudies[currentIndex].valuation}
                  </p>
                  <p className="text-xs sm:text-sm">Total Valuation</p>
                </div>
              </div>

              {/* Case Study Button */}
              <Link href="/caseStudy/bluefield/">
                <button className="bg-white text-green-900 font-bold py-2 px-4 sm:px-6 rounded-md hover:bg-gray-200 transition-colors text-sm sm:text-base">
                  Explore Case Study
                </button>
              </Link>
            </div>
          </div>

          {/* Right Navigation Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg"
          >
            <FaArrowRight className="w-4 h-4 sm:w-6 sm:h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
