import React from "react";
import CustomButton from "../common/CustomButton";

const CompanyStats = () => {
  return (
    <>
      <section class="text-[#092947] py-20 body-font">
        <div class="">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-4xl text-4xl font-bold title-font mb-2 text-[#092947]">
              You will be in good hands
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              Our clients can depends on our proven experience.
            </p>
          </div>
          <div class="flex flex-wrap -m-4 text-center">
            <div class=" md:w-1/5 sm:w-1/5 w-full">
              <div class="border-r-4 border-gray-200 px-4 py-6 rounded-lg">
                <h2 class="title-font font-bold text-4xl text-[#092947]">4</h2>
                <p class="leading-relaxed font-semibold mt-2">Global Offices</p>
              </div>
            </div>

            <div class="md:w-1/5 sm:w-1/5 w-full">
              <div class="border-r-4 border-gray-200 px-4 py-6 rounded-lg">
                <h2 class="title-font font-bold text-4xl text-[#092947]">
                  100+
                </h2>
                <p class="leading-relaxed font-semibold mt-2">
                  Digital Projects Delivered
                </p>
              </div>
            </div>

            <div class=" md:w-1/5 sm:w-1/5 w-full">
              <div class="border-r-4 border-gray-200 px-4 py-6 rounded-lg">
                <h2 class="title-font font-bold text-4xl text-[#092947]">
                  90%
                </h2>
                <p class="leading-relaxed font-semibold mt-2">
                  Returning Client Base
                </p>
              </div>
            </div>

            <div class="md:w-1/5 sm:w-1/5 w-full">
              <div class="border-r-4 border-gray-200 px-4 py-6 rounded-lg">
                <h2 class="title-font font-bold text-4xl text-[#092947]">
                  100+
                </h2>
                <p class="leading-relaxed font-semibold mt-2">Tech Experts</p>
              </div>
            </div>

            <div class="md:w-1/5 sm:w-1/5 w-full">
              <div class="border-r-4 border-gray-200 px-4 py-6 rounded-lg">
                <h2 class="title-font font-bold text-4xl text-[#092947]">
                  50+
                </h2>
                <p class="leading-relaxed font-semibold mt-2">
                  Awards & Cartification
                </p>
              </div>
            </div>
          </div>
          <div className=" flex justify-center px-10 mt-10">
            <CustomButton title={" Let's Discuss Your Project"} />
          </div>
        </div>
      </section>
    </>
  );
};

export default CompanyStats;
