import React from "react";
import awardImage1 from "../../assets/homebanner/awardbanner1.png";
import awardImage2 from "../../assets/homebanner/awardbanner2.png";
import awardImage3 from "../../assets/homebanner/awardbanner3.png";
import awardImage4 from "../../assets/homebanner/awardbanner4.png";
import awardImage5 from "../../assets/homebanner/awardbanner5.png";
import { LuSquareTerminal } from "react-icons/lu";
import { MdAppBlocking } from "react-icons/md";
import { FaDesktop } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { TbCloudExclamation } from "react-icons/tb";
import { FaHubspot } from "react-icons/fa6";
import { SiZoho } from "react-icons/si";
import { IoIosCloudDone } from "react-icons/io";

const HomeBanner = () => {
  return (
    <section className="w-full bg-black py-14">
      <div className="flex flex-col items-center">
        <div className="w-full max-w-5xl">
          <ul className="flex flex-row justify-around space-x-12">
            <li>
              <a
                href="https://appexchange.salesforce.com/appxConsultingListingDetail?listingId=a0N3A00000EczO1UAJ"
                rel="follow"
                aria-label="salesforce"
                target="_blank"
              >
                <img
                  className="w-auto h-20 object-contain"
                  src={awardImage1}
                  alt="salesforce"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.gartner.com/reviews/market/erp-and-corporate-management-others/vendor/dotsquares/product/dotsquares"
                rel="follow"
                aria-label="Gartner"
                target="_blank"
              >
                <img
                  className="w-auto h-20 object-contain"
                  src={awardImage2}
                  alt="Gartner"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.gartner.com/reviews/market/erp-and-corporate-management-others/vendor/dotsquares/product/dotsquares"
                rel="follow"
                aria-label="Gartner"
                target="_blank"
              >
                <img
                  className="w-auto h-20 object-contain"
                  src={awardImage3}
                  alt="Gartner"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.gartner.com/reviews/market/erp-and-corporate-management-others/vendor/dotsquares/product/dotsquares"
                rel="follow"
                aria-label="Gartner"
                target="_blank"
              >
                <img
                  className="w-auto h-20 object-contain"
                  src={awardImage4}
                  alt="Gartner"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.gartner.com/reviews/market/erp-and-corporate-management-others/vendor/dotsquares/product/dotsquares"
                rel="follow"
                aria-label="Gartner"
                target="_blank"
              >
                <img
                  className="w-auto h-20 object-contain"
                  src={awardImage5}
                  alt="Gartner"
                />
              </a>
            </li>
          </ul>
        </div>

        <div className=" ">
          <h1 className="text-7xl font-[700] text-white pt-4 text-center leading-tight">
            Turning Ideas into
          </h1>
          <span className="text-7xl font-[700] text-blue-500 leading">
            Creative Digital Solutions
          </span>
        </div>

        <div className="py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-white text-3xl font-bold mb-10">
              Key Areas of Our Expertise
            </h2>
            <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-8 place-items-center">
              {[
                { title: "Software Development", icon: <LuSquareTerminal /> },
                { title: "Apps Development", icon: <MdAppBlocking /> },
                { title: "Web Development", icon: <FaDesktop />},
                { title: "E-Commerce Services", icon: <MdOutlineShoppingCart /> },
                { title: "Cloud Solutions", icon: <TbCloudExclamation /> },
                { title: "Hubspot", icon:<FaHubspot /> },
                { title: "Zoho Solutions", icon:<SiZoho /> },
                { title: "Salesforce Solutions", icon: <IoIosCloudDone /> },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center border-2 border-white text-white rounded-full py-3 px-10 hover:bg-white hover:text-black hover:scale-105 transition duration-300 ease-in-out"
                >
                  <div className="flex items-center space-x-2 group">
                    <span className="text-2xl group-hover:text-black">
                      {item.icon}
                    </span>
                    <span className="text-lg font-medium group-hover:text-black">
                      {item.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-20">
              <button className="bg-blue-500 text-white text-[20px] py-3 px-8 rounded-lg font-semibold hover:bg-blue-600 transition">
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
