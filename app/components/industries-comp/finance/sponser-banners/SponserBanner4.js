import React from "react";
import CustomButton from "../../../common/CustomButton";

const SponserBanner4 = () => {
  return (
    <>
      <section
        className="text-gray-800 body-font bg-cover bg-center rounded-2xl"
    
      >
        <div className="container mx-auto flex px-5 py-10 items-center justify-center flex-col">
          <div className="text-center lg:w-4/5 w-full   p-8 rounded-lg ">
            <h1 className="title-font sm:text-4xl text-4xl mb-8 font-bold ">
            Launch Your Highly Secure FinTech App With
            Our Top-Notch Financial Software Development Solutions.
            </h1>
            <div className="flex justify-center">
              <CustomButton title={"Get Started"} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SponserBanner4;
