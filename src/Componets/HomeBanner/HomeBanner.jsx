import React from "react";
import banner from "../../assets/homebanner/banner2.jpg";
import bannervideo from "../../assets/Homebanner.mp4";
import { LuSquareTerminal } from "react-icons/lu";
import { MdAppBlocking } from "react-icons/md";
import { FaDesktop } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdManageSearch } from "react-icons/md";
import { LiaDigitalOcean } from "react-icons/lia";
import { FaMobileScreenButton } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const HomeBanner = () => {
  const BannerButton = [
    { title: "Software Development", icon: <LuSquareTerminal /> },
    { title: "Apps Development", icon: <MdAppBlocking /> },
    { title: "Web Development", icon: <FaDesktop /> },
    {
      title: "E-Commerce Services",
      icon: <MdOutlineShoppingCart />,
    },
    { title: "Email Marketing", icon: <MdEmail /> },
    { title: "Digital Marketing ", icon: <LiaDigitalOcean /> },
    { title: "Mobile Marketing", icon: <FaMobileScreenButton /> },
    { title: "SEO", icon: <MdManageSearch /> },
  ];

  return (
    <section
      className="w-full pt-20 overflow-hidden bg-cover bg-center relative h-full"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover">
        <source src={bannervideo} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      <div className="relative z-10 flex flex-col items-center mx-auto max-w-screen-xl">
       

        <div className="text-center px-4 sm:px-8 lg:px-0 mt-20">
          <h1 className="text-4xl sm:text-5xl lg:text-[70px] mb-4 font-bold text-white leading-tight">
            Turning Ideas into
          </h1>
          <span className="text-4xl sm:text-5xl lg:text-[80px] font-bold text-blue-700">
            Creative Digital Solutions
          </span>
        </div>

        <div className="text-center px-4 sm:px-8 lg:px-0">
         
          <div className="text-center px-4 sm:px-8 lg:px-0">
            <h2 className="text-white text-xl sm:text-3xl font-bold my-12">
              Key Areas of Our Expertise
            </h2>
            <div className="flex flex-wrap justify-center gap-x-5 gap-y-5">
              {BannerButton.map((item, index) => (
                <div
                  key={index}
                  className="group flex items-center justify-center border border-white text-white rounded-full py-[12px] px-4 sm:px-6 lg:px-8 hover:bg-white hover:scale-105 transition duration-200 ease-in-out"
                >
                  <div className="flex items-center space-x-2">
                    <span className="text-lg sm:text-xl group-hover:text-black">
                      {item.icon}
                    </span>
                    <span className="text-sm sm:text-base lg:text-[15px] font-medium group-hover:text-black">
                      {item.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 mb-40">
              <button className="bg-blue-900 text-white text-base sm:text-lg lg:text-xl py-3 px-6 sm:px-8 rounded-lg font-semibold hover:bg-blue-600 transition">
                Let’s Talk About Your Business →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
