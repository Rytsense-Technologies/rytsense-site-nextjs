import React from "react";

const Ranking = () => {
  return (
    <div className="px-4 md:px-8 lg:px-12 xl:px-24 py-10 md:py-16">
      <h1
        className="text-2xl md:text-4xl lg:text-3xl font-bold text-sky-500 mb-4"
      >
        Ranked As #1
      </h1>
      <h1
        className="text-2xl md:text-4xl lg:text-3xl font-bold text-gray-900 mb-6"
      >
        Top Software Development Company.
      </h1>
      <div className="flex flex-col md:flex-row items-start md:items-center lg:gap-10">
        <h1
          className="text-xl md:text-3xl lg:text-5xl font-bold text-gray-900 w-full md:w-1/2"
        >
          Transforming Business With Technology , AI & Data
        </h1>
        <p
          className="text-base md:text-lg lg:text-xl font-normal text-gray-700 w-full md:w-1/2"
        >
          Rytsense Technologies is One of the Fastest Growing IT Service Provider
          Helping Companies Redefined their Digital possibilities for 10+ Years,
          With a Team of Tech Evangelists,We are Building the digital
          Infrastructure of Our Client Positioning them to be the market Leaders
          of their Respective Industries.
        </p>
      </div>
    </div>
  );
};

export default Ranking;
