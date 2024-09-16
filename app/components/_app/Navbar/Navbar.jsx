import React, { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi"; // Import menu icons

const Navbar = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false); // Mobile menu toggle
  const [openSubmenu, setOpenSubmenu] = useState(false); // Submenu toggle for mobile

  const toggleMobileMenu = () => {
    setOpenMobileMenu(!openMobileMenu);
  };

  const toggleSubmenu = () => {
    setOpenSubmenu(!openSubmenu);
  };

  const menus = [
    { name: "Home", link: "#" },
    {
      name: "Company",
      link: "#",
      submenu: [
        { name: "About Us", link: "#" },
        { name: "Library", link: "#" },
        { name: "Resources", link: "#" },
        { name: "Pro Version", link: "#" },
      ],
    },
    { name: "Team", link: "#" },
    { name: "Contact", link: "#" },
  ];

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center space-x-3">
              <img
                src="/images/logo.png"
                className="h-8"
                alt="Company Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Flowbite
              </span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-500 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none"
            >
              {openMobileMenu ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
          </div>

          {/* Menu items center-aligned */}
          <div className="hidden md:flex items-center space-x-8 justify-center w-full">
            <ul className="flex space-x-6">
              {menus.map((menu, index) => (
                <li key={index} className="relative group">
                  <a
                    href={menu.link}
                    className="text-gray-900 hover:text-blue-600 dark:text-white dark:hover:text-blue-500 transition-colors duration-200"
                  >
                    {menu.name}
                  </a>
                  {/* Flyout Submenu for desktop */}
                  {menu.submenu && (
                    <ul className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-300 ease-in-out z-10">
                      {menu.submenu.map((submenuItem, subIndex) => (
                        <li key={subIndex} className="py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700">
                          <a
                            href={submenuItem.link}
                            className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-500"
                          >
                            {submenuItem.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Buttons on the right side */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#"
              className="px-4 py-2 text-gray-900 dark:text-white border border-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
            >
              Login
            </a>
            <a
              href="#"
              className="px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg"
            >
              Sign Up
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        {openMobileMenu && (
          <div className="md:hidden">
            <ul className="flex flex-col items-center space-y-4 py-4">
              {menus.map((menu, index) => (
                <li key={index} className="w-full">
                  <a
                    href={menu.link}
                    className="block text-center text-gray-900 hover:text-blue-600 dark:text-white dark:hover:text-blue-500 transition-colors duration-200"
                  >
                    {menu.name}
                  </a>

                  {/* Submenu for mobile */}
                  {menu.submenu && (
                    <button
                      onClick={toggleSubmenu}
                      className="text-gray-900 dark:text-white w-full text-left px-4 py-2 flex justify-between items-center"
                    >
                      {menu.name} <FiChevronDown />
                    </button>
                  )}
                  {menu.submenu && openSubmenu && (
                    <ul className="w-full bg-gray-100 dark:bg-gray-800">
                      {menu.submenu.map((submenuItem, subIndex) => (
                        <li key={subIndex} className="py-2 px-4">
                          <a
                            href={submenuItem.link}
                            className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-500"
                          >
                            {submenuItem.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="px-4 py-2 text-gray-900 dark:text-white border border-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
                >
                  Login
                </a>
                <a
                  href="#"
                  className="px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg"
                >
                  Sign Up
                </a>
              </div>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
