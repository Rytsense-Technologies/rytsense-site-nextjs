import { faUncharted } from "@fortawesome/free-brands-svg-icons";
import {
  faCloudArrowUp,
  faDesktop,
  faMagnifyingGlassChart,
  faMobileScreenButton,
  faPenRuler,
  faTachographDigital,
  faUserClock,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ServicesBox = ({ heading }) => {
  const services = [
    {
      icon: <FontAwesomeIcon icon={faDesktop} />,
      name: "Mobile App",
      image:
        "https://res.cloudinary.com/dlg3i3ari/image/upload/v1720609479/service1_zhlizm.png",
      desc: "Laying the strategic foundation for your product with clear goals and a defined roadmap.",
      href: "/",
    },
    {
      icon: <FontAwesomeIcon icon={faMobileScreenButton} />,
      name: "Data Science & Analytics",
      image:
        "https://res.cloudinary.com/dlg3i3ari/image/upload/v1720609486/service2_gwwvqs.png",
      desc: "Gathering critical insights through comprehensive market and user research.",
      href: "/",
    },
    {
      icon: <FontAwesomeIcon icon={faUncharted} />,
      name: "AI/ML",
      image:
        "https://res.cloudinary.com/dlg3i3ari/image/upload/v1720609492/service3_lbaxva.webp",
      desc: "Crafting an intuitive and engaging user experience, blending aesthetics & functionality.",
      href: "/ai-development-company-india",
    },
    {
      icon: <FontAwesomeIcon icon={faTachographDigital} />,
      name: "Software Development",
      image:
        "https://res.cloudinary.com/dlg3i3ari/image/upload/v1720609499/service4_aqbfm6.png",
      desc: "Turning designs into reality with efficient and robust software development.",
      href: "/software-development-company-india",
    },
    {
      icon: <FontAwesomeIcon icon={faMagnifyingGlassChart} />,
      name: "Cloud Services",
      image:
        "https://res.cloudinary.com/dlg3i3ari/image/upload/v1720609516/service6_svzy4w.png",
      desc: "Launch your product into the market with strategies that captivate your audience.",
      href: "/",
    },
    {
      icon: <FontAwesomeIcon icon={faCloudArrowUp} />,
      name: "Block Services",
      image:
        "https://res.cloudinary.com/dlg3i3ari/image/upload/v1720609507/service5_n3noqu.png",
      desc: "Enhancing your product’s reach and impact in to market dynamics and user feedback.",
      href: "/",
    },
  ];

  return (
    <>
      <div className="flex flex-col items-center justify-center mt-10 px-5 sm:px-10 lg:px-40 service-clutchmai">
        <div className="text-center px-5 sm:px-10 lg:px-20 mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-4 sm:mb-6 lg:mb-10 text-[#092947] font-bold">
            {heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full pb-10">
          {services.map((service, index) => (
            <Link href={service.href} key={index}>
              <div
                className="rounded-lg bg-white dark:bg-gray-800 dark:border-gray-700 shadow-md hover:shadow-lg transition-shadow cursor-pointer duration-300"
              >
                <Image
                  className="rounded-t-lg  transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-300 object-cover"
                  src={service.image}
                  alt={service.name}
                  width={500}
                  height={300}
                />
                <div className="p-5">
                  <h5 className="mb-2 text-xl sm:text-2xl font-semibold tracking-tight text-gray-950 dark:text-white">
                    {service.name}
                  </h5>
                  <p className="mb-3 text-base sm:text-lg font-normal text-gray-900 dark:text-gray-400">
                    {service.desc}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default ServicesBox;
