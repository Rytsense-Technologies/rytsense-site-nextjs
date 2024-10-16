"use client";

import React from "react";

const featuresData = [
  {
    title: "Blockchain",
    description:
      "Blockchain technology enables a more transparent & secure business network to boost efficiency and reduced costing for your banking & finance business.",
    imageUrl:
      "https://res.cloudinary.com/dlg3i3ari/image/upload/v1728988628/d519639c55b7c2ae7208baa432e67a40.fint_technology_img1_vylazo.webp",
  },
  {
    title: "Cyber Security",
    description:
      "Keep your financial data secured with high-end security features integrated & advanced solutions to fight cyber attacks or threats.",
    imageUrl:
      "https://res.cloudinary.com/dlg3i3ari/image/upload/v1728988671/3d198c39cd183abc07ce41b42910558b.fint_technology_img2_hsuqob.webp",
  },

  {
    title: " AI and Machine Learning",
    description:
      "AI and ML are used to create personalized financial services, automate trading, optimize fraud detection, and manage risks in real time.",
    imageUrl:
      "https://res.cloudinary.com/dlg3i3ari/image/upload/v1728988694/b899d42d2a5fa118c78752b7bdac6bcf.fint_technology_img3_hhxnxd.webp",
  },
];

const CuttingEdgeTech = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        {/* Heading Section */}
        <h2 className="text-4xl font-bold mb-4">
          Cutting-Edge Technologies To Build Your FinTech App
        </h2>
        <p className="text-lg mb-12">
          We are a renowned financial software development company creating
          customized FinTech solutions with the help of different technologies.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <div
              key={index}
              className="border border-sky-400 bg-sky-50 rounded-lg p-6 text-left hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
              <img
                src={feature.imageUrl}
                alt={feature.title}
                className="w-full h-40 object-contain mt-5"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CuttingEdgeTech;
