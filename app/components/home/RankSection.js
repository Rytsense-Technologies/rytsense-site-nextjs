import Image from "next/image";
import React from "react";
import { FaMedal } from "react-icons/fa";

const RankSection = () => {
  const images = [
    "https://res.cloudinary.com/dlg3i3ari/image/upload/v1705662590/top_clutch.co_web3_developer_bengaluru_2023_cttcaf.webp",
    "https://res.cloudinary.com/dlg3i3ari/image/upload/v1723181711/awardslider1_s85cmw.png",
    "https://res.cloudinary.com/dlg3i3ari/image/upload/v1723181771/awardslider2_w1b4ar.png",

    "https://res.cloudinary.com/dlg3i3ari/image/upload/v1723181797/awardslider5_msrhfs.png",
    "https://res.cloudinary.com/dlg3i3ari/image/upload/v1723182188/awardslider6_ypzxaw.png",
    "https://res.cloudinary.com/dlg3i3ari/image/upload/v1705662587/top_clutch.co_machine_learning_company_san_jose_2023_abjkg9.webp",
  ];
  return (
    <>
      <div className="flex flex-col items-center gap-5 justify-center py-10">
        <div className="text-center text-[#092947]">
          <h1 className="text-4xl font-bold mb-2">
            Our Expertise Hasn’t Gone Unnoticed
          </h1>
          <p className="text-xl font-semibold">
            we’ve Earned Some Prestigious Accolodes Along the Way.
          </p>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-8 place-items-center">
          {images.map((img, i) => (
            <Image key={i} class="hover:opacity-75" src={img} alt="" width={100} height={100} />
          ))}
        </div>
        <div className="flex items-center gap-5">
          <FaMedal className="text-yellow-400" />
          <span className="text-xl font-semibold">
            Most Trusted Software Development Company
          </span>
        </div>
      </div>
    </>
  );
};

export default RankSection;
