import React from "react";
import { fadeIn } from "../../../mock/varients";

export default function BlockchainDev() {
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
          Hire Blockchain Developers from Rytsense Technologies
        </h1>
        <p className="mb-2">
          At Rytsense Technologies, we have a team of skilled blockchain
          developers. They work feasibly with every major platform to give you a
          full range of possible solutions. Our team makes products for global
          startups and business of every sizes on latest technologies. Our
          developers have expertise in data storage, data distribution, reading
          the data, adding blocks in data for security purposes, transaction
          validations in the products and services by Blockchain technology.
        </p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-left">
          <li className=" p-4 shadow-md">Process Automation</li>
          <li className=" p-4 shadow-md">Experience</li>
          <li className=" p-4 shadow-md">Passion</li>
          <li className=" p-4 shadow-md">Expertise</li>
          <li className=" p-4 shadow-md">Immutability</li>
          <li className=" p-4 shadow-md">Trust</li>
        </ul>
        <p className="mb-2">
          We are excited to develop Blockchain, Smart Contracts, and
          Decentralised apps. We, at Rytsense Technologies, provide world-class
          Blockchain development services at the competitive price. Our aim is
          to provide solutions that are affordable, unique and highly customized
          for your business demands. Hire Blockchain app developers from
          Rytsense Technologies to build your own decentralized Blockchain
          Application.
        </p>
      </div>
    </div>
  );
}
