import Image from "next/image";
import { BsBank2 } from "react-icons/bs";
import CustomButton from "../../common/CustomButton";

export default function Hero() {
  return (
    <div className="px-20 py-20">
      <div className=" mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Left Side - Text Section */}
        <div className="w-full md:w-1/2">
          <div className="flex flex-col items-start gap-5 mb-6">
            {/* Icon */}
            <div className="bg-sky-100 p-4 rounded-lg">
              <BsBank2 className="text-4xl text-blue-800" />
            </div>
            {/* Title and Description */}
            <div>
              <h1 className="text-4xl font-bold text-gray-900">
                Financial Software <br /> Development Services
              </h1>
              <p className="text-lg text-gray-600 mt-4">
                Build your FinTech app to embrace digital transformation in
                financial services to boost profitability & customer
                convenience.
              </p>
            </div>
          </div>

          {/* Button */}
          <CustomButton title={"Get Started"} />
        </div>

        {/* Right Side - Image Section */}
        <div className="relative w-full md:w-1/2 mt-10 md:mt-0">
          {/* Main Image */}
          <Image
            src="https://res.cloudinary.com/dlg3i3ari/image/upload/v1728541780/istockphoto-1344229714-612x612-removebg-preview_cp5bv2.png" // Replace this with your actual image
            alt="Person using phone"
            className="mx-auto w-3/2"
            width={500}
            height={500}
          />

          {/* Financial Data Cards */}
          <div className="absolute top-0 right-10 bg-white p-4 rounded-lg shadow-lg">
            <p className="text-sm text-gray-400">Card 1</p>
            <p className="text-xl font-semibold text-gray-900">$460,249</p>
            <p className="text-xs text-green-500 mt-1">+12.32% vs Last Week</p>
          </div>

          <div className="absolute top-20 left-10 bg-white p-4 rounded-lg shadow-lg">
            <p className="text-sm text-gray-400">Transfer Amount</p>
            <p className="text-xl font-semibold text-gray-900">$120.00</p>
            <p className="text-xs text-gray-500 mt-1">Express Transfer</p>
          </div>

          <div className="absolute bottom-0 left-12 bg-white p-4 rounded-lg shadow-lg">
            <p className="text-sm text-gray-400">Income</p>
            <p className="text-xl font-semibold text-gray-900">$500,000</p>
          </div>

          <div className="absolute bottom-10 right-20 bg-white p-4 rounded-lg shadow-lg">
            <p className="text-sm text-gray-400">Expenses</p>
            <p className="text-xl font-semibold text-red-500">$9,137</p>
            <p className="text-xs text-red-500 mt-1">-35%</p>
          </div>
        </div>
      </div>
    </div>
  );
}
