import React from "react";

const SoftwareClients = () => {
  return (
    <>
      <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
          <div class="mx-auto max-w-screen-sm">
            <h2 class="mb-4 text-2xl tracking-tight font-bold text-gray-900 dark:text-white">
              What Our Clients Say
            </h2>
            <p class="mb-8 font-normal text-gray-500 lg:mb-16 sm:text-md dark:text-gray-400">
              We were looking for a custom software development company in
              Chennai that could help us with a complex project. Rytsense
              Technologies delivered on all fronts. Their team understood our
              needs and delivered a product that was both innovative and easy to
              use. We highly recommend their services.
            </p>
          </div>
          <div class="grid mb-8 lg:mb-12 lg:grid-cols-2">
            <figure class="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700">
              <blockquote class="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                  Client from USA
                </h3>
                <p class="my-4">
                  "Rytsense Technologies provided us with a custom software
                  solution that exceeded our expectations. Their team was
                  professional, knowledgeable, and always available to answer
                  our questions. The software they developed has significantly
                  improved our business processes and customer satisfaction"
                </p>
              </blockquote>
            </figure>
            <figure class="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 dark:bg-gray-800 dark:border-gray-700">
              <blockquote class="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                  Client from India
                </h3>
                <p class="my-4">
                  "We were looking for a custom software development company in
                  Chennai that could help us with a complex project. Rytsense
                  Technologies delivered on all fronts. Their team understood
                  our needs and delivered a product that was both innovative and
                  easy to use. We highly recommend their services."
                </p>
              </blockquote>
            </figure>
          </div>
        </div>
      </section>
    </>
  );
};

export default SoftwareClients;
