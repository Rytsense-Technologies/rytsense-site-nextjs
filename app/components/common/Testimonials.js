"use client";
import React, { useEffect, useState, useRef } from "react";
import client1 from "../../../public/images/client/c1.jpg";
import client2 from "../../../public/images/client/c2.jpg";
import client3 from "../../../public/images/client/c3.png";
import client4 from "../../../public/images/client/c4.jpg";
import Image from "next/image";

const Testimonials = () => {
  const details = [
    {
      message:
        '"Thoughtfully integrating consumer feedback to improve the UX/UI, Rytsense Technologies has developed a series of consistently improved mobile app iterations. Their competitive pricing structure pairs value with cost savings. The project manager was exceptionally skilled and communicative."',
      profile: client1,
      name: "Sujai Soy",
      companyname: "Skkyn Technologies - Owner",
      country: "Dubai, UAE",
      flagimage: client1,
    },
    {
      message:
        '"Rytsense Technologies was diligent and responsive in solving any issues that came up throughout the development process and still provides excellent support when they are needed. The client feels that Rytsense has really gone above and beyond with their service."',
      profile: client2,
      name: "Omar Boyd",
      companyname: "CoFounder, Oanz Holdings",
      country: "Canada",
      flagimage: "/images/homepageimages/download (3).png",
    },
    {
      message:
        '"The founder of Rytsense Technologies and the rest of his project team have placed customer service through responsiveness and proper communication above all else, leading to a strong initial product and the opportunity to continue the partnership through multiple iterations and enhancements."',
      profile: client3,
      name: "Brendan Buchholz",
      companyname: "Founder, Cool Charm Friends",
      country: "Brisbane, Australia",
      flagimage: "/images/homepageimages/australia flag.png",
    },
    {
      message:
        '"Users have reviewed the app positively. Rytsense Technologies was responsive and provided excellent support. Their follow-up is particularly noteworthy."',
      profile: client4,
      name: "Owner",
      companyname: "Food Ordering App",
      country: "United Arab Emirates",
      flagimage: "/images/homepageimages/download (2).png",
    },
  ];

  // Clone the details array to create an infinite loop effect
  const extendedDetails = [...details, ...details];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const carouselRef = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % extendedDetails.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? extendedDetails.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, []);

  useEffect(() => {
    if (currentIndex === details.length) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0); // Reset the index without animation
      }, 500); // Delay to allow the current animation to complete
    } else {
      setIsTransitioning(true);
    }
  }, [currentIndex]);

  const bannerColor = {
    background:
      "linear-gradient(90deg, rgba(9,41,71,1) 0%, rgba(22,100,173,1) 35%)",
  };

  return (
    <>
      <style>
        {`
          .carousel-container {
            position: relative;
            overflow: hidden;
            max-width: 100%;
            width: 100%;
            height: 650px;
          }

          .carousel-wrapper {
            display: flex;
            transition: transform 0.5s ease-in-out;
            transform: translateX(-${(currentIndex % details.length) * (100 / 4)}%);
          }

          .carousel-slide {
            flex: 0 0 33.33%; /* Show three slides at a time */
            display: flex;
            justify-content: center;
          }

          .carousel-btn {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            background-color: black;
            color: white;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            z-index: 10;
          }

          .carousel-btn-prev {
            left: 10px;
          }

          .carousel-btn-next {
            right: 10px;
          }

          .no-transition {
            transition: none !important;
          }
        `}
      </style>
      <div className="px-5 sm:px-10 lg:px-10 py-10" style={bannerColor}>
        <div className="flex flex-col items-center gap-2 justify-center mb-10 text-center">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
            Hear What Our Clients Are Raving About
          </h1>
          <p className="text-lg font-semibold text-gray-200">
            Here, we make almost every genre of applications. You name it and we
            build it.
          </p>
        </div>
        <div className="carousel-container">
          <div
            ref={carouselRef}
            className={`carousel-wrapper ${!isTransitioning ? "no-transition" : ""}`}
          >
            {extendedDetails.map((cli, i) => (
              <div key={i} className="carousel-slide">
                <div
                  className="backdrop-opacity-10 backdrop-invert bg-[#092947]/30 rounded-2xl p-10 flex flex-col justify-between transition-all duration-500 hover:border-indigo-600"
                  style={{ width: "369px", height: "609px" }}
                >
                  <p className="text-sm text-white mt-5 leading-6 font-semibold transition-all duration-500 min-h-24 group-hover:text-gray-800">
                    {cli.message}
                  </p>
                  <div className="flex flex-col items-center gap-5 mb-5 sm:mb-9 mt-20">
                    <Image
                      src={cli.profile}
                      alt="avatar"
                      className="w-20 h-20 rounded-full object-cover"
                      width={100}
                      height={100}
                    />
                    <div className="grid gap-1 text-center">
                      <h5 className="text-white font-medium transition-all duration-500">
                        {cli.name}
                      </h5>
                      <span className="text-sm leading-6 text-white">
                        {cli.country}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Previous and Next Buttons */}
          <div className="carousel-btn carousel-btn-prev" onClick={prevSlide}>
            &#10094;
          </div>
          <div className="carousel-btn carousel-btn-next" onClick={nextSlide}>
            &#10095;
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
