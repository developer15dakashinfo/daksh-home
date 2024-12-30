// import React, { useState } from "react";
// import { FaSearch } from "react-icons/fa";
// import { IoClose } from "react-icons/io5";
// import { IoSearch } from "react-icons/io5";
// import logo from "../assets/logo.png";

// const navbarData = [
//   {
//     label: "Home",
//     dropdown: [],
//   },
//   {
//     label: "About Us",
//     dropdown: [],
//   },
//   {
//     label: "Our Services",
//     dropdown: [
//       {
//         heading: "Web Development",
//         items: [
//           { label: "Web Designing and Development", link: "#" },
//           { label: "E-commerce Website Design", link: "#" },
//           { label: "Graphic Design Service", link: "#" },
//         ],
//       },
//       {
//         heading: "App Development",
//         items: [
//           { label: "Android App Development", link: "#" },
//           { label: "Hybrid App Development", link: "#" },
//           { label: "iOS App Development", link: "#" },
//         ],
//       },
//       {
//         heading: "Digital Marketing",
//         items: [
//           { label: "SEO Service", link: "#" },
//           { label: "SMO Services", link: "#" },
//           { label: "Email Marketing", link: "#" },
//         ],
//       },
//       {
//         heading: "Mobile",
//         items: [
//           { label: "Voice Call", link: "#" },
//           { label: "IVR", link: "#" },
//           { label: "Short/Long Code", link: "#" },
//         ],
//       },
//     ],
//   },
//   {
//     label: "Pricing",
//     dropdown: [],
//   },
//   {
//     label: "Carrier",
//     dropdown: [],
//   },

//   {
//     label: (
//       <svg
//         className="w-5 h-5"
//         aria-hidden="true"
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         viewBox="0 0 17 14"
//       >
//         <path
//           stroke="currentColor"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth={2}
//           d="M1 1h15M1 7h15M1 13h15"
//         />
//       </svg>
//     ),
//     dropdown: [
//       { label: "Emdail Us", link: "#" },
//       { label: "Support Center", link: "#" },
//       { label: "FAQs", link: "#" },
//     ],
//   },
//   {
//     label: <IoSearch className=" text-xl" />,

//     dropdown: [],
//   },
// ];

// function Navbar() {
//   const [isSearchActive, setIsSearchActive] = useState(false);
//   return (
//     <nav className="bg-black border-gray-200 dark:bg-gray-900 sticky top-0 z-50">
//       <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto pt-2">
//         <a
//           href="https://flowbite.com/"
//           className="flex items-center rtl:space-x-reverse"
//         ></a>
//         <div className="flex md:order-2 space-x-3 md:space-x-0">
//           <button
//             type="button"
//             className="text-white  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm  text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//           >
//             <span className="text-blue-900">IND</span> (+91) 99999 99999
//           </button>
//           <button
//             type="button"
//             className="text-white  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4  text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//           >
//             <span className="text-blue-900">IND</span> (+91) 99999 99999
//           </button>
//           <button
//             type="button"
//             className="text-white  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm  text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//           >
//             <span className="text-blue-900">IND</span> (+91) 99999 99999
//           </button>
//         </div>
//       </div>

//       <div className="flex items-center justify-between max-w-screen-xl mx-auto">
//         <a href="https://flowbite.com/" className="flex items-center">
//           <img src={logo} height={280} width={250} alt="Logo" />
//         </a>
//         <div className="max-w-screen-xl flex flex-wrap items-center justify-end ">
//           <div className="flex md:order-2 space-x-3">
//             <button
//               type="button"
//               className="font-semibold text-white bg-blue-900 hover:bg-white hover:text-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-400 rounded-full text-sm px-4 py-2"
//             >
//               Contact Us
//             </button>

//             <button
//               data-collapse-toggle="navbar-cta"
//               type="button"
//               className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
//               aria-controls="navbar-cta"
//               aria-expanded="false"
//             >
//               <span className="sr-only">Open main menu</span>
//               <svg
//                 className="w-5 h-5"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 17 14"
//               >
//                 <path
//                   stroke="currentColor"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M1 1h15M1 7h15M1 13h15"
//                 />
//               </svg>
//             </button>
//           </div>
//           <div
//             className="items-center  justify-end w-full md:flex md:w-auto md:order-1"
//             id="navbar-cta"
//           >
//             {!isSearchActive ? (
//               <ul className="flex flex-col gap-2 font-medium md:p-0 mt-3 hover:text-blue-900 rounded-lg bg-gray-50 md:flex-row md:mt-0 md:border-0 md:bg-black">
//                 {navbarData.map((menu, index) => (
//                   <li className="relative group " key={index}>
//                     <p
//                       className="flex items-center text-white  cursor-pointer m-0 px-2 "
//                       onClick={() =>
//                         menu.label.type === IoSearch && setIsSearchActive(true)
//                       }
//                     >
//                      {menu.label}
//                   {menu.dropdown.length > 0 && (
//                     <svg
//                       className="w-4 h-4 ml-1 transform group-hover:rotate-180 transition-transform"
//                       fill="none"
//                       stroke="currentColor"
//                       xmlns="http://www.w3.org/2000/svg"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M19 9l-7 7-7-7"
//                       />
//                     </svg>
//                         )}
//                     </p>
//                     {menu.dropdown.length > 0 && (
//                   <div className="absolute hidden group-hover:block bg-gray-800 p-3 rounded shadow-lg mt-2">
//                     {menu.dropdown.map((dropdownItem, idx) => (
//                       <div key={idx} className="mb-3">
//                         <h3 className="font-bold text-white">
//                           {dropdownItem.heading}
//                         </h3>
//                         <ul className="mt-2">
//                           {dropdownItem.items.map((item, i) => (
//                             <li key={i} className="text-gray-300 hover:text-blue-500">
//                               <a href={item.link}>{item.label}</a>
//                             </li>
//                           ))}
//                         </ul>
//                       </div>
//                     ))}
//                   </div>
//                 )}
//                   </li>
//                 ))}
//               </ul>
//             ) : (
//               <div className="flex  w-full float-right py-2.5">
//                 <input
//                   type="text"
//                   placeholder="Search..."
//                   className="flex-grow px-4 py-1 rounded-full  bg-gray-700 text-white focus:outline-none"
//                 />
//                 <button
//                   className=" px-2 text-blue-900 font-semibold text-3xl rounded-r"
//                   onClick={() => setIsSearchActive(false)}
//                 >
//                   <IoClose />
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

import React, { useState } from "react";
import { IoClose, IoSearch } from "react-icons/io5";
import logo from "../assets/logo.png";
import { MdEmail } from "react-icons/md";
import { AiFillSkype } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";

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
      {
        heading: "WEB DEVELOPMENT",
        items: [
          { label: "Web Designing & Development", link: "#" },
          { label: "E-commerce Website Design", link: "#" },
          { label: "Graphic Design Service", link: "#" },
          { label: "Wordpress Development Service", link: "#" },
        ],
      },
      {
        heading: "APP DEVELOPMENT",
        items: [
          { label: "Android App Development", link: "#" },
          { label: "Hybrid App Development", link: "#" },
          { label: "IOS App Development", link: "#" },
        ],
      },
      {
        heading: "DIGITAL MARKETING",
        items: [
          { label: "Digital Marketing", link: "#" },
          { label: "SEO Service", link: "#" },
          { label: "SMO Services", link: "#" },
          { label: "Email Marketing", link: "#" },
        ],
      },
      {
        heading: "MOBILE",
        items: [
          { label: "Voice Call", link: "#" },
          { label: "IVR", link: "#" },
          { label: "Short/Long Code", link: "#" },
        ],
      },
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
    label: <IoSearch className="text-xl" />,
    dropdown: [],
  },
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

      <div className="flex items-center justify-between max-w-screen-xl mx-auto pt-2">
        <div>
          <a href="/" className="flex items-center">
            <img src={logo} alt="Logo" className="h-[80px]" />
          </a>
        </div>

        <div className=" hidden md:flex items-center justify-end space-x-6 ">
          {!isSearchActive ? (
            <ul className="flex items-center space-x-8 pt-4">
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
                   <div className="absolute top-full left-0 hidden group-hover:flex bg-white text-black p-6 mt-2 rounded-b-lg shadow-lg w-[80vw] h-52">
                   {menu.dropdown.map((dropdownItem, idx) => (
                     <div
                       key={idx}
                       className="flex-1 border-r last:border-r-0"
                     >
                       <h3 className="font-bold text-lg pt-4 px-4 pb-2">
                         {dropdownItem.heading}
                       </h3>
                       <ul className="space-y-2">
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
