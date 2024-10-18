import Image from "next/image";
import { BsBank2 } from "react-icons/bs";
import CustomButton from "../../common/CustomButton";

export default function Hero() {
  return (
    <section className="relative bg-white py-5">
      <div className="mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Left Section */}
        <div className="md:w-2/5 space-y-12">
          <div className="w-20 h-20  flex items-center  justify-center rounded-lg shadow-lg">
            <BsBank2 className="text-sky-600 text-5xl" />
          </div>

          <h1 className="text-5xl font-bold text-gray-700">
            Financial Software Development Services
          </h1>

          <p className="text-gray-800 text-xl">
            Build your FinTech app to embrace digital transformation in
            financial services to boost profitability & customer convenience.
          </p>
          <CustomButton title={"Get Started"} />
        </div>

        {/* Right Section */}
        <div className="md:w-3/5  mt-8 md:mt-0">
          <Image
            src="https://res.cloudinary.com/dlg3i3ari/image/upload/v1729233089/women-finance_is8bbb.webp"
            alt="Woman with Phone"
            className="mx-auto"
            width={500}
            height={500}

          />
          {/* Floating Elements */}
        </div>
      </div>
    </section>
  );
}
