import React from 'react'

import EducationBanner from "../../../components/industry/education/EducationBanner";

import EducationDevelopmentService from "../../../components/industry/education/EducationDevelopmentService";
import EducationFeatures from "../../../components/industry/education/EducationFeatures";
import EducationDevelopmentProcess from "../../../components/industry/education/EducationDevelopmentProcess";
import EducationWhyHire from "../../../components/industry/education/EducationWhyHire";
import EducationTechnologies from "../../../components/industry/education/EducationTechnologies";
import SponserSection1 from "../../../components/industry/education/SponserSection1";
import IndustryFaq from "../../../components/industry/common/Industryfaq";

const faq = {

    accordinarray: [
      {
        heading: "How to make an educational app?",
        passage:
          "While educational application development is a complex process, you can take care of certain factors for successful development such as:",
        passagearray: [
          "Determination of the Goal",
          "The Purpose Served by the App",
          "Keeping Resources Aligned with Expectations",
          "Reflecting the University Brand",
          "Testing the App",
        ],
      },
      {
        heading: "How much does it cost to make an educational app?",
        passage:
          "When you look into education app development, there are a number of different categories that come in the picture. So, the development cost would ultimately depend on the type of learning app you want to get made, its features set, the tech stack, and ultimately the location of your partnered e-Learning app development company. For instance, the cost to develop an app like Coursera can range from 76,500 to $103,000. On the other hand, the cost to develop an app like DuoLingo can range from $40,000 to $150,000.",
      },
      {
        heading:
          "How do I hire an app developer to make an educational app?",
        passage:
          "Rytsense is the one-stop destination for all the education learning app solutions. We have a team of skilled and experienced developers, designers, QAs, and testers who will work together to provide you the desired product. All you have to do is reach us to discuss your idea.",
      },
      {
        heading: "What is the role of education apps in business?",
        passage:
          "Education app development is a hot trend spreading like a wildfire globally. Not just for academics, education apps play an incredibly crucial role in enterprises as well. Here are some of the benefits which enterprises receive with eLearning app development",
        passagearray: [
          "Many industry giants such as Uber and Amazon consider that the speed of innovation and the scale of growth depends entirely on the constant learning and training of the employees.",
          "m-Learning helps employees to be updated with the latest information relevant to their fields so that they are ready to compete in the cut-throat market.",
          "It helps unite the global workforce for a company operating globally.",
        ],
      },
      {
        heading: "What are some best eLearning development tools?",
        passage:
          "Tools are such elements that make the whole app development process possible. So, here is the list of some impeccable e-learning app development tools which are popular among developers:",
        passagearray: [
          "Claro",
          "Articulate Storyline",
          "iSpring Suite",
          "SumTotal ToolBook",
          "Lectora",
          "Adobe Captivate",
          "IWEBKIT",
        ],
      },
    ],
  }

const page = () => {
  return (
    <div className="lg:px-60">
    <EducationBanner />
    <EducationDevelopmentService />
    <SponserSection1/>
    <EducationFeatures />
    <EducationDevelopmentProcess />
    <EducationWhyHire />
    <EducationTechnologies/>
    <IndustryFaq faq={faq}/>
  </div>
  )
}

export default page