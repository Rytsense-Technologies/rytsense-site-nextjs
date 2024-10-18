import React from "react";

const DetailedMessageSection = () => {
  return (
    <section className="text-gray-600 body-font py-10">
      <div className="container mx-auto px-5 md:py-12 py-8 flex flex-col items-center">
        
        {/* First block: Text on the left, Image on the right */}
        <div className="flex flex-col md:flex-row items-center mb-12">
          <div className="md:w-1/2 md:pr-8 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl mb-6 font-bold text-gray-900 leading-tight">
              Looking to Scale Your Business with Cutting-Edge Technology?
            </h2>
            <p className="text-base sm:text-lg leading-relaxed max-w-md">
              Hire software developers in India with Rytsense Tech for quality, scalability, and expertise. Our developers specialize in delivering innovative, tailored solutions designed to meet your specific business needs.
            </p>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0">
            <img 
              src="https://res.cloudinary.com/dlg3i3ari/image/upload/v1729160160/1692711926359_nr5r9o.jpg" 
              alt="Cutting-edge technology" 
              className="w-full max-w-sm mx-auto"
            />
          </div>
        </div>

        {/* Second block: Image on the left, Text on the right */}
        <div className="flex flex-col md:flex-row-reverse items-center mb-12">
          <div className="md:w-1/2 md:pl-8 text-center md:text-left">
            <p className="text-base sm:text-lg leading-relaxed max-w-md">
              Rytsense Tech provides flexible engagement models, allowing you to hire dedicated developers in India for long-term projects or freelance experts for short-term development goals. No matter the scale of your project, we ensure top-tier quality with timely delivery, giving your business the competitive edge it needs.
            </p>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0">
            <img 
              src="https://res.cloudinary.com/dlg3i3ari/image/upload/v1729160262/1_XJyzYXaNAF96nyR1GCZ0-w_vczh6t.jpg" 
              alt="Team of developers" 
              className="w-full max-w-sm mx-auto"
            />
          </div>
        </div>

        {/* Third block: Text on the left, Image on the right */}
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8 text-center md:text-left">
            <p className="text-base sm:text-lg leading-relaxed max-w-md">
              Ready to take your project to the next level? Hire software developers in India today for an unparalleled development experience.
            </p>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0">
            <img 
              src="https://res.cloudinary.com/dlg3i3ari/image/upload/v1729160384/gradient-level-up-illustration_23-2150126718_nizbdv.jpg" 
              alt="Successful project" 
              className="w-full max-w-sm mx-auto"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default DetailedMessageSection;
