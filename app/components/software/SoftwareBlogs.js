import React from "react";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform Transformation",
    description: "A leading retail company in India needed to revamp its e-commerce platform to improve user experience and boost sales. The existing platform was outdated, slow, and not mobile-friendly, resulting in a high bounce rate and declining sales.",
    imageUrl: "https://res.cloudinary.com/dlg3i3ari/image/upload/v1724902124/1_nzcnz9.png",
    altText: "best software development company for ecommerce platform",
    solution: "The company partnered with a custom software development company in India to create a custom e-commerce solution. The new platform was built with a responsive design, integrated with AI-driven recommendation engines, and featured seamless payment gateways.",
    outcome: "Within six months of launching the new platform, the company saw a 40% increase in online sales, a 30% decrease in bounce rate, and a significant improvement in customer satisfaction."
  },
  {
    id: 2,
    title: "Healthcare Management System",
    description: "A healthcare provider in India faced challenges with patient data management and appointment scheduling. The existing system was fragmented, leading to inefficiencies and errors.",
    imageUrl: "https://res.cloudinary.com/dlg3i3ari/image/upload/v1724902135/2_jq597p.png",
    altText: "best healthcare software development services in India",
    solution: "The provider collaborated with a custom software development company in Chennai to create a comprehensive healthcare management system. The new system integrated patient records, appointment scheduling, billing, and telemedicine features into a single platform.",
    outcome: "The healthcare provider reduced administrative costs by 20%, improved patient satisfaction scores, and streamlined operations, allowing for better patient care."
  },
  {
    id: 3,
    title: "Financial Services Automation",
    description: "A financial services company in India needed to automate its loan processing system to handle increased demand and reduce processing times.",
    imageUrl: "https://res.cloudinary.com/dlg3i3ari/image/upload/v1724902162/3_twsrov.png",
    altText: "best Financial Software Development Company",
    solution: "A custom software development company in India developed a custom software solution to automate loan applications, approvals, and disbursements. The system incorporated AI algorithms to assess credit risk and streamline the decision-making process.",
    outcome: "The company reduced loan processing times by 50%, increased customer approval rates, and enhanced the overall efficiency of its operations."
  }
];

const SoftwareBlogs = () => {
  return (
    <>
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-manrope text-2xl font-bold text-gray-900 text-center mb-8">
            Successful Software Development Projects in India
          </h2>
          <p className="mb-16 text-center text-md">
            The landscape of software development in India is marked by innovation and the ability to solve complex problems with custom solutions. In this case study, we’ll explore several successful software development projects in India that have had a significant impact on their respective industries. These examples demonstrate how custom software can drive business success, enhance user experiences, and create a competitive edge.
          </p>
          <div className="flex justify-center gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
            {projects.map((project) => (
              <div key={project.id} className="group w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl">
                <div className="flex items-center">
                  <Image
                    src={project.imageUrl}
                    alt={project.altText}
                    className="rounded-t-2xl w-full"
                    width={500}
                    height={500}
                  />
                </div>
                <div className="p-4 lg:p-6 transition-all duration-300 rounded-b-2xl group-hover:bg-gray-50">
                  <h4 className="text-xl text-gray-900 font-medium leading-8 mb-5">
                    {project.title}
                  </h4>
                  <p className="text-gray-500 leading-6 mb-4">
                    {project.description}
                  </p>
                  <Link
                    href={`/project/${project.id}`}
                    className="cursor-pointer text-lg text-indigo-600 font-semibold"
                  >
                    Read more..
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SoftwareBlogs;
