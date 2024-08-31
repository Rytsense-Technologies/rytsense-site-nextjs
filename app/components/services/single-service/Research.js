import Link from "next/link";
import Image from "next/image";

const ResearchContent = () => {
  const researches = [
    {
      heading: "Blogs",
      bgimage: "https://res.cloudinary.com/dlg3i3ari/image/upload/v1724915329/technology-3435575_1280_vaou2y.jpg",
      passage: "How AI is Transforming Business: A Complete Guide",
      path: "/research/guide-on-how-ai-is-transforming-businesses",
    },
    {
      heading: "Blogs",
      bgimage: "https://res.cloudinary.com/dlg3i3ari/image/upload/v1724915346/code-1076536_1280_rtddsv.jpg",
      passage: "How to Hire PHP Developers in 2023?",
      path: "/research/hire-php-developers",
    },
    {
      heading: "Blogs",
      bgimage: "https://res.cloudinary.com/dlg3i3ari/image/upload/v1724915364/create-3026190_1280_pe1gkb.jpg",
      passage: "Definitive Guide to Hire Unity3D Developers in 2023",
      path: "",
    },
  ];

  return (
    <div>
      <div className="max-w-7xl p-5 mx-auto poppins">
        <div className="flex flex-col gap-3">
          <div className="relative">
            {/* <h1 className="mt-7 text-3xl font-bold md:text-5xl md:mt-10">
              Research
            </h1> */}
          </div>
          {/* <p>A well- Detailed Research about the Innovative Topics.</p> */}
        </div>
        <div className="grid grid-cols-3 gap-4 justify-center lg:justify-between">
          {researches.map((research, index) => (
            <Link href={research.path} key={index}>
              <div
                className="flex-0 basis-80 shadow-lg rounded-xl lg:flex-1 hover:cursor-pointer"
              >
                <Image
                  className="w-full h-52 rounded-t-xl"
                  src={research.bgimage}
                  alt={research.passage}
                  width={320} // Adjust these values based on your design requirements
                  height={208} // Adjust these values based on your design requirements
                  layout="responsive"
                  objectFit="cover"
                />
                <p className="p-5 text-lg font-semibold hover:text-blue1">
                  {research.passage}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResearchContent;
