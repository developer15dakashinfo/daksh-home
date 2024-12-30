import React from "react";
import { FaArrowCircleRight, FaFileCode } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { GrCloudSoftware } from "react-icons/gr";
import { IoCodeSlash } from "react-icons/io5";
import { MdCall } from "react-icons/md";

function Home3() {
  const cards = [
    {
      title: "Mobile App Development",
      description:
        "Apps are redefining the way we interact with services and empowering businesses to engage with their customers.",
      image:
        "https://media.istockphoto.com/id/1080277602/photo/these-night-owls-always-work-with-dedication.jpg?s=612x612&w=0&k=20&c=X4BC-h84Aeo_1crQz4JUUbQcd8j-vKWih22Pplh8q-8=",
      icon: <FaFileCode />,
    },
 
    {
        title: "Web Designing",
        description:
          "To make your business stand apart, we provide UX/UI design for web & mobile app that looks appealing and interactive.",
        image:
          "https://media.istockphoto.com/id/1316264191/photo/pensive-man-working-on-laptop-in-office.jpg?s=612x612&w=0&k=20&c=dEU-KCRLPYo3a51Vw6RS8o37155TQw16CV1oIPnhxf8=",
        icon: <FaFileCode />,
      },
      {
        title: "E-Commerce Solutions",
        description:
          "eCommerce web development has indeed become a necessity instead of a means to drive greater traffic.",
        image:
          "https://media.istockphoto.com/id/1441388340/photo/team-of-happy-colleagues-working-on-a-computer-late-in-the-office.jpg?s=612x612&w=0&k=20&c=V4-UlwtK_1w0wl2ti3WH7uhcBWuj_6E2veIJf_Of-wM=",
        icon: <GrCloudSoftware />,
      },
      {
        title: "Voice Call",
        description:
          "Make your impact more than words, send pre-recorded messages in your voice and make it more reachable to your valuable profits.",
        image:
        "https://i.pinimg.com/736x/46/16/ec/4616ec7634cf3cb3b361dcc59c8fd607.jpg"
          ,
        icon: <MdCall />,
      },
      {
        title: "Bulk SMS",
        description:
          "Bulk SMS in India | Bulk SMS Service Provider India - Short Message Service or simply the SMS is a revolution of mobile phone industry.",
        image:
          "https://img.freepik.com/premium-photo/serious-woman-night-business-laptop-planning-research-strategy-dark-startup-office-female-working-overtime-computer-technology-online-website-network-table-analytics_590464-132782.jpg",
        icon: <FaFileCode />,
      },
      {
        title: "SEO Services",
        description:
          "We provide Search Engine Optimization (SEO) services to boost your online presence and connect with more customers.",
        image:
"https://img.freepik.com/premium-photo/wooden-desk-modern-home-office-night-serves-as-platform-displaying-product-des_410516-89963.jpg",
        icon: <GrCloudSoftware />,
      },
 
    // Add more cards here
  ];

  return (
   
      <div className="max-w-screen-xl mx-auto p-5 sm:p-6 md:p-16">
      <h1 className="text-blue-600 text-lg text-center sm:text-xl md:text-4xl">
      Services
        </h1>
        <h1 className="text-4xl font-bold text-center mt-3">
        Bridging Innovation & Excellence <br/> with Modern Tech Solutions
        </h1>
        <h1 className="text-lg  text-center mb-10 mt-4 ">
        We develop cutting-edge solutions and transform existing ones through collaborative development that prioritises your success.
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
          {cards.map((card, index) => (
            <div
              key={index}
              className=" overflow-hidden shadow-lg flex flex-col relative group"
            >
              <img className="w-full group-hover:blur-sm" src={card.image} alt={card.title} />
              <div className="absolute inset-0 bg-gray-900 bg-opacity-25 group-hover:bg-opacity-50 transition duration-300"></div>
              <div className="absolute top-20 left-4 text-lg font-bold flex items-center gap-2 text-white transition-transform duration-500 group-hover:-translate-y-6">
                {card.icon} {card.title}
              </div>
              <div className="absolute top-28 left-4 text-sm font-semibold text-white transition-transform duration-500 group-hover:-translate-y-6">
                {card.description}
              </div>
              <div className="absolute bottom-[-30px] left-4 text-lg flex items-center gap-2 text-blue-600 transition-transform duration-500 group-hover:translate-y-[-50px]">
                Learn More <FaArrowCircleRight className="text-sm" />
              </div>
            </div>
          ))}
        </div>
        <div className=" text-white py-5">
        <div className="container border-2 bg-black border-gray-800 mx-auto py-10 flex flex-col md:flex-row justify-around rounded-xl items-center gap-x-6 gap-y-8">
          <div className=" text-start  md:text-left">
            <h2 className="text-3xl font-semibold mb- text-white">From Code to Success</h2>
            <p className="text-base text-white">We Build More Than Software.</p>
          </div>
          <div className=" flex justify-center">
            <button type="button" className="border-2 border-blue-900 hover:bg-blue-900 hover:text-white text-blue-600 flex items-center gap-3  py-3 px-6 font-bold rounded">
            Discuss Your Requirement! <FaArrowRightLong />
            </button>
          </div>
        </div>
      </div>
      </div>

    
   
  );
}

export default Home3;
