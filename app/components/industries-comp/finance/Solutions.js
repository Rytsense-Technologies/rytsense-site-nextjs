import {
  FaMoneyBillWave,
  FaWallet,
  FaChartLine,
  FaRegHandshake,
} from "react-icons/fa";
import { GiArtificialIntelligence, GiHouseKeys } from "react-icons/gi";
import { BsCreditCard, BsFileEarmarkSpreadsheet } from "react-icons/bs";
import { MdOutlineSecurity, MdOutlinePayment } from "react-icons/md";

export default function Solutions() {
  const services = [
    {
      title: "Wealth Management Software",
      description:
        "Our finance app development services help build advanced solutions that let your customers track, manage, and grow their wealth.",
      icon: <FaMoneyBillWave />,
    },
    {
      title: "Digital Wallets",
      description:
        "Create digital wallet apps to let users transfer money to individuals & banks through QR Codes, debit/credit cards, mobile number, and NFC.",
      icon: <FaWallet />,
    },
    {
      title: "Accounting Software",
      description:
        "Launch accounting mobility solutions to help users manage all financial information including immovable assets, liabilities, and cash assets.",
      icon: <BsFileEarmarkSpreadsheet />,
    },
    {
      title: "Insurtech Solutions",
      description:
        "We offer multipurpose financial solutions to insurance companies for offering multi-platform solutions for agents, customers, & partners.",
      icon: <FaRegHandshake />,
    },
    {
      title: "Lending & Mortgage Software",
      description:
        "We help build lending and mortgage solutions offering mortgage calculators, automated advisory platforms, legal maintenance tools, & more.",
      icon: <GiHouseKeys />,
    },
    {
      title: "Investment Solutions",
      description:
        "Create financial software solutions to let users gather their investment information including portfolio values, holdings, & other insights.",
      icon: <FaChartLine />,
    },
    {
      title: "Dynamic KYC Platforms",
      description:
        "Build KYC integrated financial platforms to manage all the KYC regulatory compliance & policies throughout the entire client lifecycle.",
      icon: <MdOutlineSecurity />,
    },
    {
      title: "Intuitive Payment System",
      description:
        "Use our finance app development services to create next-level payment processors offering real-time transactions, regardless of currency rates.",
      icon: <MdOutlinePayment />,
    },
    {
      title: "POS Solution",
      description:
        "Trust our financial app developers to build POS solutions for every type of retail store chain to accept payments from their walk-in customers.",
      icon: <BsCreditCard />,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Plethora Of Finance Software Development Solutions
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Being a leading financial software development company, we deliver
          high-performance FinTech solutions tailor-made to help your businesses
          pave their way to success.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-6  text-left">
              <div className=" mb-4">
                <span className="text-sky-500 w-28 h-28 text-6xl">
                  {" "}
                  {service.icon}
                </span>

                <h3 className="text-2xl font-bold text-gray-900 mt-2 border-b border-gray-500">
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-800 text-lg font-sans">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
