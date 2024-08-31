import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { IoIosArrowForward } from "react-icons/io";
import "./success.css"

const SuccessStories = () => {
  return (
    <div className="bg-[#000000] text-white px-4 py-10 md:px-10 lg:px-28">
      <div className="text-center">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">
          Our Client Success Stories
        </h1>
        <p className="text-sm md:text-md mt-5 mb-10">
          As one of the global leaders in healthcare application development
          services, we help healthcare organizations implement innovative
          digital health solutions and strategies. Irrespective of where their
          focus lies - Cloud, EHRs, incorporation of technologies like AI and
          IoT in healthcare, through our digital healthcare application
          development services, we lead organizations to fundamentally change
          how they deliver healthcare solutions and shape digital healthcare
          consumerism.
        </p>
      </div>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        className="w-full"
      >
        <SwiperSlide>
          <div className="flex flex-col md:flex-row items-center justify-between border border-white w-full md:w-4/5 h-full md:h-3/5 mx-auto p-4 md:p-6 lg:p-10">
            <div className="md:w-1/2 p-5 flex flex-col items-start">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">YouCOMM</h2>
              <h3 className="mt-5 text-sm md:text-base">
                We built a custom healthcare app solution that offers real-time
                access to medical help for in-hospital patients. The results?
              </h3>
              <div className="mt-5 flex flex-col md:flex-row md:items-center gap-5">
                <h3 className="text-sm md:text-base flex flex-col gap-2 md:border-r md:border-gray-100 pr-0 md:pr-5">
                  3+ <span>Hospital Chains</span>
                </h3>
                <h3 className="text-sm md:text-base flex flex-col gap-2">
                  60% <span>Growth in Nurses’ Real-Time Response Time</span>
                </h3>
              </div>
              <button className="mt-5 text-sm md:text-base px-4 py-2 rounded flex items-center gap-2 border border-gray-100">
                View Case Study <IoIosArrowForward />
              </button>
            </div>
            <div className="md:w-1/2 h-48 md:h-96">
              <img
                src="https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg"
                alt="Nurse"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col md:flex-row items-center justify-between border border-white w-full md:w-4/5 h-full md:h-3/5 mx-auto p-4 md:p-6 lg:p-10">
            <div className="md:w-1/2 p-5 flex flex-col items-start">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">YouCOMM</h2>
              <h3 className="mt-5 text-sm md:text-base">
                We built a custom healthcare app solution that offers real-time
                access to medical help for in-hospital patients. The results?
              </h3>
              <div className="mt-5 flex flex-col md:flex-row md:items-center gap-5">
                <h3 className="text-sm md:text-base flex flex-col gap-2 md:border-r md:border-gray-100 pr-0 md:pr-5">
                  3+ <span>Hospital Chains</span>
                </h3>
                <h3 className="text-sm md:text-base flex flex-col gap-2">
                  60% <span>Growth in Nurses’ Real-Time Response Time</span>
                </h3>
              </div>
              <button className="mt-5 text-sm md:text-base px-4 py-2 rounded flex items-center gap-2 border border-gray-100">
                View Case Study <IoIosArrowForward />
              </button>
            </div>
            <div className="md:w-1/2 h-48 md:h-96">
              <img
                src="https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg"
                alt="Nurse"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col md:flex-row items-center justify-between border border-white w-full md:w-4/5 h-full md:h-3/5 mx-auto p-4 md:p-6 lg:p-10">
            <div className="md:w-1/2 p-5 flex flex-col items-start">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">YouCOMM</h2>
              <h3 className="mt-5 text-sm md:text-base">
                We built a custom healthcare app solution that offers real-time
                access to medical help for in-hospital patients. The results?
              </h3>
              <div className="mt-5 flex flex-col md:flex-row md:items-center gap-5">
                <h3 className="text-sm md:text-base flex flex-col gap-2 md:border-r md:border-gray-100 pr-0 md:pr-5">
                  3+ <span>Hospital Chains</span>
                </h3>
                <h3 className="text-sm md:text-base flex flex-col gap-2">
                  60% <span>Growth in Nurses’ Real-Time Response Time</span>
                </h3>
              </div>
              <button className="mt-5 text-sm md:text-base px-4 py-2 rounded flex items-center gap-2 border border-gray-100">
                View Case Study <IoIosArrowForward />
              </button>
            </div>
            <div className="md:w-1/2 h-48 md:h-96">
              <img
                src="https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg"
                alt="Nurse"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SuccessStories;
