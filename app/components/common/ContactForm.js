"use client";
import React, { Fragment, useState, useEffect, useRef } from "react";
import countryCodes from "../../mock/countryCodes";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { useRouter } from 'next/navigation';
import { FaSpinner } from "react-icons/fa";

import emailjs from "@emailjs/browser";
import Image from "next/image";

const people = [
  "Select Range",
  "Between $10k to $50k",
  "Between $50k to $100k",
  "More than $100k",
];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactnumber: "",
    messages: "",
  });

  const [fileData, setFileData] = useState(null);

  const [selected, setSelected] = useState(countryCodes.countries[0]);
  const [selected1, setSelected1] = useState(people[0]);

  const [selectedCountry, setSelectedCountry] = useState(
    countryCodes.countries[0]?.code || ""
  );

  const [originalSelectedCountry, setOriginalSelectedCountry] = useState(
    countryCodes.countries[0]?.code || ""
  );
  const [selectedRange, setSelectedRange] = useState("");
  const [originalSelectedRange, setOriginalSelectedRange] = useState("");
  const [rangeText, setRangeText] = useState("");
  const router = useRouter();
  const [loading, setLoading] = useState(false); 

  const resetForm = () => {
    // console.log("Before reset:", formData);
    setFormData((prevFormData) => {
      // console.log("Before reset:", prevFormData);

      const updatedFormData = {
        name: "",
        email: "",
        contactnumber: "",
        messages: "",
        skype: "",
        file: "",
        ranges: people[0],
      };

      // console.log("After reset:", updatedFormData);

      return updatedFormData;
    });
    setSelectedCountry(originalSelectedCountry);
    setSelectedRange(originalSelectedRange);
    console.log("After reset:", formData);
    setErrorMessages({
      name: "",
      email: "",
      contactnumber: "",
      messages: "",
    });
  };

  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // console.log("Updating state:", name, value);
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));

    if (e.target.name === "ranges") {
      setSelectedRange(e.target.value);
      if (e.target.value !== people[0]) {
        // Check if a valid range is selected
        setErrorMessages((prevErrorMessages) => ({
          ...prevErrorMessages,
          range: "",
        }));
      }
    }

    if (value.trim() === "") {
      setErrorMessages((prevErrorMessages) => ({
        ...prevErrorMessages,
        [name]: `${
          name.charAt(0).toUpperCase() + name.slice(1)
        } cannot be empty.`,
      }));
    } else {
      setErrorMessages((prevErrorMessages) => ({
        ...prevErrorMessages,
        [name]: "",
      }));
    }
    if (name === "ranges") {
      setSelectedRange(value);
    }
    //
    if (name === "contactnumber") {
      if (!/^\d+$/.test(value)) {
        // Set error message for invalid phone number
        setErrorMessages((prevErrorMessages) => ({
          ...prevErrorMessages,
          [name]: "Invalid phone number.",
        }));
      } else {
        // Reset error message and update formData without concatenation
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
        setErrorMessages((prevErrorMessages) => ({
          ...prevErrorMessages,
          [name]: "",
        }));
      }
    } else {
      // For other inputs, use the value as is
      setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    }

    if (name === "ranges") {
      setSelectedRange(value); // Update the selected range
    }
  };
  const concatenateCountryCode = () => {
    return `${selectedCountry}${formData.contactnumber}`;
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setFileData(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailRegex.test(email)) {
      return "Invalid email address.";
    } else {
      return ""; // No error message for valid email
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const emailError = validateEmail(formData.email);
    if (emailError) {
      setErrorMessages((prevErrorMessages) => ({
        ...prevErrorMessages,
        email: emailError,
      }));
      return; // Prevent form submission if email is not valid
    }

    if (selected1 === people[0]) {
      // Check if the default value is still selected
      setErrorMessages((prevErrorMessages) => ({
        ...prevErrorMessages,
        range: "Please select a valid range.",
      }));
      return; // Prevent form submission if range is not selected
    }

    const fullContactNumber = concatenateCountryCode();

    // Add this console.log statement
    console.log("Full Contact Number:", fullContactNumber);
    // formData.append("file", fileData);

    try {
      const formEle = document.querySelector("form");
      const formData = new FormData(formEle);

      formData.append("file", fileData);

      formData.append("fullContactNumber", fullContactNumber);
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbymWBh4OHxVDYNJOD0nXsnBKY-gUGVvNrNW4nTk2s479a17NtWgH0sXWXS6nkL3MopD/exec",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.text();
      console.log("Response from server:", data);

      emailjs.send(
        "service_xf9pb1o",
        "template_vh69bcj",
        {
          to_name: formData.get("name"),
          to_email: formData.get("email"),
          message: "We have received your information. Thank you!",
        },
        "1ibY0iCEQ0eE9oQFq"
      );
    } catch (error) {
      console.error("Error in fetch:", error.message);
    }

    const newErrorMessages = {};
    // Check each field for emptiness
    Object.entries(formData).forEach(([fieldName, value]) => {
      if (
        fieldName !== "file" &&
        fieldName !== "skype" &&
        fieldName !== "ranges" &&
        value.trim() === ""
      ) {
        newErrorMessages[fieldName] = `${
          fieldName.charAt(0).toUpperCase() + fieldName.slice(1)
        } cannot be empty.`;
      }
    });

    if (Object.keys(newErrorMessages).length === 0) {
      const calendlyUrl = `https://calendly.com/ramkumar_p/call-schedule?name=${encodeURIComponent(
        formData.name
      )}&email=${encodeURIComponent(
        formData.email
      )}&contactnumber=${encodeURIComponent(formData.contactnumber)}`;
      window.open(calendlyUrl, "_blank");
      router.push('/success'); 
    }

    setErrorMessages(newErrorMessages);

    if (Object.keys(newErrorMessages).length === 0) {
      console.log("Form submitted successfully!");
      setIsSubmitted(true);
      const combinedContact = `${selectedCountry}${formData.contactnumber}`;

      setTimeout(() => {
        setIsSubmitted(false);
        resetForm();
        setSelected1(people[0]);
        setSelected(countryCodes.countries[0]);
      }, 2000);
      setLoading(false);
    }
  };
  const [showExitModal, setShowExitModal] = useState(false);

  // useEffect(() => {
  //   const handleBeforeUnload = (event) => {
  //     setShowExitModal(true);
  //     // Customize the message if needed
  //     const message = "Are you sure you want to leave this page?";
  //     event.returnValue = message;
  //     return message;
  //   };

  //   window.addEventListener("beforeunload", handleBeforeUnload);

  //   return () => {
  //     window.removeEventListener("beforeunload", handleBeforeUnload);
  //   };
  // }, []);

  return (
    <div>
      <div className="flex justify-center mb-8">
        <div className="relative">
          <p className="mt-7 text-3xl font-bold  sm:text-5xl sm:mt-10">
            Contact Us
          </p>
          <h1
            className="text-5xl font-bold top-0 sm:text-7xl"
            style={{
              WebkitTextStroke: "2px",
              WebkitTextStrokeColor: "#F0F0F0",
              color: "white",
              position: "absolute",
              zIndex: "-1",
            }}
          >
            contact
          </h1>
        </div>
      </div>
      <div className="text-lg text-center font-normal">
        <p className="text-slate-800">
          We would be happy to hear from you, please fill in the form below or
          mail us your requirements on
        </p>
        <p className="text-red-700">hey@rytsensetech.com</p>
      </div>
      <div className="max-w-7xl p-5 mx-auto shadow-lg rounded-2xl">
        <form onSubmit={handleSubmit} id="contact-form-mainpage">
          {" "}
          {/* ref={form} */}
          <div className="flex flex-col gap-7 sm:flex-row">
            <div className="flex-1">
              <div className="border-b-2 border-slate-300 py-3 relative flex flex-col gap-5">
                <Image
                  src="https://res.cloudinary.com/dlg3i3ari/image/upload/v1725196337/user_1_nf5m4o.png"
                  alt="icon"
                  style={{
                    position: "absolute",
                    left: "0",
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                  width={20}
                  height={20}
                />
                <input
                  className="pl-10 w-full focus:outline-0"
                  type="text"
                  id="nameid"
                  name="name"
                  placeholder="Your Full Name*"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              {errorMessages.name && (
                <p className="text-red-500 text-sm mt-2">
                  {errorMessages.name}
                </p>
              )}
            </div>
            <div className="flex-1">
              <div className="border-b-2 border-slate-300 py-3 relative flex flex-col gap-5">
                <Image
                  src="https://res.cloudinary.com/dlg3i3ari/image/upload/v1725196412/message_kxgigy.png"
                  alt="icon"
                  style={{
                    position: "absolute",
                    left: "0",
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                  width={20}
                  height={20}
                />
                <input
                  className="pl-10 w-full focus:outline-0"
                  type="email"
                  id="emailid"
                  name="email"
                  placeholder="Your Email*"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              {errorMessages.email && (
                <p className="text-rose-500 text-sm mt-2">
                  {errorMessages.email}
                </p>
              )}
            </div>
          </div>
          <div className="mt-4 flex flex-col gap-7 sm:flex-row">
            <div className="flex-1">
              <div className="border-b-2 border-slate-300 py-3 relative flex items-center">
                <Image
                  src="https://res.cloudinary.com/dlg3i3ari/image/upload/v1725212799/phone-call_jqd3ib.png"
                  alt="icon"
                  style={{
                    position: "absolute",
                    left: "0",
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                  width={20}
                  height={20}
                />

                <div className="pl-10">
                  <div className="w-60">
                    <select
                      className="w-full cursor-default rounded-lg bg-white py-2 pl-3 text-left  sm:text-sm outline-none"
                      value={selectedCountry}
                      onChange={(e) => {
                        setSelectedCountry(e.target.value); // Update the selected country code
                        setSelected(
                          countryCodes.countries.find(
                            (country) => country.code === e.target.value
                          )
                        ); // Update the selected country object
                      }}
                    >
                      {countryCodes.countries.map((country, idx) => (
                        <option
                          key={idx}
                          value={country.code}
                          className="flex items-center gap-4"
                        >
                          <img src={country.img} />
                          <span> {`${country.name} (${country.code})`}</span>
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <input
                  className="pl-10 w-full focus:outline-0"
                  type="number"
                  id="contactnumber"
                  name="contactnumber"
                  value={formData.contactnumber}
                  onChange={handleInputChange}
                  placeholder="Contact No*"
                  required
                />
              </div>
              {errorMessages.contactnumber && (
                <p className="text-red-500 text-sm mt-2">
                  {errorMessages.contactnumber}
                </p>
              )}
            </div>
            <div className="flex-1">
              <div className="border-b-2 border-slate-300 pt-5 pb-5 relative">
                <Image
                  src="https://res.cloudinary.com/dlg3i3ari/image/upload/v1725212831/skype_rwsmy3.png"
                  alt="icon"
                  style={{
                    position: "absolute",
                    left: "0",
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                  width={20}
                  height={20}
                />
                <input
                  className="pl-10 w-full focus:outline-0"
                  type="text"
                  id="skypeid"
                  name="skype"
                  value={formData.skype}
                  onChange={handleInputChange}
                  placeholder="Skype"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full gap-7 sm:flex-row">
            <div className="flex-1 mt-4 flex gap-7">
              <div className="flex-1 border-b-2 border-slate-300 py-3 flex">
                <input
                  className="flex-1 pl-2 w-full focus:outline-0"
                  type="file"
                  id="files"
                  name="file"
                  value={formData.file}
                  onChange={handleFileChange}
                  accept="image/*,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                />
                <p className="flex-0 text-sm text-black mt-1">
                  (Max size 20MB)
                </p>
              </div>
            </div>
            <div className="flex-1 mt-4 flex gap-7">
              <div className="flex-1 border-b-2 border-slate-300 py-3 flex flex-col gap-2">
                <label className="font-normal" htmlFor="ranges">
                  Project Budget
                </label>
                <div className="w-10">
                  <div className="z-10 w-72">
                    <div className="relative mt-1">
                      <select
                        className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left outline-none"
                        value={selected1}
                        name="ranges"
                        onChange={(e) => {
                          setSelected1(e.target.value); // Update the selected range
                          handleInputChange({
                            target: { name: "ranges", value: e.target.value }, // Update form data
                          });
                        }}
                        required
                      >
                        {people.map((person, personIdx) => (
                          <option key={personIdx} value={person}>
                            {person}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="flex-1 mt-4 flex gap-7">
                      {/* ... existing range selection JSX */}
                      {errorMessages.range && (
                        <p className="text-sm mt-2" style={{ color: "red" }}>
                          {" "}
                          {/* Ensure you're using the correct Tailwind CSS class */}
                          {errorMessages.range}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 mt-4 flex gap-7">
            <div className="flex-1">
              <div className="border-b-2 border-slate-300 py-3 relative">
                <Image
                  src="https://res.cloudinary.com/dlg3i3ari/image/upload/v1725212948/chat_ol9n7l.png"
                  alt="icon"
                  style={{
                    position: "absolute",
                    left: "0",
                    top: "10px",
                  }}
                  width={20}
                  height={20}
                />
                <textarea
                  className="pl-10 w-full focus:outline-0"
                  id="message"
                  name="messages"
                  value={formData.messages}
                  onChange={handleInputChange}
                  placeholder="Your Message*"
                  required
                ></textarea>
              </div>
              {errorMessages.messages && (
                <p className="text-red-500 text-sm mt-2">
                  {errorMessages.messages}
                </p>
              )}
            </div>
          </div>
          <div className="mt-4  flex justify-end gap-5">
          <button
                type="submit"
                className={`text-white w-72 bg-indigo-800 text-lg font-semibold focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 rounded-xl px-5 py-2.5 inline-flex items-center justify-center dark:focus:ring-[#1da1f2]/55`}
              >
               Send
                {loading && (
                  <FaSpinner className="ml-2 animate-spin" /> // Spinner added next to button text
                )}
              </button>
           
          </div>
          <div className="flex justify-center">
            {isSubmitted && (
              <p className="text-green-500 mt-4">
                Form submitted successfully!
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
