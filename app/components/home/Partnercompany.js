import React from "react";

const Partnercompany = () => {
  return (
    <div
    // style={{ background: "linear-gradient(to right, #3D5AA4E5, #3F3DA4)" }}
    >
      <div className="max-w-7xl px-5 py-10 mx-auto flex flex-col justify-between gap-8 md:flex-row">
        <div className="flex-1 p-5 flex items-center">
          <p className="text-3xl text-[#092947]  font-bold leading-tight w-full md:w-4/5 lg:w-3/4 md:text-4xl">
            Strategic PartnerShip to Unlock Greater Business value
          </p>
        </div>
        <div className="pr-5 flex-1 flex flex-col justify-center gap-6 items-center flex-wrap md:items-end md:justify-between">
          <div className="flex gap-6">
            <div
              className="p-5 w-32 h-32  flex justify-center items-center rounded-lg hover:transform hover:scale-110 transition-transform"
              style={{
                boxShadow:
                  "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
              }}
            >
              <img
                src="/images/homepageimages/Google-Cloud-Logo.png"
                alt="logo"
              ></img>
            </div>
            <div
              className="p-5 w-32 h-32  flex justify-center items-center rounded-lg hover:transform hover:scale-110 transition-transform"
              style={{
                boxShadow:
                  "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
              }}
            >
              <img
                src="/images/homepageimages/IBM_logo.svg.WEBP"
                alt="logo"
              ></img>
            </div>
          </div>
          <div className="flex gap-6">
            <div
              className="p-5 w-32 h-32  flex justify-center items-center rounded-lg hover:transform hover:scale-110 transition-transform"
              style={{
                boxShadow:
                  "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
              }}
            >
              <img
                src="/images/homepageimages/2560px-Amazon_Web_Services_Logo.svg.webp"
                alt="logo"
              ></img>
            </div>
            <div
              className="p-5 w-32 h-32  flex justify-center items-center rounded-lg hover:transform hover:scale-110 transition-transform"
              style={{
                boxShadow:
                  "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
              }}
            >
              <img
                src="/images/homepageimages/Google-Cloud-Logo.WEBP"
                alt="logo"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partnercompany;
