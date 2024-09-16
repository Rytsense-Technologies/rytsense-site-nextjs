"use client";
import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesLeft, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";

const SuccessPage = () => {
  const router = useRouter();
  return (
    <>
      {/* Assuming Navbarclutch handles navigation */}
      <div className="bg-gray-100 pt-24 inter-semibold">
        {/* Navigation Links */}
        <div className="flex justify-center items-center mb-4">
          <FontAwesomeIcon icon={faAnglesLeft} className="h-7 w-7" />
          <button
            className="flex items-center space-x-2 px-4 py-2 hover:text-indigo-800"
            onClick={() => router.push("/")}
          >
            <span>Home</span>
          </button>
          <span>/</span>
          <button
            className="flex items-center space-x-2 px-4 py-2 hover:text-indigo-800"
            onClick={() => router.push("/contact-us")}
          >
            <span>Contact</span>
          </button>
          <span>/</span>
          <button className="flex items-center space-x-2 px-4 py-2 text-indigo-800">
            <span>Thank You</span>
          </button>
        </div>

        {/* Thank You Message */}
        <div className="text-center">
          <h2 className="text-5xl inter-semibold text-gray-800">
            Thank You. We Have Received Your Email
          </h2>
        </div>

        {/* Banner Image Section */}
        <div className="flex justify-center p-10">
          <img
            src="/images/contact/thanku.png"
            className="max-w-full h-auto mx-auto"
            alt="Thank You Banner"
          />
        </div>

        {/* What to Expect Next Section */}
        <div className="py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h3 className="text-2xl inter-semibold text-gray-800 mb-4">
              What to expect next?
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              We know you must be curious to know what would happen next. Here
              is how the process would unfold:
            </p>

            {/* Steps */}
            <div className="space-y-8 ">
              {/* Vertical Line */}
              <div className=" left-2 top-10 bottom-2 w-0.5 bg-gray-300"></div>

              {/* Step 1: Receive a reply */}
              <div className="flex items-start">
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="text-indigo-800 mr-4 mt-1 h-7 w-7"
                />
                <div>
                  <h4 className="text-xl inter-semibold text-gray-800 mb-2">
                    Receive a reply
                  </h4>
                  <p className="text-gray-600">
                    Our business analyst team will meet you to discuss and
                    define project requirements and project scope in detail.
                  </p>
                </div>
              </div>

              {/* Step 2: Project quote and proposal */}
              <div className="flex items-start">
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="text-indigo-800 mr-4 mt-1 h-7 w-7"
                />
                <div>
                  <h4 className="text-xl inter-semibold text-gray-800 mb-2">
                    Project quote and proposal
                  </h4>
                  <p className="text-gray-600">
                    Our analyst will provide a detailed project proposal
                    including cost estimate, project plan, and project delivery
                    timeline. Project starts as soon as you approve them.
                  </p>
                </div>
              </div>

              {/* Step 3: Start Project */}
              <div className="flex items-start">
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="text-indigo-800 mr-4 mt-1 h-7 w-7"
                />
                <div>
                  <h4 className="text-xl inter-semibold text-gray-800 mb-2">
                    Start Project
                  </h4>
                  <p className="text-gray-600">
                    Dedicated project manager (single point of contact) +
                    designer + developers will start working on the project.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuccessPage;
