import React from "react";
import { FaUsers, FaUserTie, FaProjectDiagram } from "react-icons/fa";
import CustomButton from "../common/CustomButton";

const EngagementModelsSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-5">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-10">
          Engagement Models
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Card 1 - Dedicated Teams */}
          <div className="flex flex-col items-center bg-gray-100 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <FaUsers className="text-sky-500 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Dedicated Teams</h3>
            <p className="text-base text-gray-700 text-center">
              For ongoing development and long-term projects that require full-time commitment.
            </p>
          </div>

          {/* Card 2 - Freelancers */}
          <div className="flex flex-col items-center bg-gray-100 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <FaUserTie className="text-sky-500 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Freelancers</h3>
            <p className="text-base text-gray-700 text-center">
              Short-term, task-based projects with flexible working arrangements.
            </p>
          </div>

          {/* Card 3 - Project-Based Teams */}
          <div className="flex flex-col items-center bg-gray-100 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <FaProjectDiagram className="text-sky-500 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Project-Based Teams</h3>
            <p className="text-base text-gray-700 text-center">
              Assemble custom teams designed to meet the specific needs of a particular project.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-10">
          <CustomButton title={"Choose Your Engagement Model"} />
        </div>
      </div>
    </section>
  );
};

export default EngagementModelsSection;
