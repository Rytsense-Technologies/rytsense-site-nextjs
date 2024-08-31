import Image from "next/image";
import React from "react";

const MainProdcast = ({ centerTitle }) => {
  const prodcast = [
    {
      image:
        "https://res.cloudinary.com/dlg3i3ari/image/upload/v1721377712/Rectangle_44728_hi3bp2.png",
      passage: "Is BlockChain Technology Worth The H.... ",
    },
    {
      image:
        "https://res.cloudinary.com/dlg3i3ari/image/upload/v1721377725/Rectangle_44728_1_v400jn.png",
      passage: "IoT Technology - A Future In Making....",
    },
    {
      image:
        "https://res.cloudinary.com/dlg3i3ari/image/upload/v1721377737/Rectangle_44728_2_loeqm6.png",
      passage: "FLutter Vs.React Native - choose Be...",
    },
    {
      image:
        "https://res.cloudinary.com/dlg3i3ari/image/upload/v1721377747/Rectangle_44728_3_ub5io8.png",
      passage: "How AI is Transforming Business  ",
    },
  ];
  return (
    <div>
      <div className="max-w-7xl p-5 mx-auto">
        <div
          className={`flex flex-col gap-3 ${centerTitle ? "items-center" : ""}`}
        >
          <div className="flex flex-col items-center text-[#092947] gap-2 justify-center">
            <div>
              <h1 className="mt-7 text-3xl font-bold md:text-4xl md:mt-10">
                Our Podcast
              </h1>
            </div>
            <p className="text-xl font-semibold">
              Listen Technology based Podcast Hosted By Rytsense Technologies
            </p>
          </div>
        </div>
        <div className="mt-5 py-5 flex gap-14 flex-wrap justify-center lg:justify-between">
          {prodcast.map((pro, index) => (
            <div
              className="flex-0 basis-80 p-4 lg:flex-1 rounded-xl hover:cursor-pointer"
              key={index}
              //   onClick={() => navigate(blog.path, { state: blog.state })}
              style={{
                boxShadow:
                  "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
              }}
            >
              <Image
                className="w-full h-52 rounded-xl mt-2"
                src={pro.image}
                width={200}
                height={200}
              />
              <p className="text-md font-semibold mt-5 mb-10 hover:text-blue1">
                {pro.passage}
              </p>
              {/* <p className="px-5 pb-5 text-base text-slate-800">{blog.date}</p> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainProdcast;
