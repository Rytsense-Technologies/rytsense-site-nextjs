import React from "react";
import TechnologyStack from "../../../components/services/TechnologyStack";
import ClientReviews from "../../../components/services/ClientReviews";
import HeroSection from "../../../components/services/HeroSection";
import bannerImage from "../../../../public/images/services/web.png";

const processSteps = [
  {
    title: "1) Planning :-",
    description:
      "Gather all the information and plan the project, craft the idea for the website and CMS development.",
  },
  {
    title: "2) Web Designing:-",
    description:
      "Our front-end designers will craft a stunning and striking responsive website following the wireframe, UI/UX design to prototype.",
  },
  {
    title: "3) Define Content:-",
    description:
      "A website is incomplete without content. Thus, we will put informative content on the website and make it SEO-friendly.",
  },
  {
    title: "4) Development :-",
    description:
      "After deciding the website's objectives, it is time for development. The process is the pre-final stage of the website.",
  },
  {
    title: "5) Testing:-",
    description:
      "Our front-end designers will craft a stunning and striking responsive website following the wireframe, UI/UX design to prototype.",
  },
  {
    title: "6) Deployment :-",
    description:
      "A website is incomplete without content. Thus, we will put informative content on the website and make it SEO-friendly.",
  },
  {
    title: "7) Post Deployment & Maintenance :-",
    description:
      "After the website's launch, we will provide all support and answer every query after the deployment.",
  },
];

const technologies = [
  {
    title: "WordPress Web Development",
    description:
      "Our developer provides the best WordPress Web Development to create an efficient website.",
  },
  {
    title: "PHP",
    description:
      "With PHP, our proficient developers will deliver highly functional PHP websites to acquire the market.",
  },
  {
    title: "Custom Web Development",
    description:
      "We provide an excellent customization service that delivers optimization and dynamic websites.",
  },
  {
    title: "Drupal",
    description:
      "Get top-notch Drupal to receive beneficial information and insights.",
  },
  {
    title: "CakePHP",
    description:
      "Our CakePHP developer provides the best scalable website to boost your business.",
  },
  {
    title: "E-commerce And CMS Development",
    description:
      "The top development offers the top robust development service for creating a website.",
  },
  {
    title: "API Development",
    description:
      "Our core developers embrace API development to deliver the best insightful result.",
  },
  {
    title: "Progressive Web Application (PWA)",
    description:
      "PWA facilitates reliable and robust development for a seamless experience in the website.",
  },
];

const whyChooseUs = [
  "- Higher ROI",
  "- Scalable and Reliable",
  "- Easy To Use",
  "- Shorten Risks",
  "- Ease Access",
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
        <section className="mb-12 bg-white shadow-md rounded-lg p-10">
          <div className="my-4 text-lg leading-relaxed text-gray-700">
            The smartphone Apps have changed the definition of everyday activity
            in human life. It has been an essential part of our lives and why
            not? We do almost everything with the help of an app. The world is
            connected with mobile apps. In this really techie era, Rytsense
            Technologies can help you craft some excellent mobile applications
            for your business & start-ups. We are the leading tailor-made mobile
            app development company, serving the finest apps across the globe.
          </div>
        </section>

        <div className="p-10 text-left bg-white shadow-md rounded-lg mb-10">
          <h2 className="font-bold text-3xl text-indigo-800 mb-4">
            Process We Follow:
          </h2>
          <p className="mb-5 text-gray-700">
            How Our Experts Handle The Project Efficiently,
          </p>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <p className="mb-3 font-semibold text-gray-900">
                  <span className="font-bold">{step.title}</span>{" "}
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-10 text-left shadow-md rounded-lg">
          <h1 className="font-bold text-2xl text-gray-800 mb-4">
            The Technologies And Services We Use For Website & CMS Development
          </h1>
          <div className="space-y-6">
            {technologies.map((tech, index) => (
              <div key={index}>
                <h2 className="font-bold text-lg text-indigo-800">
                  {tech.title}
                </h2>
                <p className="text-gray-700 mt-1 mb-3">{tech.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <h1 className="font-bold text-2xl text-gray-800 mb-4">
              Why Choose Rytsense Technologies
            </h1>
            <h2 className="font-bold text-xl text-gray-600 mb-2">
              A Few Good Reasons:
            </h2>
            <p className="text-gray-700 mb-6">
              Our team holds knowledge in completing the projected goals and
              makes it possible to mold the ideas as per the market demands. We
              do not just make a website; we design a platform that takes your
              business to another level. Our front-end designers blend
              expertise, innovation & technology to design a masterpiece for
              you. Client satisfaction is what matters the most for us at
              Rytsense Technology.
            </p>

            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              {whyChooseUs.map((reason, index) => (
                <li key={index}>{reason}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <ClientReviews />
      <TechnologyStack />
    </>
  );
};

export default page;
