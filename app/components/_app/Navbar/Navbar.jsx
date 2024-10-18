import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { BiSolidPhoneCall } from "react-icons/bi";
import { useState, useEffect } from "react";
import { menuItems } from "../../../mock/menuItems"; // Assuming menuItems is in a separate file
import logo from "../../../../public/images/logo.png";
import Image from "next/image";
import BookACall from "../../common/BookACall";
import wp from "../../../../public/images/wp.png";

const Navbar = ({ isTransparent }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [navbarTransparent, setNavbarTransparent] = useState(isTransparent);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const handleButtonClick = () => {
    window.open("https://calendly.com/ramkumar_p/call-schedule", "_blank");
  };

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
          <p className="hover:text-sky-500 flex items-center">{item.label}</p>
        </Link>
        {item.submenu && (
          <div
            className="absolute left-1/2 top-full mt-8 bg-white shadow-lg rounded-2xl py-2 z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:block transition-all duration-300 transform -translate-x-1/2"
            style={{
              minWidth: item.label === "Hire Developers" ? "1000px" : "600px",
            }}
          >
            <div
              className={`${
                item.label === "Hire Developers" ? "grid-cols-5" : "grid-cols-3"
              } grid gap-8 p-6 text-gray-500`}
            >
              {item.submenu.map((subMenuCategory, subMenuIndex) => (
                <div key={subMenuIndex}>
                  <Link
                    href={subMenuCategory.path || "#"}
                    className="font-semibold  mb-5 hover:text-sky-500 text-gray-800 flex items-center gap-4 cursor-pointer"
                  >
                    <span className="text-center text-xl">
                      {subMenuCategory.icon}
                    </span>
                    <span className="text-md text-gray-500 hover:text-sky-500">
                      {" "}
                      {subMenuCategory.label}
                    </span>
                  </Link>
                  <div className="mt-2">
                    {subMenuCategory.technologies &&
                      subMenuCategory.technologies.map((tech, techIndex) => (
                        <Link href={tech.path || "#"} key={techIndex}>
                          <p className="hover:text-sky-500 flex items-center mb-4 gap-4 text-gray-800 font-sans font-semibold">
                            <span className="text-center text-2xl">
                              {tech.icon}
                            </span>{" "}
                            {tech.label}
                          </p>
                        </Link>
                      ))}
                  </div>
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
        navbarTransparent ? "bg-transparent" : "bg-white"
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
          <div className="">
            <a
              href="http://wa.me/+917010044153?text=Hello"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={wp} width={50} height={50} alt="WhatsApp Icon" />
            </a>
          </div>

          {/* Popover Content */}

          <BookACall title={"Book a Call"} />
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={toggleMobileMenu}
            className=" focus:outline-none"
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
                  {item.submenu.map((subCategory, subIndex) => (
                    <div key={subIndex}>
                      <h3 className="font-semibold">{subCategory.label}</h3>
                      {subCategory.technologies?.map((tech, techIndex) => (
                        <Link key={techIndex} href={tech.path || "#"}>
                          <p className="block px-4 py-2 cursor-pointer">
                            {tech.label}
                          </p>
                        </Link>
                      ))}
                    </div>
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
