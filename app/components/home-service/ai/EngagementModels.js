import React from "react";

const products = [
  {
    heading: "Dedicated Development Team",
    description:
      "Our developers use the latest technologies to provide top-quality services and create solutions that are customized for each client.",
  },
  {
    heading: "Team Extension",
    description:
      "This model helps clients add specific experts to their teams for their projects, giving them the exact skills they need.",
  },
  {
    heading: "Project-based Model",
    description:
      "We focus on working closely with clients to meet specific project goals. Our team of software development specialists is dedicated to making sure the project is completed successfully.",
  },
];

const EngagementModels = () => {
  return (
    <div className="lg:px-20 py-10 flex flex-col justify-center">
        <h1 className="text-4xl font-semibold text-center">Our Engagement Models</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 mt-10">
      {products.map((product, index) => (
        <div
        key={index}
        className="bg-white rounded-2xl p-6 md:p-8 lg:p-10 shadow-lg"
        style={{boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}
      >
        <h1 className="text-xl md:text-2xl lg:text-xl font-bold mb-4">
          {product.heading}
        </h1>
        <p className="text-base md:text-lg lg:text-md text-gray-500 font-medium">
          {product.description}
        </p>
      </div>
      ))}
    </div>
    </div>
   
  );
};

export default EngagementModels;
