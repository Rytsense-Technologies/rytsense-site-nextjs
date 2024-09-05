import React from "react";
import { fadeIn } from "../../../mock/varients";

export default function WebDev() {
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
          Why Hire Web Developers From Rytsense Technologies?
        </h1>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-0 gap-y-4 text-left p-10">
          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">1) Offers SEO-Friendly</h1>{" "}
            Rytsense Technologies developers provide SEO-friendly web
            development. Search Engine Optimization is a significant element for
            web development, and web developers are aware of integrating
            websites through search ranking. Our professional offers a top
            search ranking engine and creates an SEO-friendly web development
            process. Our web developers understand what to do and how to make
            your website on the top. We used the latest tools, technology, and
            techniques for web development.
          </li>

          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">2) Efficient Approach</h1>
            Our professionals have insight knowledge about web development and
            implement it with an efficient approach. Our web developers have
            expertise in web development and provide the best web tools and
            techniques. We offer constant support and maintenance for web
            development. Hiring web developers from Rytsense Technologies will
            give you a unique approach towards web development and ensure
            performance on time with capableness.
          </li>
          <li className="p-4 shadow-md">
            {" "}
            <h1 className="text-2xl font-bold mb-4 ">3) Stand Out</h1>With a
            unique approach, hiring web developers from Rytsense Technologies
            will help to make your business stand out among competitors. We
            provide outstanding tools and technology and never compromise on
            quality. The effective method helps businesses to reach out to a
            wide range of target audiences. Our professionals offer you
            transparency, so the business person knows and understands the
            entire process.
          </li>
          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">4) Deliver On-time</h1>
            Our web developers deliver web development at the given expected
            time. We believe in providing quality, so in the meantime, we offer
            distinct web development with the best on-time in the market. Our
            professionals value your business and consider it their own, so they
            do not leave any effort into your business.
          </li>
        </ul>
      </div>
    </div>
  );
}
