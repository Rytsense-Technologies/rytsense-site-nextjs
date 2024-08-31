import React from "react";

const UXDPractices = () => {
  return (
    <div className="py-10 lg:px-40">
      <h1 className="text-4xl font-bold mb-4">
        Keep your users at the center of your design process with our UXD
        practices
      </h1>
      <p className="text-lg mb-8">
        We combine our team’s depth of experience in design, our client’s
        intimate knowledge of the industries they serve and insights uncovered
        through the discoveries we make.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Discover Section */}
        <div className="border border-gray-400  p-6">
          <div className="mb-4">
            <svg
              className="w-12 h-12 text-sky-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M21.71 20.29l-4.08-4.08A8.47 8.47 0 0 0 19 11.5C19 6.81 15.19 3 10.5 3S2 6.81 2 11.5 5.81 20 10.5 20c2.04 0 3.92-.72 5.39-1.91l4.08 4.08a1 1 0 0 0 1.41-1.41zM4 11.5C4 7.91 6.91 5 10.5 5s6.5 2.91 6.5 6.5-2.91 6.5-6.5 6.5S4 15.09 4 11.5z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-4">Discover</h3>
          <ul className="list-disc list-inside text-lg">
            <li className="mb-5">User Research</li>
            <li className="mb-5">User Surveys</li>
            <li className="mb-5">User Personas</li>
            <li className="mb-5">User Stories</li>
          </ul>
        </div>

        {/* Define Section */}
        <div className="border border-gray-400  p-6">
          <div className="mb-4">
            <svg
              className="w-12 h-12 text-red-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M22 6.92l-10-6a1 1 0 0 0-1 0l-10 6a1 1 0 0 0 0 1.76l10 6a1 1 0 0 0 1 0l10-6a1 1 0 0 0 0-1.76zM12 3.2l7.35 4.4-7.35 4.4L4.65 7.6 12 3.2zM2.31 9.81l7.29 4.38v8.82l-7.29-4.36v-8.84zm9.29 13.2V14.2l7.29-4.39v8.84l-7.29 4.36z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-4">Define</h3>
          <ul className="list-disc list-inside text-lg">
            <li className="mb-5">Information Architecture</li>
            <li className="mb-5">Site Maps</li>
            <li className="mb-5">Empathy Mapping</li>
            <li className="mb-5">User Journey Map</li>
          </ul>
        </div>

        {/* Deliver Section */}
        <div className="border border-gray-400  p-6">
          <div className="mb-4">
            <svg
              className="w-12 h-12 text-yellow-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M21 3H3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM4 7h16v2H4V7zm0 12v-8h16v8H4z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-4">Deliver</h3>
          <ul className="list-disc list-inside">
            <li className="mb-5">Paper Prototyping</li>
            <li className="mb-5">High Fidelity Mockups</li>
            <li className="mb-5">Invision Prototype</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UXDPractices;
