import React from "react";
import Link from "next/link";
import Image from "next/image";

const OutsourcingPartnerSection = () => {
  return (
    <div className="px-2 py-20 w-full flex justify-center">
      <div className="bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg rounded-lg">
        <div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.5 }}
          className="lg:w-1/2"
        >
          <div className="lg:scale-110 h-80 bg-cover lg:h-full rounded-b-none border lg:rounded-lg">
            <Image
              src="https://res.cloudinary.com/dlg3i3ari/image/upload/v1705588883/partner-img_d6zolh.webp"
              alt="Rytesensetech Software Development"
              title="App development company in Bangalore"
              layout="fill" // This will make the image fill the container
              objectFit="cover" // This ensures the image covers the container
              className="rounded-lg"
            />
          </div>
        </div>
        <div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.5 }}
          className="py-12 px-6 lg:px-12 max-w-xl lg:max-w-5xl lg:w-1/2 rounded-t-none border lg:rounded-lg"
        >
          <h2 className="text-3xl text-gray-800 font-bold">
            Why Make Us Your Outsourcing Partner?
          </h2>
          <p className="mt-4 text-gray-600">
            We specialize in crafting custom software solutions that are
            designed to address your specific business requirements. Our
            development process involves in-depth analysis, to ensure that the
            final product aligns perfectly with your vision.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="bg-gray-900 text-gray-100 px-5 py-3 font-semibold rounded"
            >
              Start Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutsourcingPartnerSection;
