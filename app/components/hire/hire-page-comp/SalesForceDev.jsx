import React from "react";
import { fadeIn } from "../../../mock/varients";

export default function SalesForceDev() {
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
          Hire Salesforce Developers From Rytsense Technologies For Following
          Services
        </h1>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-0 gap-y-4 text-left p-10">
          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">
              Salesforce Custom Application Development
            </h1>{" "}
            At Rytsense Technologies, our expert team offers you a customized
            salesforce app development, as per your business & market
            requirements that are based on secure and scalable characteristics.
          </li>

          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">
              Salesforce Customization
            </h1>
            We provide you the customized salesforce CRM software according to
            our demand our dedicated salesforce developers take it on the
            digital platform.
          </li>
          <li className="p-4 shadow-md">
            {" "}
            <h1 className="text-2xl font-bold mb-4 ">Salesforce Integration</h1>
            To integrate Salesforce with other systems is required, in this
            case, our skilled salesforce developer provides a secure and secure
            integration service by app exchange tools or mechanisms.
          </li>
          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">Salesforce Migration</h1>
            Our expert Salesforce developers give the Salesforce Migration to
            manage the fast-growing sales and opportunity data, it allows
            migrating the data from one platform to another in Salesforce CRM.
          </li>

          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">
              Salesforce Support Services
            </h1>
            As a leading salesforce development company, we provide an excellent
            support service to our client’s and it helps to reach success.
          </li>
          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">Salesforce Appexchange</h1>
            Our salesforce programmer experience helps us to provide you an
            error AppExchange development solution, which results in a highly
            functional and manageable salesforce app.
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
          Why Hire Salesforce Developers From Us?
        </h1>
        <p className="text-gray-700 p-5">
          Rytsense Technologies provides trusted Salesforce development services
          to enhanced customer relationship management. Hire certified
          Salesforce developers who are always ready to learn new technologies.
          As a leading CRM solutions provider, we make sure that you get unique
          and customized services. Our Salesforce professional services covers
          from a single resource to a full-scale outsourcing staffing solution.
          Our development team has experience working on various platforms and
          frameworks with the best records to produce absolute solutions.
        </p>

        <h1 className="text-2xl font-bold mb-4 ">
          Key-elements of Rytsense Technologies,
        </h1>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-0 gap-y-4 text-left p-10">
          <li className="p-4 shadow-md">100% Transparency</li>

          <li className="p-4 shadow-md">On-Time Delivery</li>
          <li className="p-4 shadow-md">24/7 Technical Support</li>
          <li className="p-4 shadow-md">Flexible Engagements</li>
          <li className="p-4 shadow-md">Competitive Pricing</li>
          <li className="p-4 shadow-md">Expert Advice</li>
        </ul>
      </div>
    </div>
  );
}
