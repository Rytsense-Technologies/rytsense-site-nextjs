import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../css/carousalclutch.css";
const Carousalclutch = () => {
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000, // Very slow transition for smooth effect
    autoplaySpeed: 0, // No delay between transitions
    cssEase: "linear", // Constant speed transition
    centerMode: true,
    centerPadding: "0",
    arrows: false,
    responsive: [
      {
        breakpoint: 430,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "10%",
        },
      },
      {
        breakpoint: 630,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 830,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 9999,
        settings: {
          slidesToShow: 5,
        },
      },
    ],
  };
  return (
    <div >
      {/* <div className="carousal-headline flex justify-center text-start inter-semibold text-4xl ">
        <span className="text-indigo-800  ">Trusted by</span>
        <span className=" ml-2  text-black ">
          Fortune companies to build <br />
          custom applications
        </span>
      </div> */}
      <div className="">
        <Slider {...settings}>
          <div className="pl-10 ">
            <div className="w-36 h-14 flex items-center justify-center ">
              <img
                src="/images/client-logo-2/CEAT.webp"
                alt="logo"
                className="w-28 h-10 "
              ></img>
            </div>
          </div>
          <div className=" pl-10">
            <div className="w-36 h-14 flex items-center justify-center">
              <img
                src="/images/client-logo-2/Disney+_logo.svg.webp"
                className="w-19 h-14"
                alt="logo"
              ></img>
            </div>
          </div>
          <div className=" pl-10">
            <div className="w-36 h-14 flex items-center justify-center">
              <img
                src="/images/client-logo-2/Hitachi.webp"
                className="w-19 h-10"
                alt="logo"
              ></img>
            </div>
          </div>
          <div className=" pl-10">
            <div className="w-36 h-14 flex items-center justify-center">
              <img
                className="w-19 h-9"
                src="/images/partner/ikea-logo.3ee105eef6b5939c1269.svg"
                alt="logo"
              ></img>
            </div>
          </div>
          <div className=" pl-10">
            <div className="w-36 h-10 flex items-center justify-center">
              <img
                src="/images/partner/Ford_logo_flat.svg.png"
                alt="logo"
                className="w-19 h-10"
              ></img>
            </div>
          </div>
          <div className=" pl-10">
            <div className="w-36 h-14 flex items-center justify-center">
              <img
                src="/images/partner/virginpus.png"
                alt="logo"
                className="w-19 h-10"
              ></img>
            </div>
          </div>
          <div className=" pl-10">
            <div className="w-36 h-14 flex items-center justify-center">
              <img
                src="/images/client-logo-2/TCS.png"
                alt="logo"
                className="w-20 h-10"
              ></img>
            </div>
          </div>
          <div className=" pl-10">
            <div className="w-36 h-14 flex items-center justify-center">
              <img
                src="/images/client-logo-2/ren-money.png"
                alt="logo"
                className="w-32 h-10"
              ></img>
            </div>
          </div>
          <div className=" pl-10">
            <div className="w-36 h-14 flex items-center justify-center">
              <img
                src="/images/client-logo-2/Fidelity-Logo.png"
                alt="logo"
                className="w-32 h-10"
              ></img>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Carousalclutch;
