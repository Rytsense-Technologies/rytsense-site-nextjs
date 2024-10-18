import React from "react";
import { FaClipboardList, FaUserCheck, FaRegHandshake, FaTools } from "react-icons/fa";

const HiringProcessSection = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-5">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">
          Process of Hiring Developers with Rytsense Tech
        </h2>
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-sky-500 hidden md:block"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-20 gap-x-0 md:gap-x-10">
            {/* Step 1 */}
            <div className="flex md:justify-end md:pr-8 relative">
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 w-full md:w-3/4">
                <FaClipboardList className="text-sky-500 text-4xl mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Requirement Gathering</h3>
                <p className="text-base text-gray-700">
                  We collaborate to understand your project scope and developer needs.
                </p>
              </div>
             
            </div>

            {/* Step 2 */}
            <div className="flex md:justify-start md:pl-8 relative">
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 w-full md:w-3/4">
                <FaUserCheck className="text-sky-500 text-4xl mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Developer Selection</h3>
                <p className="text-base text-gray-700">
                  Choose from our pool of experienced developers across a variety of tech stacks.
                </p>
              </div>
             
            </div>

            {/* Step 3 */}
            <div className="flex md:justify-end md:pr-8 relative">
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 w-full md:w-3/4">
                <FaRegHandshake className="text-sky-500 text-4xl mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Onboarding</h3>
                <p className="text-base text-gray-700">
                  Begin development with full transparency, seamless onboarding, and clear project management.
                </p>
              </div>
            
            </div>

            {/* Step 4 */}
            <div className="flex md:justify-start md:pl-8 relative">
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 w-full md:w-3/4">
                <FaTools className="text-sky-500 text-4xl mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Ongoing Support</h3>
                <p className="text-base text-gray-700">
                  Receive regular updates and full post-project support to ensure long-term success.
                </p>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HiringProcessSection;
