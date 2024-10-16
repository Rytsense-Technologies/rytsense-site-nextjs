import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { BiSolidPhoneCall } from "react-icons/bi";
import { useState, useEffect } from "react";
import { menuItems } from "../../../mock/menuItems"; // Assuming menuItems is in a separate file
import logo from "../../../../public/images/logo.png";
import Image from "next/image";
import CustomButton from "../../common/CustomButton";

const Navbar = ({ isTransparent }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [navbarTransparent, setNavbarTransparent] = useState(isTransparent);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const handleButtonClick = () => {
    window.open("https://calendly.com/ramkumar_p/call-schedule", "_blank");
  }; // Popover visibility state

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleSubMenu = (index) => {
    setOpenSubMenu(openSubMenu === index ? null : index);
  };

  const togglePopover = () => {
    setIsPopoverOpen(!isPopoverOpen); // Toggle popover visibility
  };

  useEffect(() => {
    setNavbarTransparent(isTransparent);

    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);

      if (isTransparent) {
        if (position > 50) {
          setNavbarTransparent(false); // Change to white background after scrolling
        } else {
          setNavbarTransparent(true); // Initially transparent
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isTransparent]);

  const renderMenuItems = (items) => {
    return items.map((item, index) => (
      <div key={index} className="relative group">
        <Link
          href={item.path || "#"}
          className={`cursor-pointer ${
            navbarTransparent ? "text-white" : "text-gray-900"
          }`}
        >
          <p className="hover:text-sky-500   flex items-center">
            {item.label}
          </p>
        </Link>
        {item.submenu && (
          <div
            className="absolute left-1/2 top-full mt-8 bg-white shadow-lg rounded-2xl py-2 z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:block transition-all duration-300 transform -translate-x-1/2"
            style={{
              minWidth: item.label === "Hire Developers" ? "1000px" : "600px",
            }}
          >
            <div
              className={`grid ${
                item.label === "Hire Developers" ? "grid-cols-5" : "grid-cols-2"
              } gap-8 p-4 text-gray-500`}
            >
              {item.submenu.map((subItem, subIndex) => (
                <div key={subIndex} className="group flex items-center">
                  <Link
                    href={subItem.path || "#"}
                    className="flex items-center gap-2"
                  >
                    <p className="hover:text-sky-500 flex itemse-center gap-4 font-sans text-gray-800 font-semibold  flex items-center">
                     <span className=" text-center text-xl">{subItem.icon}</span> {subItem.label}
                    </p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    ));
  };

  return (
    <nav
      className={`p-5 sticky top-0 z-50 transition-all duration-300 ${
        navbarTransparent
          ? "bg-transparent"
          : "bg-white border-b border-gray-200"
      }`}
    >
      <div className="mx-auto flex items-center justify-between w-full max-w-8xl">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <div className="flex items-center gap-2">
              <Image
                className=""
                src={logo}
                alt="Rytsense Technologies"
                width={40}
                height={40}
              />
              <h1
                className={`text-xl font-semibold transition-all duration-300 ${
                  navbarTransparent ? "text-white" : "text-gray-900"
                }`}
              >
                Rytsense Technologies
              </h1>
            </div>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-8">
          {renderMenuItems(menuItems)}
        </div>

        {/* Call to Action buttons */}
        <div className="hidden lg:flex items-center space-x-4 relative">
          <button
            type="button"
            onClick={togglePopover} // Open popover on phone call button click
            className="text-white bg-[#2C87D9] text-xl font-extrabold hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 rounded-xl px-5 py-2.5 text-center inline-flex items-center"
          >
            <BiSolidPhoneCall />
          </button>

          {/* Popover Content */}
          {isPopoverOpen && (
            <div className="absolute right-12 top-full mt-2 p-4 box-border h-fit w-80 text-black border-1 border-transparent rounded-lg bg-white font-extralight shadow-lg z-20">
              <div className="text-sm font-semibold">
                Rytsense Technologies Contacts
              </div>
              <div className="text-sm mt-2 font-semibold text-gray-400">
                For Sales Department
                <div className="mt-2 rounded-md shadow-sm text-black font-semibold">
                  <div className="flex">
                    <Image
                      src="/images/flag/ind5.png"
                      alt="icon"
                      className="w-8 h-8 rounded-3xl"
                      width={20}
                      height={20}
                    />
                    <a href="https://wa.me/917010044153" className="mt-1 ml-6">
                      +917010044153
                    </a>
                  </div>
                </div>
                <div className="rounded-md mt-3 shadow-sm border-1 hover:border-gray-400 text-black font-semibold">
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
                <div className="mt-3 rounded-md shadow-sm border-1 border-gray-600 hover:border-gray-400 text-black font-semibold">
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
          )}

          <CustomButton title={"Get in Touch"} />
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none"
          >
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden text-gray-900 p-4 space-y-4 bg-white shadow-lg">
          {menuItems.map((item, index) => (
            <div key={index}>
              <div className="flex justify-between items-center">
                <Link href={item.path || "#"}>
                  <p className="hover:text-gray-300 cursor-pointer">
                    {item.label}
                  </p>
                </Link>
                {item.submenu && (
                  <button onClick={() => toggleSubMenu(index)}>
                    {openSubMenu === index ? <FaTimes /> : <FaBars />}
                  </button>
                )}
              </div>
              {item.submenu && openSubMenu === index && (
                <div className="pl-4">
                  {item.submenu.map((subItem, subIndex) => (
                    <Link key={subIndex} href={subItem.path}>
                      <p className="block px-4 py-2 cursor-pointer">
                        {subItem.label}
                      </p>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div className="flex flex-col space-y-4">
            <button
              type="button"
              className="text-white bg-[#2C87D9] text-xl font-extrabold hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 rounded-xl px-5 py-2.5 text-center inline-flex items-center"
            >
              <BiSolidPhoneCall />
            </button>
            <button
              type="button"
              className="text-white bg-[#2C87D9] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-xl text-sm px-5 py-2.5 text-center inline-flex items-center"
            >
              BOOK A CALL
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
