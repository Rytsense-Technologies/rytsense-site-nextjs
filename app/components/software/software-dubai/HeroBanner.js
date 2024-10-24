import React from 'react';
import ClucthBannerContactUs from "../../../components/contact/ClutchBannerContactUs";

const HeroBanner = () => {
  return (
   <div className='px-20'>
     <section 
      className="relative bg-sky-900 text-white py-5 bg-cover bg-center px-10 rounded-xl" 
      style={{ backgroundImage: 'url("https://res.cloudinary.com/dlg3i3ari/image/upload/v1729581055/metro-railway-among-glass-skyscrapers-600nw-2185205475_h72kof.jpg")' }}
    >
      {/* Overlay to add opacity */}
      <div className="absolute inset-0 bg-sky-900 bg-opacity-80"></div>

      {/* Content Wrapper */}
      <div className="relative container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between">
        
        {/* Left Section: Text content */}
        <div className="lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            We Are #1 <br/><span className="bg-blue-400 text-sky-900 px-2">Software Development</span> Company Dubai
          </h1>
          <p className="text-lg mb-6">
          Rytsense Technologies is a pioneer in custom software development. We take pride in delivering scalable custom software solutions for our renowned clients across UAE. We have been recognized by clutch as Top Custom software development company in 2022.
          </p>
          <p className="text-lg">
          With our Team of Tech experts, we build and deliver custom software solutions for several startups, Fortune clients and enterprises.
          </p>
        </div>

        {/* Right Section: Form */}
        <div className="lg:w-1/3">
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
