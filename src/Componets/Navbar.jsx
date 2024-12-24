import React from 'react';
import { FaSearch } from "react-icons/fa";

const navbarData = [
  {
    label: "Service",
    dropdown: [
      { label: "Dashboard", link: "#" },
      { label: "Profile", link: "#" },
      { label: "Settings", link: "#" },
    ],
  },
  {
    label: "Cloud",
    dropdown: [
      { label: "Company Info", link: "#" },
      { label: "Our Team", link: "#" },
      { label: "Careers", link: "#" },
    ],
  },
  {
    label: "Data & AI",
    dropdown: [
      { label: "Web Development", link: "#" },
      { label: "Mobile Apps", link: "#" },
      { label: "Cloud Solutions", link: "#" },
    ],
  },
  {
    label: "Secutity",
    dropdown: [
      { label: "Email Us", link: "#" },
      { label: "Support Center", link: "#" },
      { label: "FAQs", link: "#" },
    ],
  },
  {
    label: "Industris",
    dropdown: [
      { label: "Email Us", link: "#" },
      { label: "Support Center", link: "#" },
      { label: "FAQs", link: "#" },
    ],
  },
 {
    label: "On-Demand Developer",
    dropdown: [ ],
  },,
  {
    label: "Technologies",
    dropdown: [
      { label: "Email Us", link: "#" },
      { label: "Support Center", link: "#" },
      { label: "FAQs", link: "#" },
    ],
  },
  {
    label: "Success Stories",
    dropdown: [
      { label: "Email Us", link: "#" },
      { label: "Support Center", link: "#" },
      { label: "FAQs", link: "#" },
    ],
  },
  {
    label:   <svg
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
  </svg>,
    dropdown: [
      { label: "Emdddddail Us", link: "#" },
      { label: "Support Center", link: "#" },
      { label: "FAQs", link: "#" },
    ],
  },
  {
    label:  <FaSearch />,

    dropdown: [
      { label: "Emdddddail Us", link: "#" },
      { label: "Support Center", link: "#" },
      { label: "FAQs", link: "#" },
    ],
  },
];

function Navbar() {
  return (
    <nav className="bg-black border-gray-200 dark:bg-gray-900 sticky top-0 z-50">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto pt-2">
        <a href="https://flowbite.com/" className="flex items-center rtl:space-x-reverse">
       
        
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0">
          <button
            type="button"
            className="text-white  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm  text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
       <span className='text-orange-700'>IND</span>  (+91) 99999 99999
          </button>
          <button
            type="button"
            className="text-white  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4  text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
       <span className='text-orange-700'>IND</span>  (+91) 99999 99999
          </button>
            <button
            type="button"
            className="text-white  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm  text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
       <span className='text-orange-700'>IND</span>  (+91) 99999 99999
          </button>
        </div>
     
      </div>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
        <a href="https://flowbite.com/" className="flex items-center rtl:space-x-reverse">
       <img
            src="https://www.dakshinfo.com/images/welcomelogo.svg"
            className="h-6"
            alt="Flowbite Logo"
          />
        
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0">
          <button
            type="button"
            className="text-white bg-yellow-600 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Contact Us
          </button>
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
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
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          <ul className="flex flex-col font-medium  md:p-0 mt-4 rounded-lg bg-gray-50  rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-black dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {navbarData.map((menu) => (
              <li className="relative group" key={menu.label}>
                <p
                
                  className="block m-0 py- px-2 md:p-0  text-s rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-500 hover:text-yellow-500 md:text-white  flex items-center"
                >
                  <span>{menu.label}</span>
                  <svg
                    className="w-4 h-4 ml-1 group-hover:rotate-180 transform transition-transform"
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
                </p>
                <ul className="absolute hidden p-4 group-hover:block bg-gray-800 dark:bg-gray-800 text-white dark:text-white mt-3 w-48 shadow-md rounded-b-[52px]">
                  {menu.dropdown.map((item) => (
                    <li
                      className=" hover:bg-gray-800 dark:hover:bg-gray-700"
                      key={item.label}
                    >
                      <p href={item.link}>{item.label}</p>
                    </li>
                  ))}
                  
                </ul>
                
              </li>
            ))}
          </ul>
          <button className='text-white'>
        
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
