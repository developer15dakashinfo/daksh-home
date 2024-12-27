import React from "react";
import { FaArrowCircleRight, FaFileCode } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { GrCloudSoftware } from "react-icons/gr";
import { IoCodeSlash } from "react-icons/io5";

function Home3() {
  const cards = [
    {
      title: "App Development",
      description:
        "Transforming client needs into software solutions that leverage the latest technologies for exceptional performance and functionality.",
      image:
        "https://www.optimalvirtualemployee.com/wp-content/uploads/2022/12/Web-Developer-skill.jpg",
      icon: <FaFileCode />,
    },
    {
      title: "Software Development",
      description:
        "Building custom software solutions to streamline processes and drive innovation within your business.",
      image:
        "https://bairesdev.mo.cloudinary.net/blog/2023/09/How-Many-Web-Developers-in-the-World-1.jpg?tx=w_1920,q_auto",
      icon: <GrCloudSoftware />,
    },
    {
      title: "Web Development",
      description:
        "Creating cutting-edge websites and web applications that enhance user experience and drive engagement.",
      image:
        "https://www.optimalvirtualemployee.com/wp-content/uploads/2022/12/Web-Developer-skill.jpg",
      icon: <IoCodeSlash />,
    },
    {
        title: "App Development",
        description:
          "Transforming client needs into software solutions that leverage the latest technologies for exceptional performance and functionality.",
        image:
          "https://www.optimalvirtualemployee.com/wp-content/uploads/2022/12/Web-Developer-skill.jpg",
        icon: <FaFileCode />,
      },
      {
        title: "Software Development",
        description:
          "Building custom software solutions to streamline processes and drive innovation within your business.",
        image:
          "https://bairesdev.mo.cloudinary.net/blog/2023/09/How-Many-Web-Developers-in-the-World-1.jpg?tx=w_1920,q_auto",
        icon: <GrCloudSoftware />,
      },
      {
        title: "Web Development",
        description:
          "Creating cutting-edge websites and web applications that enhance user experience and drive engagement.",
        image:
          "https://www.optimalvirtualemployee.com/wp-content/uploads/2022/12/Web-Developer-skill.jpg",
        icon: <IoCodeSlash />,
      },
      {
        title: "App Development",
        description:
          "Transforming client needs into software solutions that leverage the latest technologies for exceptional performance and functionality.",
        image:
          "https://www.optimalvirtualemployee.com/wp-content/uploads/2022/12/Web-Developer-skill.jpg",
        icon: <FaFileCode />,
      },
      {
        title: "Software Development",
        description:
          "Building custom software solutions to streamline processes and drive innovation within your business.",
        image:
          "https://bairesdev.mo.cloudinary.net/blog/2023/09/How-Many-Web-Developers-in-the-World-1.jpg?tx=w_1920,q_auto",
        icon: <GrCloudSoftware />,
      },
      {
        title: "Web Development",
        description:
          "Creating cutting-edge websites and web applications that enhance user experience and drive engagement.",
        image:
          "https://www.optimalvirtualemployee.com/wp-content/uploads/2022/12/Web-Developer-skill.jpg",
        icon: <IoCodeSlash />,
      },
    // Add more cards here
  ];

  return (
    <div>
      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
      <h1 className="text-blue-400 font- text-lg text-center mt-10">
      Services
        </h1>
        <h1 className="text-4xl font-bold text-center mt-3">
        Bridging Innovation & Excellence <br/> with Modern Tech Solutions
        </h1>
        <h1 className="text-lg  text-center mb-10 mt-4 ">
        We develop cutting-edge solutions and transform existing ones through collaborative development that prioritises your success.
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {cards.map((card, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden shadow-lg flex flex-col relative group"
            >
              <img className="w-full group-hover:blur-sm" src={card.image} alt={card.title} />
              <div className="absolute inset-0 bg-gray-900 bg-opacity-25 group-hover:bg-opacity-50 transition duration-300"></div>
              <div className="absolute top-20 left-4 text-lg font-bold flex items-center gap-2 text-white transition-transform duration-500 group-hover:-translate-y-6">
                {card.icon} {card.title}
              </div>
              <div className="absolute top-28 left-4 text-sm font-semibold text-white transition-transform duration-500 group-hover:-translate-y-6">
                {card.description}
              </div>
              <div className="absolute bottom-[-30px] left-4 text-lg flex items-center gap-2 text-blue-400 transition-transform duration-500 group-hover:translate-y-[-50px]">
                Learn More <FaArrowCircleRight className="text-sm" />
              </div>
            </div>
          ))}
        </div>
        <div className=" text-white py-5">
        <div className="container bg-gray-800 mx-auto py-10 flex flex-col md:flex-row justify-around rounded-xl items-center gap-x-6 gap-y-8">
          <div className=" text-start  md:text-left">
            <h2 className="text-3xl font-semibold mb-">From Code to Success</h2>
            <p className="text-base text-gray-300">We Build More Than Software.</p>
          </div>
          <div className=" flex justify-center">
            <button type="button" className="bg-blue-400 flex items-center gap-3 text-white py-3 px-6 font-bold rounded">
            Discuss Your Requirement! <FaArrowRightLong />
            </button>
          </div>
        </div>
      </div>
      </div>

    
    </div>
  );
}

export default Home3;
