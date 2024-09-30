import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Expertise = () => {
  return (
    <>
      <section class="text-[#092947] py-20 body-font">
        <div class="">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-4xl text-4xl font-bold title-font mb-2 text-[#092947]">
              Our expertises
            </h1>
          </div>
          <div class="flex flex-wrap -m-4 text-center">
            <div class=" md:w-1/4 sm:w-1/5 w-full">
              <div class="border-r-4 border-gray-200 px-4 py-6 rounded-lg">
                <h2 class="title-font font-bold text-4xl text-[#092947]">
                  10+
                </h2>
                <p class="leading-relaxed font-semibold mt-2">
                  yearsof service
                </p>
              </div>
            </div>

            <div class="md:w-1/4 sm:w-1/5 w-full">
              <div class="border-r-4 border-gray-200 px-4 py-6 rounded-lg">
                <h2 class="title-font font-bold text-4xl text-[#092947]">
                  1000 +
                </h2>
                <p class="leading-relaxed font-semibold mt-2">
                  mobile apps developed
                </p>
              </div>
            </div>

            <div class=" md:w-1/4 sm:w-1/5 w-full">
              <div class="border-r-4 border-gray-200 px-4 py-6 rounded-lg">
                <h2 class="title-font font-bold text-4xl text-[#092947]">
                  2000+
                </h2>
                <p class="leading-relaxed font-semibold mt-2">
                  Website Developed
                </p>
              </div>
            </div>

            <div class="md:w-1/4 sm:w-1/5 w-full">
              <div class="border-r-4 border-gray-200 px-4 py-6 rounded-lg">
                <h2 class="title-font font-bold text-4xl text-[#092947]">
                  10+
                </h2>
                <p class="leading-relaxed font-semibold mt-2">award won</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Expertise;
