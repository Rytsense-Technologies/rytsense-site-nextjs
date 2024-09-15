import React from "react";
import {
  FaTools,
  FaCalendarAlt,
  FaBook,
  FaEnvelope,
  FaGlobe,
  FaBriefcase,
  FaStar,
  FaCode,
  FaCertificate,
  FaGithub,
} from "react-icons/fa";
import "animate.css";
import Image from "next/image";

const DeveloperTips = () => {
  return (
    <>
      <section className="text-gray-600 body-font px-4 py-10 md:px-5 md:py-20">
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 text-center animate__animated animate__fadeInDown mb-8 md:mb-10">
          Ensuring Effective Communication with Remote Developers
        </h2>
        <div className="mx-auto flex md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-8 md:mb-0">
            <Image
              className="object-cover object-center rounded"
              alt="hero"
              src="https://res.cloudinary.com/dlg3i3ari/image/upload/v1726193285/dev_tpx6l7.png"
              width={500}
              height={500}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <div className="mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {/* Tip 1 */}
                <div className="bg-sky-50 p-4 md:p-6 rounded-lg shadow-lg animate__animated animate__fadeInUp">
                  <FaTools className="text-3xl md:text-4xl text-blue-600 mb-4" />
                  <h3 className="text-lg md:text-xl font-bold text-sky-700 mb-2">
                    Use Collaboration Tools
                  </h3>
                  <p className="text-sm md:text-base">
                    Utilize project management and communication tools like
                    Trello, Slack, and Asana to track progress.
                  </p>
                </div>

                {/* Tip 2 */}
                <div
                  className="bg-green-50 p-4 md:p-6 rounded-lg shadow-lg animate__animated animate__fadeInUp"
                  style={{ animationDelay: "0.1s" }}
                >
                  <FaCalendarAlt className="text-3xl md:text-4xl text-green-600 mb-4" />
                  <h3 className="text-lg md:text-xl font-bold text-green-700 mb-2">
                    Regular Meetings
                  </h3>
                  <p className="text-sm md:text-base">
                    Schedule regular video calls or meetings for project updates
                    and to address any issues.
                  </p>
                </div>

                {/* Tip 3 */}
                <div
                  className="bg-yellow-50 p-4 md:p-6 rounded-lg shadow-lg animate__animated animate__fadeInUp"
                  style={{ animationDelay: "0.2s" }}
                >
                  <FaBook className="text-3xl md:text-4xl text-yellow-600 mb-4" />
                  <h3 className="text-lg md:text-xl font-bold text-yellow-700 mb-2">
                    Clear Documentation
                  </h3>
                  <p className="text-sm md:text-base">
                    Provide detailed project outlines and documentation to avoid
                    misunderstandings.
                  </p>
                </div>

                {/* Tip 4 */}
                <div
                  className="bg-indigo-50 p-4 md:p-6 rounded-lg shadow-lg animate__animated animate__fadeInUp"
                  style={{ animationDelay: "0.3s" }}
                >
                  <FaEnvelope className="text-3xl md:text-4xl text-purple-600 mb-4" />
                  <h3 className="text-lg md:text-xl font-bold text-indigo-700 mb-2">
                    Communication Channels
                  </h3>
                  <p className="text-sm md:text-base">
                    Agree on communication channels and response times for
                    timely and reliable communication.
                  </p>
                </div>

                {/* Tip 5 */}
                <div
                  className="bg-rose-50 p-4 md:p-6 rounded-lg shadow-lg animate__animated animate__fadeInUp"
                  style={{ animationDelay: "0.4s" }}
                >
                  <FaGlobe className="text-3xl md:text-4xl text-red-600 mb-4" />
                  <h3 className="text-lg md:text-xl font-bold text-rose-700 mb-2">
                    Cultural Sensitivity
                  </h3>
                  <p className="text-sm md:text-base">
                    Be aware of cultural differences and maintain mutual
                    respect.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="p-4 md:p-8 py-10 bg-gradient-to-b from-white to-gray-50 text-gray-800">
        {/* Ensuring Effective Communication Section */}

        {/* Verifying Developer Experience Section */}
        <div className="py-10 md:py-20">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-8 text-center animate__animated animate__fadeInDown">
            Verifying the Experience and Expertise of Developers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
            {/* Verification Step 1 */}
            <div className="bg-indigo-50 p-4 md:p-6 rounded-lg shadow-lg animate__animated animate__fadeInUp">
              <FaBriefcase className="text-3xl md:text-4xl text-indigo-600 mb-4" />
              <h3 className="text-lg md:text-xl font-bold text-indigo-700 mb-2">
                Portfolio Review
              </h3>
              <p className="text-sm md:text-base">
                Request a portfolio to assess their past projects and working
                style.
              </p>
            </div>

            {/* Verification Step 2 */}
            <div
              className="bg-rose-50 p-4 md:p-6 rounded-lg shadow-lg animate__animated animate__fadeInUp"
              style={{ animationDelay: "0.1s" }}
            >
              <FaStar className="text-3xl md:text-4xl text-rose-600 mb-4" />
              <h3 className="text-lg md:text-xl font-bold text-rose-700 mb-2">
                Reviews and Testimonials
              </h3>
              <p className="text-sm md:text-base">
                Ask for client reviews to gauge the developer’s reputation and
                performance.
              </p>
            </div>

            {/* Verification Step 3 */}
            <div
              className="bg-amber-50 p-4 md:p-6 rounded-lg shadow-lg animate__animated animate__fadeInUp"
              style={{ animationDelay: "0.2s" }}
            >
              <FaCode className="text-3xl md:text-4xl text-amber-600 mb-4" />
              <h3 className="text-lg md:text-xl font-bold text-amber-700 mb-2">
                Skills Assessment
              </h3>
              <p className="text-sm md:text-base">
                Conduct technical interviews or coding challenges to test
                problem-solving and coding abilities.
              </p>
            </div>

            {/* Verification Step 4 */}
            <div
              className="bg-green-50 p-4 md:p-6 rounded-lg shadow-lg animate__animated animate__fadeInUp"
              style={{ animationDelay: "0.3s" }}
            >
              <FaCertificate className="text-3xl md:text-4xl text-green-600 mb-4" />
              <h3 className="text-lg md:text-xl font-bold text-green-700 mb-2">
                Certifications and Education
              </h3>
              <p className="text-sm md:text-base">
                Verify certifications and educational background.
              </p>
            </div>

            {/* Verification Step 5 */}
            <div
              className="bg-sky-50 p-4 md:p-6 rounded-lg shadow-lg animate__animated animate__fadeInUp"
              style={{ animationDelay: "0.4s" }}
            >
              <FaGithub className="text-3xl md:text-4xl text-sky-600 mb-4" />
              <h3 className="text-lg md:text-xl font-bold text-sky-700 mb-2">
                GitHub or Code Repositories
              </h3>
              <p className="text-sm md:text-base">
                Examine their open-source contributions and activity on
                platforms like GitHub.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeveloperTips;
