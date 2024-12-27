import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import logo from "../assets/logo.png";

const navbarData = [
  {
    label: "Home",
    dropdown: [],
  },
  {
    label: "About Us",
    dropdown: [],
  },
  {
    label: "Our Services",
    dropdown: [
      { label: "Email Us", link: "#" },
      { label: "Support Center", link: "#" },
      { label: "FAQs", link: "#" },
    ],
  },
  {
    label: "Pricing",
    dropdown: [],
  },
  {
    label: "Carrier",
    dropdown: [],
  },

  {
    label: (
      <svg
        className="w-5 h-5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 17 14"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M1 1h15M1 7h15M1 13h15"
        />
      </svg>
    ),
    dropdown: [
      { label: "Emdail Us", link: "#" },
      { label: "Support Center", link: "#" },
      { label: "FAQs", link: "#" },
    ],
  },
  {
    label: <IoSearch className=" text-xl" />,

    dropdown: [],
  },
];

function Navbar() {
  const [isSearchActive, setIsSearchActive] = useState(false);
  return (
    <nav className="bg-black border-gray-200 dark:bg-gray-900 sticky top-0 z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto pt-2">
        <a
          href="https://flowbite.com/"
          className="flex items-center rtl:space-x-reverse"
        ></a>
        <div className="flex md:order-2 space-x-3 md:space-x-0">
          <button
            type="button"
            className="text-white  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm  text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <span className="text-blue-400">IND</span> (+91) 99999 99999
          </button>
          <button
            type="button"
            className="text-white  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4  text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <span className="text-blue-400">IND</span> (+91) 99999 99999
          </button>
          <button
            type="button"
            className="text-white  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm  text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <span className="text-blue-400">IND</span> (+91) 99999 99999
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between max-w-screen-xl mx-auto">
        <a href="https://flowbite.com/" className="flex items-center">
          <img src={logo} height={280} width={250} alt="Logo" />
        </a>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-end ">
          <div className="flex md:order-2 space-x-3">
            <button
              type="button"
              className="font-semibold text-white bg-blue-500 hover:bg-white hover:text-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-400 rounded-full text-sm px-4 py-2"
            >
              Contact Us
            </button>

            <button
              data-collapse-toggle="navbar-cta"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-cta"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center  justify-end w-full md:flex md:w-auto md:order-1"
            id="navbar-cta"
          >
            {!isSearchActive ? (
              <ul className="flex flex-col gap-2 font-medium md:p-0 mt-3 hover:text-blue-400 rounded-lg bg-gray-50 md:flex-row md:mt-0 md:border-0 md:bg-black">
                {navbarData.map((menu, index) => (
                  <li className="relative group " key={index}>
                    <p
                      className="flex items-center text-white  cursor-pointer m-0 px-2 "
                      onClick={() => {
                        if (menu.label.type === IoSearchCircleSharp)
                          setIsSearchActive(true);
                      }}
                    >
                      {menu.label}
                      {!React.isValidElement(menu.label) &&
                        menu.dropdown.length > 0 && (
                          <svg
                            className="w-4 h-4 ml-1 transform hover:text-blue-400 group-hover:rotate-180 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
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
                      <ul className="absolute hidden p-3 group-hover:block bg-gray-800 dark:bg-gray-800 text-white dark:text-white mt- w-48 shadow-md rounded-b-[52px]">
                        {menu.dropdown.map((item) => (
                          <li
                            className=" hover:text-blue-400 dark:hover:bg-gray-700"
                            key={item.label}
                          >
                            <p href={item.link}>{item.label}</p>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            ) : (
              <div className="flex  w-full float-right py-2.5">
                <input
                  type="text"
                  placeholder="Search..."
                  className="flex-grow px-4 py-1 rounded-full  bg-gray-700 text-white focus:outline-none"
                />
                <button
                  className=" px-2 text-yellow-500 font-semibold text-3xl rounded-r"
                  onClick={() => setIsSearchActive(false)}
                >
                  <IoClose />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
