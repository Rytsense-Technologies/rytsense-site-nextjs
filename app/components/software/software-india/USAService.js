import Image from "next/image";
import React from "react";
import useService from "../../../../public/images/usa-service.jpg"

const USAService = () => {
  return (
    <>
 
 <section className="text-gray-600 body-font px-5 sm:px-20">
  <div className="px-5 py-10 mb-10 mx-auto flex flex-wrap">
    <div className="lg:w-1/2 md:w-1/2 w-full md:pr-10 mb-10 md:mb-0">
      <Image
        className="object-cover object-center rounded-lg"
        alt="hero"
        src={useService}
        width={500}
        height={500}
      />
    </div>
    <div className="lg:w-1/2 md:w-1/2 w-full md:pl-10 md:pr-10 mb-10 md:mb-0">
      {/* <h1 className="title-font sm:text-lg text-3xl mb-4 font-bold text-gray-900">
        Why Choose Rytsense Technologies for Software Development in USA?
      </h1> */}
    
      <ul className="list-disc pl-5 space-y-2 text-gray-700">
        <li>
          <strong>Global Expertise:</strong> As a leading custom software development
          company in the USA and India, we combine global best practices with
          local market insights to deliver superior software solutions.
        </li>
        <li>
          <strong>Experienced Team:</strong> Our team of seasoned software developers and
          engineers are proficient in the latest technologies and methodologies,
          ensuring that your software is cutting-edge and future-proof.
        </li>
        <li>
          <strong>Client-Centric Approach:</strong> We prioritize understanding your
          business needs and goals, allowing us to create customized software
          solutions that drive real results.
        </li>
        <li>
          <strong>Quality Assurance:</strong> We adhere to strict quality standards and
          employ rigorous testing processes to ensure that our software is
          reliable, secure, and performs flawlessly.
        </li>
        <li>
          <strong>Cost-Effective Solutions:</strong> Our strategic presence in India allows
          us to offer competitive pricing without compromising on quality,
          making us a preferred custom software development services company in
          India.
        </li>
      </ul>
    </div>
  </div>
</section>

    </>
  );
};

export default USAService;
