import React from "react";
import Image from "next/image";
import CustomButton from "../../common/CustomButton";

const MainPageBanner = ({heading, image}) => {
  return (
   <div className="px-20 mt-10">
    <div className="inset-0 flex flex-col items-center justify-center text-white px-6">
        <h1 className="text-3xl max-w-4xl px-20 sm:text-5xl md:text-3xl lg:text-2xl xl:text-3xl text-gray-800 font-bold text-center mb-4">
          {heading}
        </h1>
       
        <CustomButton title={"Book a Call"} />
      </div>
     <div className="  rounded-lg">
      <Image className="mx-auto mt-10 object-cover" src={image} width={1000} height={800} alt=""/>
   
    </div>
    
   </div>
  );
};

export default MainPageBanner;
