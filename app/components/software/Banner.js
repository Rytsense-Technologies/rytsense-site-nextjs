import React from 'react';
import RanksClutch from '../../components/common/RanksClutch';

import ClucthBannerContactUs from '../../components/contact/ClutchBannerContactUs';

const Banner = () => {
  
  return (
    <section className="px-6 sm:px-20 lg:py-40 py-28 body-font">
      <div className=" flex flex-wrap">
        <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-3/5 sm:w-2/3 content-start sm:pr-10">
          <div className="w-full sm:p-4 px-4 mb-6 text-[#092947]">
            <h1 className="md:text-left">
              <span className="text-4xl sm:text-5xl font-medium">
              Best <span className='font-bold'>Software <br/> Development</span> Company <br/> in USA
              </span>
              <br />
              <div className="text-base sm:text-lg mt-4 inter-semibold banner-textsecond">
                <p></p>
              </div>
            </h1>
          </div>
          <RanksClutch />
        </div>
        <div className="lg:w-2/5 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
          <ClucthBannerContactUs
            bgColor="bg-sky-100"
            subText="We’d Love to hear from you"
            buttonText="Consult with an Expert"
            buttonbg="bg-sky-400"
            textcolor="text-[#092947]"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
