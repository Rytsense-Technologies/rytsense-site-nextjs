import React from "react";
import Image from "next/image";
import CustomButton from "../../common/CustomButton";

const MainPageBanner = ({heading, image}) => {
  return (
    <div className="relative w-full h-screen overflow-hidden mb-10">
      <Image className="absolute inset-0 w-full h-full object-cover" src={image} width={1000} height={800} alt=""/>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-6">
        <h1 className="text-4xl sm:text-5xl md:text-4xl lg:text-2xl xl:text-5xl font-bold text-center mb-4">
          {heading}
        </h1>
       
        <CustomButton title={"Book a Call"} />
      </div>
    </div>
  );
};

export default MainPageBanner;
