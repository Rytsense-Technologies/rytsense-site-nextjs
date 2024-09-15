import { allCaseStudies } from "../../../mock/allCaseStudies";
import Image from "next/image";
import SingleBanner from "../../../components/case-study/single/SingleBanner";
import "../../../css/singlecaseclutch.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";

export async function generateStaticParams() {
  // Get all the paths we want to pre-render based on blog IDs
  return allCaseStudies.map((casestudy) => ({
    id: casestudy.id.toString(),
  }));
}

export default function CaseStudyDetail({ params }) {
  // Find the blog with the matching ID
  const casestudy = allCaseStudies.find(
    (casestudy) => casestudy.id === parseInt(params.id)
  );

  const bannerImage = casestudy.topimage;

  return (
    <>
      <SingleBanner heading={casestudy.heading} image={casestudy.topimage} />

      {/* About Section */}
      <div className=" container-singlecase mx-auto py-12 p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h2 className="text-5xl inter-semibold">
              About {casestudy.heading}
            </h2>
            <p className="inter-med  mt-5 leading-[3]">{casestudy.passage}</p>
          </div>
          <div className="flex singlepadding-left space-x-36">
            <div className="space-y-20">
              <p className="inter-bold text-gray-300">
                Industry:{" "}
                <span className="inter-med text-black flex">eCommerce</span>
              </p>
              <p className="inter-bold text-gray-300">
                Business Type:{" "}
                <span className="inter-med text-black flex">Startup</span>
              </p>
            </div>
            <div className="space-y-20">
              <p className="inter-bold text-gray-300">
                Industry:{" "}
                <span className="inter-med text-black flex">eCommerce</span>
              </p>
              <p className="inter-bold text-gray-300">
                Startup Build your :{" "}
                <span className="inter-med text-black flex">
                  Consult our experts
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex md:space-x-20 phone-singleimage">
          <div className="mt-8 ">
            <img
              src="/images/estimateproject/street-app-screen1.webp"
              alt="6th Street"
              className="w-fit h-fit"
            />
          </div>
          <div className="mt-8 ">
            <img
              src="/images/estimateproject/street-app-screen1.webp"
              alt="6th Street"
              className="w-fit h-fit"
            />
          </div>
          <div className="mt-8 ">
            <img
              src="/images/estimateproject/street-app-screen1.webp"
              alt="6th Street"
              className="w-fit h-fit"
            />
          </div>
          <div className="mt-8 ">
            <img
              src="/images/estimateproject/street-app-screen1.webp"
              alt="6th Street"
              className="w-fit h-fit"
            />
          </div>
        </div>
      </div>

      {/* Challenges Section */}
      <div className=" second-challenges-single mx-auto text-white py-5">
        <div className="container-singlecase py-12 p-10 mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 mb-16 mt-16">
          <div>
            <h2 className="text-5xl inter-semibold">
              The {casestudy.heading} App <br /> Alarming Challenges
            </h2>
          </div>
          {/* <div>
            <p className="leading-[2.5] text-base">{clientrequirements}</p>
          </div> */}
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="container-singlecase mx-auto py-12 p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h2 className="text-7xl inter-med  mt-20">{casestudy.heading}</h2>
          </div>
          <div>
            <p className="leading-[2] text-xl inter-semibold">
              <span className="font-bold text-3xl">
                <FontAwesomeIcon icon={faQuoteLeft} />
              </span>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.1
              <span className="font-bold text-3xl">
                <FontAwesomeIcon icon={faQuoteRight} />
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="container-singlecase process-singlecase mx-auto py-12 mb-36 p-10">
        <h2 className="text-5xl inter-semibold ">Our Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8 ">
          <div>
            <div className="text-9xl inter-bold text-gray-200 ">1</div>
            <div className="inter-semibold text-2xl">Conceptualization</div>
            <div className="inter-med text-lg">
              Competition Analysis <br />
              Customer Data Analysis
            </div>
          </div>
          <div>
            <div className="text-9xl inter-bold text-gray-200 ">2</div>
            <div className="inter-semibold text-2xl">Design</div>
            <div className="inter-med text-lg">
              User Journey Mapping <br />
              App Design Improvement
            </div>
          </div>
          <div>
            <div className="text-9xl inter-bold text-gray-200 ">3</div>
            <div className="inter-semibold text-2xl">Development</div>
            <div className="inter-med text-lg">
              Android App Development <br />
              iOS App Development
            </div>
          </div>
          <div>
            <div className="text-9xl inter-bold text-gray-200 ">4</div>
            <div className="inter-semibold text-2xl">Deployment</div>
            <div className="inter-med text-lg">
              App Store & Play Store Deployment <br />
              Post-Deployment Support
            </div>
          </div>
        </div>
      </div>

      {/* Full Width Image */}
      <div className="container-singlecase p-10 py-8 mx-auto h-full  ">
        <img
          src="/images/estimateproject/pexels-olly-3831888.jpg"
          alt="Process Image"
          className="w-full"
        />
      </div>

      {/* Project Challenges Section */}
      <div className="container-singlecase mx-auto py-12 p-10">
        <h2 className="text-5xl inter-semibold ">Our Project Challenges</h2>
        <div>
          {/* jjj */}
          <div className="container-singlecase mx-auto ">
            <div className="flex flex-row mobile-singlecase">
              {casestudy.challenges.map((challenge, index) => (
                <div
                  key={index}
                  className="flex-1 flex challenges-singlecase mb-8"
                >
                  <div className="text-9xl inter-bold text-gray-200 text-center">
                    {index + 1}
                  </div>
                  <div className="content-singlechallenges pt-3 flex flex-col justify-between h-full">
                    <div className="inter-semibold text-2xl">
                      {challenge.heading}
                    </div>
                    <div className="inter-med text-lg leading-[2]">
                      {challenge.passage}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Full Width Image */}
      <div className="my-8">
        <img
          src="/images/estimateproject/pexels-olly-3831888.jpg"
          alt="Challenges Image"
          className="w-full"
        />
      </div>

      <div className="container-singlecase mx-auto py-12 p-10">
        <h2 className="text-5xl inter-semibold text-center">
          Contrary to popular belief
        </h2>
        <div>
          <div className="flex pt-10 ">
            <div className="inter-med text-xl leading-[2] text-center  revamp-casestudysection">
              {casestudy.solution}
            </div>
          </div>
        </div>
      </div>
      {/* Tools and Technologies Section */}
      <div className="container-singlecase mx-auto py-12 p-10">
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h2 className="text-5xl inter-semibold">
              Tools and <br /> Technologies Used
            </h2>
          </div>
          <div>
            <div className="flex singlepadding-left space-x-20">
              <div className="space-y-20">
                <p className="inter-bold text-black">
                  For Indexing
                  <span className="inter-med text-black flex">Algolia SDK</span>
                </p>
                <p className="inter-bold text-black">
                  Business Type:{" "}
                  <span className="inter-med text-black flex">Startup</span>
                </p>
              </div>
              <div className="space-y-20">
                <p className="inter-bold text-black">
                  For Analytics
                  <span className="inter-med text-black flex">Firebase</span>
                </p>
                <p className="inter-bold text-black">
                  CI/CD
                  <span className="inter-med text-black flex">App Center</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* //Results */}
      <div className="container-singlecase mx-auto py-12 mb-36 p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h2 className="text-5xl inter-semibold">The Results</h2>
          </div>
          <div>
            <div className="flex singlepadding-left space-x-20 ">
              <div className="space-y-20">
                {/* <p className="inter-med text-black leading-[2]">{result}</p> */}
                <div className="flex mobile-results">
                  <p className="inter-semibold text-5xl text-black first-result">
                    1+ million
                    <span className="inter-med text-black flex text-lg">
                      iOS App Downloads
                    </span>
                  </p>
                  <p className="inter-semibold text-5xl text-black  sec-result">
                    1+ million
                    <span className="inter-med text-black flex text-lg">
                      Android App Downloads
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Final Call to Action Section */}
      <div
        className="relative bg-cover bg-center h-96 mb-20"
        style={{
          backgroundImage:
            "url('/images/estimateproject/pexels-ketut-subiyanto-4623519.jpg')",
          marginTop: "20px",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60 "></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white ">
          <h2 className="text-4xl inter-semibold">
            Kickstart Your Dream Project With Us
          </h2>
          <div className="w-full flex justify-center py-8">
            <button className="px-6 py-3 inter-semibold text-lg rounded border border-4 border-indigo-800  rounded-lg  hover:bg-white bg-indigo-800 hover:text-black text-white hover:border-indigo-700 animate-slide">
              Initiate a Partnership
              <span className="arrow text-lg hover:text-lg"> &gt;</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
