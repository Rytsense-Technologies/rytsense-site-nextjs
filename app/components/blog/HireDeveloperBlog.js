import React from "react";
import { FaCheckCircle, FaUsers } from "react-icons/fa";
import { AiFillDollarCircle } from "react-icons/ai";
import Image from "next/image";

// Sample images (you can replace these URLs with actual image paths or URLs)
const stepImages = [
  "https://res.cloudinary.com/dlg3i3ari/image/upload/v1729736540/img-Missing-Requirements-Fotolia_83230289_XS-500-400-c-C-97_slvn9y.jpg", // Replace with your image URL for Step 1
  "https://res.cloudinary.com/dlg3i3ari/image/upload/v1729736589/main_image-7-scaled-1200x675_gbbhec.webp", // Replace with your image URL for Step 2
  "https://res.cloudinary.com/dlg3i3ari/image/upload/v1729736718/20759-6_1_kagsij.jpg", // Replace with your image URL for Step 3
  "https://res.cloudinary.com/dlg3i3ari/image/upload/v1729736751/Interview-guide_kqvlpy.jpg", // Replace with your image URL for Step 4
  "https://res.cloudinary.com/dlg3i3ari/image/upload/v1729736835/Finance-Equation_vrsm4s.png", // Replace with your image URL for Step 5
];

const HireDeveloperBlog = () => {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      {/* Header Section with Background Image and Opacity */}
      <div
        className="relative bg-center bg-cover h-96 text-white flex items-center justify-center"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dlg3i3ari/image/upload/v1729737283/software-developer-6521720_1280_qhjyth.jpg')`, // Replace with your banner image URL
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
        {/* Overlay with opacity */}
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold">
            Hire Software Developers for Startups in India
          </h1>
          <p className="text-xl mt-4">
            Overcome challenges and find the best developers for your startup.
          </p>
        </div>
      </div>

      {/* Benefits Section */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">
            Benefits of Hiring Developers in India
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Cost-Effectiveness Card */}
            <div className="bg-white shadow-md rounded-lg p-6 flex items-center space-x-4">
              <div className="flex-shrink-0">
                <AiFillDollarCircle size={40} className="text-green-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Cost-Effectiveness</h3>
                <p className="mt-2 text-gray-600">
                  Hiring software developers from India is not only affordable
                  but also a strategic decision for startups...
                </p>
              </div>
            </div>

            {/* Access to a Diverse Talent Pool Card */}
            <div className="bg-white shadow-md rounded-lg p-6 flex items-center space-x-4">
              <div className="flex-shrink-0">
                <FaUsers size={40} className="text-blue-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">
                  Access to a Diverse Talent Pool
                </h3>
                <p className="mt-2 text-gray-600">
                  India is home to a sizable and very talented developer
                  population that is knowledgeable in a wide range of
                  technologies...
                </p>
              </div>
            </div>

            {/* Scalability Card */}
            <div className="bg-white shadow-md rounded-lg p-6 flex items-center space-x-4">
              <div className="flex-shrink-0">
                <FaCheckCircle size={40} className="text-purple-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Scalability</h3>
                <p className="mt-2 text-gray-600">
                  Scaling your development workforce as your startup expands is
                  a major advantage of recruiting in India...
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps to Hire Section with Images */}
      {/* Steps to Hire Section with Images */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">
            Steps to Hire Software Developers in India
          </h2>
          <div className="space-y-12">
            {/* Step 1 */}
            <div className="bg-white rounded-lg p-6 md:flex md:items-center gap-10 justify-between">
              <div className="md:w-1/2">
                <h4 className="text-2xl font-semibold mb-2">
                  Step 1: Define Your Requirements
                </h4>
                <p className="text-gray-700 text-lg font-serif">
                  Its critical to specify the knowledge, abilities, and
                  experience needed for your project before recruiting. The
                  correct developers will be easier to find if you are aware of
                  the needs and scope of your project.
                </p>
              </div>
              <div className="md:w-1/2 mt-4 md:mt-0 md:text-right">
                <Image
                  src={stepImages[0]}
                  alt="Step 1"
                  className="rounded-lg shadow-md"
                  width={500}
                  height={500}
                />
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-lg p-6 md:flex md:items-center gap-10 justify-between">
              <div className="md:w-1/2">
                <h4 className="text-2xl font-semibold mb-2">
                  Step 2: Choose a Hiring Model
                </h4>
                <p className="text-gray-700 text-lg font-serif">
                  Committed developers are ideal for extended projects that
                  require consistent collaboration, providing a stable workforce
                  that allows your startup to focus on development. On the other
                  hand, freelance developers offer a flexible and cost-effective
                  solution for projects that need temporary or specialized
                  expertise.
                </p>
              </div>
              <div className="md:w-1/2 mt-4 md:mt-0 md:text-right">
                <Image
                  src={stepImages[1]}
                  alt="Step 2"
                  className="rounded-lg shadow-md"
                  width={500}
                  height={500}
                />
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-lg p-6 md:flex md:items-center gap-10 justify-between">
              <div className="md:w-1/2">
                <h4 className="text-2xl font-semibold mb-2">
                  Step 3: Pick a Trustworthy Platform
                </h4>
                <p className="text-gray-700 text-lg font-serif">
                  You can find reliable platforms to assist you in hiring
                  software developers for Indian startups. These sites put you
                  in touch with verified developers that possess the skills your
                  project needs.
                </p>
              </div>
              <div className="md:w-1/2 mt-4 md:mt-0 md:text-right">
                <Image
                  src={stepImages[2]}
                  alt="Step 3"
                  className="rounded-lg shadow-md"
                  width={500}
                  height={500}
                />
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-white rounded-lg p-6 md:flex md:items-center gap-10 justify-between">
              <div className="md:w-1/2">
                <h4 className="text-2xl font-semibold mb-2">
                  Step 4: Carry Out Detailed Interviews
                </h4>
                <p className="text-gray-700 text-lg font-serif">
                  Consider candidates communication skills and cultural fit in
                  addition to their technical expertise while evaluating them.
                  Ensuring that the developers you choose can work well with
                  your current team requires a rigorous interview process.
                </p>
              </div>
              <div className="md:w-1/2 mt-4 md:mt-0 md:text-right">
                <Image
                  src={stepImages[3]}
                  alt="Step 4"
                  className="rounded-lg shadow-md"
                  width={500}
                  height={500}
                />
              </div>
            </div>

            {/* Step 5 */}
            <div className="bg-white rounded-lg p-6 flex items-center gap-10 justify-between">
              <div className="md:w-1/2">
                <h4 className="text-2xl font-semibold mb-2">
                  Step 5: Check References and Portfolios
                </h4>
                <p className="text-gray-700 text-lg font-serif">
                  Before making a decision, always check the developers
                  portfolios and references to verify their past work and ensure
                  they can deliver quality results.
                </p>
              </div>
              <div className="md:w-1/2 mt-4 md:mt-0 md:text-right">
                <Image
                  src={stepImages[4]}
                  alt="Step 5"
                  className="rounded-lg shadow-md"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Platforms Section */}
      <section className="py-10 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">
            Top Platforms to Hire Developers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Turing.com */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Turing.com</h3>
              <p className="text-gray-700">
                A platform that connects startups with top Indian developers,
                offering both full-time and part-time hiring options...
              </p>
            </div>

            {/* Upwork */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Upwork</h3>
              <p className="text-gray-700">
                A popular platform for hiring freelance developers, allowing
                startups to source developers on a project-by-project basis...
              </p>
            </div>

            {/* Freelancer.com */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Freelancer.com</h3>
              <p className="text-gray-700">
                A global platform providing access to Indian developers, helping
                startups find cost-effective and skilled developers...
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Considerations for Startups Section */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">
            Considerations for Startups
          </h2>
          <div className="space-y-6">
            {/* Budget Constraints */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h4 className="text-2xl font-semibold mb-2">
                Budget Constraints
              </h4>
              <p className="text-gray-700">
                Startups often have limited budgets, so its essential to find
                developers who offer the best value for your money...
              </p>
            </div>

            {/* Time Zone Differences */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h4 className="text-2xl font-semibold mb-2">
                Time Zone Differences
              </h4>
              <p className="text-gray-700">
                When hiring offshore developers, especially in India, planning
                for time zone differences is crucial...
              </p>
            </div>

            {/* Cultural Alignment */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h4 className="text-2xl font-semibold mb-2">
                Cultural Alignment
              </h4>
              <p className="text-gray-700">
                To foster a productive and harmonious working relationship, be
                mindful of cultural differences...
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-slate-100 text-gray-800 font-serif py-8 text-center py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold">Conclusion</h2>
          <p className="mt-4 text-lg">
            Hiring software developers for startups in India can offer
            substantial benefits such as cost savings, access to a diverse
            talent pool, and scalability.
          </p>
          <p className="mt-4 text-lg">
            At Rytsense Tech, we specialize in providing high-quality
            development teams tailored for startups. Contact us today to find
            the right developers for your business.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HireDeveloperBlog;
