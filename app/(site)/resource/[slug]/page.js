import React from "react";
import { resourcesarray } from "../../../mock/resourceData";
import HeadingStyle from "../../../components/resource/HeadingStyle";
import RelatedNews from "../../../components/resource/RelatedNews";
import LatestBlogs from "../../../components/home/Latestblog";
import OurProdcast from "../../../components/resource/OurProdcast";
import SocialMedia from "../../../components/resource/SocialMedia";
import dynamic from 'next/dynamic';

// Dynamically import the ContactForm component
const ContactForm = dynamic(() => import('../../../components/common/ContactForm'), { ssr: false });

// 1. generateStaticParams - Generate the static paths (slugs) for each page
export async function generateStaticParams() {
  return resourcesarray.map((page) => ({
    slug: page.slug,
  }));
}

// 2. Page component - Fetch data and render the page content
const Page = ({ params }) => {
  const data = resourcesarray.find((page) => page.slug === params.slug);

  // Render fallback if no data is found
  if (!data) {
    return <div>Page not found</div>;
  }

  return (
    <>
      <HeadingStyle heading={data.heading} bgtext={data.bgtext} />
      <RelatedNews data={data.boxarray} />
      <LatestBlogs />
      <OurProdcast />
      <ContactForm />
      <SocialMedia />
    </>
  );
};

export default Page;
