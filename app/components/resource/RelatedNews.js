import Image from "next/image";
import Link from "next/link";
import React from "react";

const RelatedNews = ({ data }) => {
  return (
    <div className="grid grid-cols-3 gap-4 px-10">
      {data.map((news, i) => (
        <Link
          key={i}
          className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          href={
            news.linkTag === "blog"
              ? `/blog/${news.nav}` // Use nav for blog posts
              : `/${news.linkTag}/${news.id}` // Use id for other types
          }
        >
          <Image
            className="rounded-t-lg"
            src={news.image}
            alt=""
            width={500}
            height={500}
          />

          <div className="p-5">
            <span className="text-sm text-gray-600">{news.date}</span>
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {news.heading}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {news.para}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default RelatedNews;
