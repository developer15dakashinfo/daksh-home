import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

const Home12 = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { question: "Why choose DakshInfo Soft as a IT software service provider?" },
    { question: "What different hiring models do you offer?" },
    { question: "How quickly can you start a new project?" },
    {
      question:
        "What is the process for hiring a dedicated developer and development team?",
    },
    
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white py-12">
      <div className="max-w-4xl mx-auto px-6 text-center">
      <h1 className=" text-blue-400 font-medium text-lg text-center">
          FAQ
        </h1>
        <h1 className="text-3xl font-bold text-gray-800 mt-2">
          We're here to answer all your questions.
        </h1>
        <div className="mt-8 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg bg-white shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-4 py-[11px] text-left text-gray-800 font-medium hover:bg-gray-50 focus:outline-none"
              >
                <span className="text-sm">{faq.question}</span>
                <span
                  className={`transform ${
                    openIndex === index ? "rotate-45" : ""
                  } transition-transform`}
                >
                  <FaPlus  className="text-[11px]"/>
                </span>
              </button>
              {openIndex === index && (
                <div className="px-4 pb-4 text-gray-600 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center">
            <span className="text-gray-500 text-sm mr-2">Got any more questions?</span>
          </div>
          <button className="bg-blue-400 text-white font-semibold py-2 px-6 rounded-md shadow hover:bg-orange-600 transition">
            Talk to us →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home12;
