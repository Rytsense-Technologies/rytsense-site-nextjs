import React from "react";
import CustomButton from "../../../common/CustomButton";

const SponserBanner4 = () => {
  return (
    <>
      <section
        className="text-gray-800 body-font bg-cover bg-center rounded-2xl"
        style={{ backgroundImage: 'url("https://your-image-url.com/background-image.jpg")' }}
        role="banner"
      >
        <div className="container mx-auto flex px-5 py-10 items-center justify-center flex-col">
          <div className="text-center lg:w-4/5 w-full p-8 rounded-lg bg-white bg-opacity-75">
            <h1 className="title-font sm:text-4xl text-2xl mb-8 font-bold">
              Launch Your Highly Secure FinTech App With Our Top-Notch Financial
              Software Development Solutions.
            </h1>
            <div className="flex justify-center">
              <CustomButton title={"Get Started"} aria-label="Get Started with Financial Software Development" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SponserBanner4;
