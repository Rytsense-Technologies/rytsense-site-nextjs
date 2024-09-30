import React from "react";
import dynamic from "next/dynamic";
// import CustomButton from "../../../components/common/CustomButton";
import Image from "next/image";
import bannerImage from "../../../../../public/images/ai-banner.png";
 
const CustomButton = dynamic(
  () => import("../../../../components/common/CustomButton"),
  { ssr: false }
);

const AIBanner = () => {
  return (
    <>
      <div className="font-sans bg-white py-28 px-4">
        <div className="max-w-7xl mx-auto text-center md:text-left">
          <h2 className="text-gray-800 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight md:leading-snug">
            AI Development Company
          </h2>
          <div className="grid gap-12 mt-6 md:grid-cols-2">
            <div>
              <p className="text-gray-600 text-base leading-relaxed">
                As a trusted AI development company in USA, we offer innovative
                AI development services for businesses. Our expert team creates
                custom AI solutions for different industries, including smart
                chatbots, predictive analytics, and machine learning algorithms.
                As one of the best AI development companies, we provide advanced
                technologies to help your business grow and succeed in its
                digital transformation journey.
              </p>

              <div className="mt-12 flex flex-wrap justify-center md:justify-start gap-4 items-center">
                <CustomButton title={"BOOK A CALL"} />
              </div>
            </div>
            <div>
              <Image
                src={bannerImage}
                className="w-full h-full rounded-md object-contain"
                alt="AI Development"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIBanner;
