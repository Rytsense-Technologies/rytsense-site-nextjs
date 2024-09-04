import React from "react";
import resourceblogseparatecontent from "../../mock/resourceblogseparatecontent";
import Image from "next/image";
import Link from "next/link";

const LatestBlogs = ({ centerTitle }) => {
  return (
    <div>
      <div className="max-w-7xl p-5 mx-auto">
        <div
          className={`flex flex-col gap-3 ${centerTitle ? "items-center" : ""}`}
        >
          <div className="flex flex-col items-center text-[#092947] gap-2 justify-center">
            <div>
              <h1 className="mt-7 text-3xl font-bold md:text-4xl md:mt-10">
                Our Blogs
              </h1>
            </div>
            <p className="text-xl font-semibold">
              Listen to technology-based podcasts hosted by Rytsense Technologies
            </p>
          </div>
        </div>
        <div className="mt-5 py-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:justify-between">
          {resourceblogseparatecontent.slice(0, 4).map((blog) => (
            <Link key={blog.id} href={`/blog/${blog.id}`} passHref>
              <div className="flex flex-col p-4 rounded-xl hover:cursor-pointer" style={{
                boxShadow:
                  "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
              }}>
                <Image
                  className="w-full h-52 rounded-xl mt-2"
                  src={blog.image}
                  alt={blog.title}
                  width={200}
                  height={200}
                />
                <p className="text-md font-semibold mt-5 mb-10 hover:text-blue-600">
                  {blog.title}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestBlogs;
