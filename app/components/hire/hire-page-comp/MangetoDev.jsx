import React from "react";
import { fadeIn } from "../../../mock/varients";

export default function MangetoDev() {
  return (
    <div>
      <div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.5 }}
        className="bg-gray-200 p-4 md:p-8 lg:flex lg:flex-col lg:text-left"
      >
        <h1 className="text-2xl font-bold mb-4 p-5 ">
          Good Reasons To Consider Before You Hire Magento Developer
        </h1>
        <p className="text-gray-700 p-5">
          Magento is an e-commerce website app which comes free of charge
          because it is an open-source application. To get to use Magento, you
          will have to download its free version called the Magento Community
          Edition � there is no another free version aside from this one.
          Magento is based on PHP which is a language code usually used for web
          applications so it is only logical that you need to hire Magento
          Developer like Rytsense Technologies who is well versed in PHP as
          well.
        </p>
        <p className="text-gray-700 p-5">
          Magento is considered a cross-platform system meaning it can work on
          multiple operating systems. If you plan to get any Magento Developer
          you need to make sure the development team knows which operating
          systems can accommodate your e-commerce web applications. The Magento
          Developer should be aware that Magento itself is shopping cart
          software which is why it is usually used for online retail sites. So
          you need to discuss with your candidates how they plan to use Magento
          to make your e-commerce activities more useful to your customers and
          clients, and if they know how Magento can help bring in profits for
          your business. Only when they give satisfactory solutions should you
          consider hiring any of them.
        </p>
        <p className="text-gray-700 p-5">
          A good reason to rely on Magento is that an estimated 150,000
          e-commerce businesses have already adopted the system. These
          businesses range in size from the smaller boutique shops to the big
          corporate retailers that have a multinational reach. Since Magento is
          so widely used, you can expect that the community of users that
          support this open-source system are also equally well versed in the
          intricacies of its application for their websites. This can be
          beneficial if you and your Magento Developer encounter problems that
          are fairly unique or not so well known.
        </p>
        <p className="text-gray-700 p-5">
          If your Magento Developer such as Rytsense Technologies does succeed
          in making a good e-commerce system for your website, naturally you
          have to test it to see if it does the job it was designed for. You may
          ask the Magento Community members to help test out your website and
          give you feedback about its e-commerce strengths and weaknesses. The
          good part about this is that your decision to Hire Magento Developer
          could be the right one if the Magento Community gives your e-commerce
          website application two thumbs up after they have tested it � without
          much cost to you.
        </p>
      </div>
    </div>
  );
}
