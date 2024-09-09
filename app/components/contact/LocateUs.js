import Image from "next/image";
import React from "react";

const LocateUs = () => {
  const dialNumber = "+917010044153";
  const phoneNumber = "+16506810090";

  return (
    <div className="px-4">
      <div className="max-w-7xl mx-auto p-5">
        <div
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="flex flex-col gap-3"
        >
          <div className="relative text-center">
            <p className="text-3xl mt-7 font-bold sm:text-5xl sm:mt-10">Locate Us</p>
            <h1
              className="text-5xl font-bold top-0 sm:text-7xl"
              style={{
                WebkitTextStroke: "2px",
                WebkitTextStrokeColor: "#F0F0F0",
                color: "white",
                position: "absolute",
                zIndex: "-1",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              Locate
            </h1>
          </div>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {/* UK Office */}
          <section className="flex flex-col items-center bg-amber-100 p-6 rounded-lg shadow-lg">
            <div className="w-24 h-24">
              <Image
                src="https://res.cloudinary.com/dlg3i3ari/image/upload/v1705586622/uk-removebg-preview_ahsn0x.png"
                alt="UK Office"
                width={80}
                height={80}
                className="mx-auto"
              />
            </div>
            <div className="flex items-center gap-2 mt-4">
              <Image
                src="https://res.cloudinary.com/dlg3i3ari/image/upload/v1705587281/uk_flag_cjvy67.png"
                alt="UK Flag"
                width={40}
                height={40}
              />
              <h1 className="text-2xl font-bold">UK Office</h1>
            </div>
            <p className="text-center text-lg mt-3">
              338A, Kingston Road, Wimbledon, London SW208LR
            </p>
          </section>

          {/* India Office */}
          <section className="flex flex-col items-center bg-purple-100 p-6 rounded-lg shadow-lg">
            <div className="w-24 h-24">
              <Image
                src="https://res.cloudinary.com/dlg3i3ari/image/upload/v1705587146/output-onlinepngtools_1_viycrt.png"
                alt="India Office"
                width={80}
                height={80}
                className="mx-auto"
              />
            </div>
            <div className="flex items-center gap-2 mt-4">
              <Image
                src="https://res.cloudinary.com/dlg3i3ari/image/upload/v1705586403/India_Flag_ifb6pk.png"
                alt="India Flag"
                width={40}
                height={40}
              />
              <h1 className="text-2xl font-bold">India Office</h1>
            </div>
            <p className="text-center text-lg mt-3">
              First floor, SM tower, Perungudi, OMR Chennai, TamilNadu 600096
            </p>
            <div className="text-blue-600 hover:text-blue-800 text-xl mt-2">
              <a href={`tel:${dialNumber}`}>+91 70100 44153</a>
            </div>
          </section>

          {/* Australia Office */}
          <section className="flex flex-col items-center bg-sky-100 p-6 rounded-lg shadow-lg">
            <div className="w-24 h-24">
              <Image
                src="https://res.cloudinary.com/dlg3i3ari/image/upload/v1705586616/4-removebg-preview_iizj08.png"
                alt="Australia Office"
                width={80}
                height={80}
                className="mx-auto"
              />
            </div>
            <div className="flex items-center gap-2 mt-4">
              <Image
                src="https://res.cloudinary.com/dlg3i3ari/image/upload/v1705587280/australia_flag_nlrmhq.png"
                alt="Australia Flag"
                width={40}
                height={40}
              />
              <h1 className="text-2xl font-bold">Australia Office</h1>
            </div>
            <p className="text-center text-lg mt-3">
              4 Matisse street Cranbourne West Vic 3977
            </p>
          </section>

          {/* USA Office */}
          <section className="flex flex-col items-center bg-stone-100 p-6 rounded-lg shadow-lg">
            <div className="w-24 h-24">
              <Image
                src="https://res.cloudinary.com/dlg3i3ari/image/upload/v1705586621/Line_United_States_New_York_Landmark_Building__Statue_Of_Liberty__Places_Of_Interest__Landmark_Illustration_Background_And_Wallpaper_For_Free_Download_-_Pngtree-removebg-preview_kwbetd.png"
                alt="USA Office"
                width={80}
                height={80}
                className="mx-auto"
              />
            </div>
            <div className="flex items-center gap-2 mt-4">
              <Image
                src="https://res.cloudinary.com/dlg3i3ari/image/upload/v1705587280/australia_flag_nlrmhq.png"
                alt="USA Flag"
                width={40}
                height={40}
              />
              <h1 className="text-2xl font-bold">USA Office</h1>
            </div>
            <p className="text-center text-lg mt-3">
              334 Pioneer way, Mountain View, California 94041, USA
            </p>
            <div className="text-blue-600 hover:text-blue-800 text-xl mt-2">
              <a href={`tel:${phoneNumber}`}>+1 650 681 0090</a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default LocateUs;
