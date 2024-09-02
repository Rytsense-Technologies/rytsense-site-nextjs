import Image from "next/image";
import React from "react";

const LocateUs = () => {
  const dialNumber = "+917010044153";
  const phoneNumber = "+16506810090";

  return (
    <div>
      <div className="max-w-7xl p-5 mx-auto">
        <div
          // variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="flex flex-col gap-3"
        >
          <div className="relative">
            <p className="text-3xl mt-7 font-bold sm:text-5xl sm:mt-10">
              Locate Us
            </p>
            <h1
              className="text-5xl font-bold top-0 sm:text-7xl"
              style={{
                WebkitTextStroke: "2px",
                WebkitTextStrokeColor: "#F0F0F0",
                color: "white",
                position: "absolute",
                zIndex: "-1",
              }}
            >
              Locate
            </h1>
          </div>
        </div>
        <div className="mt-28 flex gap-16 flex-wrap text-center">
          <section className="flex-1 flex flex-col gap-32 items-center">
            <div className="grow h-80 w-80 p-4 bg-amber-100 flex flex-col gap-8 items-center">
              <div
                className="w-24 h-32 rounded-md bg-white"
                style={{
                  marginTop: "-80px",
                }}
              >
                <Image
                  src="https://res.cloudinary.com/dlg3i3ari/image/upload/v1705586622/uk-removebg-preview_ahsn0x.png"
                  className="mt-10 mx-auto"
                  width={80}
                  height={80}
                />
              </div>
              <div className="flex gap-1 justify-center items-center">
                <Image
                  className="w-8 h-6"
                  src="https://res.cloudinary.com/dlg3i3ari/image/upload/v1705587281/uk_flag_cjvy67.png"
                  alt="UK Flag"
                  width={40}
                  height={40}
                />
                <h1 className="text-2xl font-bold">UK Office</h1>
              </div>
              <p className="text-xl font-normal">
                338A, Kingston Road, Wimbledon, London SW208LR
              </p>
            </div>
            <div className="grow h-80 w-80 p-4 bg-purple-100 flex flex-col gap-8 items-center">
              <div
                className="w-24 h-32 rounded-md bg-white  flex justify-center items-center"
                style={{
                  marginTop: "-80px",
                }}
              >
                <Image
                  className="w-20"
                  src="https://res.cloudinary.com/dlg3i3ari/image/upload/v1705587146/output-onlinepngtools_1_viycrt.png"
                  width={40}
                  height={40}
                />
              </div>
              <div className="flex gap-1 justify-center  items-center">
                <Image
                  className="w-8 h-6"
                  src="https://res.cloudinary.com/dlg3i3ari/image/upload/v1705586403/India_Flag_ifb6pk.png"
                  alt="india Flag"
                  width={40}
                  height={40}
                />
                <h1 className="text-2xl font-bold">INDIA Office</h1>
              </div>
              <p className="text-xl font-normal">
                First floor, SM tower, Perungudi, OMR Chennai, TamilNadu 600096
              </p>
              <div className="flex gap-1 text-xl font-normal justify-center hover:text-indigo-500 hover:cursor-pointer">
                <a
                  href={`tel:${dialNumber}`}
                  className="flex gap-1 text-blue-600 hover:text-blue-800"
                >
                  <span>+91</span>
                  <span>70100</span>
                  <span>44153</span>
                </a>
              </div>
            </div>
          </section>
          <section className="flex-1 flex flex-col gap-32 items-center">
            <div className="grow h-80 w-80 p-4 bg-sky-100 flex flex-col gap-8 items-center">
              <div
                className="w-24 h-32 rounded-md bg-white"
                style={{
                  marginTop: "-80px",
                }}
              >
                <Image
                  src="https://res.cloudinary.com/dlg3i3ari/image/upload/v1705586616/4-removebg-preview_iizj08.png"
                  className="mt-3"
                  width={40}
                  height={40}
                />
              </div>
              <div className="flex gap-1 justify-center items-center">
                <Image
                  className="w-8 h-6"
                  src="https://res.cloudinary.com/dlg3i3ari/image/upload/v1705587280/australia_flag_nlrmhq.png"
                  alt="USA Flag"
                  width={40}
                  height={40}
                />
                <h1 className="text-2xl font-bold">AUSTRALIA Office</h1>
              </div>
              <p className="text-xl font-normal">
                4 Matisse street Cranbourne West Vic 3977
              </p>
            </div>
            <div className="grow h-80 w-80 p-4 bg-cyan-100 flex flex-col gap-8 items-center">
              <div
                className="w-24 h-32 rounded-md flex justify-center items-center bg-white"
                style={{
                  marginTop: "-80px",
                }}
              >
                <Image
                  src="https://res.cloudinary.com/dlg3i3ari/image/upload/v1705587477/email_2_nylrky.png"
                  alt="icon"
                  width={40}
                  height={40}
                />
              </div>
              <div className="flex gap-1 justify-center">
                <h1 className="text-2xl font-bold">Email Us</h1>
              </div>
              <p className="text-xl font-normal hover:text-indigo-500">
                <a href="mailto:hey@rytsensetech.com">hey@rytsensetech.com</a>
              </p>
              <div className="w-40 h-40">
                <Image
                  className="w-full rounded-t-lg"
                  src="/images/email-6520447_1280.jpg"
                  alt="emailimage"
                  width={40}
                  height={40}
                />
              </div>
            </div>
          </section>
          <section className="flex-1 flex flex-col gap-32 items-center">
            <div className="grow h-80 w-80 p-4 bg-stone-100 flex flex-col gap-8 items-center">
              <div
                className="w-24 h-32 rounded-md bg-white"
                style={{
                  marginTop: "-80px",
                }}
              >
                <Image
                  src="https://res.cloudinary.com/dlg3i3ari/image/upload/v1705586621/Line_United_States_New_York_Landmark_Building__Statue_Of_Liberty__Places_Of_Interest__Landmark_Illustration_Background_And_Wallpaper_For_Free_Download_-_Pngtree-removebg-preview_kwbetd.png"
                  width={40}
                  height={40}
                />
              </div>
              <div className="flex gap-1 justify-center items-center">
                <Image
                  className="w-8 h-6"
                  src="https://res.cloudinary.com/dlg3i3ari/image/upload/v1705587280/australia_flag_nlrmhq.png"
                  alt="USA Flag"
                  width={40}
                  height={40}
                />
                <h1 className="text-2xl font-bold">USA Office</h1>
              </div>
              <p className="text-xl font-normal">
                334 Pioneer way, Mountain View, California 94041, USA
              </p>
              <div className="flex gap-1 text-xl font-normal justify-center hover:text-indigo-500 hover:cursor-pointer">
                <a
                  href={`tel:${phoneNumber}`}
                  className="text-blue-600 hover:text-blue-800 flex gap-1"
                >
                  <span>+1</span>
                  <span>650</span>
                  <span>681</span>
                  <span>0090</span>
                </a>
              </div>
            </div>
            <div className="grow h-80 w-80 p-4 bg-rose-100 flex flex-col gap-8 items-center">
              <div
                className="w-24 h-32 rounded-md flex justify-center items-center bg-white"
                style={{
                  marginTop: "-80px",
                }}
              >
                <Image
                  src="https://res.cloudinary.com/dlg3i3ari/image/upload/v1705587567/social_xigt5p.png"
                  alt="icon"
                  width={40}
                  height={40}
                />
              </div>
              <div className="flex gap-1 justify-center">
                <h1 className="text-2xl font-bold">Skype</h1>
              </div>
              <p className="text-xl font-normal hover:text-indigo-500">
                <a href="#">Rytsensetechnologies</a>
              </p>
              <div className="w-40 h-40">
                <Image
                  className="w-full rounded-t-lg"
                  src="https://res.cloudinary.com/dlg3i3ari/image/upload/v1725255737/online-5059831_1280_mrsmyc.jpg"
                  alt="emailimage"
                  width={40}
                  height={40}
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default LocateUs;
