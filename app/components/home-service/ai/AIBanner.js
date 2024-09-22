import React from "react";
import dynamic from 'next/dynamic';
// import CustomButton from "../../../components/common/CustomButton";
import Image from "next/image";
import bannerImage from "../../../../public/images/ai-banner.png"

const CustomButton = dynamic(() => import('../../../components/common/CustomButton'), { ssr: false });

const AIBanner = () => {
  return (
    <>
      <div className="font-sans bg-white py-28 px-4">
        <div className="max-w-7xl mx-auto text-center md:text-left">
          <h2 className="text-gray-800 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight md:leading-snug">
            AI Development Company in India & USA
          </h2>
          <div className="grid gap-12 mt-6 md:grid-cols-2">
            <div>
              <p className="text-gray-600 text-base leading-relaxed">
              At Rytsense Technologies, we are proud to be a leading AI development company in India. We specialize in delivering top-notch AI solutions tailored to the unique needs of businesses across various industries. As one of the premier AI development companies in India, we leverage advanced technologies to help businesses innovate and succeed in the digital age.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mt-8">
              Our expert team of AI developers in India is dedicated to creating custom AI solutions, including intelligent chatbots, predictive analytics, and machine learning algorithms. We take pride in being one of the most reliable chatbot companies in India, offering cutting-edge chatbot development services that enhance customer engagement and streamline business processes.
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
