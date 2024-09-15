"use client";

import React, { useEffect, useState } from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const CustomButton = ({ title }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); 
  }, []);

  const handleButtonClick = () => {
    if (isClient) {
      window.open("https://calendly.com/ramkumar_p/call-schedule", "_blank");
    }
  };

  return (
    <button
      className="text-white  bg-[#2C87D9] text-lg  font-semibold hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 rounded-lg  px-5 py-2.5 flex  items-center gap-2 justify-center dark:focus:ring-[#1da1f2]/55"
      onClick={handleButtonClick}
    >
      {title} <MdKeyboardDoubleArrowRight className="text-xl" />
    </button>
  );
};

export default CustomButton;
