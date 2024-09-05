import React from "react";
import { fadeIn } from "../../../mock/varients";

export default function ShopifyDev() {
  return (
    <div>
      <div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.5 }}
        className="p-10"
      >
        <h1 className="text-2xl font-bold mb-4 ">
          Our Variety of Shopify App Development Services Cover
        </h1>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-0 gap-y-4 text-left p-10">
          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">
              Custom Shopify Development
            </h1>
            Hire Shopify developers to develop Shopify E-commerce websites based
            on your precise requirements and standards. We render a custom-based
            Shopify store for your business that will bring more target
            audience.
          </li>

          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">
              Shopify App development
            </h1>
            Our developers can render feature-rich apps by integrating
            cutting-edge Shopify technologies. In addition, we assist you in
            winning the business challenges by providing UI/UX-friendly Shopify
            apps.
          </li>
          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">Shopify Configuration</h1>{" "}
            Our team set up and configured top-notch Shopify products to select
            a proper theme and products and set up payment methods.
          </li>
          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">Shopify Store SEO</h1>
            At Rytsense Technologies, we have an in-house SEO team that provides
            the best SEO services for your Shopify store. You will get higher
            traffic by getting our updated SEO services that will be beneficial
            for your business.
          </li>

          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">
              Shopify Web Application Development
            </h1>
            Whether it is about building Shopify apps in the ROR framework, or
            third-party Shopify app development, our experts will give their
            100% to make your business website the top one.
          </li>
        </ul>
      </div>

      <div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.5 }}
        className="p-10"
      >
        <h1 className="text-2xl font-bold mb-4 ">
          Why Should You Hire Rytsense Technologies Shopify Developers for Your
          E-commerce Store Development?
        </h1>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-0 gap-y-4 text-left p-10">
          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">Consultative Approach</h1>
            Our team considers providing your projects within a given time frame
            without losing their quality. We aim to satisfy clients in terms of
            competing pricing and good services.
          </li>
          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">
              Transparent Work System
            </h1>{" "}
            During the whole development period, we provide complete
            transparency to offer services and solutions with constant
            communication.
          </li>
          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">Quality of Code</h1>
            Our Shopify developers stringently maintain the coding criteria and
            try to deliver high-quality, scalable, reliable, and eye-catching
            solutions.
          </li>

          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">Data Security</h1>
            To protect the confidential information of clients to the top
            priority. We keep updated with the most advanced data security best
            methods, compliance, and regulations.
          </li>
        </ul>
      </div>
    </div>
  );
}
