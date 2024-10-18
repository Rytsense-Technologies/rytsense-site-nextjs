import Image from "next/image";
import { FaSackDollar } from "react-icons/fa6";
import { BsBank } from "react-icons/bs";
import { LuCircleDollarSign } from "react-icons/lu";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { FaPeopleRobbery } from "react-icons/fa6";
import { LuBadgeDollarSign } from "react-icons/lu";

export default function ServicesGrid() {
  const services = [
    {
      title: "Lending",
      description:
        "Facilitate easy loan approvals, loan documentation, & online KYC with your branded FinTech lending app.",
      image:
        "https://res.cloudinary.com/dlg3i3ari/image/upload/v1728555471/cad847cafd87fafbc643c6ebe81cd1ed.fint_use_cases_img1_tk7qkn.webp",
      icon: <FaSackDollar />,
    },
    {
      title: "Banking",
      description:
        "Build FinTech solutions for retail & commercial banking to improve customer service & management.",
      image:
        "https://res.cloudinary.com/dlg3i3ari/image/upload/v1728555479/68dba616b3d551ab62bb416dc461f9c2.fint_use_cases_img2_vmz7wn.webp",
      icon: <BsBank />,
    },
    {
      title: "Investment",
      description:
        "Launch investment apps to monitor prices, fluctuations, returns & more with our FinTech development services.",
      image:
        "https://res.cloudinary.com/dlg3i3ari/image/upload/v1728555490/981263650b2b84d131609bc109922228.fint_use_cases_img3_eljenq.webp",
      icon: <LuCircleDollarSign />,
    },
    {
      title: "Wealth",
      description:
        "Build a feature-loaded wealth management application to manage assets & get financial analytics.",
      image:
        "https://res.cloudinary.com/dlg3i3ari/image/upload/v1728555503/d41d8cd98f00b204e9800998ecf8427e.fint_use_cases_img4_ieaatz.webp",
      icon: <FaHandHoldingDollar />,
    },
    {
      title: "Insurance",
      description:
        "Launch advanced FinTech solutions for insurance claims processing, fraud detection, policy management, etc.",
      image:
        "https://res.cloudinary.com/dlg3i3ari/image/upload/v1728555510/d41d8cd98f00b204e9800998ecf8427e.fint_use_cases_img5_ug8pnc.webp",
      icon: <FaPeopleRobbery />,
    },
    {
      title: "Personal Finance",
      description:
        "Create personal finance management solutions to help with budget & expense management, automatic payments, etc.",
      image:
        "https://res.cloudinary.com/dlg3i3ari/image/upload/v1728555516/d41d8cd98f00b204e9800998ecf8427e.fint_use_cases_img6_axowqs.webp",
      icon: <LuBadgeDollarSign />,
    },
  ];

  return (
    <section className="bg-white py-12 px-5">
      <div className=" mx-auto">
        <div className="mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Use Cases Our Financial Software Development Services Cater
          </h2>
          <p className="text-gray-680  mx-auto mb-16">
            Our FinTech app developers have expertise in different domains. We
            offer financial software development services for everything - from
            investment to payments.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative h-72">
                <Image
                  src={service.image}
                  alt={service.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />

                <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-4">
                  <div className="absolute top-4 left-4 bg-sky-500  w-20 h-20 p-4 text-5xl text-center text-white rounded-full">
                    {service.icon}
                  </div>

                  <h3 className="text-white text-2xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-white text-lg">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
