import React from "react";
import CustomButton from "../../../common/CustomButton";

const SponserBanner2 = () => {
  return (
    <>
      <section
        className="text-gray-600 body-font bg-cover bg-center rounded-2xl"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dlg3i3ari/image/upload/v1728981235/6257d57c24e77cf360ff7db684332d7d_j59ayy.jpg')",
        }}
      >
        <div className="container mx-auto flex px-5 py-10 items-center justify-center flex-col">
          <div className="text-center lg:w-4/5 w-full   p-8 rounded-lg ">
            <h1 className="title-font sm:text-4xl text-4xl mb-8 font-bold text-white">
              Improve Efficiency & Flexibility Of Your Processes With Top-Notch
              FinTech App Development Company
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

export default SponserBanner2;
