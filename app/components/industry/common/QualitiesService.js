"use client";
import React, { useState } from "react";
import Image from "next/image";

const QualitiesService = ({ data, title, para }) => {
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
              {title}
            </h1>
            <p className="text-sm sm:text-lg text-gray-300 mt-5">{para}</p>
          </div>
          <div className="grid grid-cols-1 mt-8">
            {data.map((quality, index) => (
              <div key={index} className="text-white mb-5">
                <h3 className="mb-5 text-lg">{quality.heading}</h3>
                {quality.array.map((arr, i) => (
                  <div key={i} className="flex items-center gap-5">
                    <Image src="https://res.cloudinary.com/dlg3i3ari/image/upload/v1725175063/star-removebg-preview_sy1kzj.png" width={10} height={10} alt="" />
                    <p>{arr}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default QualitiesService;
