import React from 'react'
import { IoMdMail } from "react-icons/io";

const Home11 = () => {
    return (
        <div className="bg-black text-white py-16 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div>
              <h2 className="text-blue-400 uppercase text-sm font-bold mb-4">
                Contact Us
              </h2>
              <h1 className="text-2xl md:text-4xl font-bold leading-snug mb-4">
                Get Customized Solutions, Recommendations, and Estimates for Your
                Requirements.
              </h1>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✔</span> 100%
                  Confidential
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✔</span> We sign NDA
                </li>
              </ul>
              <hr className="my-6 border-gray-700" />
              <p className=" flex text-sm gap-2">
                <span ><IoMdMail  className=' text-xl'/></span>
                <a
                  href="mailto:office@dotsquares.com"
                  className="text-blue-500 text-[16px] "
                >
                  info@dakshinfo.com
                </a>
              </p>
            </div>
    
            
            <div>
              <h3 className="text-white mb-4 text-[20px]">
                Fill out the form and we will contact you
              </h3>
              <form className="space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Your Name *"
                    className="text-sm p-2 text-smp-2 w-full rounded-[5px] border bg-white text-black focus:outline-none focus:ring focus:ring-blue-400"
                  />
                  <input
                    type="email"
                    placeholder="Email Address *"
                    className=" text-sm p-2 w-full rounded border border-gray-700 bg-white text-black focus:outline-none focus:ring focus:ring-blue-400"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Phone Number *"
                    className=" text-sm p-2 w-full rounded border border-gray-700 bg-white text-black focus:outline-none focus:ring focus:ring-blue-400"
                  />
                  <input
                    type="text"
                    placeholder="Company"
                    className=" text-sm p-2 w-full rounded border border-gray-700 bg-white text-black focus:outline-none focus:ring focus:ring-blue-400"
                  />
                </div>
                <textarea
                  placeholder="Message *"
                  rows="4"
                  className=" text-sm p-3 w-full rounded border border-gray-700 bg-white text-black focus:outline-none focus:ring focus:ring-blue-400"
                ></textarea>
                <div className="flex items-center">
                  <input type="checkbox" id="recaptcha" className="mr-2" />
                  <label htmlFor="recaptcha" className="text-sm text-gray-400">
                    I'm not a robot
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-blue-400 hover:bg-blue-600 text-white font-bold rounded"
                >
                  Book A Free Consultation
                </button>
              </form>
            </div>
          </div>
        </div>
      );
}

export default Home11