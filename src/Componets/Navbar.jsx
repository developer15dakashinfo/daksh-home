import React, { useState } from "react";
import { IoClose, IoSearch } from "react-icons/io5";
import logo from "../assets/logo.png";

const navbarData = [
  { label: "Home", dropdown: [] },
  { label: "About Us", dropdown: [] },
  { label: "Our Services", dropdown: [] },
  { label: "Pricing", dropdown: [] },
  { label: "Carrier", dropdown: [] },
  { label: <IoSearch className="text-xl" />, dropdown: [] },
];

function Navbar() {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-black border-gray-200 dark:bg-gray-900 sticky top-0 z-50">
      {/* Top Section */}
      <div className="max-w-screen-xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
        </a>

        {/* Desktop and Mobile Buttons */}
        <div className="hidden md:flex space-x-4">
          <button
            type="button"
            className="text-white font-semibold flex rounded-full text-sm px-4 py-2 focus:ring-4 focus:outline-none focus:ring-blue-300 bg-blue-500 hover:bg-blue-600"
          >
            Contact Us
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Navbar Links */}
      <div
        className={`${
          isMobileMenuOpen ? "block" : "hidden"
        } md:flex items-center justify-center bg-black md:bg-transparent`}
      >
        <ul className="flex flex-col md:flex-row items-center w-full md:space-x-6 m-0 py-2 md:py-0">
          {navbarData.map((menu, index) => (
            <li className="relative group" key={index}>
              <p
                className="text-white cursor-pointer px-4 py-2 font-semibold hover:text-blue-400"
                onClick={() => {
                  if (menu.label.type === IoSearch) setIsSearchActive(true);
                }}
              >
                {menu.label}
              </p>
            </li>
          ))}
        </ul>
      </div>

      {/* Search Bar */}
      {isSearchActive && (
        <div className="flex items-center justify-center w-full px-4 py-2 bg-gray-900">
          <input
            type="text"
            placeholder="Search..."
            className="flex-grow px-4 py-2 rounded-full bg-gray-700 text-white focus:outline-none"
          />
          <button
            className="ml-2 text-yellow-500 text-2xl"
            onClick={() => setIsSearchActive(false)}
          >
            <IoClose />
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
