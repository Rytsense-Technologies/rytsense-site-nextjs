import React from "react";
import AIBanner from "../../components/home-service/ai/ai-usa/AIBanner";
import Expertise from "../../components/software/software-india/Expertise";

import AIModels from "../../components/home-service/ai/AIModels";
import Faq from "../../components/common/faq/Faq";
import LetsConnect from "../../components/common/LetsConnect";
import Testimonials from "../../components/common/Testimonials";

export const metadata = {
  title: "Artificial Intelligence (AI) development services in USA",
  description:
    "We are one of the top AI development companies in USA, offering a wide range of custom AI development services for your business needs.",
  alternates: {
    canonical: "https://rytsensetech.com/ai-development-services-usa",
    languages: {
      "en-us": "https://rytsensetech.com/ai-development-services-usa",
      "x-default": "https://rytsensetech.com/ai-development-services-usa",
    },
  },
};

const page = () => {
  const expertise = [
    {
      title: "AI Integration",
      description:
        "We smoothly add AI apps into your current workflows, giving your business AI abilities that fit with your existing processes. Our team works closely with you to embed AI apps into your operations, ensuring a smooth change with minimal downtime. This results in big improvements in efficiency, productivity, and innovation.",
    },
    {
      title: "AI Agent/Copilot Development",
      description:
        "At Rytsense Technologies, we create smart AI agents and copilots using top tools like AutoGen Studio, Copilot Studio, Vertex AI, and crewAI. Our AI agents and copilots can handle tasks such as automating workflows, analyzing data, generating code, and improving customer support.",
    },
    {
      title: "Custom AI App Development",
      description:
        "We work with you to create AI-powered web and mobile apps that fit your business needs. From the user interface to the algorithms, we carefully design every part of your solution to ensure it works perfectly. Our approach focuses on both security and ethical AI, prioritizing responsible innovation.",
    },
    {
      title: "Enterprise AI Development",
      description:
        "Our AI development service for businesses creates custom AI solutions that make operations smoother, improve decision-making, and spark innovation. Our scalable AI systems fit right into your current setup, making things more efficient and giving you a competitive advantage.",
    },
    {
      title: "Fine-tuning LLMs",
      description:
        "We specialize in fine-tuning Large Language Models (LLMs) to meet your requirements, whether you need to improve performance in specific areas, adapt to unique datasets, or enhance content generation capabilities.",
    },
    {
      title: "Generative AI Development",
      description:
        "We use proprietary and open-source LLMs like GPT, Llama, PaLM, and Gemini to build generative AI solutions. Our expertise includes advanced content generation tools, intelligent virtual assistants, and personalized customer engagement systems.",
    },
    {
      title: "Data Engineering",
      description:
        "Our data engineering services cover the entire data lifecycle, from sourcing and cleansing to structuring and enrichment. We ensure your data is optimized for machine learning, enabling accurate and reliable model training.",
    },
  ];

  const whyChooseUs = [
    {
      title: "End-to-end AI Development",
      description:
        "We start with a detailed consultation to understand your goals, develop a custom AI product, and integrate it into your existing systems to maximize efficiency and innovation.",
    },
    {
      title: "We Prioritize Speed",
      description:
        "Our experienced developers and data scientists work efficiently to ensure timely project delivery while maintaining high-quality standards.",
    },
    {
      title: "Expert AI Professionals",
      description:
        "Rytsense Technologies has a team of skilled experts in advanced AI technologies like machine learning, natural language processing, and computer vision. With a successful track record, our experts create customized products for various industries.",
    },
  ];

  const faqs = [
    {
      question: "Why should I opt for custom AI development?",
      answer:
        "Custom AI development creates solutions specifically designed for your business, ensuring they fit your unique needs and work seamlessly with your current systems.",
    },
    {
      question: "Why should I integrate AI into my business?",
      answer:
        "Integrating AI into your business can greatly improve efficiency, decision-making, and automate repetitive tasks. It helps you analyze data for deeper insights, stay competitive, and offer personalized experiences to your customers.",
    },
    {
      question:
        "What does your tech stack for AI application development include?",
      answer:
        "Our tech stack for AI development includes tools and frameworks like Python, TensorFlow, Keras, PyTorch, and OpenAI. We use cloud platforms like AWS, Google Cloud, and Azure for scalable computing.",
    },
    {
      question: "What type of custom AI solutions does your company offer?",
      answer:
        "Rytsense Technologies offers customized AI solutions including machine learning, natural language processing, computer vision, chatbot development, and predictive analytics.",
    },
    {
      question: "How much does it cost to develop AI software?",
      answer:
        "The cost of developing AI software varies widely depending on the project's complexity and scope. For an accurate estimate, it's best to consult with us to discuss your specific project needs.",
    },
    {
      question: "How long does it take to develop a custom AI solution?",
      answer:
        "The development time depends on the project's complexity, team expertise, and data availability. The timeframe can vary from a few weeks to several months.",
    },
    {
      question: "Which AI program is best?",
      answer:
        "The best AI program depends on your specific needs. For general machine learning tasks, Python libraries like TensorFlow and PyTorch are great options. We help you choose the best AI program based on your project requirements.",
    },
  ];

  const engagementModels = [
    {
      title: "Dedicated Development Team",
      description:
        "Our developers use the latest technologies to provide top-quality services and create solutions that are customized for each client.",
    },
    {
      title: "Team Extension",
      description:
        "This model helps clients add specific experts to their teams for their projects, giving them the exact skills they need.",
    },
    {
      title: "Project-based Model",
      description:
        "We focus on working closely with clients to meet specific project goals. Our team of software development specialists is dedicated to making sure the project is completed successfully.",
    },
  ];

  return (
    <>
      <AIBanner />
      <Expertise />
      <div className="">
        {/* Expertise Section */}
        <section className="lg:px-20">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Leaverage Our AI Development Services to Build Advanced Solutions
          </h2>
          <p className="text-lg mb-5">
            Improve your business performance with our smart AI solutions. We
            use advanced technologies like deep learning, machine learning,
            computer vision, and natural language processing to create
            data-driven solutions that deliver great results.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertise.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-sky-50 shadow-lg border border-sky-800 rounded-lg hover:bg-gray-100 transition duration-300"
              >
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </section>
        <AIModels />
        {/* Why Choose Us Section */}
        <section className="py-16 lg:px-28">
          <h2 className="text-3xl font-bold mb-6">
            Why Choose Rytsense Technologies?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="p-6 text-center bg-white shadow-lg rounded-full border-t-4 border-indigo-500 hover:bg-gray-100 transition duration-300"
              >
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </section>
        <Testimonials />
        {/* Engagement Models Section */}
        <section className="mt-16 lg:px-20">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Our Engagement Models
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {engagementModels.map((model, index) => (
              <div
                key={index}
                className="p-6 bg-white shadow-lg rounded-lg border-l-4 border-sky-600 hover:bg-gray-100 transition duration-300"
              >
                <h3 className="text-xl font-semibold mb-4">{model.title}</h3>
                <p>{model.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <Faq faqs={faqs} />
        <LetsConnect />
      </div>
    </>
  );
};

export default page;
