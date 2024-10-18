import React from 'react'
import Image from "next/image";
import "../../css/logoSlider.css"

const logos = [
  "https://res.cloudinary.com/dlg3i3ari/image/upload/v1725131449/virginpus_nsaulp.png",
  "https://res.cloudinary.com/dlg3i3ari/image/upload/v1725131478/Ford_logo_flat.svg_p29mu0.png",
  "https://res.cloudinary.com/dlg3i3ari/image/upload/v1725131491/ikea-logo.3ee105eef6b5939c1269_sic2jt.svg",
  "https://res.cloudinary.com/dlg3i3ari/image/upload/v1725131504/Hitachi_pqcry1.webp",
  "https://res.cloudinary.com/dlg3i3ari/image/upload/v1725131514/Disney__logo.svg_ei0hl0.webp",
  "https://res.cloudinary.com/dlg3i3ari/image/upload/v1725131537/Fidelity-Logo_k3vtga.png",
  "https://res.cloudinary.com/dlg3i3ari/image/upload/v1725131520/CEAT_xm9dsb.webp",
  "https://res.cloudinary.com/dlg3i3ari/image/upload/v1725426919/tcs1_wigk9e.webp",
];

const Carousalclutch = () => {
  return (
    <div className="px-6 py-20">
      <div
        className="container items-center justify-center mx-auto"
        data-aos="fade-up"
      >
        <h2 className="text-center text-3xl md:text-4xl font-extrabold text-black mb-10">
          Brands that work with us
        </h2>
        <div className="logo-slider">
          <div className="slide-track">
            {[...logos, ...logos].map((company, index) => (
              <div key={index} className="slide px-4">
               <Image
                  width={100}
                  height={100}
                  src={company}
                  alt="Company Logo"
                  loading="lazy"
                
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Carousalclutch