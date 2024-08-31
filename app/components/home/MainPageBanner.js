import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import CustomButton from "../common/CustomButton";

const MainPageBanner = () => {
  const handleButtonClick = () => {
    window.open("https://calendly.com/ramkumar_p/call-schedule", "_blank");
  };

  return (
    <div className="relative w-full h-screen overflow-hidden mb-10">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://res.cloudinary.com/dlg3i3ari/video/upload/v1723551814/freecompress-pedestr-good_snanfc_vti3vt.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-6">
        <h1 className="text-4xl sm:text-5xl md:text-4xl lg:text-4xl xl:text-8xl font-bold text-center mb-4">
          Scale Faster with Advance <br /> Software Development
        </h1>
        <p className="text-lg sm:text-xl md:text-xl lg:text-xl xl:text-4xl font-normal text-center mb-6">
          AI & Custom Software Solutions Built to Scale
        </p>
        <CustomButton title={"Book a Call"} />
      </div>
    </div>
  );
};

export default MainPageBanner;
