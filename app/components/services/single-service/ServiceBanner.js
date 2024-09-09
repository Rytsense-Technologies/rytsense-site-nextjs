import React from "react";
import Image from "next/image";
import Link from "next/link";

const ServiceBanner = () => {
  return (
    <section className="font-sans text-black py-12 px-6 md:py-28 md:px-12 lg:px-24 xl:px-40">
      <div className="lg:flex lg:items-center rounded-lg overflow-hidden shadow-lg bg-white">
        <div className="lg:w-1/2">
          <Image
            className="h-full w-full object-cover"
            src="https://res.cloudinary.com/dlg3i3ari/image/upload/v1705588867/banner-img_k0dqgb.webp"
            width={733}
            height={412}
            alt="Rytesensetech Software Development"
            title="App development company in Bangalore"
          />
        </div>

        <div className="p-6 lg:p-12 lg:w-1/2 bg-gray-50">
          <div className="leading-relaxed">
            <h2 className="text-2xl lg:text-4xl font-bold">
              Services: Because We Believe In Delivering Excellence!
            </h2>
            <p className="mt-4 text-sm lg:text-base">
              Our team of skilled professionals is passionate about leveraging
              the latest advancements in technology to deliver customized
              solutions that meet the unique needs of our clients.
            </p>
            <p className="mt-4 text-sm lg:text-base">
              We specialize in crafting custom software solutions that are
              designed to address your specific business requirements. Our
              development process involves in-depth analysis, to ensure that the
              final product aligns perfectly with your vision.
            </p>
            <div className="mt-6">
              <Link
                href="/contact"
                className="px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out"
              >
                Explore
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceBanner;
