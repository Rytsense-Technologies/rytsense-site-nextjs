import Image from "next/image";
import React from "react";
import ux from "../../../../public/images/services/ux.png"

const DesignSprintWorkshop = () => {
  return (
    <div className="flex justify-center  min-h-screen py-10">
      <div className="max-w-4xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">
            Think broad & act deep with our design<br/> sprint workshops
          </h1>
          <p className="text-lg text-gray-600">
            We strategize the user experience and along our way, we deal with many
            complex issues that need to be addressed.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row  gap-5">
          <div className="mb-8">
            <p className="text-gray-700 mb-6">
              With design interventions addressing key challenges of our clients,
              we have developed a way of working that is strategic, creative &
              technical at the same time.
            </p>
            <p className="text-gray-700">
              Our design workshops encourage a solution-based approach to solving
              problems. It cuts the endless discussions, controls the big egos in
              the room and gives space to shy people to express their ideas.
            </p>
            <p className="text-red-600 hover:underline mt-10">
              Know more about our product design workshop →
            </p>
          </div>

          <div className="relative">
            <Image
              src={ux}
              alt="Design Workshop"
              className="rounded-lg"
              width={300}
              height={300}
            />
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignSprintWorkshop;
