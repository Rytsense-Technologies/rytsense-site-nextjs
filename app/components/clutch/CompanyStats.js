import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import dynamic from "next/dynamic";

const CustomButton = dynamic(
  () => import("../../components/common/CustomButton"),
  { ssr: false }
);

const CompanyStats = () => {
 
  const stats = [
    { label: "Global Offices", value: "4" },
    { label: "Digital Projects Delivered", value: "100+" },
    { label: "Returning Client Base", value: "90%" },
    { label: "Tech Experts", value: "100+" },
    { label: "Awards & Certifications", value: "50+" },
  ];

  return (
    <section className="text-[#092947] py-5 body-font">
      <div className="container mx-auto px-4 sm:px-8">
   
        <div className="flex flex-col text-center w-full mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold title-font mb-2">
            You will be in good hands
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-sm sm:text-base">
            Our clients can depend on our proven experience.
          </p>
        </div>

        <div className="flex flex-wrap -m-4 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/5 p-4">
              <div className="border-r-0 md:border-r-4 border-gray-200 px-4 py-6 rounded-lg">
                <h2 className="title-font font-bold text-3xl sm:text-4xl">
                  {stat.value}
                </h2>
                <p className="leading-relaxed font-semibold mt-2 text-sm sm:text-base">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>


        <div className="flex justify-center px-4 sm:px-10 mt-8">
          <CustomButton title={" Let's Discuss Your Project"} />
        </div>
      </div>
    </section>
  );
};

export default CompanyStats;
