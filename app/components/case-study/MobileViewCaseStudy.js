"use client"
import React, { useEffect, useRef, useState } from "react";
import "../../css/mobileview.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";






const cardData = [
  {
    heading: "Option Trading ",
    appname:
      "Option Trading Platform - Revolutionizing Trading with Cutting-Edge Innovation",
    image: 'url("/images/casestudy/dooption-trading.png")',
    topimage: "/images/casestudy/dooption-trading.png",
    logo: "",
    languages: ["React", "Dotnet", "Redux", "Tailwind", "MySQL", "Websocket"],
    sub: "Trading Platform",
    num: 4,
    passage:
      "Option Trading redefines trading platforms by seamlessly integrating cutting-edge technology and user-centric design principles , Option Trading offers a holistic trading solution for both novice and experienced traders.",
    clientrequirements:
      "Navigate through the platform effortlessly with an intuitive interface designed for maximum usability and efficiency.Trading experience with customizable charting options, allowing to visualize market data.Utilize a wide range of advanced analysis tools and indicators to make informed trading decisions and stay ahead of the market trends.Demo and real accounts to suit your trading needs, with seamless transitions between the two for a hassle-free experience.Get Insights and control over trading activities with comprehensive admin and affiliate dashboards, providing real-time data and analytics. Trading logics backed by powerful algorithms, enhancing trading strategies and optimizing returns.Prompt assistance and support from chat bots, available round-the-clock to address any queries or concerns",
    clientsrc: "/images/area-chart.png",
    challenges: [
      {
        heading: "Smooth Chart Rendering with Reduced Latency",
        passage:
          "Addressing the need for seamless chart rendering, we prioritized minimizing latency to enhance user experience. Through optimization techniques and leveraging cutting-edge technologies, we endeavored to deliver swift chart rendering without compromising on quality.",
      },
      {
        heading: "Enabling Smooth Trading Across Stocks",
        passage:
          "Ensuring fluid trading experiences across diverse stocks demanded meticulous attention to transitions and user interactions. By fine-tuning trading mechanisms and refining user interfaces, we aimed to streamline trading processes and empower users with intuitive navigation and seamless transactions.",
      },
    ],
    result: [
      {
        value: "1Mn+",
        description: "IOS App Downloads",
      },
      {
        value: "2Mn+",
        description: "Android App Download",
      },
    ],
  },
  {
    heading: "AI Chat Bot",
    appname:
      "AI Chat Bot - Building an Intelligent Chatbot for IT Service Requirements",
    image: 'url("/images/casestudy/aibot.png")',
    topimage:
      "/images/casestudy/dooption-trading.png",
    logo: "",
    languages: ["React", "Dotnet", "Redux", "Tailwind", "MySQL", "Websocket"],
    sub: "AI Chat Bot",
    num: 4,
    passage:
      "We delveloped an intelligent chatbot tailored for an IT service company.The chatbot will seamlessly blend technical expertise with business acumen, streamlining the requirements-gathering process and enhancing customer satisfaction.",
    clientrequirements:
      "Using the company’s dashboard ,customers use to share and access informations and records related to various accounting operations.The metrics in reports accessed in such a manner were limited in coverage due to which the customers had to separately reach out to customer support team to get additional details which were not covered in report. As a result for all the custom report requirements the customers have to raise a ticket or email the customer support team or should wait long queues on the phone until a customer service agent was assigned to them. This lead to delayed first response as well as high turn around time in getting desired result. The customer experience was absolutely poor leading to huge churn rate. In the need for efficient & scalable solution TMF approached Rytsense to partner in building an AI Based chatbot which can handle dynamic queries from customers & answer with relevant records from the database.",
    clientsrc: "/images/casestudy/aibot.png",
    solution:
      "We decided to develop an end to end solution to address this issue, and zeroed down to develop a customized chat bot .We then started building the bot using Google’s Dialogflow as per client’s insistence to ensure data security,scalability & seamless real time experience. The bot was trained to identify the user intents and context leveraging NLP. The team trained the bot on 100+ intents & 1000+ utterances so that it can answer user queries efficiently.The intents and utterances were gathered from proprietary data received from the team. We later integrated AI Chatbot with TMFs platform back-end system using APIs ,so the bot can seamlessly access the required datas. The Bot was made available to customers in phases. The Bot was made to transfer calls to human agents when it was required to handle complex queries for which it was not trained.",
    performs:
      "The bot was integrated with TMFs SaaS Product.Only registered users can access the bot to ensure Fhigh level of security as it handles sensitive data.The authenticated users can access the bot to get Fthe queries answered",
    challenges: [
      {
        heading: "AI Chatbot Reduced Customer Support Tickets by 80%",
        passage:
          "We decided to develop an end to end solution to address this issue, and zeroed down to develop a customized chat bot .We then started building the bot using Google’s Dialogflow as per client’s insistence to ensure data security,scalability & seamless real time experience. The bot was trained to identify the user intents and context leveraging NLP. The team trained the bot on 100+ intents & 1000+ utterances so that it can answer user queries efficiently.The intents and utterances were gathered from proprietary data received from the team. We later integrated AI Chatbot with TMFs platform back-end system using APIs ,so the bot can seamlessly access the required datas. The Bot was made available to customers in phases. The Bot was made to transfer calls to human agents when it was required to handle complex queries for which it was not trained.",
      },
    ],
    result: [
      {
        value: "2Mn+",
        description: "IOS App Downloads",
      },
      {
        value: "500k",
        description: "New Users Acquired",
      },
    ],
  },
  {
    heading: "SupportXDR",
    appname:
      "SupportXDR - Enhancing Browsing Efficiency with SupportXDR AI Browser extension",
    image: 'url("/images/casestudy/suprtxdr.png")',
    topimage:
      "/images/casestudy/dooption-trading.png",
    logo: "",
    languages: ["React", "Dotnet", "Redux", "Tailwind", "MySQL", "Websocket"],
    sub: "AI Browser Extension",
    num: 4,
    passage:
      "SupportXDR aims to revolutionize the way users manage bookmarks and access relevant content. SupportXDR steps in to streamline the process, making it effortless and efficient",
    clientrequirements:
      "Dedicateddevelopmentteam  is a leading platform to hire developers at a lesser cost. Their clientele includes businesses from various domains, ranging from startups to large enterprises. To improve efficiency and enhance customer interactions,they decided to develop an AI-powered chatbot capable of understanding client needs, collecting detailed requirements, and providing relevant information.        ",
    clientsrc: "/images/casestudy/sprt3.png",
    challenges: [
      {
        heading: "Powerful Bookmark Management",
        passage:
          "Users can save and organize their favorite URLs effortlessly,The system ensures easy retrieval and categorization of bookmarks.",
      },
      {
        heading: "Smart Keyword Search:",
        passage:
          "SupportXDR’s intelligent browser AI extension scans websites for keywords(e.g., “Chat,” “Support,” “Knowledge Base”).Users never miss relevant content",
      },
      {
        heading: "Organized Business Resources:",
        passage:
          "Enhanced dashboard for businesses to organize everyday resources.Seamless sharing within the organization.",
      },
      {
        heading: "Seamless Browser Integration:",
        passage:
          "Available as an extension/plugin for popular browsers (Google Chrome,Microsoft Edge, Mozilla Firefox, Brave, and Opera).Ensures compatibility with users’ preferred browsers.Access your personalized dashboard with neatly categorized bookmarks.",
      },
    ],
    result: [
      {
        value: "3Mn+",
        description: "IOS App Downloads",
      },
      {
        value: "500k",
        description: "Android App Sownload",
      },
    ],
  },

  {
    heading: "TopGrad",
    appname: "TopGrad - Employment Web App",
    image: 'url("/images/casestudy/topgrad.png")',
    topimage:
      "/images/casestudy/dooption-trading.png",
    logo: "/images/topGrad-Logo.svg",
    languages: ["Angular", "Node Js", "Express", "Bootstrap", "Mango DB"],
    sub: "Job",
    num: 2,
    passage:
      "TopGrad, is a platform that provides job listings and services for both job seekers and employers.",
    clientrequirements:
      "Our Rytsense Tech team pitched to develop web app to provide job seekers with an intuitive and user-friendly interface, allowing them to effortlessly search and apply for jobs. On the other hand, employers could conveniently post job listings and manage applications. Our team crafted features that set the application apart in the job listing realm. Our intuitive interface ensures a smooth job search and application process, enhancing the overall user experience. We ensured seamless posting and management of job listings for employers, simplifying their recruitment workflows. Implementing a mobile-first design has been key, guaranteeing an exceptional user experience across all devices. These features solidify TopGrad as the go-to platform for both job seekers and employers",
    clientsrc: "/images/banner.png",
    imagearray: [
      "/images/iphone_2.084e3e8.png",
      "/images/iphone_3.4d01a88.png",
    ],
    feature1:
      "The web app has the features of Resume Building, Candiadate Assessment, Job search and Invitation, Recruitment solution, Profile Authentication, Application Tracking, Candidate Shortlisting, Artificial intelligence driven job exploration and Dispatch a job proposal",
    result: [
      {
        value: "$1Mn+",
        description: "Funding Received",
      },
      {
        value: "500k",
        description: "Mobile app download",
      },
    ],
  },
  {
    heading: "GATEWAY STREAM",
    appname: "GATEWAY STREAM - one-stop app for locals and visitors",
    image: 'url("/images/1689749521152.jfif")',
    topimage:
      "/images/casestudy/dooption-trading.png",
    logo: "/images/logodsfsd.png",
    languages: ["Android", "iOs", "Angular"],
    sub: "One Stop App",
    num: 3,
    passage:
      "Transforming the Zimbabwe travel experience, providing a one-stop app for locals and visitors. The upgrade aimed to seamlessly offer diverse services, simplifying user access even during the global pandemic. ",
    clientrequirements:
      "As a player in the hospitality industry, the client recognized evolving travel trends and the time constraints faced by modern tourists. To address this, the clieny wants a comprehensive range of services through a single app, upgrading it with features to become a go-to solution for users in various situations, including the challenges of the global pandemic. The goal was to simplify access to diverse services for both incoming visitors and local citizens in Zimbabwe, eliminating the need for multiple app downloads.",
    clientsrc: "/images/1689749521152.jfif",
    imagearray: [
      "/images/unnamed.webp",
      "/images/unnamed (6).webp",
      "/images/unnamed (5).webp",
      "/images/unnamed (4).webp",
    ],
    feature1:
      "The modified app now enables users to discover top hotels, homestays, holiday packages, make ride bookings, order food online, shop for items and groceries, find ongoing events and venues, purchase insurance, and bid for hotel package deals. The incorporation of an e-commerce portal aimed to facilitate online shopping, particularly crucial during the pandemic. ",
    result: [
      {
        value: "1Mn+",
        description: "IOS App Downloads",
      },
      {
        value: "800k",
        description: "Mobile app download",
      },
    ],
  },
  {
    heading: "Duelo Betting ",
    appname: "Duelo Betting Platform - An Online Sports Betting Platform",
    image: 'url("/images/duelo-mid.webp")',
    topimage: "/images/duelo-deck-1-320.webp",
    logo: "",
    languages: ["Swift", "ROR", "Angular", "PostgraSql", "AWS"],
    sub: "Sports",
    num: 5,
    passage:
      "Online Sport betting platform allows users to complete with their friends in legal, peer-to-peer challenges where they could win real rewards",
    clientrequirements:
      "Ralph, an American entrepreneur with a passion for sports, came up with the idea for a sports betting website at a time when betting was strictly regulated in the U.S. These regulations drove sports enthusiasts to offshore websites, and Ralph intended to capture a portion of that market with Duelo. The platform he envisioned would allow users to compete with their friends in legal, peer-to-peer challenges where they could win real rewards without risking their own money. In order to compete with offshore betting platforms where users could gamble actual money. When exploring potential tech partners to build the platform, Ralph was particularly impressed by Rytsense Tech. Then Rytsense Tech BA and UX teams worked alongside Ralph’s team to design a sticky, gamified, user-friendly platform",
    clientsrc: "/images/duelo-macbook.webp",
    feature1: `Browse upcoming sporting events for specific types of sports,
                Challenge a friend (or multiple friends),
                Easily create challenges using ready-made templates designed according to the rules and parameters for different types of sports,
                Grow their profile and tout their wins using a gamified system,
                Engage the community to make new friends
                `,
    feature2heading: "Receiving and Updating the Sports Data",
    feature2:
      "A sports betting site relies on a constant stream of data about sporting stats and game results, which must be received and interpreted by the platform to identify the winners of each challenge. The sports data—a purely static, informational feed—came from a system called Donbest. Rytsense Tech created a parsing engine that allowed granular control over which data to import into the platform. That, in turn, enabled users to view information about upcoming events, and the engine would determine the winner of each challenge as soon as the Donbest feed provided the results of a given match.",
    feature3heading: "Gamification via User Profiles",
    feature3:
      "One key component of the gamification strategy was to provide each user with a dynamic profile that displayed their successes and incentivized future engagement. Duelo’s gamification engine prompted users to complete activities to advance their profiles to higher levels, just as they would in a video game. The engine kept track of their activities and when they met all the requirements, they would advance to the next level. Rytsense Tech tied this data to a Hubspot-based workflow engine to ensure those events and activities triggered emails from the platform celebrating each achievement and guiding users to engage further. It also triggered alerts reminding users when an action was required on the platform.",
    result: [
      {
        value: "$2Mn+",
        description: "Funding Received",
      },
      {
        value: "900k",
        description: "Mobile app download",
      },
    ],
  },
];

const infiniteCardData = [...cardData, ...cardData];

const MobileViewCaseStudy = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = cardData.length;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalSlides - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === totalSlides - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="carouselContainer">
      <div
        className="carouselInner"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {infiniteCardData.map((card, index) => (
          <div key={index} className="carouselSlide">
            <div className="carouselCard">
              <div
                className="carouselCardImage"
                style={{ backgroundImage: card.image }}
              >
                <img src={card.topimage} alt={card.heading} style={{ display: 'none' }} />
              </div>
              <div className="flex flex-col gap-2 mt-2">
                    <span className="bg-gray-200 text-gray-800 w-28 text-center text-xs font-medium px-2.5 py-0.5 rounded-full">
                      {card.sub}
                    </span>
                    <div className="text-xl font-bold text-left">{card.heading}</div>
                    <span className="text-indigo-800 cursor-pointer font-semibold text-left">
                      Read more →
                    </span>
                  </div>
            </div>
          </div>
        ))}
      </div>
      <div className="carouselControls">
        <button onClick={handlePrev} className="carouselControlPrev">
          &#9664;
        </button>
        <button onClick={handleNext} className="carouselControlNext">
          &#9654;
        </button>
      </div>
    </div>
  );
  };
  
  export default MobileViewCaseStudy;
