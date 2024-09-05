import React from "react";
import { fadeIn } from "../../../mock/varients";

export default function JavaDev() {
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
          Services Provided By Rytsense Technologies Java Developers:
        </h1>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-0 gap-y-4 text-left p-10">
          <li className="p-4 shadow-md"> - Java Mobile App Development</li>

          <li className="p-4 shadow-md">- Java Mobile App Development</li>
          <li className="p-4 shadow-md">- Java Web Development</li>

          <li className="p-4 shadow-md">- Custom Java App Development</li>
          <li className="p-4 shadow-md">- Java Web/App Migration</li>
          <li className="p-4 shadow-md">- Java Web/App Upgrade</li>
          <li className="p-4 shadow-md">- Java J2EE Development</li>
          <li className="p-4 shadow-md">- Java Module Development</li>
          <li className="p-4 shadow-md">- Java Chat Application Development</li>
          <li className="p-4 shadow-md">
            - Java CMS Development Java CMS Development
          </li>
          <li className="p-4 shadow-md">- Java E-commerce Development</li>
          <li className="p-4 shadow-md">- API & Web Service Integration</li>
          <li className="p-4 shadow-md">
            - Java Quality and Testing Assurance
          </li>
          <li className="p-4 shadow-md">- Java Support & Maintenance</li>
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
          Why Hire Rytsense Technologies Java Developers?
        </h1>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-0 gap-y-4 text-left p-10">
          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">Quick Provider</h1>
            Our Java developers solve complex issues and are always ready to
            help. With small or big problems, the developer lists, understands
            and implements according to the clients requirements. Java
            developers know inside and outside and support by responding quickly
            with all queries within time. Our Java developers priority is to
            give their best in the project.
          </li>

          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">
              Latest Technology Development
            </h1>
            Our Java developers are updated with the latest technologies, tools,
            trends, and more. Java developers of Rytsense Technologies are well
            experienced and served various businesses from different industries
            since 2011. With proficient experience, we have a unique and
            prominent perspective regarding the project. The Java developers
            have kept pace with advanced Java development solutions and
            services. Hire Rytsense Technologies Java developers and experience
            the advantages.
          </li>
          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">Skilled Professionals</h1>{" "}
            Rytsense Technologies has skilled professionals who are aware and
            acknowledged by the entire industry. We have worked with clients
            globally and receive excellent exposure. Our Java developers
            understand the business requirements and needs. The professionals
            are friendly in interacting with the clients about the development
            process, models, frameworks, and more. We believe in adept and learn
            at every step and implement it in our projects to deliver the best
            outcomes of the projects.
          </li>
          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">Versatility Adopted</h1>We
            have worked with clients globally and with various industries.
            Hence, we have adopted versatility and different aspects. The Java
            developers are compelling to the Java development and have gained
            immense experience in multiple projects. The numerous domains have
            diverse demands, and our Java developers comprehend and learn that.
            Even with new and traditional technology Java Developers identify
            the value and use it accordingly.
          </li>

          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">Agile Deployment</h1>
            We never compromise on the quality and always deliver the most
            suitable outcome. When it comes to deployment, our Java developers
            provide agile development. Rytsense Technologies goes through
            several processes and testing before presenting it to our client.
            The developers ensure that the development project is bug-free and
            the client does not face any further complication. The deployment is
            faster and delivered at the expected time. We leverage information
            and data and work according to that and give our most trustworthy
            project.
          </li>
          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">Reduce Risk Management</h1>
            Rytsense Technologies values clients and their ideas and concepts.
            We ensure less risk in the project while developing Java
            applications, Java web, or any other. The risk management is less
            because we provide a quality and seamless experience. Our dedicated
            Java developers prepare smart strategies and efficiently work for
            them. Our Java developers are reliable and scalable in the project.
          </li>
        </ul>
      </div>
    </div>
  );
}
