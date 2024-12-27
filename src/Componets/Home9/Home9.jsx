import React from "react";
import { FaFileCode, FaArrowCircleRight } from "react-icons/fa";

const Home9 = () => {
  const caseStudyCards = [
    {
      title: "Blended -PM from UK Office",
      description:
        "Finding Property More Efficiently: Zoho CRM Solution for Buying Agent Partnership",
        image:
        "https://ezranking.s3.eu-west-2.amazonaws.com/blog/wp-content/uploads/2021/10/07105852/website-development-process.jpg",
      logos: [
        {
          text: "UK",
          image:
            "https://static.vecteezy.com/system/resources/thumbnails/007/910/760/small_2x/united-kingdom-flag-rounded-icon-uk-flag-union-jack-vector.jpg",
        },
        {
          text: "AWS",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpAcby-ocsgUIk8iZOzX78bHVqP0KsCCoZsg&s",
        },
      ],
    
    
    },
    {
      title: "Software Development",
      description:
        "Building custom software solutions to streamline processes and drive innovation within your business.",
      image:
        "https://dreamsdesign.in/wp-content/uploads/2023/02/website-development-company-in-india.jpg",
        logos: [
            {
              text: "UK",
              image:
                "https://static.vecteezy.com/system/resources/thumbnails/007/910/760/small_2x/united-kingdom-flag-rounded-icon-uk-flag-union-jack-vector.jpg",
            },
            {
              text: "AWS",
              image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpAcby-ocsgUIk8iZOzX78bHVqP0KsCCoZsg&s",
            },
          ],
    },
    {
      title: "Web Development",
      description:
        "Creating cutting-edge websites and web applications that enhance user experience and drive engagement.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrAi504mLSXUO7_zg1Lyyo7lQLLXkt7jnzPQ&s",
        logos: [
            {
              text: "UK",
              image:
                "https://static.vecteezy.com/system/resources/thumbnails/007/910/760/small_2x/united-kingdom-flag-rounded-icon-uk-flag-union-jack-vector.jpg",
            },
            {
              text: "AWS",
              image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpAcby-ocsgUIk8iZOzX78bHVqP0KsCCoZsg&s",
            },
          ],
    },
    {
      title: "App Development",
      description:
        "Transforming client needs into software solutions that leverage the latest technologies for exceptional performance and functionality.",
      image:
        "https://riseuplabs.com/wp-content/uploads/2021/07/mobile-application-development-guidelines-riseuplabs.jpg",
        logos: [
            {
              text: "UK",
              image:
                "https://static.vecteezy.com/system/resources/thumbnails/007/910/760/small_2x/united-kingdom-flag-rounded-icon-uk-flag-union-jack-vector.jpg",
            },
            {
              text: "AWS",
              image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpAcby-ocsgUIk8iZOzX78bHVqP0KsCCoZsg&s",
            },
          ],
    },
    {
      title: "Software Development",
      description:
        "Building custom software solutions to streamline processes and drive innovation within your business.",
      image:
        "https://bairesdev.mo.cloudinary.net/blog/2023/09/How-Many-Web-Developers-in-the-World-1.jpg?tx=w_1920,q_auto",
        logos: [
            {
              text: "UK",
              image:
                "https://static.vecteezy.com/system/resources/thumbnails/007/910/760/small_2x/united-kingdom-flag-rounded-icon-uk-flag-union-jack-vector.jpg",
            },
            {
              text: "AWS",
              image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpAcby-ocsgUIk8iZOzX78bHVqP0KsCCoZsg&s",
            },
          ],
    },
    {
      title: "Web Development",
      description:
        "Creating cutting-edge websites and web applications that enhance user experience and drive engagement.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrAi504mLSXUO7_zg1Lyyo7lQLLXkt7jnzPQ&s",
        logos: [
            {
              text: "UK",
              image:
                "https://static.vecteezy.com/system/resources/thumbnails/007/910/760/small_2x/united-kingdom-flag-rounded-icon-uk-flag-union-jack-vector.jpg",
            },
            {
              text: "AWS",
              image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpAcby-ocsgUIk8iZOzX78bHVqP0KsCCoZsg&s",
            },
          ],
    },
  ];

  return (
    // <div className="w-full bg-black pb-20">
    //   <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
    //     <h1 className="text-orange-500 font-medium text-lg text-center">
    //       CASE STUDIES
    //     </h1>
    //     <h1 className="text-4xl font-bold text-center mt-3 text-white">
    //       Read Our Client Success Stories
    //     </h1>
    //     <p className="text-lg text-center mt-4 text-white">
    //       Grow your business with a team that wants to see you win
    //     </p>
    //   </div>

    //   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-40">
    //     {caseStudyCards.map((card, index) => (
    //       <div
    //         key={index}
    //         className="rounded-lg overflow-hidden flex flex-col relative bg-gradient-to-r from-indigo-500 "
    //       >
    //         <img
    //           className="w-full h-full object-cover bg-gradient-to-r from-indigo-500"
    //           src={card.image}
    //           alt={card.title}
    //         />

    //         <div className="absolute top-6 left-4 flex items-center gap-2 text-orange-500 text-sm font-medium">
    //           {card.icon} {card.title}
    //         </div>
    //         <div className="absolute top-12 left-4 text-sm font-semibold text-white">
    //           {card.description}
    //         </div>
    //         <div className="absolute bottom-4 left-4 text-lg flex items-center gap-2 text-orange-500">

    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>

    <div className="w-full bg-black pb-20">
      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
        <h1 className="text-blue-400 font-medium text-lg text-center">
          CASE STUDIES
        </h1>
        <h1 className="text-4xl font-bold text-center mt-3 text-white">
          Read Our Client Success Stories
        </h1>
        <p className="text-lg text-center mt-4 text-white">
          Grow your business with a team that wants to see you win
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-40">
        {caseStudyCards.map((card, index) => (
          <div
            key={index}
            className="relative rounded-lg overflow-hidden flex flex-col bg-gradient-to-r from-indigo-500"
          >
            <img
              className="w-full h-52 object-cover"
              src={card.image}
              alt={card.title}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/100 via-black/70 to-gray-400 opacity-70"></div>

            <div className="absolute top-6 left-4 flex items-center gap-2 text-blue-400 text-sm font-semibold z-10">
              {card.title}
            </div>
            <div className="absolute top-12 left-4 text-sm font-semibold text-white z-10">
              {card.description}
            </div>
            {card.logos && (
              <div className="absolute bottom-4 left-4 flex items-center gap-4 z-10">
                {card.logos.map((logo, logoIndex) => (
                  <div key={logoIndex} className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full overflow-hidden border-2 border-white">
                      <img
                        className="w-full h-full object-cover"
                        src={logo.image}
                        alt={logo.text}
                      />
                    </div>
                    <span className="text-sm font-bold text-white">
                      {logo.text}
                    </span>
                  </div>
                ))}
                </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home9;
