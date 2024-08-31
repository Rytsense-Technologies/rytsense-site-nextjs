import React from 'react'
import Link from 'next/link';
const PricingPlane = () => {
  return (
    <div>
            <div
    
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.5 }}
        className="pt-5 bg-gray-900"
        id="pricing"
      >
        <div className="mx-auto pb-20 mt-4 max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-base font-semibold leading-7 text-indigo-400">
              Pricing Plane
            </h1>
            <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Hire Dedicated resources from Rytsense Technologies Starts from,
            </p>
          </div>
          <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <div className="bg-white/5 ring-2 ring-indigo-500 rounded-3xl p-8 xl:p-10">
              <div className="flex items-center justify-between gap-x-4">
                <h2
                  id="product1"
                  className="text-lg font-semibold leading-8 text-white"
                >
                  Hourly
                </h2>
              </div>
              <p className="mt-4 text-sm leading-6 text-gray-300 text-left">
                For short-term project or need a specialized service, hire our
                skilled App developers on an hourly basis.
              </p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-lg font-semibold leading-6 text-gray-300">
                  ${" "}
                </span>
                <span className="text-4xl font-bold tracking-tight text-white">
                  25.00
                </span>
                <span className="text-lg font-semibold leading-6 text-gray-300">
                  /Hour
                </span>
              </p>
              <Link
                href="/contact"
                aria-describedby="product2"
                className="bg-indigo-500 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline-indigo-500 mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Hire Now
              </Link>
              <ul
                role="list"
                className="mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10"
              >
                <li className="flex gap-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-6 w-5 flex-none text-white"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  We sign NDA for all our projects.
                </li>
              </ul>
            </div>

            <div className="bg-white/5 ring-2 ring-indigo-500 rounded-3xl p-8 xl:p-10">
              <div className="flex items-baseline justify-between gap-x-4">
                <h2
                  id="product2"
                  className="text-lg font-semibold leading-8 text-white"
                >
                  Monthly
                </h2>
                {/* <p className="rounded-full bg-indigo-500 px-2.5 py-1 text-xs font-semibold leading-5 text-white">Most popular</p> */}
              </div>
              <p className="mt-4 text-sm leading-6 text-gray-300 text-left">
                For rather precise, limited budget, less time and long-term
                partnership, consider a source of App developers on a monthly
                basis.
              </p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-lg font-semibold leading-6 text-gray-300">
                  ${" "}
                </span>
                <span className="text-4xl font-bold tracking-tight text-white">
                  3200.00
                </span>
                <span className="text-lg font-semibold leading-6 text-gray-300">
                  /Month
                </span>
              </p>
              <Link
               href="/contact"
                aria-describedby="product2"
                className="bg-indigo-500 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline-indigo-500 mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Hire Now
              </Link>
              <ul
                role="list"
                className="mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10"
              >
                <li className="flex gap-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-6 w-5 flex-none text-white"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  We sign NDA for all our projects.
                </li>
              </ul>
            </div>

            <div className="bg-white/5 ring-2 ring-indigo-500 rounded-3xl p-8 xl:p-10">
              <div className="flex items-center justify-between gap-x-4">
                <h2
                  id="product3"
                  className="text-lg font-semibold leading-8 text-white"
                >
                  Quarterly
                </h2>
              </div>
              <p className="mt-4 text-sm leading-6 text-gray-300 text-left">
                If you need constant support or guidance and expecting your
                target audience and project requirements may change then hire
                App developers on a quarterly basis.
              </p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-lg font-semibold leading-6 text-gray-300">
                  ${" "}
                </span>
                <span className="text-4xl font-bold tracking-tight text-white">
                  8999.00
                </span>
                <span className="text-lg font-semibold leading-6 text-gray-300">
                  /Quater
                </span>
              </p>
              <Link
                href="/contact"
                aria-describedby="product2"
                className="bg-indigo-500 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline-indigo-500 mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Hire Now
              </Link>
              <ul
                role="list"
                className="mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10"
              >
                <li className="flex gap-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-6 w-5 flex-none text-white"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  We sign NDA for all our projects.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PricingPlane
