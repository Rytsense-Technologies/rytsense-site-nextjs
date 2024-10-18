import Image from "next/image";

export default function BenefitsSection() {
  const benefits = [
    {
      title: "Powerful Integrations",
      description:
        "Enjoy seamless integration & boost customer experience adding numerous powerful features to your FinTech app.",
      position: "left",
    },
    {
      title: "AI-Powered Intelligence",
      description:
        "Our financial software development services integrate AI technology to make your solution intelligent & user-friendly.",
      position: "left",
    },
    {
      title: "Exceptional UX",
      description:
        "Our financial software development services ensure that your app offers a user-friendly & hassle-free digital experience.",
      position: "left",
    },
    {
      title: "Data Security & Privacy",
      description:
        "Unlock the power of advanced technologies like Blockchain to enhance the data security & privacy of your FinTech app.",
      position: "right",
    },
    {
      title: "Regulatory Compliance",
      description:
        "We build FinTech apps that adhere to laws, guidelines, & specifications related to your business processes.",
      position: "right",
    },
    {
      title: "Automated Fraud Detection",
      description:
        "Leverage automated fraud prevention solutions to streamline review processes & flag fraudulent activities.",
      position: "right",
    },
  ];

  return (
    <section className="bg-white py-16 px-5">
      <div className="mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          How You Benefit With Our Financial Software Development Solutions?
        </h2>
        <p className="text-gray-800 text-lg max-w-xl mx-auto mb-16">
          Our tailor-made FinTech solutions focus on keeping you aligned with
          the latest trends in the financial industry.
        </p>

        <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between">
          \
          <div className="space-y-8 lg:w-1/3">
            {benefits
              .filter((benefit) => benefit.position === "left")
              .map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md text-left border border-gray-200"
                >
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-800 text-lg font-sans">
                    {benefit.description}
                  </p>
                </div>
              ))}
          </div>
          <div className="my-12 lg:my-0 lg:w-1/3 relative">
            <Image
              src="https://res.cloudinary.com/dlg3i3ari/image/upload/v1728556067/d41d8cd98f00b204e9800998ecf8427e.fint_benifit_sec_img_lto1tv.webp"
              alt="Fintech App"
              width={400}
              height={800}
              className="mx-auto"
            />
          </div>
          <div className="space-y-8 lg:w-1/3">
            {benefits
              .filter((benefit) => benefit.position === "right")
              .map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md text-left border border-gray-200"
                >
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-800 text-lg font-sans">
                    {benefit.description}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
