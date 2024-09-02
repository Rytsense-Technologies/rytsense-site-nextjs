import React from "react";
import ContactForm from "../../components/common/ContactForm";
import LocateUs from "../../components/contact/locateus";
import SocialMedia from "../../components/resource/SocialMedia";

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
