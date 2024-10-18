import Image from "next/image";
import CustomButton from "../../common/CustomButton";

const services = [
  {
    title: "FinTech Startup",
    description:
      "Our financial app developers combine their startups' domain experience to validate, design, develop, optimize the cost & accelerate the go-to-market time.",
    question:
      "Need help with validation, UI/UX, development, or product launch?",
    button: "Get Started",
    image:
      "https://res.cloudinary.com/dlg3i3ari/image/upload/v1728543472/06d2ec77d255c4893f88fba4a13faf84.fint_ecosystem_img1_wsyac9.webp",
  },
  {
    title: "Small Or Midsize Business",
    description:
      "We help you make a difference for your business, reduce operational costs, and expand your market reach to keep your business ahead of the competition.",
    question:
      "Ready to automate your processes or launch new financial services online?",
    button: "Get Started",
    image:
      "https://res.cloudinary.com/dlg3i3ari/image/upload/v1728543479/83599328f8d8a29fde933143141287ff.fint_ecosystem_img2_crzu8w.webp",
  },
  {
    title: "Enterprise Financial Company",
    description:
      "Our financial software development services are aimed toward building enterprise-grade FinTech apps, following the industry’s compliance & security standards.",
    question:
      "Want to digitize your services, use AI to extract insights or upgrade your legacy systems?",
    button: "Get Started",
    image:
      "https://res.cloudinary.com/dlg3i3ari/image/upload/v1728543484/439947365ace98d7de20504495136dd6.fint_ecosystem_img3_qalyxb.webp",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">
          Revolutionizing The Financial Ecosystem For Every Business Size
        </h2>
        <p className="text-gray-800 text-xl mx-auto mb-16">
          Code Brew offers deploys extensive FinTech domain knowledge &
          first-class financial software development services to create next-gen
          financial app development solutions for everyone.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-8 rounded-lg">
            <div
              className="flex justify-start mb-6"
              style={{ width: "350px", height: "350px" }}
            >
              <Image
                src={service.image}
                alt={service.title}
                width={250}
                height={0}
              />
            </div>
            <div className="border-b-4 border-sky-500 w-16  mb-4"></div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-5">
              {service.title}
            </h3>
            <p className="text-sky-500 text-sm font-semibold mb-4 border border-sky-500 bg-sky-100 p-1 rounded-lg">
              {service.question}
            </p>
            <p className="text-gray-800 text-lg font-normal mb-8">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
