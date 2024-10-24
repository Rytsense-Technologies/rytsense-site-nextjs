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
  // {
  //   id: 2,
  //   title: "Option Trading Platform - Revolutionizing Trading with Cutting-Edge Innovation",
  //   description:
  //     "Our Client is a leading chain of dental clinic in US led by a team of senior dentists.With their years of experience & expertise in the field the clinics are busy round the year with thousands of visitors across the chain getting various services.",
  //   image:
  //     "https://res.cloudinary.com/dlg3i3ari/image/upload/v1720776040/Group_105140_fkx3qa.png",
  //   downloads: "800K+",
  //   rating: "4.5/5",
  //   valuation: "$4M",
  // },
  // {
  //   id: 3,
  //   title: "How an AI Chatbot Reduced Customer Support Tickets by 80%",
  //   description:
  //     "Our client TMF is a leading accounting & taxfiling company serving across the globe.With a clientbase of 3000 companies across 34 countries",
  //   image:
  //     "https://res.cloudinary.com/dlg3i3ari/image/upload/v1729687885/aibot_bvuvy4.png",
  //   downloads: "800K+",
  //   rating: "4.5/5",
  //   valuation: "$4M",
  // },
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
    <section className="py-16 px-20">
      <div className="container mx-auto px-4">
        {/* Heading Section */}
        <div className="flex items-center justify-between gap-5 mb-12">
          <h2 className="text-3xl lg:text-3xl font-bold mb-4">
            Explore Our Incredible App Development Portfolio Across UAE
          </h2>
          <p className="text-gray-600">
            Our diversified app development portfolio in Dubai and other UAE
            regions serves as proof that we are the best mobile application
            development company when it comes to creating mobile apps.
          </p>
        </div>

        {/* Portfolio Content */}
        <div className="bg-sky-900 rounded-lg overflow-hidden relative flex items-center">
          {/* Left Navigation Arrow */}
          {/* <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2  bg-white rounded-full p-2 shadow-lg"
          >
            <FaArrowLeft className="w-6 h-6" />
          </button> */}

          {/* Image and Content */}
          <div className="lg:flex lg:items-center lg:justify-between w-full">
            {/* Left Section: App Image */}
            <div className="lg:w-1/2 relative flex justify-center items-center">
              <Image
                src={caseStudies[currentIndex].image}
                alt={caseStudies[currentIndex].title}
                className=" relative z-10"
                width={500}
                height={500}
              />
            </div>

            {/* Right Section: Text and Info */}
            <div className="lg:w-1/2 text-white p-8 lg:p-16">
              <h3 className="text-2xl font-bold mb-4">
                {caseStudies[currentIndex].title}
              </h3>
              <p className="mb-4">{caseStudies[currentIndex].description}</p>

              {/* Stats */}
              <div className="flex space-x-8 mb-6">
                <div>
                  <p className="text-2xl font-bold">
                    {caseStudies[currentIndex].downloads}
                  </p>
                  <p>Downloads</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">
                    {caseStudies[currentIndex].rating}
                  </p>
                  <p>Rating</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">
                    {caseStudies[currentIndex].valuation}
                  </p>
                  <p>Total Valuation</p>
                </div>
              </div>

              {/* Case Study Button */}
              <Link href="/caseStudy/bluefield/">
                <button className="bg-white text-green-900 font-bold py-2 px-6 rounded-md hover:bg-gray-200 transition-colors">
                  Explore Case Study
                </button>
              </Link>
            </div>
          </div>

          {/* Right Navigation Arrow */}
          {/* <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2  bg-white rounded-full p-2 shadow-lg"
          >
            <FaArrowRight className="w-6 h-6" />
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
