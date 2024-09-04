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
import React from "react";



const AIService = () => {
  const services = [
    {
      name: "AI Integration",
      image:
        "https://www.mytechmag.com/wp-content/uploads/2021/07/things-to-know-when-considering-ai-integration-in-your-company-MTM-Blog.jpg",
      desc: "We specialize in seamlessly integrating AI applications into your existing workflows. Our team of AI developers in India works closely with you to embed AI capabilities into your operations, ensuring a smooth transition with minimal downtime. This results in significant improvements in efficiency, productivity, and innovation.",
    },
    {
      name: "AI Agent/Copilot Development",
      image:
        "https://www.mytechmag.com/wp-content/uploads/2021/07/things-to-know-when-considering-ai-integration-in-your-company-MTM-Blog.jpg",
      desc: "Rytsense Technologies excels in creating smart AI agents and copilots. We utilize powerful tools like AutoGen Studio, Copilot Studio, Vertex AI, and crewAI. With the capabilities of LLMs like GPT-4o and Gemini, our AI agents can handle complex tasks. Whether you're looking to automate workflows, analyze data, generate code, or enhance customer support, our solutions are tailored to your needs.",
    },
    {
      name: "Custom AI App Development",
      image:
        "https://www.mytechmag.com/wp-content/uploads/2021/07/things-to-know-when-considering-ai-integration-in-your-company-MTM-Blog.jpg",
      desc: "Our team collaborates with you to develop AI-powered web and mobile applications that fit your business requirements. From the user interface to the algorithms, we design every aspect to ensure optimal performance. As a leading AI development company in India, we focus on secure and ethical AI practices, prioritizing responsible innovation.",
    },
    {
      name: "Enterprise AI Development",
      image:
        "https://www.mytechmag.com/wp-content/uploads/2021/07/things-to-know-when-considering-ai-integration-in-your-company-MTM-Blog.jpg",
      desc: "Our enterprise AI development services create custom solutions that streamline operations, improve decision-making, and drive innovation. Our services include consulting, custom AI solution development, and the deployment of advanced data analytics. We cater to the needs of businesses looking for scalable AI solutions in India.",
    },
    {
      name: "Fine-tuning LLMs",
      image:
        "https://www.mytechmag.com/wp-content/uploads/2021/07/things-to-know-when-considering-ai-integration-in-your-company-MTM-Blog.jpg",
      desc: "We specialize in fine-tuning Large Language Models (LLMs) to meet your specific requirements. Whether you need to improve performance in certain areas or adapt to unique datasets, our expert AI developers in India tailor the fine-tuning process to achieve your goals.",
    },
    {
      name: "Generative AI Development",
      image:
        "https://www.mytechmag.com/wp-content/uploads/2021/07/things-to-know-when-considering-ai-integration-in-your-company-MTM-Blog.jpg",
      desc: "Take advantage of our custom generative AI development services to unlock the full potential of AI. We use both proprietary and open-source LLMs like GPT, Llama, PaLM, Gemini, Mistral, and Claude to create powerful generative AI solutions. Our expertise includes developing advanced content generation tools and intelligent virtual assistants.",
    },
    {
      name: "Data Engineering",
      image:
        "https://www.mytechmag.com/wp-content/uploads/2021/07/things-to-know-when-considering-ai-integration-in-your-company-MTM-Blog.jpg",
      desc: "Our data engineering services cover the entire data lifecycle, from sourcing and cleansing to structuring and enrichment. As one of the top AI development companies in India, we ensure your data is optimized for machine learning, enabling accurate and reliable model training.",
    },
  ];

  const bannerColor = {
    background:
      "linear-gradient(90deg, rgba(9,41,71,1) 0%, rgba(22,100,173,1) 35%)",
  };

  return (
    <>
      <div
        className="flex flex-col items-center text-white justify-center mt-10 px-5 sm:px-10 lg:px-20 service-clutchmai py-10"
        style={bannerColor}
      >
        <div className="text-center px-5 sm:px-10 lg:px-20 mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-4 sm:mb-6 lg:mb-10 text-white font-bold">
            Leverage Our AI Development Services to Build Advanced Solutions
          </h2>
          <p className="text-xl text-gray-200">
            Improve your business performance with our smart AI solutions. At
            Rytsense Technologies, we use advanced technologies like deep
            learning, machine learning, computer vision, and natural language
            processing to create data-driven solutions that deliver outstanding
            results. As a top AI development company in India, we ensure that
            our AI solutions are aligned with your business goals.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full pb-10">
          {services.map((service, index) => (
            <div key={index} class="relative mx-auto max-w-lg rounded-lg border border-white p-0.5 shadow-lg">
              <div class=" p-7 rounded-md">
                <h1 class="font-extrabold text-xl mb-2">{service.name}</h1>
                <p>{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AIService;
