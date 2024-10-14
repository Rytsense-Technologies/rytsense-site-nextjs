import Image from "next/image";
import { BsBank2 } from "react-icons/bs";

export default function Hero() {
  return (
    <section className="relative bg-white py-16">
      <div className="mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Left Section */}
        <div className="md:w-2/5 space-y-8">
          <div className="w-10 h-10  flex items-center justify-center rounded-lg shadow-lg">
            <BsBank2 className="text-sky-600 text-4xl" />
          </div>

          <h1 className="text-5xl font-bold text-gray-700">
            Financial Software Development Services
          </h1>

          <p className="text-gray-800 text-xl">
            Build your FinTech app to embrace digital transformation in
            financial services to boost profitability & customer convenience.
          </p>
          <button className="px-6 py-3 bg-sky-500 text-white rounded-lg hover:bg-sky-600">
            Get Started
          </button>
        </div>

        {/* Right Section */}
        <div className="md:w-3/5 relative mt-8 md:mt-0">
          <div className="relative">
            <img
              src="https://res.cloudinary.com/dlg3i3ari/image/upload/v1728541780/istockphoto-1344229714-612x612-removebg-preview_cp5bv2.png"
              alt="Woman with Phone"
              className="w-full h-auto"
            />
            {/* Floating Elements */}
            <div className="absolute top-0 left-40 transform w-44 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg shadow-lg p-4 border border-white/30">
  <p className="text-gray-700 text-lg">Card 1 . . . </p>
  <p>0632</p>
  <p className="text-gray-500 text-xl">Exp 12/26</p>
  <p className="text-lg font-bold text-gray-900">$460,249</p>
  <p className="text-green-500 text-xl">+12.32% vs Last Week</p>
</div>

            <div className="absolute bottom-0 right-40 transform  w-36 bg-white rounded-lg shadow-lg p-4">
              <p className="text-gray-700 text-xs">INCOME</p>
              <p className="text-lg font-bold text-gray-900">$500,000</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                <div className="bg-green-500 h-2.5 rounded-full w-3/4"></div>
              </div>
            </div>

            <div className="absolute bottom-0 left-40 transform font-mono  w-32 bg-white rounded-lg shadow-lg p-4">
              <p className="text-gray-700 text-xl">Expenses</p>
              <p className="text-lg font-bold text-gray-900">$9,137</p>
              <p className="text-red-500 text-lg font-semibold">35%</p>
            </div>

            <div className="absolute top-0 right-32 transform font-mono w-52 bg-white rounded-lg shadow-lg p-4">
              <p className="text-blue-700 font-bold text-lg">$120.00</p>
              <p className="text-md text-gray-500 ">Free fee transfer 🎉</p>
              <p className="text-xl font-semibold text-gray-500">
                Your transfer will be sent in seconds
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
