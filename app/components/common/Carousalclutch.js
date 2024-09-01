

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Image from "next/image";

const logos = [
  "https://res.cloudinary.com/dlg3i3ari/image/upload/v1725131449/virginpus_nsaulp.png",
  "https://res.cloudinary.com/dlg3i3ari/image/upload/v1725131478/Ford_logo_flat.svg_p29mu0.png",
  "https://res.cloudinary.com/dlg3i3ari/image/upload/v1725131491/ikea-logo.3ee105eef6b5939c1269_sic2jt.svg",
  "https://res.cloudinary.com/dlg3i3ari/image/upload/v1725131504/Hitachi_pqcry1.webp",
  "https://res.cloudinary.com/dlg3i3ari/image/upload/v1725131514/Disney__logo.svg_ei0hl0.webp",
  "https://res.cloudinary.com/dlg3i3ari/image/upload/v1725131537/Fidelity-Logo_k3vtga.png",
  "https://res.cloudinary.com/dlg3i3ari/image/upload/v1725131520/CEAT_xm9dsb.webp",
  "https://res.cloudinary.com/dlg3i3ari/image/upload/v1725131561/TCS_b9uup3.png",
];

const Carousalclutch = () => {
  return (
    <>
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
        {logos.map((pro, i) => (
          <SwiperSlide key={i}>
            <Image src={pro} width={40} height={40} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Carousalclutch;
