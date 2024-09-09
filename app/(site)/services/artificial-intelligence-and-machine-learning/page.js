import React from "react";
import TechnologyStack from "../../../components/services/TechnologyStack";
import ClientReviews from "../../../components/services/ClientReviews";
import HeroSection from "../../../components/services/HeroSection";
import bannerImage from "../../../../public/images/services/ai.png";
import {
  FaHospital,
  FaGraduationCap,
  FaFilm,
  FaShoppingCart,
  FaTruck,
  FaIndustry,
  FaFootballBall,
  FaUniversity,
  FaUtensils,
} from "react-icons/fa";

export const metadata = {
  title:
    "AI ML Service - Rytsense Technologies",
  description:
    "",
  // alternates: {
  //   canonical: "https://www.rytsensetech.com/",
  // },
};

const page = () => {
  const services = [
    {
      title: "Recommendation Engine",
      description:
        "One of the efficient services of Artificial Intelligence and Machine learning is the Recommendation Engine. The Engine helps to search and give you personalized suggestions, boost sales, and enhance user experience. It is frequently used in the e-commerce sector, lifestyle sector, and more.",
    },
    {
      title: "Process Automation",
      description:
        "Process Automation is used for the automation of repetitive tasks. It includes several assignments where it helps to optimize resources, save time and be cost-effective. Thus, process Automation enhances business workflow and increases the execution speed of operations.",
    },
    {
      title: "Voice-based AI",
      description:
        "Voice-based AI has ruled the market and increased the demand by applying it for several purposes. Siri, Alexa, Google Assistant, and others are famous examples of Voice-based personal Artificial Intelligent Assistants. We provide personalized assistants and customize them to engage the customers. Moreover, we ensure it to make it more dynamic.",
    },
    {
      title: "Chatbots",
      description:
        "Another useful service of Artificial Intelligence and Machine learning is Chatbots. AI-enabled Chatbots enable to have a conversation through bots and make humans interact with the machine more engaging. The Chatbots help to solve the query and responsd 24/7. It is easy to function and very useful for the business.",
    },
    {
      title: "Inventory Optimization",
      description:
        "Inventory Optimization helps to optimize and streamline productions. Artificial Intelligence allows businesses to figure out sales and overall consumption of the product. It helps to predict forecasts and improve the method of the supply chain. We help to create business strategies and improve the functions of businesses. Our team assures us to solve complex problems and enhance business productivity.",
    },
    {
      title: "Image Processing",
      description:
        "Artificial Intelligence and Machine learning are used to recognize the image, object, or any other images. Image processing helps identify a particular thing, scale pictures, remember the image's pattern, and more. It is frequently used in the medical sector, security industry, and more. We present image processing services that provide accuracy. Our team offers exceptional image processing service that helps you to increase the growth of the business.",
    },
    {
      title: "Object Recognition",
      description:
        "Object recognition is applied to identify appropriate objects from images and obtain valuable information for additional use. Therefore, it needs expanded use of Artificial Intelligence, Machine Learning and Neural networks. Smart search engines, identifying particular things, human image and video, distinguishing text in pictures, and more are object recognition applications. Object recognition makes human work more effortless.",
    },
    // Add more services as needed
  ];

  const industries = [
    { name: "Healthcare", icon: <FaHospital />, color: "bg-red-500" },
    { name: "Education", icon: <FaGraduationCap />, color: "bg-blue-500" },
    { name: "Media & Entertainment", icon: <FaFilm />, color: "bg-purple-500" },
    { name: "E-Commerce", icon: <FaShoppingCart />, color: "bg-green-500" },
    { name: "Logistics", icon: <FaTruck />, color: "bg-yellow-500" },
    { name: "Manufacturing", icon: <FaIndustry />, color: "bg-orange-500" },
    { name: "Sports", icon: <FaFootballBall />, color: "bg-indigo-500" },
    { name: "Banking & Finance", icon: <FaUniversity />, color: "bg-teal-500" },
    { name: "Food Tech", icon: <FaUtensils />, color: "bg-pink-500" },
  ];
  const reasonsToChoose = [
    {
      title: "Improvised Technologies",
      description:
        "Artificial Intelligence and Machine Learning are the new technologies that are applied to the business. We present improved and latest technology to fulfill client's needs. The technologies are efficient, and our developers implement them impeccably.",
    },
    {
      title: "Dynamic Solution",
      description:
        "With more than 10+ years of experience, Rytsense Technologies offers the best Artificial Intelligence and Machine learning technology. The data solution offers ML and AI's deepest range and provides a dynamic solution to enhance business.",
    },
    {
      title: "Enhance Productivity",
      description:
        "We provide the best Artificial Intelligence and Machine learning technology that enhances the productivity of the business. Our talented professionals prepare effective strategies and plan accordingly to meet client's needs.",
    },
    {
      title: "Deep Insights",
      description:
        "Whenever we obtain insights with the help of Artificial Intelligence and Machine Learning, we provide them clearly to the client. We aim to make client business grow and boost. We keep it open with our process, model, decision, and more. We interact with the clients and provide a deep insight into the project, process, model, and necessary information. Our team acknowledges the demand and tries to meet the business need.",
    },
  ];

  return (
    <>
      <HeroSection
        title={"Machine Learning Development Company"}
        subTitle={"Get the Best For The Best With Our ML"}
        heroImage={bannerImage}
      />
      <div className="mb-8 ml-10 mr-10">
        <div className="p-10 my-4 mb-4">
          <p className="text-gray-600">
            Artificial Intelligence and Machine Learning are two emerging trends
            in technologies. Rytsense Technologies caters to the prominent AI
            and ML to deliver high-end solutions. We provide intelligent and
            data-driven insights that help your AI vision convert into reality.
            Our company helps your business enhance and provide Image & Video,
            Text To Speech, Business Intelligence, Data Forecasting, Natural
            Language Processing, and Data Analytics. These tools enable you to
            operate with a large amount of data and valuable insight into the
            present and future predictions. The understanding will help you to
            stay ahead and gain a significant edge in competition. The data can
            be of institutional knowledge, internal, industry, and more.
            Artificial Intelligence and Machine are easily affordable and
            accessible, but you require a developer to manage all. Machine
            learning is a part of Artificial Intelligence and is considered the
            most evolving technology for business. With real-world insight, AI &
            ML help to build frameworks that support businesses to gain profit.
            The organization that leverages Machine Learning and Artificial
            Intelligence has witnessed the transformation in every aspect of the
            company. It has helped them to reshape multiple industries and
            support enterprises with strategic management. The implementation of
            the project becomes easier with these tools and research analytics.
          </p>
          {/* Add other paragraphs as needed */}
        </div>

        <div className="mr-10">
          <h1 className="font-bold text-xl text-center mb-5 text-gray-800">
            Industries We Serve
          </h1>
          <div class="grid grid-cols-5 gap-4">
            {industries.map((industry, index) => (
              <div
                className={`${industry.color} text-white shadow-lg rounded-lg p-6 text-center flex items-center gap-5`}
                key={index}
              >
                <div className="text-3xl">{industry.icon}</div>
                <h2 className="text-lg font-bold">{industry.name}</h2>
              </div>
            ))}
          </div>

          <section class="bg-white dark:bg-gray-900">
            <div class="py-8  max-w-screen-xl sm:py-16">
              <div class="max-w-screen-md mb-8 lg:mb-10">
                <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                  AI & ML Service Offer To Include
                </h2>
              </div>
              <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                {services.map((service, index) => (
                  <div className="border border-sky-700 p-5" key={index}>
                    <h3 class="mb-2 text-xl font-bold dark:text-white">
                      {service.title}
                    </h3>
                    <p class="text-gray-500 dark:text-gray-400">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <h1 className="font-bold text-xl text-gray-800">
            Why Choose Rytsense For Machine Learning?
          </h1>
          {reasonsToChoose.map((reason, index) => (
            <div key={index}>
              <h1 className="font-bold text-xl text-gray-800">
                {reason.title}
              </h1>
              <p className="text-gray-800 mt-1 mb-3">{reason.description}</p>
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
