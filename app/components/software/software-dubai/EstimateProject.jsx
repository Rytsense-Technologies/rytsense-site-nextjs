import React from "react";
import dynamic from "next/dynamic";

const CustomButton = dynamic(() => import("../../common/CustomButton"), {
  ssr: false,
});

import Image from "next/image";

const EstimateProject = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10 px-4 sm:px-10">
      {/* Headline */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center text-[#092947] mb-4">
        Give the tech advantage to your <br className="hidden md:block" />
        New Ideas or Transformation projects
      </h1>

      {/* Subheading */}
      <p className="text-base sm:text-lg md:text-center text-[#092947] mb-6 text-center">
        Share your business goals and existing challenges to get a custom
        project delivery & pricing report
      </p>

      <div className="flex justify-center px-4 sm:px-10">
        <CustomButton title={"Let's Discuss Your Project"} />
      </div>

      {/* Banner Image */}
      <div className="w-full max-w-4xl mx-auto mt-6">
        <Image
          src="https://res.cloudinary.com/dlg3i3ari/image/upload/v1729577892/Introduction_to_Arabic_zxjpyx.jpg"
          alt="Banner"
          className="w-full h-auto rounded-lg shadow-lg"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default EstimateProject;
