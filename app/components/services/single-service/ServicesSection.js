import React from 'react'
import Link from 'next/link';

const services = [
    {
      title: 'Software Development Services',
      description: 'We specialize in crafting custom software solutions that are designed to address your specific business requirements. Our development process involves in-depth analysis, strategic planning, and collaborative prototyping to ensure that the final product aligns perfectly with your vision.',
      link: '/android-app-development',
    },
    {
      title: 'Blockchain Application Development',
      description: 'Our blockchain consultants are here to guide you through the process of understanding how blockchain can benefit your business. We provide in-depth analysis, feasibility studies, recommendations to help you determine the best approach to integrating blockchain into your operations.',
      link: '/blockchain-development',
    },
    {
      title: 'Cloud Services',
      description: 'Our cloud experts work closely with you to understand your business objectives and devise a tailored cloud strategy. We provide insights, recommendations, and roadmaps to help you choose the right cloud platforms, optimize your infrastructure, and align your IT resources with your business.',
      link: '/business-intelligence',
    },
    {
      title: 'Data Science Analytics Service',
      description: 'We help you make sense of your data through advanced data analysis techniques. Our team performs exploratory data analysis, identifies patterns, trends, and correlations, and provides comprehensive visualizations to uncover meaningful insights.',
      link: '/data-analytics',
    },
    {
      title: 'Digital Transformation Services',
      description: 'We work closely with you to develop a digital strategy that aligns with your business objectives. Our consultants assess your current digital landscape, identify opportunities for improvement, and devise a roadmap for successful digital transformation.',
      link: '/salesforce-development',
    },
    {
      title: 'Business Intelligence Service',
      description: 'We specialize in crafting custom software solutions that are designed to address your specific business requirements. Our development process involves in-depth analysis to ensure that the final product aligns perfectly with your vision.',
      link: '/business-intelligence',
    },
    {
      title: 'AI & ML Software Development Services',
      description: 'Our AI and ML experts work closely with you to understand your business objectives and identify opportunities for AI and ML integration. We provide strategic guidance to help you leverage the full potential of AI and ML in your organization.',
      link: '/artificial-intelligence-and-machine-learning',
    },
    {
      title: 'SAAS Development Service',
      description: 'Our SaaS experts work closely with you to define a comprehensive SaaS strategy aligned with your business goals. We analyze your target market and identify opportunities for differentiation. We provide strategic guidance on pricing models.',
      link: '/salesforce-development',
    },
    {
      title: 'Mobile Application Development',
      description: 'We understand that each business has unique requirements. Our team takes a collaborative approach, working closely with you to understand your goals and functionality requirements. We then design and align perfectly with your vision.',
      link: '/mobile-app-development',
    },
    {
      title: 'Game Development',
      description: 'We specialize in developing custom games tailored to your specific requirements. From concept design and storyline development to character creation, we work closely with you to ensure that your game captures your vision.',
      link: '/game-development-company',
    },
    {
      title: 'VR Development',
      description: 'We specialize in developing tailor-made VR applications across various industries, including entertainment, education, and training. Our team takes your vision and ensures that every aspect of your VR application exceeds your expectations.',
      link: '/virtual-reality-mobile-game-application-development-company',
    },
    {
      title: 'Marketplace Development',
      description: 'We specialize in building customized marketplace platforms from scratch, tailored to your specific requirements. Our team collaborates closely with you to understand your business goals and target audience.',
      link: '/nft-marketplace-development-company',
    },
  ];
  

const ServicesSection = ({ centerTitle = true }) => {
  return (
    <div className="we-offer">
      <div
        className={`flex flex-col gap-3 text-center ${
          centerTitle ? "items-center" : ""
        }`}
      >
        <div className="relative">
          <h1 className="mt-7 text-3xl font-bold md:text-3xl md:mt-10 ">
            Service We Offer
          </h1>
          <h1
            className="text-5xl font-bold top-0 md:text-7xl text-center"
            style={{
              WebkitTextStroke: "2px",
              WebkitTextStrokeColor: "#F0F0F0",
              color: "white",
              position: "absolute",
              zIndex: "-1",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            Services
          </h1>
        </div>
      </div>
      <div className="flex flex-wrap justify-center ">
        {services.map((service, index) => (
          <div
            key={index}
  
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.5 }}
            className="max-w-sm m-4 rounded overflow-hidden shadow-lg bg-slate-100 transition duration-300 hover:scale-105"
          >
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">
                {service.title}
              </div>
              <p className="text-gray-700 text-base">
                {service.description}
              </p>
             
                <Link href={service.link} className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold rounded justify-center px-10 py-1 mt-3 mx-auto">
                  More
                </Link>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ServicesSection