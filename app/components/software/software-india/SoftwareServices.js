import React from "react";

const SoftwareServices = () => {
  return (
    <section className="pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
      <div className=" mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-6xl text-center lg:mb-20">
              <span className="mb-2 block text-xl font-bold text-primary">
              Custom Software Development Services India and USA
              </span>
             
              <p class="mb-8 text-lg text-gray-500 font-semibold leading-relaxed">
              At Rytsense Technologies, we excel as a custom software development company in India and the USA, offering a wide range of services tailored to meet the unique needs of businesses in both regions. Whether you are based in Chennai, India, or anywhere in the USA, our team is equipped to deliver solutions that drive growth and efficiency.
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap">
          <ServiceCard
            title="Custom Software Development Company in Chennai, India"
            details="Our Chennai-based team specializes in creating innovative software solutions that cater to the local market while maintaining global standards. We leverage our extensive experience in custom software development services India to deliver products that are both functional and scalable."
           
          />
          <ServiceCard
            title="Custom Software Development Company in India"
            details="Operating in both the USA and India, we bridge the gap between cutting-edge technology and business needs. Our integrated services ensure that clients receive seamless support and superior software products, regardless of their location."
            
          />
          <ServiceCard
            title="Custom Software Development Services in USA"
            details="Our USA team is renowned for its ability to create bespoke software solutions tailored to the specific requirements of businesses in the region. From startups to large corporations, we help our clients achieve their business objectives through tailored software development."
            
          />
         
        </div>
      </div>
    </section>
  );
};

export default SoftwareServices;

const ServiceCard = ({ icon, title, details }) => {
  return (
    <>
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="mb-9 rounded-[20px] bg-white p-10 shadow-2 hover:shadow-lg dark:bg-dark-2 md:px-7 xl:px-10">
       
          <h4 className="mb-[14px] text-xl font-bold text-dark dark:text-white">
            {title}
          </h4>
          <p className="mb-8 text-md text-gray-500 font-semibold leading-relaxed">{details}</p>
        </div>
      </div>
    </>
  );
};
