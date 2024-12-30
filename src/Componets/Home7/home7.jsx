import React from "react";
import { FaArrowCircleRight, FaFileCode } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { GrCloudSoftware } from "react-icons/gr";
import { IoCodeSlash } from "react-icons/io5";
import { MdOutlineHorizontalRule } from "react-icons/md";

const home7 = () => {
  const cardsData = [
    {
      title: "Industrial &amp; Manufacturing",
      description:
        "Optimising production and enhancing efficiency for smarter, more sustainable manufacturing.",
      image:
        "https://www.dotsource.com/fileadmin/hp_editors/Hintergrundbilder/Digitalisierung_Medien_Verlage_Druck.jpg",
      icon: <FaFileCode />,
    },
    {
      title: "Software Development",
      description:
        "Building custom software solutions to streamline processes and drive innovation within your business.",
      image: "https://onlinegurukul.org/storage/uploads/1658492516-dm.jpeg",
      icon: <GrCloudSoftware />,
    },
    {
      title: "Web Development",
      description:
        "Creating cutting-edge websites and web applications that enhance user experience and drive engagement.",
      image:
        "https://www.oecd.org/adobe/dynamicmedia/deliver/dm-aid--f7ad0865-9635-42fd-9f79-46b73b6caefe/1795173919.jpg?quality=80&preferwebp=true",
      icon: <IoCodeSlash />,
    },
  ];

  return (
    <div className="w-full bg-white">
      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
        <h1 className="text-blue-600 font-medium text-lg text-center ">
          INDUSTRIES WE SERVE
        </h1>
        <h1 className="text-4xl font-bold text-center mt-3 text-black">
          Bespoke Solutions for Your Industry's Needs
        </h1>
        <p className="text-lg text-center mb-10 mt-4 text-black">
          Explore our bespoke solutions, thoughtfully designed to address the
          unique challenges and requirements of diverse industries.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[2px]">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="h-full overflow-hidden shadow-lg flex flex-col relative group"
          >
            <img
              className="w-full h-full group-hover:bg-opacity-50"
              src={card.image}
              alt={card.title}
            />
            <div className="absolute inset-0 bg-gray-900 bg-opacity-25 group-hover:bg-opacity-50 transition duration-300"></div>
            <div className="absolute top-64 left-2 text-lg font-bold flex items-center gap-2 text-blue-600  transition-transform duration-500 group-hover:translate-y-[-110px]">
              <MdOutlineHorizontalRule className="text-6xl" />
            </div>

            <div className="absolute top-64 left-4 text-lg font-bold flex items-center gap-2 text-white transition-transform duration-500 group-hover:translate-y-[-70px]">
              {card.title}
            </div>

            <div className="absolute bottom-[-50px] left-4 text-sm flex items-center font-semibold gap-2 text-white transition-transform duration-500 group-hover:translate-y-[-110px]">
              {card.description}
            </div>

            <div className="absolute bottom-[-60px] left-4 text-lg flex items-center gap-2 text-blue-600  transition-transform duration-500 group-hover:translate-y-[-80px]">
              Learn More <FaArrowCircleRight className="text-sm" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default home7;
