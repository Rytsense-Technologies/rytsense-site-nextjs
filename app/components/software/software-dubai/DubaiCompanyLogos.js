import React from "react";
import Image from "next/image";
import "../../../css/logoSlider.css";

const logos = [
  "https://res.cloudinary.com/dlg3i3ari/image/upload/v1729670259/images_ff2uzk.png",
  "https://res.cloudinary.com/dlg3i3ari/image/upload/v1729740356/ONEIC_LOGO_fvdgv9.png",
  "https://res.cloudinary.com/dlg3i3ari/image/upload/v1729525399/65f9cf84ee8b7aa0be727bbb_ogimage_z8sdwq.png",
  "https://res.cloudinary.com/dlg3i3ari/image/upload/v1729525423/Emad-designstyle-kiddo-m_xik6zk.png",
  "https://res.cloudinary.com/dlg3i3ari/image/upload/v1729525459/Pluto_TV_2020_logo_mxjvfr.png",
  "https://res.cloudinary.com/dlg3i3ari/image/upload/v1729525523/Huspy_ohzyya.png",
  "https://res.cloudinary.com/dlg3i3ari/image/upload/v1729527250/1200px-Banque_Misr.svg_z1agzm.png",
  "https://res.cloudinary.com/dlg3i3ari/image/upload/v1729527320/BitOasis-logo_tcfqlh.png",
  "https://res.cloudinary.com/dlg3i3ari/image/upload/v1729527362/logo-jumia-group_ezug8m.png",
  "https://res.cloudinary.com/dlg3i3ari/image/upload/v1729670391/campaign_metlife-20161019100447836-1-2016102012062623_gmfoec.jpg"
];

const DubaiCompanyLogos = () => {
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
                  width={150}
                  height={150}
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
  );
};

export default DubaiCompanyLogos;
