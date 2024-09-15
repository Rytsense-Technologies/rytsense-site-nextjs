// app/(site)/blog/[id]/page.js
import LatestBlogs from "../../../components/home/Latestblog";
import MainProdcast from "../../../components/home/MainProdcast";
import resourceblogseparatecontent from "../../../mock/resourceblogseparatecontent";
import Image from "next/image";
import OurProdcast from "../../../components/resource/OurProdcast"
import SocialMedia from "../../../components/resource/SocialMedia"
// import ContactForm from "../../../components/common/ContactForm"
import dynamic from 'next/dynamic';

const ContactForm = dynamic(() => import('../../../components/common/ContactForm'), { ssr: false });


export async function generateStaticParams() {
  // Get all the paths we want to pre-render based on blog IDs
  return resourceblogseparatecontent.map((blog) => ({
    id: blog.id.toString(),
  }));
}

export default function BlogDetail({ params }) {
  // Find the blog with the matching ID
  const blog = resourceblogseparatecontent.find(
    (blog) => blog.id === parseInt(params.id)
  );

  if (!blog) {
    return <p>Blog not found.</p>;
  }

  return (
   <>
    <div className="max-w-4xl mx-auto p-5 py-28">
      <div className="flex items-center justify-center gap-5">
        <h1 className="text-2xl font-bold">{blog.title}</h1>
        <p className="text-sky-800 font-semibold">({blog.heading})</p>
      </div>
      <Image
        className="w-full rounded-xl mt-5"
        src={blog.image}
        alt={blog.title}
        width={500}
        height={400}
      />
      <div className="mt-5">
        {blog.paraarray.map((para, index) => (
          <p key={index} className="mb-4 text-lg">
            {para}
          </p>
        ))}
      </div>
      {blog.paraarray2 &&
        blog.paraarray2.map((section, index) => (
          <div key={index} className="mt-5">
        <div className="flex items-center gap-5">
        <Image
              src="https://res.cloudinary.com/dlg3i3ari/image/upload/v1725175063/star-removebg-preview_sy1kzj.png"
              alt=""
              width={20}
              height={20}
            />
            <h2 className="text-xl font-bold">{section.heading}</h2>
        </div>
            {section.array.map((item, idx) => (
              <p key={idx} className="mb-4 text-lg">
                {item}
              </p>
            ))}
          </div>
        ))}
    </div>
    <LatestBlogs/>
  
    <OurProdcast/>
    <ContactForm/>
    <SocialMedia/>
   </>
  );
}
