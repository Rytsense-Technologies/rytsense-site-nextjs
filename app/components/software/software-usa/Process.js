import React from "react";

const Process = () => {
  const bannerColor = {
    background:
      "linear-gradient(90deg, rgba(9,41,71,1) 0%, rgba(22,100,173,1) 35%)",
  };

  return (
    <div className="bg-blue-900">
      {" "}
      {/* Adjust background color as per your design */}
      <div className=" mx-auto px-5 py-10 text-white" style={bannerColor}>
        <section className="body-font">
          <div className="flex flex-wrap">
            <div className="w-full sm:w-1/2 px-4">
              <section className="body-font">
                <div className="w-full mx-auto text-center">
                  <h1 className="text-4xl sm:text-5xl font-bold mb-6 sm:mb-10">
                    Our Software Development Process in USA
                  </h1>
                  <p className="leading-relaxed text-lg">
                    For software development in USA, we follow a systematic
                    approach, advancing through each stage of app design. We
                    craft software solutions that speak volumes about their
                    quality. Our team, comprising highly skilled software
                    developers, UI/UX designers, and strategists, works
                    collaboratively both locally and globally to deliver
                    tailor-made solutions. As the top mobile app development and
                    web Design Company in USA, we boast unparalleled potential
                    for strategic implementation. By combining agile software
                    development methodologies with meticulous design techniques,
                    we expertly navigate through the key stages of software
                    development.
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
                          Initially, we like to spend time with our clients,
                          talking about what they need. We then create a simple
                          plan for the software and its main features, without
                          using too much technical language. This helps us
                          understand the software better and prevents mistakes
                          later on. Once we know what the client wants,
                          including their companys goals and who they are aiming
                          for, we move on to the next stage of development.
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
                          After getting input from you, we make a plan. In this
                          phase, we figure out all the things we need for the
                          software, like what tools and equipment we will use,
                          what the project will include, and when we aim to
                          finish each part. We will ensure you stay updated at
                          each stage and inform you about the progress of your
                          software. We aim to stay flexible during this phase so
                          we can handle any unexpected problems that come up.
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
                          This is the building phase. Once we gather all project
                          requirements, we begin software development using
                          various methodologies such as Agile or Waterfall.
                          Throughout this phase, our project manager will keep
                          you updated and may suggest changes as needed. We will
                          thoroughly test multiple times to identify and address
                          any programming bugs.
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
                          Now comes the maintenance phase. Similar to anything
                          else, your newly developed software wont remain static
                          forever. Versions will evolve, markets will shift, and
                          customers will seek new features. This means your
                          software will need upgrades. We will stay in touch
                          with you to make sure the money you invested in
                          developing your software continues to pay off.
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
