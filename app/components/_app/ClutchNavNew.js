"use client";
import React, { useState, useEffect } from "react";
import "../../css/navbar.css";
import Link from "next/link";

import { faPhone, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { BiSolidPhoneCall } from "react-icons/bi";
import logo from "../../../public/images/logo.png";
import Image from "next/image";
import { menuItems } from "../../mock/menuItems";

const ClutchNavNew = ({ isHomePage, isTransparent }) => {
  const handleButtonClick = () => {
    window.open("https://calendly.com/ramkumar_p/call-schedule", "_blank");
  };
  // const [comapnyOpen, companyClose] = useState(false);
  const [comapnyOpen, companyClose] = useState(false);

  const [indsutryOpen, industryClose] = useState(false);
  //const [serviceOpen, serviceClose] = useState(false);
  const [serviceOpen, serviceClose] = useState(false);

  //  const [hireOpen, hireClose] = useState(false);
  const [hireOpen, hireClose] = useState(false);

  const [resourceOpen, resourceClose] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [openSubsubmenu, setOpenSubsubmenu] = useState(null);
  const [mo, smo] = useState(false);
  const [mo1, smo1] = useState(false);
  const [mo2, smo2] = useState(false);
  const [mo3, smo3] = useState(false);
  const [mo4, smo4] = useState(false);

  const isBanner = true;
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setOpenSubmenu(null);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };
  const toggleSubmenu = (index) => {
    setOpenSubmenu(openSubmenu === index ? null : index);
  };
  const handleItemClick = (path, index) => {
    setOpenSubmenu(null);
    toggleSubmenu(index);
    // navigate(path);
  };
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      // Close the menu when the window width is increased beyond a certain threshold
      if (window.innerWidth > 1278) {
        // Adjust the threshold as needed
        closeMenu();
      }
    };

    // Add the event listener
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [showExitModal, setShowExitModal] = useState(false);
  const [navbarStyles, setNavbarStyles] = useState({
    color: isHomePage ? "white" : "#2d3436",
    position: isHomePage ? "absolute" : "fixed",
    top: "0",
    width: "100%",
    zIndex: "1000",
  });

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      setShowExitModal(true);
      // Customize the message if needed
      const message = "Are you sure you want to leave this page?";
      event.returnValue = message;
      return message;
    };

    const handleScroll = () => {
      if (isHomePage) {
        const scrollPosition = window.scrollY;
        const newStyles =
          scrollPosition > 0
            ? {
                backgroundColor: "white", // Change background color on scroll
                color: "#2d3436", // Change text color on scroll
              }
            : {
                backgroundColor: "transparent",
                color: "white", // Keep the text color white
              };

        setNavbarStyles(newStyles);
      }
    };

    // Initial setup
    handleScroll();

    window.addEventListener("beforeunload", handleBeforeUnload);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHomePage]);

  const [phoneHover, setPhoneHover] = useState(false);
  const handlePhone = () => {
    setPhoneHover((val) => !val);
  };

  const [popupShown, setPopupShown] = useState(false);
  const [mouseEnterCount, setMouseEnterCount] = useState(0);
  const handleMouseEnter = (e) => {
    const navbarHeight = 50; // Assuming the navbar height is 50px
    const triggerHeight = 90; // Top 20px
    setMouseEnterCount((prevCount) => prevCount + 1);

    if (
      e.nativeEvent.offsetY <= triggerHeight &&
      mouseEnterCount === 1 &&
      !popupShown
    ) {
      setPopupShown(true);
    }
  };

  const [isOpen, setIsOpen] = useState(false);
  // const [isOpenIndustry, setIsOpenIndustry] = useState(false);

  const submenu = [
    {
      label: "AI & ML",
      path: "/services/artificial-intelligence-and-machine-learning",
    },
    {
      label: "Mobile App Development",
      path: "/services/mobile-app-development",
    },
    { label: "Web And CMS Development", path: "/services/web-development" },
    { label: "Ecommerce Development", path: "/services/ecommerce-development" },
    {
      label: "Blockchain Development",
      path: "/services/blockchain-development",
    },
    { label: "Game Development", path: "/services/game-development-company" },
    { label: "Salesforce Solutions", path: "/services/salesforce-development" },
    { label: "IoT & Embedded", path: "/services/iot-development" },
    { label: "Devops", path: "/services/devops" },
    { label: "UI/UX", path: "/services/ui-ux" },
  ];

  const [activeTab, setActiveTab] = useState("");

  // const handleNavigation = (path) => {
  //   if (path === "service") {
  //     // setActiveTab("service");
  //   } else {
  //     navigate(path);
  //     // setActiveTab(path);
  //   }
  // };

  const [navbarBg, setNavbarBg] = useState("bg-transparent");
  const [textColor, setTextColor] = useState("white");
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    if (isTransparent) {
      const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
        if (position > 0) {
          setNavbarBg("bg-white shadow-md");
          setTextColor("#213E59");
        } else {
          setNavbarBg("bg-transparent");
          setTextColor("white");
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    } else {
      setNavbarBg("bg-white shadow-md");
      setTextColor("#213E59");
    }
  }, []);
  return (
    <div
      className={`navbarmain sticky  shadow-lg top-0 z-10 mb-10 ${navbarBg}`}
      style={navbarStyles}
    >
      <div className="h-1 " onMouseEnter={handleMouseEnter}></div>

      <nav className="main-nav-clutch  px-5 mx-auto flex justify-between items-center lg:mt-0 text-black">
        <div className="flex flex-col items-center justify-center hover:cursor-pointer py-4 ">
          <Link href="/">
            <div className="flex items-center gap-2">
              <Image
                className="" // Adjust the size as needed
                src={logo}
                alt="Rytsense Technologies"
                width={20}
                height={20}
              />
              <h1 className={`text-xl text-${textColor} font-semibold`}>
                Rytsense Technologies
              </h1>
            </div>
          </Link>
        </div>
        <div className="flex items-center gap-5 navright-card">
          <ul className="capitalize hidden text-lg gap-8 items-end justify-end xl:flex">
            <Link
              href="/company/who-we-are"
              className={`hover:cursor-pointer hover:text-indigo-500  text-${textColor} ${
                activeTab === "/who-we-are" ? "bg-blue-500 text-indigo-500" : ""
              }`}
            >
              About
            </Link>
            <li className="relative hover:cursor-pointer">
              <span
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
                className={`hover:cursor-pointer hover:text-indigo-500 text-${textColor}  ${
                  activeTab === "service" ? "bg-blue-500 text-indigo-500" : ""
                }`}
              >
                Services
              </span>
            </li>

            <Link
              href="/hire-developer"
              className={`hover:cursor-pointer hover:text-indigo-500 text-${textColor} ${
                activeTab === "/hire-developers-in-india"
                  ? "bg-blue-500 text-white"
                  : ""
              }`}
            >
              Hire Developers
            </Link>
            <Link
              href="/case-studies"
              className={`hover:cursor-pointer hover:text-indigo-500 text-${textColor} ${
                activeTab === "/case-studies" ? "bg-blue-500 text-white" : ""
              }`}
            >
              Case Studies
            </Link>

            <Link
              href={"/contact-us"}
              // onClick={() => handleNavigation("/contact")}
              className={`hover:cursor-pointer hover:text-indigo-500 text-${textColor} ${
                activeTab === "/contact" ? "text-indigo-500" : ""
              }`}
            >
              Contact Us
            </Link>
          </ul>
          <div className="relative inline-block">
            {windowWidth > 1050 && (
              <button
                type="button"
                onClick={handlePhone}
                className="text-white bg-[#2C87D9] text-xl font-extrabold hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 rounded-xl px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55"
              >
                <BiSolidPhoneCall />
              </button>
            )}

            {/* <div
              className="w-14 h-14 phone-circle rounded-full flex items-center justify-center bg-indigo-800 cursor-pointer   "
              
              onClick={handlePhone}
            >
              <span>
        
                <FontAwesomeIcon
                  icon={faPhone}
                  className="h-7 w-7 inter-semi text-white hover:text-white"
                />
              </span>
            </div> */}
            {phoneHover && (
              <div className="absolute phone-hovercard inter-semibold top-full mt-2 w-72 pb-4 origin-top-right divide-y divide-gray-100 rounded-md bg-indigo-300 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1 p-4" role="none">
                  <div className="p-2 box-border h-fit w-full mt-3 mx-auto text-black border-1 border-transparent rounded-lg  bg-indigo-200 font-extralight">
                    <div className="flex flex-row">
                      <div className="text-sm inter-semibold ">
                        Rytsense Technologies Contacts
                      </div>
                    </div>
                    <div className="text-sm  mt-2 inter-semibold">
                      For Sales Department
                      <div className="mt-2 rounded-md shadow-sm">
                        <div className="flex">
                          <Image
                            src="/images/flag/ind5.png"
                            alt="icon"
                            className="w-8 h-8 rounded-3xl"
                            width={20}
                            height={20}
                          />
                          <a
                            href="https://wa.me/917010044153"
                            className="mt-1 ml-6"
                          >
                            +917010044153
                          </a>
                        </div>
                      </div>
                      <div className="rounded-md mt-3 shadow-sm border-1 hover:border-gray-400">
                        <div className="flex">
                          <Image
                            src="/images/flag/usa.png"
                            alt="icon"
                            className="w-8 h-8"
                            width={20}
                            height={20}
                          />
                          <div className="mt-1 ml-6"> +1 650 681 0090</div>
                        </div>
                      </div>
                      <div className="mt-3 rounded-md shadow-sm border-1 border-gray-600 hover:border-gray-400">
                        <div className="flex">
                          <Image
                            src="/images/flag/mail.png"
                            alt="icon"
                            className="w-8 h-8 rounded-3xl"
                            width={20}
                            height={20}
                          />
                          <div className="mt-1 ml-6">hey@rytsensetech.com</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* <div
            className="flex justify-center items-center animated-outline-button inter-semibold"
            onClick={handleButtonClick}
          >
            <div className="box relative w-[150px] h-[55px]  bg-[#3f379e] overflow-hidden ">
              <li>
             <Link
               to="https://calendly.com/ramkumar_p/call-schedule "
               className="lg:text-lg whitespace-nowrap"
             ></Link>
           </li>
            </div>
          </div> */}

          {windowWidth > 1050 && (
            <button
              type="button"
              onClick={handleButtonClick}
              className="text-white bg-[#2C87D9] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-xl text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55"
            >
              BOOK A CALL
            </button>
          )}

          <div
            onClick={toggleMenu}
            className="flex items-center cursor-pointer ml-2"
          >
            {menuOpen ? (
              <FontAwesomeIcon
                icon={faXmark}
                className={`w-10 h-10 text-${textColor}`}
              />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={`w-10 h-10 text-${textColor}`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </div>
        </div>
        {/* <li className="py-3 px-5 shadow-lg rounded-full inter-semibold text-white hover:cursor-pointer" style={{ backgroundColor: "#3D5AA4" }}>
     <Cpp buttonText="Book A Call" />
   </li> */}
        {windowWidth < 1050 ? (
          menuOpen && (
            <>
              <ul className="fixed top-36 left-0 w-80 bg-white flex flex-col py-5 text-slate-600 capitalize lg:top-24 overflow-y-auto max-h-screen">
                {menuItems.map((menuItem, index) => (
                  <li
                    key={index}
                    className={`hover:text-gray-400 hover:cursor-pointer border-b-2 border-slate-200 px-5 py-3 ${
                      menuItem.label.type && menuItem.label.type.name === "Cpp"
                        ? "bg-blue1 text-white hover:text-white"
                        : ""
                    }`}
                    onClick={() => {
                      if (
                        (menuItem.label === "Resources" ||
                          menuItem.label === "Services" ||
                          menuItem.label === "Hire Developers") &&
                        Array.isArray(menuItem.submenu)
                      ) {
                        toggleSubmenu(index);
                      } else {
                        handleItemClick(menuItem.path, index);
                      }
                    }}
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex gap-1 inter-semibold">
                        {menuItem.img && (
                          <img
                            className="w-8 h-6"
                            src={menuItem.img}
                            alt={menuItem.label}
                          />
                        )}
                        {menuItem.label}
                      </div>
                      {Array.isArray(menuItem.submenu) && (
                        <div className="inline">
                          <svg
                            width="10"
                            height="8"
                            viewBox="0 0 10 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            transform="rotate(270)"
                          >
                            <path
                              d="M5 7.5L9.33013 0H0.669873L5 7.5Z"
                              fill="#0A0000"
                            />
                          </svg>
                        </div>
                      )}
                    </div>
                    {openSubmenu === index &&
                      Array.isArray(menuItem.submenu) && (
                        <ul className="sub-menu my-2 rounded-xl">
                          {menuItem.submenu.map((submenuItem, subIndex) => (
                            <li
                              key={subIndex}
                              className={`hover:text-blue1 hover:cursor-pointer py-3 ${
                                subIndex !== menuItem.submenu.length - 1
                                  ? "border-b-2 border-slate-200"
                                  : ""
                              }`}
                            >
                              <Link
                                href={submenuItem.path}
                                className="flex justify-between items-center inter-semibold"
                              >
                                {submenuItem.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                  </li>
                ))}
              </ul>
            </>
          )
        ) : (
          <div
            className={`fixed top-36 right-40 w-fit bg-sky-200 rounded-lg flex flex-col text-white capitalize lg:top-24 transition-transform duration-500 ${
              menuOpen ? "open" : "closed"
            }`}
          >
            {menuOpen && (
              <div className="w-full main-navcard bg-slate-800 py-5 rounded-lg text-white flex justify-center items-center capitalize overflow-x-auto transition-max-height duration-500 ease-in-out">
                <ul className="flex flex-row justify-between">
                  {menuItems.map((menuItem, index) => (
                    <React.Fragment key={index}>
                      <li
                        className={`relative px-5 cursor-pointer hover:text-indigo-500 py-3 ${
                          menuItem.label.type &&
                          menuItem.label.type.name === "Cpp"
                            ? "bg-blue1 text-white"
                            : ""
                        }`}
                        onClick={() => {
                          if (
                            (menuItem.label === "Resources" ||
                              menuItem.label === "Services" ||
                              menuItem.label === "Hire Developers") &&
                            Array.isArray(menuItem.submenu)
                          ) {
                            toggleSubmenu(index);
                          } else {
                            handleItemClick(menuItem.path, index);
                          }
                        }}
                      >
                        <div className="flex flex-col items-center">
                          {menuItem.img && (
                            <img
                              className="w-8 h-6"
                              src={menuItem.img}
                              alt={menuItem.label}
                            />
                          )}
                          <Link
                            href={menuItem.path}
                            className="flex justify-between items-center inter-semibold"
                          >
                            {menuItem.label}
                          </Link>
                        </div>
                      </li>
                      {openSubmenu === index &&
                        Array.isArray(menuItem.submenu) && (
                          <div className="submenu-container">
                            <ul className="submenu bg-indigo-500 w-full right-0 text-white shadow-md rounded-lg mt-20 flex flex-wrap absolute z-10 max-h-96 overflow-y-auto transition-max-height duration-500 ease-in-out slide-down grid grid-cols-6">
                              {menuItem.submenu.map((submenuItem, subIndex) => (
                                <li
                                  key={subIndex}
                                  className={`submenu-item hover:cursor-pointer hover:text-indigo-200 px-5 py-3 flex items-center justify-center ${
                                    (subIndex + 1) % 6 !== 0
                                      ? "border-r-2 border-slate-200"
                                      : ""
                                  }`}
                                >
                                  <Link
                                    href={submenuItem.path}
                                    className="flex justify-between items-center inter-semibold"
                                  >
                                    {submenuItem.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                    </React.Fragment>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {windowWidth > 1050
          ? isOpen && (
              <div
                className={`fixed  w-full p-10 bg-white inter-med  flex flex-col text-slate-600 capitalize top-20 right-0  transition-transform duration-500 ${
                  isOpen ? "true" : "false"
                }`}
              >
                {isOpen && (
                  <div className="absolute left-0  w-full bg-white p-5 rounded shadow-lg grid grid-cols-4 gap-4 text-black">
                    <div>
                      <h3 className="text-xl inter-bold">
                        Built for{" "}
                        <span className="text-violet-800">Growth</span>
                      </h3>

                      <p className="mt-2 text-sm">
                        Transform your business vision into a thriving success
                        with our innovative software development services.
                      </p>
                      <div
                        onClick={() => {
                          navigate("/case-studies");
                        }}
                        className="relative mt-4 rounded-lg overflow-hidden cursor-pointer"
                        style={{
                          width: "100%",
                          paddingBottom: "36.25%",
                          position: "relative",
                        }}
                      >
                        <img
                          src="/images/partner/ford-nav-1.jpg"
                          alt="Ford"
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
                          <p className="text-white  text-base p-5 inter-med">
                            Trusted by Industry Leaders
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="border-l border-gray-300 pl-4">
                      {submenu.slice(0, 4).map((item, index) => (
                        <Link
                          key={index}
                          href={item.path}
                          className="block py-1 hover:text-indigo-500"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                    <div className="border-l border-gray-300 pl-4">
                      {submenu.slice(4, 7).map((item, index) => (
                        <Link
                          key={index}
                          href={item.path}
                          className="block py-1 hover:text-indigo-500"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                    <div className="border-l border-gray-300 pl-4">
                      {submenu.slice(7, 10).map((item, index) => (
                        <Link
                          key={index}
                          href={item.path}
                          className="block py-1 hover:text-indigo-500"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )
          : ""}

        {/* {windowWidth > 1050
          ? isOpenIndustry && (
              <div
                className={`fixed  w-full p-10 bg-white inter-med  flex flex-col text-slate-600 capitalize top-20 right-0  transition-transform duration-500 ${
                  isOpenIndustry ? "true" : "false"
                }`}
              >
                {isOpenIndustry && (
                  <div className="absolute left-0 lg:px-60  w-full bg-white p-5 rounded shadow-lg grid grid-cols-1 gap-5 text-black">
                    <div className="grid grid-cols-6 gap-5">
                      {submenuIndustry.slice(0, 6).map((item, index) => (
                        <Link
                          key={index}
                          to={item.path}
                          className="block py-1 hover:text-indigo-500 border border-gray-400 text-center rounded-md"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )
          : ""} */}
      </nav>
    </div>
  );
};

export default ClutchNavNew;
