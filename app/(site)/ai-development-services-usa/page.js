import React from "react";

import AIBanner from "../../components/home-service/ai/AIBanner";
import Expertise from "../../components/software/Expertise";
import AIService from "../../components/home-service/ai/AIServices";
import AIModels from "../../components/home-service/ai/AIModels";
import AIPartnershipModels from "../../components/home-service/ai/AIPartnershipModels";

import Faq from "../../components/common/faq/Faq";
import LetsConnect from "../../components/common/LetsConnect";


const page= () => {
  const faqs = [
    {
      question: "Why should I opt for custom AI development?",
      answer:
        "Choosing an AI development company in India like Rytsense Technologies ensures that you receive customized solutions that meet your specific business needs. Our AI developers in India are skilled in creating AI applications that integrate seamlessly with your existing systems, providing a competitive edge in your industry.",
    },
    {
      question: "How does AI development benefit my business?",
      answer:
        "AI development can significantly enhance your business by improving efficiency, decision-making, and automating repetitive tasks. Our AI developers in India create solutions that help you analyze data, stay competitive, and deliver personalized experiences to your customers.",
    },
    {
      question:
        "What sets Rytsense Technologies apart from other AI development companies in India?",
      answer:
        "As one of the leading AI development companies in India, Rytsense Technologies offers comprehensive AI services, from consulting to deployment. We are also recognized among the top chatbot companies in India, known for our expertise in creating intelligent chatbots that improve customer engagement and streamline operations. ",
    },
    {
      question: "What type of custom AI solutions does your company offer?",
      answer:
        "Rytsense Technologies, a leading AI development company in India, offers customized AI solutions including machine learning, natural language processing, computer vision, chatbot development, and predictive analytics, tailored to automate processes, analyze data, and enhance customer support.",
    },
    {
      question: "How much does it cost to develop AI software?",
      answer:
        "The cost varies widely based on the project's complexity and scope, ranging from a few thousand to hundreds of thousands of dollars. For an accurate estimate, consult with our AI development company in India based on your specific project needs.",
    },
    {
      question: "How long does it take to develop a custom AI solution?",
      answer:
        "The development timeline depends on the project's complexity, team expertise, and data availability. It can range from a few weeks to several months, and discussing the specifics with our AI developers in India will provide a clearer timeline.",
    },
    {
      question: "Which AI program is best?",
      answer:
        "The best AI program depends on your requirements. For general machine learning, Python libraries like TensorFlow and PyTorch are excellent. For natural language processing, OpenAI's GPT models are highly recommended. Our AI developers in India can help you choose the best program for your project.",
    },
  ];

  // useEffect(() => {
  //   setTimeout(() => {
  //     document.title =
  //       "Artificial Intelligence (AI) development services in USA";
  //   }, 1000);
  // }, []);

  return (
    <>

    
      <AIBanner />
      <Expertise />
      <AIService />
      <AIModels />
      <AIPartnershipModels />
    
      <Faq faqs={faqs} />
      <LetsConnect />
    
    </>
  );
};

export default page;
