import React from "react";

const FinanceTestimonials = () => {
  const details = [
    {
      message:
        '"Thoughtfully integrating consumer feedback to improve the UX/UI, Rytsense Technologies has developed a series of consistently improved mobile app iterations. Their competitive pricing structure pairs value with cost savings. The project manager was exceptionally skilled and communicative."',

      name: "Sujai Soy",
      companyname: "Skkyn Technologies - Owner",
      country: "Dubai, UAE",
    },
    {
      message:
        '"Rytsense Technologies was diligent and responsive in solving any issues that came up throughout the development process and still provides excellent support when they are needed. The client feels that Rytsense has really gone above and beyond with their service."',

      name: "Omar Boyd",
      companyname: "CoFounder, Oanz Holdings",
      country: "Canada",
    },
    {
      message:
        '"The founder of Rytsense Technologies and the rest of his project team have placed customer service through responsiveness and proper communication above all else, leading to a strong initial product and the opportunity to continue the partnership through multiple iterations and enhancements."',

      name: "Brendan Buchholz",
      companyname: "Founder, Cool Charm Friends",
      country: "Brisbane, Australia",
    },
  ];
  return (
    <>
      <section className="bg-gray-50">
        <div className="mx-auto max-w-screen-2xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="md:flex md:items-end md:justify-between">
            <div className="max-w-xl">
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                Straight From Our Clients Heart!
              </h2>

              <p className="mt-6 max-w-lg leading-relaxed text-gray-800">
                They have unlocked their success & gained a competitive edge
                with our enterprise software development services.
              </p>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            {details.map((testi, i) => (
              <blockquote
                className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8"
                key={i}
              >
                <div>
                  <div className="flex gap-0.5 text-yellow-500">
                    <svg
                      className="size-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>

                    <svg
                      className="size-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>

                    <svg
                      className="size-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>

                    <svg
                      className="size-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>

                    <svg
                      className="size-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>

                  <div className="mt-4">
                 

                    <p className="mt-4 leading-relaxed text-md text-gray-700">
                      {testi.message}
                    </p>
                  </div>
                </div>

                <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                  &mdash; {testi.name}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FinanceTestimonials;
