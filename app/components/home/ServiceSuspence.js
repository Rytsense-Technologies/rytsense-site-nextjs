import React from "react";
import CustomButton from "../common/CustomButton";

const ServiceSuspence = () => {
  const bannerColor = {
    background:
      "linear-gradient(90deg, rgba(9,41,71,1) 0%, rgba(22,100,173,1) 35%)",
  };
  return (
    <div className="mx-auto py-20 sm:py-40 px-5 sm:px-10" style={bannerColor}>
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <div className="max-w-full sm:max-w-lg mb-10 sm:mb-0 sm:ml-10 lg:ml-30">
          <div className="flex flex-col gap-1">
            <h1 className="text-lg sm:text-xl text-[#2C87D9] font-bold mt-8">Hiring services </h1>
            <p className="font-semibold text-white font-sans mt-8 text-3xl sm:text-5xl">
              Driving Future-Ready Success
            </p>
            <p className="mt-8 text-lg sm:text-xl text-white">
              Our evaluative paves the way for robust scalability, efficiency,
              and future growth, ensuring your product is primed for success.
            </p>
            <div className="mt-10 w-58">
              <CustomButton title={" Hire our Developers"} />
            </div>
          </div>
        </div>
        <div className="w-full sm:w-auto sm:ml-10 lg:ml-20 rounded-lg">
          <video
            width="100%"
            height="100%"
            className="rounded-xl sm:scale-125 sm:translate-x-10 lg:translate-x-40"
            autoPlay
            muted
            preload="auto"
     
          >
            <source
              src="https://res.cloudinary.com/dlg3i3ari/video/upload/v1721791921/code_animation_kxdapi.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </div>
  );
};

export default ServiceSuspence;
