import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay } from "swiper/modules";

const HealthRecognition = () => {
  const awards = [
    "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/clutch-badge.webp",
    "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/good-firm-certification.webp",
    "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/good-firm-certification.webp",
    "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/India-growth-champion.webp",
    "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/times-business-awards.webp",
  ];

  return (
    <>
      <div className="flex flex-col items-center gap-5 justify-center py-10 mb-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-center">
          Our Recognition in Healthcare
        </h1>
        <p className="text-center text-sm sm:text-base md:text-lg">
          We have won all the usual agency awards…
        </p>
      </div>
      <div className="px-4 sm:px-10 md:px-20">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
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
              spaceBetween: 40,
            },
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {awards.map((img, i) => (
            <SwiperSlide key={i}>
              <div className="mb-10 flex justify-center">
                <div className="w-24 h-24 sm:w-28 sm:h-28">
                  <img src={img} alt="logo" className="w-full h-full object-contain" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default HealthRecognition;
