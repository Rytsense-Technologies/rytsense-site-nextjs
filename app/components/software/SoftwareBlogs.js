import React from "react";
import Link from "next/link";
import Image from "next/image";

const SoftwareBlogs = () => {
  return (
    <>
      <div className="py-10 px-6 lg:px-40">
        <div className="text-2xl lg:text-3xl font-bold text-center mb-8">
          Our Software Development Blog
        </div>

        <div className="shadow-xl p-6 lg:p-10">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-5">
            <Image
              src="https://res.cloudinary.com/dlg3i3ari/image/upload/v1725175063/star-removebg-preview_sy1kzj.png"
              width={30}
              height={30}
              alt="Star Icon"
            />
            <h1 className="text-xl lg:text-2xl font-semibold text-sky-700">
              Successful Software Development Projects in India
            </h1>
          </div>
          <div className="px-0 lg:px-8">
            <p className="text-gray-500 mt-5 lg:mt-8">
              The landscape of software development in India is marked by
              innovation and the ability to solve complex problems with custom
              solutions. In this case study, we’ll explore several successful
              software development projects in India that have had a significant
              impact on their respective industries. These examples demonstrate
              how custom software can drive business success, enhance user
              experiences, and create a competitive edge.
            </p>
            <Link
              href="/software-development-services-usa/blog"
              className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md mt-5"
            >
              <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
              <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                <span className="relative text-white">Read More</span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SoftwareBlogs;
