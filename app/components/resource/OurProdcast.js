import Image from "next/image";
import Link from "next/link";
import React from "react";
import { resourcepodcastarray } from "../../mock/resourcepodcastarray";

const OurProdcast = () => {
  return (
    <div>
      <div className="max-w-7xl p-5 mx-auto flex flex-col gap-4 lg:mt-20 md:mt-20">
        <div
          initial="hidden"
          whileInView={"show"}
          className="flex flex-col gap-4"
        >
          <div className="relative">
            <h1 className="mt-7 text-3xl font-bold sm:text-5xl sm:mt-10">
              Our Podcast
            </h1>
            <h1
              className="text-5xl font-bold top-0 sm:text-7xl"
              style={{
                WebkitTextStroke: "2px",
                WebkitTextStrokeColor: "#F0F0F0",
                color: "white",
                position: "absolute",
                zIndex: "-1",
              }}
            >
              Prodcast
            </h1>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <p className="flex-1 text-lg sm:text-lg">
              Listen Technology Based Podcast Hosted By Rytsense Technology
            </p>

            <div
              className="self-start flex gap-2 p-4 ml-0 text-white sm:ml-auto"
              style={{ backgroundColor: "#3D5AA4" }}
            >
              <button>View all</button>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-3 gap-10">
          {resourcepodcastarray.slice(0, 3).map((prod, i) => (
            <div
              class="rounded overflow-hidden flex flex-col max-w-md mx-auto"
              key={i}
            >
              <Image
                class="w-54 h-54"
                src={prod.image}
                alt="Sunset in the mountains"
                width={500}
                height={500}
              />

              <div class="relative -mt-16 px-10 pt-5 pb-16 bg-white m-10">
                <h1 class="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">
                  {prod.heading}
                </h1>
                <p class="text-gray-500 text-sm">{prod.title}</p>
                <div className="flex justify-between mt-5">
                  <button>
                    <Image
                      src="https://res.cloudinary.com/dlg3i3ari/image/upload/v1725190393/play-button_1_zpokrb.png"
                      alt="icon"
                      className="bg-gray-800"
                      width={20}
                      height={20}
                    />
                  </button>
                  <div
                    className="flex gap-2 p-4 text-white"
                    style={{ backgroundColor: "#3D5AA4" }}
                  >
                    <Link href={`/prodcast/${prod.id}`}>Learn more</Link>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurProdcast;
