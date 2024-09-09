import React from 'react'
import Perks from '../../../components/company/career/Perks';
import InterviewProcess from '../../../components/company/career/InterviewProcess';
import JobOpenings from '../../../components/company/career/JobOpenings';
import Image from 'next/image';

export const metadata = {
  title: "Career - Rytsense Technologies",
  description: "",
  // alternates: {
  //   canonical: "https://rytsensetech.com/software-development-services-usa",
  //   languages: {
  //     "en-us": "https://rytsensetech.com/software-development-services-usa",
  //     "x-default": "https://rytsensetech.com/software-development-services-usa",
  //   },
  // },
};

const perksData = [
    {
      imgSrc: "https://res.cloudinary.com/dlg3i3ari/image/upload/v1724916569/perks-img-1_vodhls.png",
      title: "Flexible Working Hours",
      description: "We are a work oriented company where work is our priority. According to our research, flexible working hours are one of the factors which lessen your stress from work.",
    },
    {
      imgSrc: "https://res.cloudinary.com/dlg3i3ari/image/upload/v1724916763/perks-img-2_dkkyp7.png",
      title: "Company Activities",
      description: "Fun is an integral part at Rytsense Technologies. We celebrate together, play together and work together at the same time. We arrange fun activities at office frequently to loosen up your stress.",
    },
    {
      imgSrc: "https://res.cloudinary.com/dlg3i3ari/image/upload/v1724916779/perks-img-3_fkrp1s.png",
      title: "Awesome Co-Workers",
      description: "Everyone at Rytsense Technologies maintains cordial relationships with peers. Though we have different departments but we are a big team.",
    },
    {
      imgSrc: "https://res.cloudinary.com/dlg3i3ari/image/upload/v1724916794/perks-img-4_phnhpj.png",
      title: "Transparency from Top to Bottom",
      description: "We at Rytsense Technologies preserve complete transparency through each hierarchy. Everyone has a right to put their point of view and freedom to speak.",
    },
    {
      imgSrc: "https://res.cloudinary.com/dlg3i3ari/image/upload/v1724916865/perks-img-5_wyg6k0.png",
      title: "Competitive Salaries",
      description: "Rytsense Technologies values true talent, and everyone gets their fair share of salary. We believe in performance, so there is no bar for the right skills.",
    },
    {
      imgSrc: "https://res.cloudinary.com/dlg3i3ari/image/upload/v1724916880/perks-img-6_jneyvl.png",
      title: "Growth Opportunity",
      description: "Growth is never-ending at Rytsense Technologies. Whether it is about monetary or skills & talent or personal growth, everything is taken care of.",
    },
  ];
  
  const interviewProcessData = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 text-gray-100"
        >
          <path
            fillRule="evenodd"
            d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
            clipRule="evenodd"
          ></path>
        </svg>
      ),
      title: "Process Of Interview",
      description:
        "Selection of any candidate is purely depended on their performance in the interview process. Generally, there are three stages in the interview process which are as follows.",
    },
    {
      icon: (
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          color="white"
          height="50"
          width="50"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z"></path>
          <path d="M10 10l2 -2v8"></path>
        </svg>
      ),
      title: "HR Interview",
      description:
        "At a first stage a candidate would appear for HR screening where they would be asked question related to adaptability, leadership, growth potential etc.",
    },
    {
      icon: (
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          color="white"
          height="50"
          width="50"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z"></path>
          <path d="M10 8h3a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 0 -1 1v2a1 1 0 0 0 1 1h3"></path>
        </svg>
      ),
      title: "Personal Interview",
      description:
        "Personal Interview of a candidate contains the technical questions related to their domain.",
    },
    {
      icon: (
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          color="white"
          height="50"
          width="50"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z"></path>
          <path d="M10 9a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1"></path>
        </svg>
      ),
      title: "Practical Round",
      description:
        "This part of interview is the last stage where you need to perform a program practically and show the output of the same.",
    },
  ];
  
  const jobOpeningData = [
    {
        post: "Back-End Node Engineer",
        shift: "US",
      },
      {
        post: "Front-End React and Angular Engineer",
        shift: "US",
      },
      {
        post: "QA Manual",
        shift: "US",
      },
      {
        post: "Project Manager",
        shift: "US",
      },
      {
        post: "Dev-Ops Enginner",
        shift: "US",
      },
      {
        post: "Business Technical Analyst",
        shift: "US",
      },
      {
        post: "Software Architects",
        shift: "US",
      },
  ];
  

const page = () => {
  return (
    <div>
      <section className="px-4 lg:mt-32 md:mt-44 sm:mt-44 st:mt-44 mt-44">
        <div className="bg-gradient-to-br from-indigo-400 via-violet-600 to-pink p-6 sm:p-10 rounded-2xl w-full text-white flex items-center justify-between max-w-2xl mx-auto mt-20">
          <div className="flex flex-col gap-6">
            <div>
              <span className="text-gray-200 text-4xl font-semibold">
                Are you a fresher?
              </span>
              <br />
              <span className="text-gray-200">
                Are you a fresher? Lets start your career together. At Rytsense
                Technologies, we will sharpen your technical to communication
                skills.
              </span>
            </div>
            <a
              href=""
              target="_blank"
              rel="noreferrer"
              className="text-white bg-pink-700 hover:bg-gray-50 hover:text-pink px-4 py-2 rounded-lg w-fit ease duration-300 flex gap-1 items-center group"
            >
              <span>Apply Here</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                className="group-hover:translate-x-1 transition-transform ease duration-200"
                width="1em"
                height="1em"
                viewBox="0 0 256 256"
              >
                <path
                  fill="currentColor"
                  d="m221.66 133.66l-72 72a8 8 0 0 1-11.32-11.32L196.69 136H40a8 8 0 0 1 0-16h156.69l-58.35-58.34a8 8 0 0 1 11.32-11.32l72 72a8 8 0 0 1 0 11.32Z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </section>

      <div className="sm:flex items-center max-w-screen-xl p-5">
        <div className="sm:w-1/2 p-10">
          <Image
            src="https://res.cloudinary.com/dlg3i3ari/image/upload/v1705588591/aboutus1_spleou.webp"
            alt="About Us"
            className="object-center text-center"
            width={500}
            height={500}
          />
        </div>
        <div className="sm:w-1/2 p-5">
          <h2 className="text-gray-500 border-b-2 border-indigo-600 uppercase">
            Career
          </h2>
          <h2 className="my-4 font-bold text-3xl sm:text-4xl">
            Better Together,{" "}
            <span className="text-indigo-600">Grow Together</span>
          </h2>
          <p className="text-gray-700">
            We are one of the best places to work. Rytsense Technologies
            creates an atmosphere where you can grow your inner self, show your
            talents, get the best out of your own self. We believe in invention
            of new processes that ease your work. The work place at Rytsense
            Technologies is very flexible.
          </p>
          <p className="text-gray-700 mt-5">
            We are looking for some fresh talents who can add cultural values
            at Rytsense Technologies, some one who has the same mission that
            is ours but also can bring diversity at the same time.
          </p>
        </div>
      </div>

      <div className="bg-gray-100 min-h-screen p-4">
        <div className="container mx-auto pt-12 pb-20">
          <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
            Perks To Work With Rytsense Technologies:
          </h1>
          <Perks perks={perksData} />
        </div>
      </div>

      <div className="p-4 min-h-screen">
        <div className="max-w-7xl mx-auto h-max px-6 md:px-12 xl:px-6">
          <InterviewProcess steps={interviewProcessData} />
        </div>
        <h1 className="text-4xl font-bold text-gray-800 text-center mt-5">
          JOB OPENING
        </h1>
        <JobOpenings jobs={jobOpeningData} />
      </div>
    </div>
  )
}

export default page