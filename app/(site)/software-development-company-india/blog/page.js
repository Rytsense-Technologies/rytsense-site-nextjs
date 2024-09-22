import React from "react";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform Transformation",
    description:
      "A leading retail company in India needed to revamp its e-commerce platform to improve user experience and boost sales. The existing platform was outdated, slow, and not mobile-friendly, resulting in a high bounce rate and declining sales.",
    imageUrl:
      "https://res.cloudinary.com/dlg3i3ari/image/upload/v1724902124/1_nzcnz9.png",
    altText: "best software development company for ecommerce platform",
    solution:
      "The company partnered with a custom software development company in India to create a custom e-commerce solution. The new platform was built with a responsive design, integrated with AI-driven recommendation engines, and featured seamless payment gateways.",
    outcome:
      "Within six months of launching the new platform, the company saw a 40% increase in online sales, a 30% decrease in bounce rate, and a significant improvement in customer satisfaction.",
  },
  {
    id: 2,
    title: "Healthcare Management System",
    description:
      "A healthcare provider in India faced challenges with patient data management and appointment scheduling. The existing system was fragmented, leading to inefficiencies and errors.",
    imageUrl:
      "https://res.cloudinary.com/dlg3i3ari/image/upload/v1724902135/2_jq597p.png",
    altText: "best healthcare software development services in India",
    solution:
      "The provider collaborated with a custom software development company in Chennai to create a comprehensive healthcare management system. The new system integrated patient records, appointment scheduling, billing, and telemedicine features into a single platform.",
    outcome:
      "The healthcare provider reduced administrative costs by 20%, improved patient satisfaction scores, and streamlined operations, allowing for better patient care.",
  },
  {
    id: 3,
    title: "Financial Services Automation",
    description:
      "A financial services company in India needed to automate its loan processing system to handle increased demand and reduce processing times.",
    imageUrl:
      "https://res.cloudinary.com/dlg3i3ari/image/upload/v1724902162/3_twsrov.png",
    altText: "best Financial Software Development Company",
    solution:
      "A custom software development company in India developed a custom software solution to automate loan applications, approvals, and disbursements. The system incorporated AI algorithms to assess credit risk and streamline the decision-making process.",
    outcome:
      "The company reduced loan processing times by 50%, increased customer approval rates, and enhanced the overall efficiency of its operations.",
  },
];

const page = () => {
  return (
    <>
      <div className="py-10 px-4 sm:px-10 md:px-20 lg:px-40 xl:px-60">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl mt-8 font-semibold font-serif text-center">
          Successful Software Development Projects in India
        </h1>
        {projects.map((topic, index) => (
          <div key={index} className="my-8 p-4 sm:p-8">
            <div className="flex flex-col  lg:items-start lg:gap-8 items-center gap-8">
              <Image
                src={topic.imageUrl}
                alt={topic.altText}
                width={500}
                height={300}
                className="mx-auto  shadow-xl"
              />
              <div className="">
                <h2 className="text-lg sm:text-xl font-bold text-sky-700">
                  {topic.title}
                </h2>
                <p className="text-md sm:text-lg mt-3 sm:mt-5">
                  {topic.description}
                </p>
                <div className="mt-4">
                  <h1 className="text-sky-600 font-semibold">Solution -</h1>
                  <p className="text-sm sm:text-md text-gray-500">
                    {topic.solution}
                  </p>
                </div>
                <div className="mt-4">
                  <h1 className="text-sky-600 font-semibold">Outcome -</h1>
                  <p className="text-sm sm:text-md text-gray-500">
                    {topic.outcome}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="py-10">
          <h1 className="text-lg sm:text-xl font-bold ">
            Conclusion
          </h1>
          <p className="text-sm sm:text-md text-gray-600 font-semibold  mt-5 px-4">
            These case studies highlight the importance of custom software
            development services in India in driving business success. By
            addressing specific challenges and creating tailored solutions,
            businesses in India can achieve significant improvements in
            efficiency, customer satisfaction, and profitability. If your
            business is looking to scale or solve complex problems, consider
            investing in custom software development services in India.
          </p>
        </div>
      </div>
    </>
  );
};

export default page;
