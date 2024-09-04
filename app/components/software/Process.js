import React from "react";

const Process = () => {
  const bannerColor = {
    background:
      "linear-gradient(90deg, rgba(9,41,71,1) 0%, rgba(22,100,173,1) 35%)",
  };

  return (
    <div className="bg-blue-900"> {/* Adjust background color as per your design */}
      <div className=" mx-auto px-5 py-10 text-white" style={bannerColor}>
        <section className="body-font">
          <div className="flex flex-wrap">
            <div className="w-full sm:w-1/2 px-4">
              <section className="body-font">
                <div className="w-full mx-auto text-center">
                  <h1 className="text-4xl sm:text-5xl font-bold mb-6 sm:mb-10">
                  Our Custom Software Development Process in USA
                  </h1>
                  <p className="leading-relaxed text-lg">
                  For software development in the USA, we follow a systematic approach, advancing through each stage of app design. We craft software solutions that speak volumes about their quality. Our team, comprising highly skilled software developers, UI/UX designers, and strategists, works collaboratively both locally and globally to deliver tailor-made solutions. As the top custom software development company in USA, we boast unparalleled potential for strategic implementation. By combining agile software development methodologies with meticulous design techniques, we expertly navigate through the key stages of software development.
                  </p>
                </div>
              </section>
            </div>
            <div className="w-full sm:w-1/2 px-4">
              <section className="body-font">
                <div className="flex flex-col">
                  <div className="flex relative pt-10 pb-10 sm:items-center md:w-2/3 mx-auto">
                    <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                      <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                    </div>
                    <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-black text-white relative z-10 title-font font-medium text-sm">
                      1
                    </div>
                    <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                      <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                        <h2 className="font-bold title-font mb-1 text-xl">
                          Clear understanding of client needs
                        </h2>
                        <p className="leading-relaxed">
                        We engage closely with our clients in the USA and India to understand their unique business requirements. This helps us create a simple plan for the software and its main features, ensuring clarity and preventing mistakes later on.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
                    <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                      <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                    </div>
                    <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-black text-white relative z-10 title-font font-medium text-sm">
                      2
                    </div>
                    <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                      <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                        <h2 className="font-bold title-font  mb-1 text-xl">
                          Set clear goals & plans
                        </h2>
                        <p className="leading-relaxed">
                        We develop a detailed plan that includes project timelines, tools, and technologies required to meet your goals. Our flexible approach allows us to handle any unexpected challenges efficiently.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
                    <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                      <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                    </div>
                    <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-black text-white relative z-10 title-font font-medium text-sm">
                      3
                    </div>
                    <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                      <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                        <h2 className="font-bold title-font  mb-1 text-xl">
                          Building
                        </h2>
                        <p className="leading-relaxed">
                        Using methodologies like Agile and Waterfall, we execute the software development process while ensuring the highest standards of quality. Our project managers keep you updated and suggest changes as needed, thoroughly testing the software to identify and address any bugs.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
                    <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                      <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                    </div>
                    <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-black text-white relative z-10 title-font font-medium text-sm">
                      4
                    </div>
                    <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                      <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                        <h2 className="font-bold title-font  mb-1 text-xl">
                          Maintenance
                        </h2>
                        <p className="leading-relaxed">
                       Maintenance post-development, we offer continuous support to keep your software up-to-date with market trends and technological advancements, ensuring your investment continues to pay off.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Process;
