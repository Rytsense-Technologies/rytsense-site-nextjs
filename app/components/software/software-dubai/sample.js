"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import Image from "next/image";

import countryCodes from "../../../mock/countryCodes";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaSpinner } from "react-icons/fa";
import emailjs from "@emailjs/browser";

export default function LetsDiscussModal({ open, setOpen }) {
  const getColorClass = (index) => {
    const colorClasses = [
      "text-pink1",
      "text-cyan-400",
      "text-yellow-500",
      "text-black",
      "text-violet-900",
    ];

    return colorClasses[index % colorClasses.length] || colorClasses[0];
  };

  const details = [
    {
      heading: "Artificial Intelligence ",
      subheading: "Development Company",
      number: "#1",
      ranktext: "Ranked as",
      spantext: "1 Top Artifical Intligence",
      companytext: "company in USA and India",
    },
  ];

  const textItems = [
    "Artificial Intelligence",
    "Web",
    "Mobile App",
    "Blockchain",
    "Metaverse",
  ];
  const textItems2 = [
    "#1 Top Artificial Intelligence ",
    "#1 Top Web",
    "#1 Top Mobile App",
    "#1 Top Blockchain",
    "#1 Top Metaverse",
  ];
  // const isSmallScreen = window.innerHeight <= 935;
  const getAlignmentStyle = (serviceType) => {
    const fixedWidthStyle = { width: "500px", margin: "0 auto" }; // Center and fix width

    switch (serviceType) {
      case "Artificial Intelligence":
        return {
          width: "550px",
          height: "12px",
          marginLeft: "40px",
          // fontSize: isSmallScreen ? "30px" : "50px",
        };
      case "Blockchain":
        return {
          width: "550px",
          height: "12px",
          marginLeft: "40px",
          fontSize: "50px",
        };

      case "Metaverse":
        return {
          width: "550",
          height: "13px",
          marginLeft: "40px",
          fontSize: "50px",
        };
      case "Web":
        return {
          width: "550",
          height: "13px",
          marginLeft: "40px",
          fontSize: "50px",
        };
      case "Mobile App":
        return {
          width: "550",
          height: "13px",
          marginLeft: "40px",
          fontSize: "50px",
        }; // Align right for Mobile App
      default:
        return {
          width: "550",
          height: "13px",
          marginLeft: "40px",
          fontSize: "50px",
        };
    }
  };

  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const [currentItem2Index, setCurrentItem2Index] = useState(0);

  const [displayedText, setDisplayedText] = useState("");
  const [displayedText2, setDisplayedText2] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const typeText = () => {
      const currentItemLength = textItems[currentItemIndex].length;
      const currentItem2Length = textItems2[currentItem2Index].length;

      if (displayedText.length < currentItemLength) {
        setDisplayedText((currentText) =>
          textItems[currentItemIndex].slice(0, currentText.length + 1)
        );
      }

      if (displayedText2.length < currentItem2Length) {
        setDisplayedText2((currentText2) =>
          textItems2[currentItem2Index].slice(0, currentText2.length + 1)
        );
      }

      if (
        displayedText.length === currentItemLength &&
        displayedText2.length === currentItem2Length
      ) {
        setTimeout(() => {
          setCurrentItemIndex(
            (prevIndex) => (prevIndex + 1) % textItems.length
          );
          setCurrentItem2Index(
            (prevIndex) => (prevIndex + 1) % textItems2.length
          );
          setDisplayedText("");
          setDisplayedText2("");
        }, 100); // Delay before switching to next item
      }
    };

    const alignmentStyle = getAlignmentStyle(textItems[currentItemIndex]); // Get alignment based on the current item

    const intervalId = setInterval(typeText, 100); // Speed of typing

    return () => {
      clearInterval(intervalId);
    };
  }, [displayedText, currentItemIndex, displayedText2, currentItem2Index]);

  const handleContextMenu = (event) => {
    event.preventDefault();
  };

  const india = countryCodes.countries.find(
    (country) => country.name === "India"
  );
  const [selectedCountry, setSelectedCountry] = useState(
    india || countryCodes.countries[0]
  );
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactnumber: "",
    messages: "",
  });
  const [errorMessages, setErrorMessages] = useState({});
  const [emailValidationMessage, setEmailValidationMessage] = useState("");
  const [emailValidationColor, setEmailValidationColor] =
    useState("text-rose-500");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "email") {
      validateEmail(value);
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailRegex.test(email)) {
      setEmailValidationMessage("The email you entered is invalid");
      setEmailValidationColor("text-rose-500");
    } else {
      setEmailValidationMessage("The email you entered is valid");
      setEmailValidationColor("text-green-500");
    }
  };

  const handleCountryChange = (event) => {
    const selected = countryCodes.countries.find(
      (country) => country.name === event.target.value
    );
    setSelectedCountry(selected);
  };

  const concatenateCountryCode = () => {
    return `${selectedCountry.code}${formData.contactnumber}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const fullContactNumber = concatenateCountryCode();
    const newErrorMessages = {};

    // Check each field for emptiness and set error messages
    Object.entries(formData).forEach(([fieldName, value]) => {
      if (value.trim() === "") {
        newErrorMessages[fieldName] = `${
          fieldName.charAt(0).toUpperCase() + fieldName.slice(1)
        } cannot be empty.`;
      }
    });

    if (emailValidationMessage !== "The email you entered is valid") {
      newErrorMessages.email = emailValidationMessage;
    }

    if (Object.keys(newErrorMessages).length > 0) {
      setErrorMessages(newErrorMessages);
      setLoading(false);
      return;
    }

    try {
      const formEle = document.querySelector("form");
      const formDataToSend = new FormData(formEle);
      formDataToSend.append("fullContactNumber", fullContactNumber);

      const calendlyUrl = `https://calendly.com/ramkumar_p/call-schedule?name=${encodeURIComponent(
        formData.name
      )}&email=${encodeURIComponent(
        formData.email
      )}&contactnumber=${encodeURIComponent(fullContactNumber)}`;
      window.open(calendlyUrl, "_blank");

      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbymWBh4OHxVDYNJOD0nXsnBKY-gUGVvNrNW4nTk2s479a17NtWgH0sXWXS6nkL3MopD/exec",
        {
          method: "POST",
          body: formDataToSend,
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.text();
      emailjs.send(
        "service_xf9pb1o",
        "template_vh69bcj",
        {
          to_name: formDataToSend.get("name"),
          to_email: formDataToSend.get("email"),
          message: "We have received your information. Thank you!",
        },
        "1ibY0iCEQ0eE9oQFq"
      );
      setIsSubmitted(true);

      // Reset the form and open the Calendly URL
      resetForm();
      setSelectedCountry(india || countryCodes.countries[0]);
    } catch (error) {
      console.error("Error in fetch:", error.message);
    }
    setLoading(false);
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      contactnumber: "",
      messages: "",
    });
  };

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
      />

      <div className="fixed inset-0 z-10 ">
        <div className="flex items-center justify-center   px-4">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:w-full sm:max-w-5xl"
          >
            <div className="flex flex-col sm:flex-row">
              {/* Left side: Image and sky-900 background */}
              <div className="bg-sky-900 w-2/5">
                <div className="p-6">
                  <Image
                    src="" // Add your image source here
                    alt="Industry related"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>

              {/* Right side: Form */}
              <div className="bg-white w-3/5 p-6">
                <div className="">
                  <section className={`px-10 py-5 rounded-xl`}>
                    <div className="flex flex-col ">
                      <div>
                        <h2 className="text-2xl font-semibold tracking-tight text-gray-800">
                          Get In Touch
                        </h2>
                        <p className={`mt-2 text-sm leading-8 font-bold`}>
                   kkk
                        </p>
                      </div>
                      <form
                        onSubmit={handleSubmit}
                        className=""
                        id="contact-form-clutch"
                      >
                        <div className="flex items-center gap-5">
                        <div className="mt-2">
                          <label
                            htmlFor="first-name"
                            className="block text-md  text-[#092947] mb-2"
                          >
                            Name
                          </label>
                          <input
                            type="text"
                            id="fullname"
                            name="name"
                            className="block w-full rounded-md bg-gray-50 shadow-md border border-gray-200 px-3.5 py-2 text-[#092947] shadow-lg  placeholder:text-gray-400  sm:text-sm sm:leading-6"
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="mt-4">
                          <label
                            htmlFor="email"
                            className="block text-md  text-[#092947] mb-2"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            className="block w-full rounded-md border-0 bg-gray-50 shadow-md border border-gray-200 px-3.5 py-2 text-[#092947] shadow-lg  placeholder:text-gray-400  sm:text-sm sm:leading-6"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                          />
                          {errorMessages.email && (
                            <p className="text-rose-500 text-sm mt-2">
                              {errorMessages.email}
                            </p>
                          )}
                        </div>
                        </div>

                        <div className="mt-4">
                          <label
                            htmlFor="phone"
                            className="block text-md  text-[#092947] mb-2"
                          >
                            Phone
                          </label>
                          <div className="flex items-center gap-2">
                            <div className="relative w-2/3">
                              <select
                                className="block w-full rounded-md bg-gray-50 shadow-md border border-gray-200 px-3.5 py-2 text-[#092947] shadow-lg  placeholder:text-gray-400  sm:text-sm sm:leading-6"
                                value={selectedCountry.name}
                                onChange={handleCountryChange}
                              >
                                {countryCodes.countries.map((country) => (
                                  <option
                                    key={country.name}
                                    value={country.name}
                                  >
                                    {country.name}({country.code})
                                  </option>
                                ))}
                              </select>
                            </div>

                            <input
                              type="text"
                              id="phone"
                              name="contactnumber"
                              className="block w-full rounded-md bg-gray-50 shadow-md border border-gray-200 px-3.5 py-2 text-[#092947] shadow-lg  placeholder:text-gray-400  sm:text-sm sm:leading-6"
                              placeholder="Phone Number"
                              value={formData.contactnumber}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                        </div>
                        <div className="sm:col-span-2 mt-4">
                          <label
                            htmlFor="message"
                            className="block text-md  text-[#092947] mb-2"
                          >
                            Message
                          </label>
                          <textarea
                            id="messages"
                            name="messages"
                            rows="3"
                            className="block w-full rounded-md bg-gray-50 shadow-md border border-gray-200 px-3.5 py-2 text-[#092947] shadow-lg  placeholder:text-gray-400  sm:text-sm sm:leading-6"
                            placeholder="Leave a comment..."
                            value={formData.messages}
                            onChange={handleInputChange}
                            required
                          ></textarea>
                        </div>
                        <div className="mt-5 flex justify-center lg:px-20">
                          <button
                            type="submit"
                            className={`text-white w-full  text-lg font-semibold focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 rounded-xl px-5 py-2.5 inline-flex items-center justify-center dark:focus:ring-[#1da1f2]/55`}
                          >
                         Get in touch
                            {loading && (
                              <FaSpinner className="ml-2 animate-spin" /> 
                            )}
                          </button>
                        </div>
                        {isSubmitted && (
                          <div className="text-green-500 mt-4">
                            <p>Your response submitted successfully!</p>
                          </div>
                        )}
                      </form>
                      <div className="inter-med text-gray-600 text-xs   flex  justify-center mt-5">
                        <FontAwesomeIcon icon={faLock} className="mr-3" /> Your
                        idea is 100% protected by our non disclosure agreement.
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
