import React from "react";
// import ContactForm from "../../components/common/ContactForm";
import LocateUs from "../../components/contact/LocateUs";
import SocialMedia from "../../components/resource/SocialMedia";
import dynamic from 'next/dynamic';

const ContactForm = dynamic(() => import('../../components/common/ContactForm'), { ssr: false });

const page = () => {
  return (
    <>
      <div className="py-28">
        <ContactForm />
        <LocateUs />
        <SocialMedia />
      </div>
    </>
  );
};

export default page;
