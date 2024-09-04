import React from "react";


const RanksClutch = () => {
  return (
    <div className="starrating text-center inter-bold flex flex-wrap justify-center lg:justify-start">
      <div className="flex mt-2 first-logobanner items-center lg:mr-4 w-full lg:w-auto">
        <img
          src="https://res.cloudinary.com/dlg3i3ari/image/upload/v1725271445/clutch-dark_ffd6xg.png"
          alt="C Logo"
          className="h-16 w-16 mr-2"
          loading="lazy"
        />
        <div className="text-white flex flex-col justify-center">
          <p className="text-lg">⭐⭐⭐⭐⭐</p>
          <p className="text-lg text-black uppercase">5 Star Rating</p>
        </div>
      </div>
      <div className="hidden lg:block w-10 ranksecond"></div>
      <div className="flex mt-2 sec-logobanner items-center lg:ml-4 w-full lg:w-auto">
        <img
          src="https://res.cloudinary.com/dlg3i3ari/image/upload/v1725271490/goodfirm_zhnve5.png"
          alt="Thumbs Up"
          className="h-16 w-16"
          loading="lazy"
        />
        <div className="text-white flex flex-col justify-center">
          <p className="text-lg">⭐⭐⭐⭐⭐</p>
          <p className="text-lg uppercase text-black ml-1">100% Success Rate</p>
        </div>
      </div>
      <div className="hidden lg:block w-10 ranksecond"></div>
      <div className="flex mt-2 third-logobanner items-center lg:ml-4 w-full lg:w-auto">
        <img
          src="https://res.cloudinary.com/dlg3i3ari/image/upload/v1725271522/awardslider3_dapyyz.jpg"
          alt="Award"
          className="h-20 w-20"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default RanksClutch;
