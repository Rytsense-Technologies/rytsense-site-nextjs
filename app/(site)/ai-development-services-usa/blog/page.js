import React from "react";
import Image from "next/image";

const aiTopics = [
  {
    title: "AI-Powered Automation",
    altText: "Best AI development service in India",
    description:
      "Automation has been a key focus of AI development in India, and in 2024, we expect to see even more advanced AI-powered automation solutions. AI developers in India are leading the charge in creating these solutions, from customer service chatbots to automated supply chain management. AI development companies in India are poised to continue streamlining operations and reducing costs for businesses through cutting-edge AI-powered automation.",
    img: "https://res.cloudinary.com/dlg3i3ari/image/upload/v1725627930/ai1_dstfm8.png",
  },
  {
    title: "AI in Healthcare",
    altText: "Best AI developers in India",
    description:
      "AI is revolutionizing healthcare in India by improving diagnostics, treatment planning, and patient care. In 2024, we’ll see more AI-driven healthcare solutions developed by AI developers in India, including predictive analytics for early disease detection, personalized treatment plans, and AI-powered robotic surgery. AI development in India is expected to make significant strides in healthcare, thanks to the expertise of AI development companies in India.",
    img: "https://res.cloudinary.com/dlg3i3ari/image/upload/v1725628066/ai2_qq2nmf.png",
  },
  {
    title: "AI for Personalization",
    altText: "Top AI development companies in India",
    description:
      "Personalization is becoming increasingly important for businesses looking to enhance customer experiences. AI-driven personalization tools from AI development companies in India will continue to evolve, allowing businesses to deliver highly targeted marketing campaigns, personalized product recommendations, and customized user experiences. AI developers in India are at the forefront of creating these advanced personalization tools, making AI development in India a key driver of customer experience innovation.",
    img: "https://res.cloudinary.com/dlg3i3ari/image/upload/v1725628126/ai3_ouqzwh.png",
  },
  {
    title: "AI in Cybersecurity",
    altText: "AI development service in India",
    description:
      "As cyber threats become more sophisticated, AI is playing a critical role in enhancing cybersecurity. In 2024, AI-powered cybersecurity solutions from AI development companies in India will become more prevalent, helping businesses detect and respond to threats in real-time and protect sensitive data from breaches. The role of AI developers in India in strengthening cybersecurity through innovative AI solutions is becoming increasingly vital.",
    img: "https://res.cloudinary.com/dlg3i3ari/image/upload/v1725628200/ai4_tvwlrl.png",
  },
  {
    title: "AI and Sustainability",
    altText: "Best AI development service in India",
    description:
      "Sustainability is a growing concern for businesses worldwide, including in India. AI development in India is being used to optimize energy consumption, reduce waste, and develop sustainable practices. In 2024, we’ll see more AI-driven sustainability initiatives led by AI development companies in India, helping businesses reduce their environmental impact and achieve their sustainability goals. AI developers in India are creating solutions that not only drive business success but also contribute to a more sustainable future.",
    img: "https://res.cloudinary.com/dlg3i3ari/image/upload/v1725628274/ai5_d3wgad.png",
  },
];

const page = () => {
  return (
    <>
      <div className="py-20 px-40">
        <h1 className="text-2xl text-rose-500 text-center mt-8 font-semibold font-serif">
          Top 5 AI Trends to Watch in 2024
        </h1>
        {aiTopics.map((topic, index) => (
          <div
            key={index}
            style={{ margin: "20px 0" }}
            className="border-b border-sky-600 p-8"
          >
            <div className="flex items-center gap-8">
              <Image
                src={topic.img}
                alt={topic.altText}
                width={300}
                height={300}
                className="shadow-xl"
              />
              <div>
                <h2 className="text-xl font-bold text-sky-700">
                  {topic.title}
                </h2>
                <p className="text-lg text-gray-500 mt-5">
                  {topic.description}
                </p>
              </div>
            </div>
          </div>
        ))}
        <div className="py-10">
          <h1 className="text-xl font-bold">Conclusion</h1>
          <p className="text-gray-600 font-semibold">
            AI is set to continue its rapid evolution in 2024, with new trends
            and technologies transforming industries and creating new
            opportunities. By staying ahead of these trends, businesses in India
            can leverage AI development in India to drive innovation, improve
            efficiency, and gain a competitive edge. Whether you’re looking to
            automate operations, enhance customer experiences, or improve
            cybersecurity, AI developers in India and AI development companies
            in India are at the forefront of these advancements. Additionally,
            chatbot companies in India are playing a significant role in
            enhancing customer service and engagement through AI-powered
            solutions.
          </p>
        </div>
      </div>
    </>
  );
};

export default page;
