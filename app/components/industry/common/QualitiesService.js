"use client";
import React, { useState } from "react";
import Image from "next/image";

const QualitiesService = ({ data, isImage }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      <div className="relative isolate px-6 py-24 sm:py-32 lg:px-8 bg-[#000000]">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="absolute top-0 left-0 w-20 h-20 sm:w-40 sm:h-40 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full blur-3xl opacity-50 -z-10"></div>
        <div className="absolute bottom-0 right-0 w-20 h-20 sm:w-40 sm:h-40 bg-gradient-to-tl from-purple-500 to-blue-500 rounded-full blur-3xl opacity-50 -z-10"></div>
        <div className="relative z-10 px-4 lg:px-20 py-10">
          <div className="w-full lg:w-3/5">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              {data.title}
            </h1>
            <p className="text-sm sm:text-lg text-gray-300 mt-5">{data.para}</p>
          </div>
          {isImage === true ? (
            <div className="mt-10">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div className="flex flex-col">
                  {data.points.map((quality, index) => (
                    <ul
                      key={index}
                      onClick={() => setSelectedIndex(index)}
                      className={`${
                        index === selectedIndex ? "list-disc" : ""
                      }`}
                    >
                      <li
                        className={`p-2 text-left text-lg sm:text-xl lg:text-2xl font-semibold py-4 lg:py-10 cursor-pointer ${
                          index === selectedIndex
                            ? "text-white"
                            : "text-gray-400"
                        }`}
                      >
                        {quality.title}
                      </li>
                    </ul>
                  ))}
                </div>
                <div className="order-3 lg:order-none">
                  <Image
                    src={data.points[selectedIndex].img}
                    alt={data.points[selectedIndex].title}
                    className="w-full h-auto"
                    width={300}
                    height={300}
                  />
                </div>
                <div className="order-2 lg:order-none p-4 text-gray-100 text-sm sm:text-base lg:text-lg">
                  <p>{data.points[selectedIndex].desc}</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-4 mt-8">
             { data.points.map((quality, i ) => (<div key={i} className="text-white mb-5">{quality.title}</div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default QualitiesService;
