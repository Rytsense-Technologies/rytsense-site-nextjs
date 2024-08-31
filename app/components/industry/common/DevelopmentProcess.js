'use client'; // Ensure this is declared at the top

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { FaPencilRuler } from "react-icons/fa";

const DevelopmentProcess = ({ data }) => {
  return (
    <>
      <div className="bg-[#000000] px-4 py-10 md:px-10 lg:px-20">
        <div className="w-full lg:w-3/5 py-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            {data.mainTitle}
          </h1>
          <p className="text-sm md:text-lg text-gray-200 mt-5">
            {data.para}
          </p>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {data.processes.map((pro, i) => (
            <SwiperSlide key={i}>
              <div className="mb-10 h-96 flex flex-col items-start justify-start gap-5 text-white p-5 border border-gray-300 rounded-xl">
                <div className="text-blue-500 text-sm font-semibold">
                  {pro.id} — {data.processes.length}
                </div>
                <FaPencilRuler className="bg-sky-700 p-2 w-10 h-10 text-white rounded-xl" />
                <h1 className="text-lg md:text-xl font-semibold">
                  {pro.title}
                </h1>
                <p className="text-xs md:text-sm">{pro.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: white;
        }
      `}</style>
    </>
  );
};

export default DevelopmentProcess;
