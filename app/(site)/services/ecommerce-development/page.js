import React from "react";
import TechnologyStack from "../../../components/services/TechnologyStack";
import ClientReviews from "../../../components/services/ClientReviews";
import HeroSection from "../../../components/services/HeroSection";
import bannerImage from "../../../../public/images/services/ecommerce.webp";

export const metadata = {
  title:
    "E-Commerce Development Service - Rytsense Technologies",
  description:
    "",
  // alternates: {
  //   canonical: "https://www.rytsensetech.com/",
  // },
};

const eCommerceIntro = {
  title: "What Is E-Commerce?",
  description: `
      It is a simple method of purchasing and selling transactions of products based online over the internet. 
      The E-Commerce website is quite popular and lately becoming essential for the business. 
      If you are one of the rising entrepreneurs looking for a perfect way of promoting your brand? 
      E-Commerce is the perfect way to fulfill your needs for promotions. The scale might be different for everyone, 
      but the result always turns out to be profitable. E-Commerce websites transform businesses and help them to expand 
      for the growth of the company. Match your needs and preferences with E-Commerce websites. All operations targeted 
      at the creation, management, and evolution of a web store are covered under ecommerce website design and development. 
      With one click, the operation online can perform in E-Commerce development. The UX/UI is the E-Commerce website's key factor, 
      and large options attract customers and users.
    `,
};

const expertiseSolutions = [
  {
    title: "1) Custom eCommerce Integration :-",
    description:
      "We offer special customized E-Commerce solutions and take the E-Commerce venture to a new level. The Integration of a custom E-Commerce solution would be beneficial for the E-Commerce business.",
  },
  {
    title: "2) B2C Platforms:-",
    description:
      "Business to Customer business is highly in demand and one of the easiest ways of interaction. The web portal enables customers to connect directly to increase engagement and boost E-Commerce business.",
  },
  {
    title: "3) B2B Commerce Solutions:-",
    description:
      "We provide rich Business to Business Commerce solutions. Our companies have expertise in creating the excellent performance of B2B E-Commerce solutions that encourage conversions and value.",
  },
  {
    title: "4) Technology Consulting:-",
    description:
      "It is essential to know which technology is best for E-Commerce websites; Rytsense Technologies provides the best technology consulting.",
  },
  {
    title: "5) E-Commerce App Development:-",
    description:
      "We provide seamless E-Commerce websites with our best E-Commerce app development. It is a great way of expanding your online business and enhancing the website.",
  },
  {
    title: "6) Payment Integration:-",
    description:
      "There is no E-Commerce website without the feature of payment integration. Our solution provides you multiple payments integrated gateways that enable secure and simple online transactions.",
  },
  {
    title: "7) Deploy Maintenance:-",
    description:
      "We provide top support and maintenance service to ensure flawless and sleek online E-Commerce experiences.",
  },
  {
    title: "8) Multi Platforms:-",
    description:
      "Several E-Commerce platforms perform and bring multiple vendors into one. We enable E-Commerce platforms that facilitate selling and buying factors on E-Commerce websites.",
  },
];

const whyChooseUs = [
  {
    title: "Why Choose Rytsense for the E-Commerce Website?",
    description: `
        We have industry experts who have deep insight knowledge about E-Commerce website development. Rytsense Technologies developers 
        provide top adequate and accelerate E-Commerce projects. The high-qualified team determines E-Commerce website development 
        with exclusive, rich, and reliable technologies. E-Commerce development is made using compelling tools such as Magento, 
        Shopify, BigCommerce, WooCommerce, and more.
      `,
  },
  {
    title: "Our Ecommerce Development Expertise",
    items: [
      "Development of multi-store eCommerce platform",
      "Website Maintenance and Support",
      "Marketplace development",
      "Shopping cart development",
      "Online store customization",
      "Modules and plugins development",
      "Magento eCommerce development",
      "SAAS eCommerce solutions",
      "Developing websites with third-party Integration",
    ],
  },
];

const page = () => {
  return (
    <>
      <HeroSection
        title={"Web Development Company"}
        subTitle={
          "A Roadmap To The Emerging And Effective Web And CMS Development"
        }
        heroImage={bannerImage}
      />
      <div className="bg-gray-100 p-8">
        {/* Introduction Section */}
        <section className="mb-8 p-10 bg-white rounded-lg shadow-md">
          <div className="mb-4">
            <h1 className="text-2xl font-bold text-gray-800">
              {eCommerceIntro.title}
            </h1>
            <p className="text-gray-600 mt-4 leading-relaxed">
              {eCommerceIntro.description}
            </p>
          </div>
        </section>

        {/* Expertise Solutions Section */}
        <div className="ml-10">
          <h2 className="font-bold text-2xl mb-6">
            Our Expertise E-Commerce Development Solutions:
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 pt-10">
            {expertiseSolutions.map((solution, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <p className="font-semibold text-gray-800">
                  <span className="font-bold">{solution.title}</span>{" "}
                  {solution.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="p-10 mt-12 bg-white rounded-lg shadow-md">
          {whyChooseUs.map((section, index) => (
            <div key={index} className="mb-8">
              <h1 className="font-bold text-xl text-gray-800 mb-4">
                {section.title}
              </h1>
              {section.description && (
                <p className="text-gray-800 mt-1 mb-3">{section.description}</p>
              )}
              {section.items && (
                <ul className="list-disc pl-5 text-gray-800">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="mb-2">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
      <ClientReviews />
      <TechnologyStack />
    </>
  );
};

export default page;
