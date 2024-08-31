"use client"
import React, { useEffect } from "react";
import dynamic from 'next/dynamic';
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { FreeMode, Navigation } from "swiper/modules";

// Import Swiper and SwiperSlide dynamically
const Swiper = dynamic(() => import('swiper/react').then(mod => mod.Swiper), { ssr: false });
const SwiperSlide = dynamic(() => import('swiper/react').then(mod => mod.SwiperSlide), { ssr: false });

const Testimonials = () => {
  const details = [
    {
      message:
        '"Thoughtfully integrating consumer feedback to improve the UX/UI, Rytsense Technologies has developed a series of consistently improved mobile app iterations. Their competitive pricing structure pairs value with cost savings. The project manager was exceptionally skilled and communicative."',
      profile: "/images/client-feedback/SKKYN_Shafeek Shaji.jpg",
      name: "Sujai Soy",
      companyname: "Skkyn Technologies - Owner",
      country: "Dubai, UAE",
      flagimage: "/images/homepageimages/download (2).png",
      companylog: "/images/homepageimages/download (2).png",
    },
    {
      message:
        '"Rytsense Technologies was diligent and responsive in solving any issues that came up throughout the development process and still provides excellent support when they are needed. The client feels that Rytsense has really gone above and beyond with their service."',
      profile: "/images/client-feedback/Oanz Holdings_Omar Boyd.jpg",
      name: "Omar Boyd",
      companyname: "CoFounder, Oanz Holdings",
      country: "Canada",
      flagimage: "/images/homepageimages/download (3).png",
      companylog: "/images/homepageimages/download (2).png",
    },
    {
      message:
        '"The founder of Rytsense Technologies and the rest of his project team have placed customer service through responsiveness and proper communication above all else, leading to a strong initial product and the opportunity to continue the partnership through multiple iterations and enhancements."',
      profile: "/images/homepageimages/overview.png",
      name: "Brendan Buchholz",
      companyname: "Founder, Cool Charm Friends",
      country: "Brisbane, Australia",
      flagimage: "/images/homepageimages/australia flag.png",
    },
    {
      message:
        '"Users have reviewed the app positively. Rytsense Technologies was responsive and provided excellent support. Their follow-up is particularly noteworthy."',
      profile: "/images/client-feedback/Mathew_food delivery startup.jpg",
      name: "Owner",
      companyname: "Food Ordering App",
      country: "United Arab Emirates",
      flagimage: "/images/homepageimages/download (2).png",
      companylog: "/images/homepageimages/download (2).png",
    },
  ];

  const bannerColor = {
    background:
      "linear-gradient(90deg, rgba(9,41,71,1) 0%, rgba(22,100,173,1) 35%)",
  };

  return (
    <>
      <style>
        {`
          .swiper-button-next, .swiper-button-prev {
            background-color: black;
            color: white;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .swiper-button-next:after, .swiper-button-prev:after {
            font-size: 16px;
          }
        `}
      </style>
      <div className="px-5 sm:px-10 lg:px-10 py-10" style={bannerColor}>
        <div className="flex flex-col items-center gap-2 justify-center mb-10 text-center">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
            Hear What Our Clients Are Raving About
          </h1>
          <p className="text-lg font-semibold text-gray-200">
            Here, we make almost every genre of applications. You name it and we
            build it.
          </p>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          navigation
          modules={[FreeMode, Navigation]}
          className="mySwiper"
        >
          {details.map((cli, i) => (
            <SwiperSlide key={i} className="flex justify-center">
              <div
                className="backdrop-opacity-10 backdrop-invert bg-[#092947]/30 rounded-2xl p-20  flex flex-col justify-between p-6 transition-all duration-500 hover:border-indigo-600"
                style={{ width: "369px", height: "609px" }}
              >
                <p className="text-sm text-white mt-10 leading-6 font-semibold transition-all duration-500 min-h-24 group-hover:text-gray-800">
                  {cli.message}
                </p>
                <div className="flex flex-col items-center gap-5 mb-5 sm:mb-9 mt-10">
                  <img
                    src={cli.profile}
                    alt="avatar"
                    className="w-20 h-20 rounded-full object-cover"
                    style={{ width: "100px" }}
                  />
                  <div className="grid gap-1 text-center">
                    <h5 className="text-white font-medium transition-all duration-500">
                      {cli.name}
                    </h5>
                    <span className="text-sm leading-6 text-white">
                      {cli.country}
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Testimonials;
