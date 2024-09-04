// app/(site)/blog/[id]/page.js
import LatestBlogs from "../../../components/home/Latestblog";

import {resourcepodcastarray} from "../../../mock/resourcepodcastarray";
import Image from "next/image";
import OurProdcast from "../../../components/resource/OurProdcast";
import SocialMedia from "../../../components/resource/SocialMedia";
import ContactForm from "../../../components/common/ContactForm";

export async function generateStaticParams() {
  return resourcepodcastarray.map((prod) => ({
    id: prod.id.toString(),
  }));
}

export default function BlogDetail({ params }) {
  const prod = resourcepodcastarray.find(
    (prod) => prod.id === parseInt(params.id)
  );

  if (!prod) {
    return <p>Prodcasr not found.</p>;
  }

  return (
    <>
      <div className="max-w-4xl mx-auto p-5 py-28">
      <h1 className="text-2xl font-bold text-center mb-5">{prod.title}</h1>
        <div className="flex items-center justify-center gap-5">
        <p className="text-gray-600 font-semibold text-center">({prod.title1})</p>
          <p className="text-sky-700 font-semibold">({prod.heading})</p>
        </div>
     
        <Image
          className="w-full rounded-xl mt-5"
          src={prod.image}
          alt={prod.title}
          width={500}
          height={400}
        />
        <div className="mt-5">
          {prod.array.map((para, index) => (
            <p key={index} className="mb-4 text-lg">
              {para}
            </p>
          ))}
        </div>
      </div>
      <LatestBlogs />

      <OurProdcast />
      <ContactForm />
      <SocialMedia />
    </>
  );
}
