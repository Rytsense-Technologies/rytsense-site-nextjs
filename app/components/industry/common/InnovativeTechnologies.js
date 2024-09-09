import Image from "next/image";
import React from "react";

const InnovativeTechnologies = ({ data, title }) => {
  return (
    <>
      <div className="flex flex-col lg:flex-row px-4 py-10 lg:px-20">
        <div className="lg:w-3/5 bg-light-blue-200 lg:sticky lg:top-0 h-auto lg:h-1/2 p-5 lg:py-28">
          <h1 className="text-2xl md:text-4xl lg:text-4xl font-bold">
            {title}
          </h1>
         
        </div>
        <div className="lg:w-1/2 p-5 mt-8 lg:mt-0">
          {data?.map((tec, i) => (
            <div key={i} className="py-6 lg:py-10">
              <div className="flex items-center gap-4">
                <Image
                  className="w-8 md:w-10"
                  src="https://www.shutterstock.com/image-vector/light-bulb-electronics-new-electronic-600nw-1921894430.jpg"
                  alt=""
                  width={40}
                  height={40}
                />
                <h1 className="text-md md:text-lg font-semibold">
                  {tec.heading}
                </h1>
              </div>
              <p className="text-sm md:text-md mt-2">{tec.passage}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default InnovativeTechnologies;
