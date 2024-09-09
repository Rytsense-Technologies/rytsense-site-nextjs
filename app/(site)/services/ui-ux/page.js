import React from "react";
import TechnologyStack from "../../../components/services/TechnologyStack";
import ClientReviews from "../../../components/services/ClientReviews";
import HeroSection from "../../../components/services/HeroSection";
import bannerImage from "../../../../public/images/services/ui.webp";
import UXDPractices from "../../../components/services/uiux/UXDPractices";
import DesignSprintWorkshop from "../../../components/services/uiux/DesignSprintWorkshop";
import Faq from "../../../components/common/faq/Faq";

export const metadata = {
  title:
    "UI/UX Development - Rytsense Technologies",
  description:
    "",
  // alternates: {
  //   canonical: "https://www.rytsensetech.com/",
  // },
};

const faqs = [
  {
    question: "What is the difference between UI and UX Design?",
    answer:
      "UX stands for User Experience. It involves analyzing and understanding the user interaction with the features of an app. The aim of UX app design is to turn users into loyal customers by providing a splendid visual journey. On the other hand, UI is the acronym for User Interface. It is all about the actual presentation of the app while determining how every element in the app will align on the page in relation to one another. This particularly includes things like- icons, colours, buttons, fonts, images, etc. The primary goal of UI design is to provide the best interaction possible.",
  },
  {
    question: "What are the expected UX Deliverables?",
    answer:
      "UX Design works on the premise of design thinking and generates a set of deliverables. Through the various stages of design process, UX practitioners empathise with end-users, identify their unique needs, brainstorm creative ideas, create rapid prototypes and validate the end designs. UX deliverables are the output generated at the end of the design process which helps designers communicate with stakeholders, key executives and team members.",
  },
  {
    question: "How important is UX and what are the basics of UX Design?",
    answer:
      "User experience plays a fundamental role in an app’s success. Majority of users prefer simple and minimal design with an added ease in navigation. To deliver an astounding experience, UX strategists must focus on behavioural patterns, align business and customer goals, craft designs that guarantee usability, accessibility and excite users to take action. We follow a step by step process to craft meaningful experiences and make everything look wonderful around us.",
  },
  {
    question: "How to create an enticing User Experience?",
    answer:
      "A comprehensive understanding of Design thinking coupled with UX design process is not enough to create meaningful experiences. More often than not, UX designers make common mistakes that deter the success of the app. Besides following a user-centric approach every step of the way, one should also master the art of visual storytelling. With a plethora of options, available customers look forward to interacting with applications that not only serve them with the finest of services but also gives them a story to live.",
  },
];

const page = () => {
  return (
    <>
      <HeroSection
        title={"Mobile App User Interface & Experience Design"}
        subTitle={
          "With our defined approach and step by step process, we deliver beyond what's expected. Our team doesn’t limit itself to delivering a product. We craft brilliance together and deliver experiences that are ever-evolving."
        }
        heroImage={bannerImage}
      />
      <UXDPractices />
      <DesignSprintWorkshop />
      <Faq faqs={faqs} />
    </>
  );
};

export default page;
