import Image from "next/image";
import React from "react";

const RelatedNews = ({ data }) => {
  return (
    <div class="grid grid-cols-3 gap-4 px-10">
      {data.map((news, i) => (
        <div
          key={i}
          class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        >
          <Image
            class="rounded-t-lg"
            src={news.image}
            alt=""
            width={500}
            height={500}
          />

          <div class="p-5">
            <span className="text-sm text-gray-600">{news.date}</span>
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
               {news.heading}
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
           {news.para}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RelatedNews;
