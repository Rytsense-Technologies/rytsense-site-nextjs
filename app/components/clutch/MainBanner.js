import React from "react";
import RanksClutch from "../../components/common/RanksClutch";

import ClucthBannerContactUs from "../../components/contact/ClutchBannerContactUs";

const MainBanner = () => {
  return (
  <div >
      <section className="px-6 sm:px-20  body-font">
      <div className=" flex flex-wrap">
        <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-3/5 sm:w-2/3 content-start sm:pr-10">
          <div className="w-full sm:p-4 px-4 mb-6 text-[#092947]">
            <h1 className="md:text-left">
              <span className="text-4xl sm:text-5xl font-bold">
              Advanced Software Development Company
              </span>
              <br />
              <div className="text-base text-xl text-blue-500  mt-4 font-semibold banner-textsecond">
              On Time. On Budget.
              </div>
            </h1>
            <p className="text-gray-500 mt-4">We are an Award winning Indian Software Engineering Company. We specialize in providing AI & Advanced Software solutions to clients across the globe.</p>
          </div>
          <RanksClutch />
        </div>
        <div className="lg:w-2/5 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
          {/* <ContactUs
            bgColor="bg-sky-50"
            subText="We’d Love to hear from you"
            buttonText="Consult with an Expert"
            buttonbg="bg-sky-500"
            textcolor="text-[#092947]"
          /> */}

          <ClucthBannerContactUs
            bgColor="bg-sky-50"
            subText="Our team will get back to you within 8 business hours or less."
            buttonText="Consult with an Expert"
            buttonbg="bg-sky-500"
            textcolor="text-gray-500"
          />
        </div>
      </div>
    </section>
  </div>
  );
};

export default MainBanner;
