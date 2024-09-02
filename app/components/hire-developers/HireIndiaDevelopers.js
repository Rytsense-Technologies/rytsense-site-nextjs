import React from "react";
import { FaUserCheck, FaGlobe, FaClock, FaBolt, FaLaptopCode, FaHandshake } from "react-icons/fa";
import Slider from "react-slick";

const HireIndiaDevelopers = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  return (
    <div className="px-4 py-10 md:px-8 md:py-20 bg-gradient-to-r from-green-50 via-white to-green-50 text-gray-800 overflow-hidden">
      {/* Header Section */}
      <header className="text-center mb-8 md:mb-12">
        <h1 className="text-2xl md:text-4xl font-extrabold text-sky-800 mb-4">
          Why Hire Software Developers in India?
        </h1>
        <p className="text-base md:text-lg text-gray-700">
          Discover the unique advantages of hiring top-tier software developers from India.
        </p>
      </header>

      <div className="relative">
        <Slider {...settings}>
          {/* Slide 1: Pool of Expert Developers */}
          <div className="p-2 md:p-4">
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
              <FaUserCheck className="text-green-600 text-4xl mb-4 mx-auto" />
              <h3 className="text-xl md:text-2xl font-bold mb-2 text-center">Pool of Expert Developers</h3>
              <p className="text-gray-700 text-center text-sm md:text-base">
                Gain access to a large pool of certified and talented software programmers.
              </p>
            </div>
          </div>

          {/* Slide 2: English-Speaking Programmers */}
          <div className="p-2 md:p-4">
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
              <FaGlobe className="text-blue-600 text-4xl mb-4 mx-auto" />
              <h3 className="text-xl md:text-2xl font-bold mb-2 text-center">English-Speaking Programmers</h3>
              <p className="text-gray-700 text-center text-sm md:text-base">
                Our Indian programmers speak, write, and understand English, ensuring smooth communication with international clients.
              </p>
            </div>
          </div>

          {/* Slide 3: Flexible Work Hours */}
          <div className="p-2 md:p-4">
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
              <FaClock className="text-yellow-600 text-4xl mb-4 mx-auto" />
              <h3 className="text-xl md:text-2xl font-bold mb-2 text-center">Flexible Work Hours</h3>
              <p className="text-gray-700 text-center text-sm md:text-base">
                Indian developers can easily adapt to your business needs with flexible timing.
              </p>
            </div>
          </div>

          {/* Slide 4: Rapid Onboarding Process */}
          <div className="p-2 md:p-4">
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
              <FaBolt className="text-orange-600 text-4xl mb-4 mx-auto" />
              <h3 className="text-xl md:text-2xl font-bold mb-2 text-center">Rapid Onboarding Process</h3>
              <p className="text-gray-700 text-center text-sm md:text-base">
                Get your team up and running quickly with minimal to no training required, thanks to globally accepted methodologies.
              </p>
            </div>
          </div>

          {/* Slide 5: Expertise in Top Technologies */}
          <div className="p-2 md:p-4">
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
              <FaLaptopCode className="text-purple-600 text-4xl mb-4 mx-auto" />
              <h3 className="text-xl md:text-2xl font-bold mb-2 text-center">Expertise in Top Technologies</h3>
              <p className="text-gray-700 text-center text-sm md:text-base">
                Hire programmers experienced in the most in-demand technologies, ensuring the best results for your projects.
              </p>
            </div>
          </div>

          {/* Slide 6: Reliable Partner Credentials */}
          <div className="p-2 md:p-4">
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
              <FaHandshake className="text-teal-600 text-4xl mb-4 mx-auto" />
              <h3 className="text-xl md:text-2xl font-bold mb-2 text-center">Reliable Partner Credentials</h3>
              <p className="text-gray-700 text-center text-sm md:text-base">
                Choosing Rytsense Technologies, a reputable offshore development company in India, guarantees the success of your project.
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default HireIndiaDevelopers;
