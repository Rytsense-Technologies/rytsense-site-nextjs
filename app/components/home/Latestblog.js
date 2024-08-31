import React from "react";
import resourceblogseparatecontent from "../../mock/resourceblogseparatecontent"
import { resourcesarray } from "../../mock/resourcesarray";
import Image from "next/image";
import Link from "next/link";

const LatestBlogs = ({ centerTitle }) => {
  const blogs = [
    {
      heading: "Blogs",
      bgimage:
        "/images/homepageimages/mobile-app-development-company-8379091_1280.png",
      image:
        "https://res.cloudinary.com/dlg3i3ari/image/upload/v1721156656/Rectangle_44728_grvasn.png",
      passage: "How to Create a Food Delivery App Like EatClub",
      date: "15 / 11 / 2023",
      path: `/blogs/${resourcesarray[0].boxarray[0].nav}`,
      state: {
        title: resourceblogseparatecontent[0].title,
        heading: resourceblogseparatecontent[0].heading,
        paraarray: resourceblogseparatecontent[0].paraarray,
        paraarray2: resourceblogseparatecontent[0].paraarray2,
        image: resourceblogseparatecontent[0].image,
      },
    },
    {
      heading: "Blogs",
      bgimage:
        "/images/homepageimages/How-To-Develop-A-Transportation-Logistics-Mobile-App.webp",
      image:
        "https://res.cloudinary.com/dlg3i3ari/image/upload/v1721156601/Rectangle_44728_1_vlmyop.png",
      passage: "How to Create a Transportation App Like Transit",
      date: "10 / 11 / 2023",
      path: `/blogs/${resourcesarray[0].boxarray[1].nav}`,
      state: {
        title: resourceblogseparatecontent[1].title,
        heading: resourceblogseparatecontent[1].heading,
        paraarray: resourceblogseparatecontent[1].paraarray,
        paraarray2: resourceblogseparatecontent[1].paraarray2,
        image: resourceblogseparatecontent[1].image,
      },
    },
    {
      heading: "Blogs",
      bgimage: "/images/homepageimages/general.png",
      image:
        "https://res.cloudinary.com/dlg3i3ari/image/upload/v1721156621/Rectangle_44728_2_vlvjcq.png",
      passage: "Best Kotlin Tips for Android App Developers",
      date: "06 / 11 / 2023",
      path: `/blogs/${resourcesarray[0].boxarray[2].nav}`,
      state: {
        title: resourceblogseparatecontent[2].title,
        heading: resourceblogseparatecontent[2].heading,
        paraarray: resourceblogseparatecontent[2].paraarray,
        paraarray2: resourceblogseparatecontent[2].paraarray2,
        image: resourceblogseparatecontent[2].image,
      },
    },
    {
      heading: "Blogs",
      bgimage: "/images/homepageimages/general.png",
      image:
        "https://res.cloudinary.com/dlg3i3ari/image/upload/v1721156641/Rectangle_44728_3_eqbgrz.png",
      passage: "Best Kotlin Tips for Android App Developers",
      date: "06 / 11 / 2023",
      path: `/blogs/${resourcesarray[0].boxarray[2].nav}`,
      state: {
        title: resourceblogseparatecontent[2].title,
        heading: resourceblogseparatecontent[2].heading,
        paraarray: resourceblogseparatecontent[2].paraarray,
        paraarray2: resourceblogseparatecontent[2].paraarray2,
        image: resourceblogseparatecontent[2].image,
      },
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
                Our blogs
              </h1>
            </div>
            <p className="text-xl font-semibold">
              Listen Technology based Podcast Hosted By Rytsense Technologies
            </p>
          </div>
        </div>
        <div className="mt-5 py-5 grid grid-cols-4 gap-4 lg:justify-between">
          {blogs.map((blog, index) => (
            <Link
              href={{
                pathname: blog.path,
                query: { ...blog.state },
              }}
              key={index}
              passHref
            >
              <div
                className="flex-0 basis-80 p-4 lg:flex-1 rounded-xl hover:cursor-pointer"
                style={{
                  boxShadow:
                    "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
                }}
              >
                <Image
                  className="w-full h-52 rounded-xl mt-2"
                  src={blog.image}
                  alt={blog.passage}
                  width={200}
                  height={200}
                />
                <p className="text-md font-semibold mt-5 mb-10 hover:text-blue1">
                  {blog.passage}
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
