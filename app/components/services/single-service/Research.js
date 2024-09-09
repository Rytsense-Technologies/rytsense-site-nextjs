import Link from "next/link";
import Image from "next/image";

const ResearchContent = () => {
  const researches = [
    {
      heading: "Blogs",
      bgimage:
        "https://res.cloudinary.com/dlg3i3ari/image/upload/v1724915329/technology-3435575_1280_vaou2y.jpg",
      passage: "How AI is Transforming Business: A Complete Guide",
      path: "/research/guide-on-how-ai-is-transforming-businesses",
    },
    {
      heading: "Blogs",
      bgimage:
        "https://res.cloudinary.com/dlg3i3ari/image/upload/v1724915346/code-1076536_1280_rtddsv.jpg",
      passage: "How to Hire PHP Developers in 2023?",
      path: "/research/hire-php-developers",
    },
    {
      heading: "Blogs",
      bgimage:
        "https://res.cloudinary.com/dlg3i3ari/image/upload/v1724915364/create-3026190_1280_pe1gkb.jpg",
      passage: "Definitive Guide to Hire Unity3D Developers in 2023",
      path: "",
    },
  ];

  return (
    <div className="max-w-7xl p-5 mx-auto poppins">
      <div className="flex flex-col gap-3">
        <div className="relative">
          <h1 className="mt-7 text-3xl font-bold md:text-5xl md:mt-10">
            Research
          </h1>
        </div>
        <p>A well-detailed research about the innovative topics.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {researches.map((research, index) => (
          <Link href={research.path} key={index}>
            <div className="flex-0 shadow-lg rounded-xl hover:cursor-pointer transition-transform transform hover:scale-105">
              <Image
                className="w-full h-52 rounded-t-xl object-cover"
                src={research.bgimage}
                alt={research.passage}
                width={320} // Adjust these values based on your design requirements
                height={208} // Adjust these values based on your design requirements
                layout="responsive"
                objectFit="cover"
              />
              <p className="p-5 text-lg font-semibold hover:text-blue-500">
                {research.passage}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ResearchContent;
