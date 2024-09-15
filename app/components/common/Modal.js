"use client"
import Image from "next/image";
import React from "react";

const Modal = () => {
  const handleYesClick = () => {
    window.open("https://calendly.com/ramkumar_p/call-schedule", "_blank");
  };

  const handleNoClick = () => {
    closeModal();
  };

  const closeModal = () => {
    document.querySelector(".fixed").style.display = "none";
  };

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
        <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6 container">
          <div className="flex justify-end items-end">
            <button className="text-gray-700 text-2xl" onClick={handleNoClick}>
              X
            </button>
          </div>
          <div className="text-center mt-5">
            <div className="mx-auto flex-shrink-0 flex items-center justify-center h-16 w-16 rounded-full bg-green-100 sm:h-10 sm:w-10 lg:mb-4">
              <Image
                src="/images/service-img/crown.webp"
                alt=""
                width={40}
                height={40}
              />
            </div>
            <h3 className="text-lg leading-6 font-medium text-gray-900 mt-4">
              OH No You are Leaving?
            </h3>
            <p className="text-gray-500">How can we help?</p>
            <div className="mt-2">
              <p className="text-sm leading-5 text-gray-800">
                Schedule a Call with one of our expert business advisors <br />{" "}
                if you ran into issues or have questions <br /> about your
                process
              </p>
            </div>
          </div>
          <div className="mt-5 w-full flex justify-center">
            <button
              type="button"
              onClick={handleYesClick}
              className="inline-flex items-center justify-center rounded-md border border-transparent px-4 py-2 bg-indigo-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:shadow-outline-green transition ease-in-out duration-150 sm:text-sm sm:leading-5"
            >
              Book a Call →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;