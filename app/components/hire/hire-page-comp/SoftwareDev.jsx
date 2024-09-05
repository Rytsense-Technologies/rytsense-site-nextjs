import React from "react";
import { fadeIn } from "../../../mock/varients";

export default function SoftwareDev() {
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
          What Rytsense Technologies Software Developers Offer?
        </h1>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-0 gap-y-4 text-left p-10">
          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">
              1) Proficient Consulting
            </h1>{" "}
            Our efficient software developer provides exceptional consulting. We
            tailor your excellent strategies with cost-effective and less
            time-consuming. What technology would be right, which method should
            be appropriate? We will provide you with appropriate solutions. Our
            advisor will advise you about the challenges and provide you
            relevant information and data. The software developers have a niche
            project, and which development is suitable for the business?
          </li>

          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">2) Unique Approach</h1>
            Rytsense Technologies software developers have a unique approach
            towards development. They have insightful knowledge about software
            development and understand when to use it in applications. The
            project is handled with different aspects, and that made them stand
            out from others. The approaches are significant and highly relevant
            in the market.
          </li>
          <li className="p-4 shadow-md">
            {" "}
            <h1 className="text-2xl font-bold mb-4 ">
              3) Reliability Resource
            </h1>
            Our software developer ensures reliability and scalability for your
            business project. In software development, every small factor
            matters, and while developing, it needs to be kept in mind. Thus we
            know how precious it is for the business. The deliverables show how
            the company delivers the software and the performance outcome. We
            also provide you with reliable development that reduces your
            business risk management compared to others.
          </li>
          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">
              4) High-Quality Experience
            </h1>
            Providing a high-quality experience is the motto of the Rytsense
            Technology. We never compromise in quality, which has been
            acknowledged by our clients and gained a name for the same. The
            quality measure is done before launching the product or project to
            the client. Our software developers provide excellent quality in
            every project, product, and application.
          </li>
        </ul>
      </div>
    </div>
  );
}
