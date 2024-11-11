import React from 'react';
import ClucthBannerContactUs from "../../../components/contact/ClutchBannerContactUs";

const HeroBanner = () => {
  return (
    <div className="px-4 sm:px-10 md:px-20">
      <section
        className="relative bg-sky-900 text-white py-8 sm:py-10 md:py-12 bg-cover bg-center rounded-xl"
        style={{
          backgroundImage:
            'url("https://res.cloudinary.com/dlg3i3ari/image/upload/v1729581055/metro-railway-among-glass-skyscrapers-600nw-2185205475_h72kof.jpg")',
        }}
      >
        {/* Overlay for opacity */}
        <div className="absolute inset-0 bg-sky-900 bg-opacity-80"></div>

        {/* Content Wrapper */}
        <div className="relative container mx-auto px-4 sm:px-6 md:px-8 flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
          {/* Left Section: Text content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              We Are #1 <br />
              <span className="bg-blue-400 text-sky-900 px-2">
                AI Powered Software Development
              </span>{" "}
              company Dubai
            </h1>
            <p className="text-base sm:text-lg mb-4 sm:mb-6">
              Rytsense Technologies is a pioneer in custom software development.
              We take pride in delivering scalable custom software solutions for
              our renowned clients across UAE. We have been recognized by clutch
              as Top Custom software development company in 2022.
            </p>
            <p className="text-base sm:text-lg">
              With our Team of Tech experts, we build and deliver custom
              software solutions for several startups, Fortune clients, and
              enterprises.
            </p>
          </div>

          {/* Right Section: Form */}
          <div className="lg:w-1/3 w-full px-4">
            <ClucthBannerContactUs
              bgColor="bg-white"
              subText="We’d Love to hear from you"
              buttonText="Submit"
              buttonbg="bg-sky-400"
              textcolor="text-[#092947]"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroBanner;
