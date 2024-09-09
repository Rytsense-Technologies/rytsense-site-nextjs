"use client";
import React, { Fragment, useState, useEffect, useRef } from "react";
import countryCodes from "../../mock/countryCodes";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

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
      // navigate("/success");
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
    }
  };
  const [showExitModal, setShowExitModal] = useState(false);

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      setShowExitModal(true);
      // Customize the message if needed
      const message = "Are you sure you want to leave this page?";
      event.returnValue = message;
      return message;
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

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
                {/* <div className="pl-10">
                  <select
                    className="pl-0 w-32 focus:outline-0 text-left"
                    id="countryCode"
                    name="countryCode"
                    value={selectedCountry}
                    onChange={(e) => setSelectedCountry(e.target.value)}
                  >
                    {countryCodes.countries.map((country) => (
                      <option
                        className="text-left font-semibold"
                        value={country.code}
                      >
                        {`${country.name} (${country.code})`}
                      </option>
                    ))}
                  </select>
                </div> */}
                <div className="pl-10">
                  <div className="w-60">
                    <Listbox
                      value={selected}
                      id="countryCodes"
                      name="countryCodes"
                      onChange={(value) => {
                        setSelected(value);
                        setSelectedCountry(value.code);
                        // Add the id and name attributes
                        document.getElementById("countryCodes").id =
                          "countryCodes";
                        document.getElementById("countryCodes").name =
                          "countryCodes";
                      }}
                    >
                      <div className="relative mt-1">
                        <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                          <div className="flex items-center">
                            <Image
                              src={selected.img}
                              alt={selected.name}
                              className="h-4 w-6 mr-2"
                              width={20}
                              height={20}
                            />
                            <span className="block truncate">
                              {`${selected.name} (${selected.code})`}
                            </span>
                          </div>
                          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                            <ChevronUpDownIcon
                              className="h-5 w-5 text-gray-400"
                              aria-hidden="true"
                            />
                          </span>
                        </Listbox.Button>
                        <Transition
                          as={Fragment}
                          leave="transition ease-in duration-100"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                            {countryCodes.countries.map((person, personIdx) => (
                              <Listbox.Option
                                key={personIdx}
                                className={({ active }) =>
                                  `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                    active
                                      ? "bg-amber-100 text-amber-900"
                                      : "text-gray-900"
                                  }`
                                }
                                value={person}
                              >
                                {({ selected }) => (
                                  <>
                                    <div className="flex items-center">
                                      <Image
                                        src={person.img}
                                        alt={person.name}
                                        className="h-4 w-6 mr-2"
                                        width={20}
                                        height={20}
                                      />
                                      <span
                                        className={`block truncate ${
                                          selected
                                            ? "font-medium"
                                            : "font-normal"
                                        }`}
                                      >
                                        {`${person.name} (${person.code})`}
                                      </span>
                                    </div>
                                    {selected ? (
                                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                        <CheckIcon
                                          className="h-5 w-5"
                                          aria-hidden="true"
                                        />
                                      </span>
                                    ) : null}
                                  </>
                                )}
                              </Listbox.Option>
                            ))}
                          </Listbox.Options>
                        </Transition>
                      </div>
                    </Listbox>
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
                  {/* <p className="flex-1 text-slate-800">{formData.ranges}</p> */}
                  {/* <select
                    className="pl-2 w-ful mt-3 focus:outline-0 flex-1"
                    id="rangesid"
                    name="ranges"
                    value={formData.ranges}
                    onChange={handleInputChange}
                  >
                    <option className="text-slate-700" value="">
                      Select Range
                    </option>
                    <option
                      className="text-slate-700"
                      value="Between $10k to $50k"
                    >
                      Between $10k to $50k
                    </option>
                    <option
                      className="text-slate-700"
                      value="Between $50k to $100k"
                    >
                      Between $50k to $100k
                    </option>
                    <option className="text-slate-700" value="More than $100k">
                      More than $100k
                    </option>
                  </select> */}
                  <div className="z-10 w-72">
                    <Listbox
                      value={selected1}
                      id="rangesid"
                      required
                      name="ranges"
                      onChange={(value) => {
                        setSelected1(value);
                        // Update the formData.ranges value using handleInputChange
                        handleInputChange({
                          target: { name: "ranges", value: value },
                        });
                      }}
                    >
                      <div className="relative mt-1">
                        <Listbox.Button
                          className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
                          required
                        >
                          <span className="block truncate">{selected1}</span>
                          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                            <ChevronUpDownIcon
                              className="h-5 w-5 text-blue1"
                              aria-hidden="true"
                            />
                          </span>
                        </Listbox.Button>
                        <Transition
                          as={Fragment}
                          leave="transition ease-in duration-100"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <Listbox.Options
                            className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm"
                            required
                          >
                            {people.map((person, personIdx) => (
                              <Listbox.Option
                                key={personIdx}
                                className={({ active }) =>
                                  `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                    active
                                      ? "bg-blue1 text-white"
                                      : "text-gray-900"
                                  }`
                                }
                                value={person}
                              >
                                {({ selected }) => (
                                  <>
                                    <span
                                      className={`block truncate ${
                                        selected ? "font-medium" : "font-normal"
                                      }`}
                                    >
                                      {person}
                                    </span>
                                    {selected ? (
                                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                        <CheckIcon
                                          className="h-5 w-5 text-blue1"
                                          aria-hidden="true"
                                        />
                                      </span>
                                    ) : null}
                                  </>
                                )}
                              </Listbox.Option>
                            ))}
                          </Listbox.Options>
                        </Transition>
                      </div>
                    </Listbox>

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
          <div className="mt-4  flex items-center">
            <button
              type="submit"
              className="ml-auto bg-blue1 p-4 w-28 text-white"
            >
              Send
            </button>
            <div className="text-blue1" style={{ marginLeft: "-10px" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </div>
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
