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
  const BannerButton = [
    { title: "Software Development", icon: <LuSquareTerminal /> },
    { title: "Apps Development", icon: <MdAppBlocking /> },
    { title: "Web Development", icon: <FaDesktop /> },
    {
      title: "E-Commerce Services",
      icon: <MdOutlineShoppingCart />,
    },
    { title: "Cloud Solutions", icon: <TbCloudExclamation /> },
    { title: "Hubspot", icon: <FaHubspot /> },
    { title: "Zoho Solutions", icon: <SiZoho /> },
    { title: "Salesforce Solutions", icon: <IoIosCloudDone /> },
  ];

  return (
    <section className="w-full bg-black py-14">
      <div className="row flex flex-col items-center">
        <div className="w-full max-w-xl">
          <ul className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            <li>
              <a
                href="https://appexchange.salesforce.com/appxConsultingListingDetail?listingId=a0N3A00000EczO1UAJ"
                rel="follow"
                aria-label="salesforce"
                target="_blank"
              >
                <img
                  className="w-auto h-12 sm:h-14 object-contain"
                  src={awardImage1}
                  alt="salesforce"
                />
              </a>
            </li>

            {[awardImage2, awardImage3, awardImage4, awardImage5].map(
              (award, idx) => (
                <li key={idx}>
                  <a
                    href="https://www.gartner.com/reviews/market/erp-and-corporate-management-others/vendor/dotsquares/product/dotsquares"
                    rel="follow"
                    aria-label="Gartner"
                    target="_blank"
                  >
                    <img
                      className="w-auto h-12 sm:h-14 object-contain"
                      src={award}
                      alt="Gartner"
                    />
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        <div className="text-center pt-20 px-4 sm:px-8 lg:px-0">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Turning Ideas into
          </h1>
          <span className="text-4xl sm:text-5xl lg:text-6xl font-bold text-blue-500">
            Creative Digital Solutions
          </span>
        </div>

        <div className="py-16">
          <div className="container mx-auto text-center px-4 sm:px-8 lg:px-0">
            <h2 className="text-white text-2xl sm:text-3xl font-bold mb-10">
              Key Areas of Our Expertise
            </h2>
            <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 place-items-center px-10">
              {BannerButton.map((item, index) => (
                <div
                  key={index}
                  className="group flex items-center justify-center border-2 border-white text-white rounded-full py-3 px-8 sm:px-8 hover:bg-white hover:scale-105 transition duration-200 ease-in-out"
                >
                  <div className="flex items-center space-x-2">
                    <span className="text-xl sm:text-xl group-hover:text-black">
                      {item.icon}
                    </span>
                    <span className="text-sm sm:text-base lg:text-lg font-medium group-hover:text-black">
                      {item.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <button className="bg-blue-500 text-white text-lg sm:text-xl py-3 px-6 sm:px-8 rounded-lg font-semibold hover:bg-blue-600 transition">
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
