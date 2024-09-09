import Image from "next/image";
import React from "react";


const RanksClutch = () => {
  return (
    <div className=" text-center inter-bold flex flex-wrap justify-center ">
      <div className="flex mt-2 first-logobanner items-center lg:mr-4 w-full lg:w-auto">
        <Image
          src="https://res.cloudinary.com/dlg3i3ari/image/upload/v1725271445/clutch-dark_ffd6xg.png"
          alt="C Logo"
          loading="lazy"
          width={40}
          height={40}
        />
        <div className="text-white flex flex-col justify-center">
          <p className="text-sm">⭐⭐⭐⭐⭐</p>
          <p className="text-sm text-black uppercase">5 Star Rating</p>
        </div>
      </div>
   
      <div className="flex mt-2 sec-logobanner items-center lg:ml-4 w-full lg:w-auto">
        <Image
          src="https://res.cloudinary.com/dlg3i3ari/image/upload/v1725271490/goodfirm_zhnve5.png"
          alt="Thumbs Up"
   
          loading="lazy"
          width={40}
          height={40}
        />
        <div className="text-white flex flex-col justify-center">
          <p className="text-sm">⭐⭐⭐⭐⭐</p>
          <p className="text-sm uppercase text-black ml-1">100% Success Rate</p>
        </div>
      </div>

  
    </div>
  );
};

export default RanksClutch;
