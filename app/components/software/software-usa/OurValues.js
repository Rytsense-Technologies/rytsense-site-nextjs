import React from "react";

const OurValues = () => {
  return (
    <div className="px-4 sm:px-10 py-10">
      {" "}
      {/* Adjusted padding for responsiveness */}
      <h1 className="text-4xl font-bold text-center mb-10">Our values</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div
          className="rounded-xl bg-white p-6 text-center shadow-xl"
          style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
        >
          <h1 className="text-darken mb-3 text-lg font-medium lg:px-14">
            100% Transparency
          </h1>
          <p className="px-4 text-gray-500">
            As a reputed software company in USA, we strongly believe in
            maintaining transparency with our clients and letting you know every
            minute detail of your project
          </p>
        </div>
        <div
          className="rounded-xl bg-white p-6 text-center shadow-xl"
          style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
        >
          <h1 className="text-darken mb-3 text-lg font-medium lg:px-14">
            Top-Notch Security
          </h1>
          <p className="px-4 text-gray-500">
            Our software house in USA is equipped to meet all your security
            needs at the highest level. We provide tailored engagement models to
            suit your business requirements.
          </p>
        </div>
        <div
          className="rounded-xl bg-white p-6 text-center shadow-xl"
          style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
        >
          <h1 className="text-darken mb-3 text-lg font-medium lg:px-14">
            Skilled Professionals
          </h1>
          <p className="px-4 text-gray-500">
            Our dedicated experts deliver top-notch software development in USA.
            They manage every stage of your software development process and
            offer advanced business solutions.
          </p>
        </div>
        <div
          className="rounded-xl bg-white p-6 text-center shadow-xl"
          style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
        >
          <h1 className="text-darken mb-3 text-lg font-medium lg:px-14">
            Realizing Dreams
          </h1>
          <p className="px-4 text-gray-500">
            Rytsense Technologies provides reliable software development
            services in USA. Through our end-to-end software development
            process, we turn your ambitious yet intricate ideas into tangible
            solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurValues;
