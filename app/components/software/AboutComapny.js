import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import CustomButton from "../../components/common/CustomButton";

const AboutComapny = () => {
  return (
    <section class="text-gray-600 body-font">
      <div class=" flex px-5 py-24 items-center justify-center flex-col">
        {/* <img
          class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
          alt="hero"
          src="https://dummyimage.com/720x600"
        /> */}
        <div class="lg:px-10 w-full">
          <h1 class="title-font sm:text-4xl text-4xl mb-4 font-bold text-gray-900">
            Custom Software Development Company in India
          </h1>
          <p class="mb-8 text-xl font-semibold leading-relaxed">
            Rytsense Technologies, a top-notch custom software development
            company in India, is dedicated to creating future technological
            solutions. We support startups, large companies, and successful
            businesses across both the USA and India. By partnering with us, you
            benefit from our expertise in custom software development services
            in India and the USA, ensuring your business plans ahead, identifies
            its unique strengths, and achieves substantial profits. Our custom
            software development company in Chennai, India and USA provides
            customized solutions that help businesses grow steadily and see real
            results.
          </p>
          <p class="mb-8 text-xl font-semibold leading-relaxed">
            Our skilled software developers leverage their diverse expertise to
            deliver high-quality custom software development products. As a
            leading custom software development company in India and USA, we
            utilize the latest technologies to ensure the best results. Our
            primary goal is to help clients create customer-focused solutions
            that maximize business efficiency, increase ROI, and enhance
            customer engagement. We help you achieve your digital ambitions and
            build world-class digital solutions by leveraging our knowledge and
            experience. Rytsense Technologies provides the best-in-class custom
            software development services in India and the USA, helping our
            partners and clients pave the way to the future they envision.
          </p>
          <div class="flex justify-center">
            <CustomButton title={"Let's Connect"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutComapny;