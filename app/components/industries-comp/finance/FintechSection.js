import {
  FaCode,
  FaDraftingCompass,
  FaPuzzlePiece,
  FaExpand,
  FaLightbulb,
  FaHeadset,
} from "react-icons/fa";

const FintechSection = () => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat text-white p-8 rounded-lg"
      style={{
        backgroundImage:
          'url("https://res.cloudinary.com/dlg3i3ari/image/upload/v1728558196/application-pc-and-smartphone-with-business-vector-29570430_ymwcrd.jpg")',
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        backgroundBlendMode: "overlay",
      }}
    >
      <h2 className="text-3xl font-bold mb-4">
        Why Choose Rytsense Technologies For FinTech App Development?
      </h2>
      <p className="mb-8 text-gray-300">
        We have a team of financial app developers to transform FinTech ideas
        into real-world apps.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="border border-gray-100 p-4 rounded-lg">
          <FaCode className="text-3xl mb-4" />
          <h3 className="font-semibold text-md">
            Own Your Source Code & IP Rights
          </h3>
        </div>

        <div className="border border-gray-100 p-4 rounded-lg">
          <FaDraftingCompass className="text-3xl mb-4" />
          <h3 className="font-semibold text-md">Exceptional UI/UX</h3>
        </div>

        <div className="border border-gray-100 p-4 rounded-lg">
          <FaLightbulb className="text-3xl mb-4" />
          <h3 className="font-semibold text-md">100% Customized Solution</h3>
        </div>

        <div className="border border-gray-100 p-4 rounded-lg">
          <FaPuzzlePiece className="text-3xl mb-4" />
          <h3 className="font-semibold text-md">Endless Integrations</h3>
        </div>

        <div className="border border-gray-100 p-4 rounded-lg">
          <FaExpand className="text-3xl mb-4" />
          <h3 className="font-semibold text-md">
            Highly Robust & Scalable Solution
          </h3>
        </div>

        <div className="border border-gray-100 p-4 rounded-lg">
          <FaHeadset className="text-3xl mb-4" />
          <h3 className="font-semibold text-md">Dedicated Support</h3>
        </div>
      </div>
    </div>
  );
};

export default FintechSection;
