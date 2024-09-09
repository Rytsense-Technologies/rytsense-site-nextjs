import React from "react";
import ClucthBannerContactUs from "../../components/contact/ClutchBannerContactUs";
import Image from "next/image";
import contactImage from "../../../public/images/contact.png";

const LetsConnect = () => {
  return (
    <div className="bg-gray-100 px-6 py-10 lg:px-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <h1 className="text-xl lg:text-2xl font-semibold">Contact Us Today</h1>
          <p className="mb-8 mt-5 text-lg lg:text-xl leading-relaxed">
            Ready to transform your business with custom software solutions?
            Contact Rytsense Technologies today for a free consultation. Whether
            you are in the USA, India, or anywhere in between, our team of experts
            is ready to help you achieve your business goals with tailored
            software solutions that drive success.
          </p>
          <div className="flex justify-center lg:justify-start">
            <Image
              src={contactImage}
              className="w-3/4 lg:w-1/2"
              width={500}
              height={500}
              alt="Contact Us"
            />
          </div>
        </div>
        <div>
          <ClucthBannerContactUs
            bgColor="bg-white"
            subText="Let's start your project"
            buttonText="Connect"
            buttonbg="bg-[#E48833]"
            textcolor="text-[#E48833]"
          />
        </div>
      </div>
    </div>
  );
};

export default LetsConnect;
