import React from "react";
import dynamic from 'next/dynamic';
// import CustomButton from "../../../components/common/CustomButton";

const CustomButton = dynamic(() => import('../../../components/common/CustomButton'), { ssr: false });

const AIPartnershipModels = () => {
  const partnershipmodalData = [
    {
      title: "End-to-end AI Development",
      desc: "We start with a detailed consultation to understand your goals, develop a tailored AI product, and rigorously test and refine it. We ensure a smooth integration into your existing systems, maximizing the benefits of AI.",
    },
    {
      title: "Speed and Expertise",
      desc: "Our experienced team of AI developers in India and data scientists work efficiently to accelerate the development cycle. We use streamlined processes, agile methodologies, and advanced technologies to deliver top-quality AI projects on time.",
    },
    {
      title: "Industry-leading Expertise",
      desc: "With a track record of success, our team of expert AI developers in India creates customized products across various industries. We are also recognized as one of the leading chatbot companies in India, offering innovative solutions that cater to diverse business needs.",
    },
  ];

  return (
    <div className="bg-[#F0F9FF] px-6 md:px-10 lg:px-28 py-6 md:py-8 lg:py-10">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
          Why Choose Rytsense Technologies?
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
        {partnershipmodalData.map((data, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-6 md:p-8 lg:p-10 shadow-lg"
          >
            <h1 className="text-xl md:text-2xl lg:text-xl font-bold text-sky-500 mb-4">
              {data.title}
            </h1>
            <p className="text-base md:text-lg lg:text-md font-medium">
              {data.desc}
            </p>
          </div>
        ))}
      </div>
      <div className=" flex justify-center px-10 mt-10">
        <CustomButton title={"BOOK A CALL"} />
      </div>
    </div>
  );
};

export default AIPartnershipModels;
