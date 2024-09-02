import React from "react";
import { resourcesarray } from "../../../mock/resourceData";
import HeadingStyle from "../../../components/resource/HeadingStyle";
import RelatedNews from "../../../components/resource/RelatedNews";
import LatestBlogs from "../../../components/home/Latestblog";
import OurProdcast from "../../../components/resource/OurProdcast";
import ContactForm from "../../../components/common/ContactForm";
import SocialMedia from "../../../components/resource/SocialMedia";


const page = ({ params }) => {
  const data = resourcesarray.find((page) => page.slug === params.slug);
  return (
    <>
      <HeadingStyle heading={data.heading} bgtext={data.bgtext} />
      <RelatedNews data={data.boxarray} />
      <LatestBlogs />
      <OurProdcast />
      <ContactForm/>
      <SocialMedia/>
    </>
  );
};

export default page;
