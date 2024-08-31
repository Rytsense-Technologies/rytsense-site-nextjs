import React from "react";

const PartnerShipModel = () => {
  const partnershipmodalData = [
    {
      title: "Fixed Price Model",
      desc: "In this model, the project scope of work with its associated cost and timeline is defined before development starts. This is a preferred model for longer periods of engagement. Client always has peace of mind of knowing the project will remain on the same budget as agreed. This model suits best to clients who have a perfect vision of their requirement.",
    },
    {
      title: "Hire Dedicated Model",
      desc: "This is very classic and simple way of engagement wherein clients pay for the number of hours the app developer works on project. Clients easily start the project as they don't have to walk in with detailed specifications. This model also allows client to update new features any time and clients know exactly what they’re paying for. This drives a lot more trust and communication.",
    },
    {
      title: "On Site Development Model",
      desc: "This model is preferred when clients want additional temporary resources for on-site development. This contract type ensures the engagement is cost-effective and a face-to-face interactions with developers. This model helps in achieving the deadline on time as there is continuous communication during the whole process.",
    },
  ];

  return (
    <div className="bg-[#F0F9FF] px-6 md:px-10 lg:px-28 py-6 md:py-8 lg:py-10">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
          Partnership Model
        </h1>
        <p className="text-lg md:text-xl text-center font-normal mb-4 md:mb-6">
          Rytsense Technology, a leading software development company in the USA
          & India, offers custom app development services to a wide range of
          industries and businesses. Know more about our partnership models.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
        {partnershipmodalData.map((data, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-6 md:p-8 lg:p-10 shadow-lg"
          >
            <h1 className="text-xl md:text-2xl lg:text-xl font-bold text-sky-500 mb-4">
              {data.title}
            </h1>
            <p className="text-base md:text-lg lg:text-md font-medium">
              {data.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnerShipModel;
