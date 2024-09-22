import Image from "next/image";
import Link from "next/link";
import React from "react";

const AIBlog = () => {
  return (
    <>
      <div className="py-10 px-40">
        <div className="text-3xl font-bold text-center">Our AI Development Blog</div>

        <div className="shadow-xl p-10">
          <div className="flex items-center gap-5">
            <Image
              src="https://res.cloudinary.com/dlg3i3ari/image/upload/v1725175063/star-removebg-preview_sy1kzj.png"
              width={20}
              height={20}
              alt=""
            />
            <h1 className="text-2xl font-semibold text-sky-700">
              Top 5 AI Trends to Watch in 2024
            </h1>
          </div>
          <div className="px-8">
            <p className="text-gray-500 mt-8 ">
              Artificial Intelligence (AI) continues to be a driving force
              behind technological innovation and business transformation. As we
              move into 2024, new AI trends are emerging that promise to reshape
              industries and create new opportunities. In this blog, we’ll
              explore the top five AI trends to watch in 2024 and how they can
              impact businesses in India, particularly through AI development in
              India and the work of AI developers in India.
            </p>
            <Link
              href="/ai-development-company-india/blog"
              class="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md mt-5"
            >
              <span class="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
              <span class="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                <span class="relative text-white">Read More</span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIBlog;
