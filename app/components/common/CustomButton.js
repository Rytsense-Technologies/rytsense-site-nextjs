"use client";

import React, { useEffect, useState } from "react";

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
      className="text-white bg-[#2C87D9] text-lg font-semibold hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 rounded-lg px-5 py-1.5 flex items-center gap-5 justify-center dark:focus:ring-[#1da1f2]/55"
      onClick={handleButtonClick}
    >
      <span className="relative flex h-5 w-5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full border-4 border-white opacity-75"></span>
        <span className="relative inline-flex h-5 w-5 rounded-full border-4 border-white"></span>
      </span>
      {title}
    </button>
  );
};

export default CustomButton;
