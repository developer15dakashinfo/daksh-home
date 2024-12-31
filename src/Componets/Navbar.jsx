import React, { useState } from "react";
import { IoClose, IoSearch } from "react-icons/io5";
import logo from "../assets/logo.png";
import { MdEmail } from "react-icons/md";
import { AiFillSkype } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";

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
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <nav className="bg-black border-gray-200 dark:bg-gray-900 sticky top-0 z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto pt-2">
        <a
          href="https://flowbite.com/"
          className="flex items-center rtl:space-x-reverse"
        ></a>
        <div className="flex flex-row items-center gap-4 md:order-2">
          <div className="text-white border-r border-gray-500 pr-4">
            <div className="flex flex-row gap-2 text-white items-center relative">
              <div>
                <a href="">
                  {" "}
                  <FaPhoneAlt className="text-[20px] text-white" />
                </a>
              </div>
              <div>
                <svg
                  className="w-4 h-4 ml-1 transform group-hover:rotate-180 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={toggleDropdown}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white text-black shadow-lg rounded-b-lg p-4 w-72 z-10">
                  <div className="font-bold text-blue-600">
                    For Sales Inquiry
                  </div>
                  <ul className="mt-2 space-y-2 px-2">
                    <li>
                      <div className="flex flex-row items-center gap-1 hover:bg-gray-200 hover:text-blue-500 cursor-pointer">
                        <div>
                          <a href="">
                            {" "}
                            <FaPhoneAlt className="text-[16px] text-black hover:text-blue-500" />
                          </a>
                        </div>{" "}
                        <div>+91-99833-88855</div>
                      </div>
                    </li>

                    <li>
                      <div className="flex flex-row items-center gap-1 hover:bg-gray-200 hover:text-blue-500 cursor-pointer">
                        <div>
                          <a href="">
                            {" "}
                            <FaPhoneAlt className="text-[16px] text-black" />
                          </a>
                        </div>{" "}
                        <div>+91-92140-01234</div>
                      </div>
                    </li>

                    <li>
                      <div className="flex flex-row items-center gap-1 hover:bg-gray-200 hover:text-blue-500 cursor-pointer">
                        <div>
                          <a href="">
                            {" "}
                            <FaPhoneAlt className="text-[16px] text-black hover:bg-gray-200 hover:text-blue-500 cursor-pointer" />
                          </a>
                        </div>{" "}
                        <div>+91-92140-01234</div>
                      </div>
                    </li>
                    <li>
                      <div className="flex flex-row items-center gap-1 hover:bg-gray-200 hover:text-blue-500 cursor-pointer">
                        <div>
                          <a href="">
                            {" "}
                            <FaPhoneAlt className="text-[16px] text-black" />
                          </a>
                        </div>{" "}
                        <div>+91-97729-77271</div>
                      </div>
                    </li>
                    <li>
                      <div className="flex flex-row items-center gap-1 hover:bg-gray-200 hover:text-blue-500 cursor-pointer">
                        <div>
                          <a href="">
                            {" "}
                            <FaPhoneAlt className="text-[16px] text-black" />
                          </a>
                        </div>{" "}
                        <div>+91-73773-71234</div>
                      </div>
                    </li>

                    <li>
                      {" "}
                      <div className="flex flex-row gap-2 text-black  items-center ">
                        <div>
                          <a href="">
                            <MdEmail className="text-[20px] text-black" />
                          </a>
                        </div>
                        <div>info@dakshinfo.com</div>
                      </div>
                    </li>
                    <li>
                      <div className="flex flex-row gap-2 text-black items-center">
                        <div>
                          <a href="">
                            <AiFillSkype className="text-[20px] text-black" />
                          </a>
                        </div>
                        <div>Skype</div>
                      </div>
                    </li>
                  </ul>
                  <hr />
                  <div className="font-bold text-blue-600">
                    For Sales Inquiry
                  </div>
                  <ul className="mt-2 space-y-2 px-2">
                    <li>
                      <div className="flex flex-row items-center gap-1 hover:bg-gray-200 hover:text-blue-500 cursor-pointer">
                        <div>
                          <a href="">
                            {" "}
                            <FaPhoneAlt className="text-[16px] text-black" />
                          </a>
                        </div>{" "}
                        <div>+91-99833-88855</div>
                      </div>{" "}
                    </li>

                    <li>
                      <div className="flex flex-row gap-2 text-black  items-center ">
                        <div>
                          <a href="">
                            <MdEmail className="text-[20px] text-black" />
                          </a>
                        </div>
                        <div>info@dakshinfo.com</div>
                      </div>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-row gap-2 text-white items-center border-r border-gray-500 pr-4 ">
            <div>
              <a href="">
                <MdEmail className="text-[20px] text-white" />
              </a>
            </div>
            <div>info@dakshinfo.com</div>
          </div>
          <div className="flex flex-row gap-2 text-white items-center">
            <div>
              <a href="">
                <AiFillSkype className="text-[20px] text-white" />
              </a>
            </div>
            <div>Skype</div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between max-w-screen-xl mx-auto pt-2 relative">
        <div>
          <a href="/" className="flex items-center">
            <img src={logo} alt="Logo" className="h-[80px]" />
          </a>
        </div>

       

          <div className="hidden md:flex items-center justify-end space-x-6 ">
            {!isSearchActive ? (
              <ul className="flex items-center space-x-8">
                {navbarData.map((menu, index) => (
                  <li key={index} className="relative group">
                    <p
                      className="text-white cursor-pointer flex items-center"
                      onClick={() =>
                        menu.label.type === IoSearch && setIsSearchActive(true)
                      }
                    >
                      {menu.label}
                      {menu.dropdown.length > 0 && (
                        <svg
                          className="w-4 h-4 ml-1 transform group-hover:rotate-180 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      )}
                    </p>

                    {menu.dropdown.length > 0 && (
                      <div className="absolute left-0 hidden group-hover:flex bg-white text-black mt-2 rounded-b-lg shadow-lg w-screen py-4 z-50">
                        {menu.dropdown.map((dropdownItem, idx) => (
                          <div
                            key={idx}
                            className="flex-1 border-r last:border-r-0 px-4"
                          >
                            <h3 className="font-bold text-lg pb-2">
                              {dropdownItem.heading}
                            </h3>
                            <ul className="space-y-2 px-2">
                              {dropdownItem.items.map((item, i) => (
                                <li key={i}>
                                  <a
                                    href={item.link}
                                    className="hover:text-blue-600 text-black no-underline text-[16px]"
                                  >
                                    {item.label}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            ) : (
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  placeholder="Search..."
                  className="px-4 py-2 bg-gray-700 text-white rounded-full focus:outline-none"
                />
                <button
                  className="text-white text-2xl"
                  onClick={() => setIsSearchActive(false)}
                >
                  <IoClose />
                </button>
              </div>
            )}

            <button className="font-semibold text-white bg-blue-900 hover:bg-white hover:text-blue-900 px-6 py-2 rounded-full">
              Contact Us
            </button>
          </div>
        </div>
      
    </nav>
  );
}

export default Navbar;
