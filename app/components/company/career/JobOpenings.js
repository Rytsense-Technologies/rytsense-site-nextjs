import React from 'react'

const JobOpenings = ({ jobs }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    {jobs.map((job, index) => (
      <div key={index} className="m-5">
        <div
          className="group mx-2 mt-10 grid max-w-screen-md grid-cols-12 space-x-8 overflow-hidden rounded-lg border py-8 text-gray-700 shadow transition hover:shadow-lg sm:mx-auto"
          style={{ height: "250px" }}
        >
          <div className="col-span-11 flex flex-col pr-8 text-left sm:pl-4">
            <a
              href="#"
              className="mb-3 overflow-hidden pr-7 text-lg font-semibold sm:text-xl"
            >
              Sr. {job.post}
            </a>
            <div className="mt-2 flex flex-col space-y-3 text-sm font-medium text-gray-500 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-2">
              <div>
                Experience:
                <span className="ml-2 mr-3 rounded-full bg-green-100 px-2 py-0.5 text-green-900">
                  3+ Years
                </span>
              </div>
              <div>
                Timing:
                <span className="ml-2 mr-3 rounded-full bg-green-100 px-2 py-0.5 text-green-900">
                  {job.shift} shift
                </span>
              </div>
            </div>
            <p className="text-gray-900 font-semibold mt-5">
              Drop your resume here{" "}
              <span className="text-sky-600 font-semibold underline">
                careers@rytsensetech.com
              </span>
            </p>
          </div>
        </div>
      </div>
    ))}
  </div>
  )
}

export default JobOpenings