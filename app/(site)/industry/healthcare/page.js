import React from 'react'
import MainBanner from "../../../components/industry/healthcare/MainBanner";
import TrustedCompany from "../../../components/industry/healthcare/TrustedCompany";

import QualitiesService from "../../../components/industry/common/QualitiesService";
import IndustryStat from "../../../components/industry/common/IndustryStat";
import DevelopmentService from "../../../components/industry/common/DevelopmentService";
import InnovativeTechnologies from "../../../components/industry/common/InnovativeTechnologies";
import DevelopmentProcess from "../../../components/industry/common/DevelopmentProcess";

import HealthRecognition from "../../../components/industry/healthcare/HealthRecognition";
import IndustryFaq from "../../../components/industry/common/Industryfaq";

import TechnologyStack from "../../../components/services/TechnologyStack";
import SuccessStories from "../../../components/industry/healthcare/SuccessStories";
import LatestBlogs from "../../../components/home/Latestblog"


const Services = {
    title:
      "Empower Digital Care with Our Innovative Healthcare Software Development Services",
    subTitle:
      "   From optimizing the present administrative process to improving efficiency and lowering operations costs, our custom healthcare software development services enable innovative disruptions for preventive, predictive, and protective healthcare. We make your software application the source of the healthcare revolution.",
    points: [
      {
        icon: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/custom-healthcare-software-development.svg",
        title: "Custom Healthcare Software Development",
        desc: "As a leader in healthcare app development services, we create engaging patient experiences through our custom healthcare solutions. Our team of skilled medical app developers has hands-on experience in building complex healthcare software solutions. Our intuitive medical software development services aim to improve patient care for better medical outcomes.",
      },
      {
        icon: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/laboratory-information-management.svg",
        title: "Laboratory Information Management System (LIMS)",
        desc: "As a part of our healthcare solution development services, we create customized healthcare application and software solutions for information management depending on the lab size and their specialties. To monitor laboratory storage and inventory, data integrity, security, and protocol executions, we, as a top-notch healthcare app development company, develop scalable and adaptable LIMS solutions.",
      },
      {
        icon: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/custom-mhealth-app.svg",
        title: "Custom mHealth App Development",
        desc: "Being an illustrious healthcare app development company, we create mHealth applications that are HL7, HIPAA, and FDA-compliant for remote health monitoring. Our mHealth apps allow healthcare organizations to deliver better care by streamlining workflow and ensuring smoother management of patient health records.",
      },
      {
        icon: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/electronic-health-record-software.svg",
        title: "Electronic Health Record Software",
        desc: "Being the best medical app development company, our experts are adept at building robust electronic health record (EHR) software systems with features that enable healthcare professionals to quickly access patient history and other medical data and stay connected to them via patient portals.",
      },
      {
        icon: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/telemedicine-app-development.svg",
        title: "Telemedicine App Development",
        desc: "As a top-notch telehealth app development company, we create end-to-end telemedicine software that enables contactless care and allows patients to communicate with doctors through video calling or instant messaging. Ensure quick and convenient access to patient care at reduced costs with our highly intuitive telemedicine app development services.",
      },
      {
        icon: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/custom-CRM-development-servc.svg",
        title: "Pharmacy Management System",
        desc: "We, as an illustrious healthcare application development company, add the latest functionalities to your existing pharmacy management software or create one from scratch to support real-time communication, fully integrated payment processing, and workflow automation. This enables the management of multiple stores in your healthcare center with an all-in-one pharmacy management software.",
      },
    ],
  };

  const stat = {
    points: [
      {
        heading: "13 Times",
        subHeading: "Awarded by Renowned Portals",
      },
      {
        heading: "75+",
        subHeading: "Custom Healthcare Projects Delivered",
      },
      {
        heading: "180+",
        subHeading: "Healthcare Software Experts Onboard",
      },
      {
        heading: "85%",
        subHeading: "Projects Delivered before Time",
      },
    ],
    buttonText: "Book a Free Consultation",
  };

  const qualities = {
    title:
      "We Are Your Trusted Partner for Healthcare App Development Services",
    para: "  We provide end-to-end healthcare application development services. As a renowned healthcare app development company, we integrate user-centric design principles into every stage, fostering intuitive interfaces for both medical practitioners and patients alike.",
    points: [
      {
        title: "Proven mHealth Experience",
        img: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/proven-mhealth-experience.webp",
        desc: "Our healthcare app developers have deep experience in developing cutting-edge mHealth solutions that allow users to track their diagnostic data, schedule appointments, find doctors, and manage their prescriptions. With our proven experience in mHealth, we bring a digital revolution to the healthcare ecosystem.",
      },
      {
        title: "Flexible Engagement Models",
        img: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/flexible-enagagement-models.webp",
        desc: "As the finest custom healthcare software development company, we offer flexible engagement models that are customized to our client’s specific needs, ensuring the best results for their healthcare software solutions. We allow our clients to choose their engagement models and delegate the entire project to us.",
      },
      {
        title: "Transparent and Agile Processes",
        img: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/transparent-and-agile.webp",
        desc: "Our healthcare app development process is entirely transparent, so our clients are aware of each stage of the development process and can put forth their feedback in real-time. As one of the prominent medical software companies, we use DevOps and agile methodology during our development cycle to ensure that changes are made quickly and efficiently.",
      },
      {
        title: "Innovative Solutions",
        img: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/innovative-solutions.webp",
        desc: "As one of the most reputed healthcare software companies, we use the latest technology trends and tools to build innovative medical software solutions that improve patient care and make health management easier. As renowned medical software development services experts, identify the most functional technology stack and build custom medical software development for healthcare businesses.",
      },
      {
        title: "Logically Designed Architecture",
        img: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/logically-designed-architecture.webp",
        desc: "Being one of the esteemed healthcare app development companies, we are aware of the importance of a well-planned architecture in ensuring the security of the solution and saving end users' time. The significance of your end goal to our healthcare software developers can be seen in our decision between monolithic and microservice architectures as per your business needs.",
      },
    ],
  };
  const tech = {
    title:
      "Innovative Technologies That Make Your Healthcare Products Fast and Secure",
    para: "Step into the future of healthcare with our cutting-edge suite of innovative technologies, meticulously crafted to transform the healthcare sector. As a leading healthcare software development company, our team creates advanced healthcare solutions that offer a seamless patient-centric experience.",
    points: [
      {
        img: "https://media.istockphoto.com/id/979321630/vector/blockchain-icon-concept-on-white-background-cryptocurrency-data-sign-design-vector.jpg?s=612x612&w=0&k=20&c=8ZXYbwtCogD3xbMeWGJwWYY6svWcRq4JvLZe83Wkadk=",
        title: "Blockchain",
        para: "As one of the leading healthcare solutions companies, we ensure the integrity and security of patient data with our state-of-the-art custom blockchain solutions. By leveraging blockchain in healthcare, we help our clients establish immutable and transparent records for all medical transactions.",
      },
      {
        img: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/ai-tech-icn.svg",
        title: "Artificial Intelligence (AI)",
        para: "Top-tiered medical software development companies like ours can harness the power of AI in healthcare to develop innovative solutions. Utilizing advanced AI algorithms, we analyze extensive patient data to predict potential health issues and tailor personalized treatment plans, revolutionizing patient care and outcomes.",
      },
      {
        img: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/big-data-tech-icon.svg",
        title: "Data Analytics",
        para: "By harnessing the power of data analytics in healthcare, our custom healthcare apps unlock the potential to identify emerging trends and patterns within vast datasets. This insight enables healthcare organizations to optimize their operational and management strategies, improving efficiency and patient outcomes.",
      },
      {
        img: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/ar-vr-tech-icon.svg",
        title: "AR/VR",
        para: "Being one of the most renowned medical app development companies, we help you revolutionize patient engagement and medical training with our immersive AR/VR solutions. From education to detailed anatomical visualizations, our AR/VR healthcare services not only elevate patient experience but also streamline healthcare operations.",
      },
      {
        img: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/iot-tech-icon.svg",
        title: "IoT",
        para: "By implementing IoT in healthcare, we help our clients seamlessly integrate devices for monitoring patient vitals, tracking their medication adherence, and providing real-time data insights. This IoT-driven approach elevates patient care by enabling remote monitoring and facilitating the early detection of diseases.",
      },
      {
        img: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/generative-ai-icn.svg",
        title: "Generative AI",
        para: "Our experts harness the transformative power of Generative AI in healthcare to revolutionize medical diagnostics, treatment planning, and patient engagement. Our Generative AI solutions synthesize vast datasets to generate predictive models, personalized treatment options, and innovative medical imaging techniques.",
      },
      {
        img: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/business-intelligence-icn.svg",
        title: "Business Intelligence",
        para: "By leveraging our Business Intelligence software in healthcare, we enable organizations to transform complex data into actionable insights, significantly enhancing operational efficiency and patient care with precise, data-driven decision-making.",
      },
    ],
  };
  const processes = {
    mainTitle: "Healthcare App Development Process We Follow",
    para: "At Appinventiv, we follow an agile healthcare app development process to craft feature-loaded, robust healthcare software and applications. From analyzing the requirements of your project to launching it, our experts work diligently to scale your business.",
    processes: [
      {
        id: "01",
        title: "Project Analysis",
        description:
          "Our experts understand the project's scope and create strategies for efficient healthcare IT consulting services. As one of the best healthcare IT services companies, we conduct thorough market research and competition analysis before initiating your project idea.",
      },
      {
        id: "02",
        title: "Design",
        description:
          "At the design stage, our UI/UX experts create an intuitive and user-friendly interface. This includes creating the graphic components through which the user will interact with your healthcare app.",
      },
      {
        id: "03",
        title: "Development",
        description:
          "As a leading IT consulting company, we adhere to the best healthcare app development practices, keeping all security and industry regulations in mind. This stage includes developing frontend and backend infrastructure and integrating the app with third-party APIs.",
      },
      {
        id: "04",
        title: "Testing",
        description:
          "Our QA team conducts end-to-end testing to eliminate errors or bugs in the healthcare application. The app undergoes a rigorous testing process for ensuring seamless functioning, strong security, and most importantly, an elevated user experience.",
      },
      {
        id: "05",
        title: "Project Launch",
        description:
          "Once your healthcare app has successfully passed the previously mentioned stages, our team of best healthcare app developers finally launches the app on the app stores, thus making it available for users to explore.",
      },
      {
        id: "06",
        title: "Maintenance and Support",
        description:
          "To ensure the flawless performance of your healthcare app, it is crucial that your app gets regular security and functional upgrades. As a part of their IT services for healthcare, we offer continuous post-app launch maintenance and support services for your app to remain fully functional.",
      },
    ],
  };

 const faq = {

    accordinarray: [
      {
        heading:
          "How much does mobile healthcare application development cost?",
        passage:
          "Getting an estimate of the cost of developing a healthcare app can only be achieved by having a clear understanding of what the application does, what features would it entail, the level of security it would require, and other related factors. For instance, a doctor appointment app like Zocdoc can cost you around $50,000-$100,000. On the other hand, a full-fledged telemedicine app development cost can even go up to $200,000. And the complete cost of a hospital management system can be around $150,000-$300,000. Get in touch with our team of healthcare mobile app development service experts now to get an exact estimate for your healthcare software development project.",
      },
      {
        heading:
          "Will you first create prototypes for testing before moving on to actual app development for healthcare?",
        passage:
          "To give the clients a realistic sense of the product as what they may expect in reality, our healthcare app developers construct a prototype. Before beginning with the actual development, we change the requirement sets based on the input to produce a final product that fits your expectations.",
      },
      {
        heading:
          "Do you provide security assurance and HIPAA compliance?",
        passage:
          "As a leading healthcare app development company, we guarantee that the software designs we develop will be highly secure and meet all HIPAA compliance requirements. Additionally, our healthcare app development service experts perform thorough security testing at regular intervals during the SDLC process, delivering absolutely bug-free software products for clients.",
      },
      {
        heading:
          "What if I return later to request a product improvement?",
        passage:
          "As a trusted healthcare app development company, we always welcome our clients to visit with such needs. We would be elated to help you with anything from a UX audit to enhancing the architecture of your software product or including new functionality.",
      },
      {
        heading:
          "What if I return later to request a product improvement?",
        passage:
          "As a trusted healthcare app development company, we always welcome our clients to visit with such needs. We would be elated to help you with anything from a UX audit to enhancing the architecture of your software product or including new functionality.",
      },
      {
        heading:
          "Which is the best platform for healthcare app development?",
        passage:
          "Your requirements and end goal will determine everything. Choose Android if your user base is spread throughout regions with a higher percentage of Android users, and iOS if it is confined to regions with a higher percentage of iPhone users. If you want to serve the needs of both audiences through custom software development services, you can also go for cross-platform development.",
      },
    ],
  }
const page = () => {
  return (
  <>
        <div className="bg-[#000000]">
       

        <MainBanner />

        <TrustedCompany textColor={"white"} />
        <DevelopmentService textColor={"white"} data={Services} />
        <IndustryStat data={stat} />
        <QualitiesService data={qualities} />
      </div>
      <InnovativeTechnologies data={tech} />
      <DevelopmentProcess data={processes} />
 
      <SuccessStories />
      <HealthRecognition />
    
      <TechnologyStack />
      <IndustryFaq faq={faq} />
      <LatestBlogs />
  </>
  )
}

export default page