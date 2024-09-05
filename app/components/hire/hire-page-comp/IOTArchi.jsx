import React from "react";
import { fadeIn } from "../../../mock/varients";

export default function IOTArchi() {
  return (
    <div>
      <div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.5 }}
        className="p-10"
      >
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-0 gap-y-4 text-left p-10">
          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">Our IoT Services</h1> Our
            team of IoT developers provides businesses with a standout by
            delivering superior solutions driven by the internet of things.
          </li>

          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">IoT Sensor Development</h1>
            We can make end-users life more comfortable and advanced through
            sensor development. Our IoT developers offer this connection to
            enable car tracing, high-end lock devices, and weather monitoring,
            among many other things.
          </li>
          <li className="p-4 shadow-md">
            {" "}
            <h1 className="text-2xl font-bold mb-4 ">Custom IoT Development</h1>
            Before we begin working on any project, we take the time to fully
            understand the needs and objectives of every client. Then, we
            deliver IoT solutions that are designed for your company
            requirements based on such specifications and our experience in the
            internet of things.
          </li>
          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">
              Cloud Solutions & IoT Integrations
            </h1>
            Our IoT developers use cloud support to improve your IoT apps
            features, extensibility, efficiency, and frequency. To meet the
            desired objectives of your business strategies, we implement IoT
            technology with your current systems.
          </li>

          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">
              IoT Wearable Development
            </h1>
            Wearable technology is heavily reliant on the internet of things
            (IoT) technology. Our skilled IoT developers use the latest
            technologies to wearable devices for Android and iOS devices using
            IoT applications.
          </li>
          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">
              IoT-enabled Data Analytics
            </h1>
            A lot of data is generated when IoT is linked with apps and other
            systems. Our IoT developers utilize this data to assist you in a
            clearer grasp of your customers behavior and providing better
            outcomes.
          </li>
          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">
              IoT Support & Maintenance
            </h1>
            Advanced tech integration, such as the internet of things, is a
            multi-step process. It needs ongoing maintenance in order to
            maintain its function. Our team of IoT developers provides these
            services for your current systems.
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
          Why Should You Hire IoT Developers From Rytsense Technologies?
        </h1>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-0 gap-y-4 text-left p-10">
          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">Proven Expertise</h1> We
            have worked with clients from diverse fields all around the world
            over the past 10 years. This gives us the power to develop valuable
            experience for businesses with a wide range of objectives, aims, and
            requirements.
          </li>

          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">Well-Trained</h1>
            Rytsense Technologies allows dedicated IoT developers to get
            experience deal with a range of difficulties. For example, you wont
            have to teach your offshore IoT developers team as you would
            in-house developers.
          </li>
          <li className="p-4 shadow-md">
            {" "}
            <h1 className="text-2xl font-bold mb-4 ">
              Get More Than We Commit
            </h1>
            Our IoT solutions make the process more efficient and quick. As a
            result, you receive the best return on investment.
          </li>
          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">Desired Result</h1>
            We understand your needs in-depth before starting with your
            project’s work. Then, we ensure that all of the plans are
            implemented successfully and that the anticipated outcomes are met.
          </li>
        </ul>
      </div>
    </div>
  );
}
