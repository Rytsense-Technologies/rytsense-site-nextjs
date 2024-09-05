import React from "react";
import { fadeIn } from "../../../mock/varients";

export default function LaravelDev() {
  return (
    <div>
      <div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.5 }}
        className="bg-gray-200 p-4 md:p-8 lg:flex lg:flex-col lg:text-left"
      >
        <p className="text-gray-700 p-5">
          Hyperlink InfoSystem is the best Laravel development company to hire
          expert Laravel developers. Our skilled Laravel developers have deep
          experience with third-party integration, website migration,
          application maintenance, and support, Laravel’s Eloquent ORM, etc. We
          will first analyze the business requirements, plan accordingly and
          perform the planning in order to deliver the best possible results.
        </p>
        <p className="text-gray-700 p-5">
          We have many years of industry experience and we have designed the
          best framework that helps us to execute Laravel projects without much
          trouble no matter how complex the project is. Our Laravel developers
          adhere to the latest web development standards and implement the best
          web app practices to make the solution up to the mark for the purpose.
        </p>
      </div>
      <div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.5 }}
        className="p-10"
      >
        <h1 className="text-2xl font-bold mb-4 ">
          Hire Our Laravel Developers for Following Services
        </h1>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-0 gap-y-4 text-left p-10">
          <li className="p-4 shadow-md">Custom Laravel Development</li>

          <li className="p-4 shadow-md">Laravel Enterprise Solution</li>
          <li className="p-4 shadow-md">Laravel Data Migration</li>

          <li className="p-4 shadow-md">Laravel CMS Development</li>
          <li className="p-4 shadow-md">Laravel Extension Development</li>
          <li className="p-4 shadow-md">Laravel Middleware Development</li>
        </ul>
      </div>

      <div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.5 }}
        className="p-10"
      >
        <h1 className="text-2xl font-bold mb-4 ">
          Key Benefits That You Will Get After Hiring Laravel Developers From
          Hyperlink InfoSystem
        </h1>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-0 gap-y-4 text-left p-10">
          <li className="p-4 shadow-md">7+ Years Of Average Experience</li>

          <li className="p-4 shadow-md">Engagement Models</li>
          <li className="p-4 shadow-md"> Transparency Is Guaranteed</li>
          <li className="p-4 shadow-md">Flexible Engagement Models</li>

          <li className="p-4 shadow-md">Guaranteed Timely Communication</li>
          <li className="p-4 shadow-md">
            Cost-effective, highly Innovative Solutions
          </li>
        </ul>
      </div>
    </div>
  );
}
