import React from "react";
import banner from "../../assets/homebanner/banner2.jpg";
import awardImage1 from "../../assets/homebanner/awardbanner1.png";
import awardImage2 from "../../assets/homebanner/awardbanner2.png";
import awardImage3 from "../../assets/homebanner/awardbanner3.png";
import awardImage4 from "../../assets/homebanner/awardbanner4.png";
import awardImage5 from "../../assets/homebanner/awardbanner5.png";
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
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      <div className="relative z-10 flex flex-col items-center mx-auto max-w-screen-xl">
        {/* <div className="w-full max-w-4xl mt-6">
          <ul className="flex justify-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 overflow-x-auto">
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
        </div> */}

        <div className="text-center px-4 sm:px-8 lg:px-0">
          <h1 className="text-4xl sm:text-5xl lg:text-[60px] font-bold text-white leading-tight">
            Turning Ideas into
          </h1>
          <span className="text-4xl sm:text-5xl lg:text-[60px] font-bold text-blue-600">
            Creative Digital Solutions
          </span>
        </div>

        <div className="text-center px-4 sm:px-8 lg:px-0">
         
          <div className="text-center px-4 sm:px-8 lg:px-0">
            <h2 className="text-white text-2xl sm:text-3xl font-bold mb-12">
              Key Areas of Our Expertise
            </h2>
            <div className="flex flex-wrap justify-center gap-x-5 gap-y-10">
              {BannerButton.map((item, index) => (
                <div
                  key={index}
                  className="group flex items-center justify-center border-2 border-white text-white rounded-full py-[14px] px-4 sm:px-6 lg:px-8 hover:bg-white hover:scale-105 transition duration-200 ease-in-out"
                >
                  <div className="flex items-center space-x-2">
                    <span className="text-lg sm:text-xl group-hover:text-black">
                      {item.icon}
                    </span>
                    <span className="text-sm sm:text-base lg:text-[17px] font-medium group-hover:text-black">
                      {item.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 mb-10">
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
