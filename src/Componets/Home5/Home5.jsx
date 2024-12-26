import React, { useEffect } from "react";
import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";
import { FaLongArrowAltRight } from "react-icons/fa";

const Home5 = ({ id, image }) => {
  useEffect(() => {
    const slider1 = new Glide(".glide-home5", {
      type: "carousel",
      autoplay: 2000, 
      animationDuration: 12500, 
      animationTimingFunc: "ease-in-out", 
      hoverpause: false,
      perView: 9,
      breakpoints: {
        1024: { perView: 2 },
        640: { perView: 1, gap: 36 },
      },
    }).mount();
  
    return () => {
      slider1.destroy();
    };
  }, []);
  
  useEffect(() => {
    const slider2 = new Glide(".glide-home6", {
      type: "carousel",
      autoplay: 2000,
      animationDuration: 12500,
      animationTimingFunc: "ease-in-out",
      hoverpause: false,
      direction: "rtl",
      perView: 9,
      breakpoints: {
        1024: { perView: 2 },
        640: { perView: 1, gap: 36 },
      },
    }).mount();
  
    return () => {
      slider2.destroy();
    };
  }, []);
  
  useEffect(() => {
    const slider3 = new Glide(".glide-home7", {
      type: "carousel",
      autoplay: 2000,
      animationDuration: 12500,
      animationTimingFunc: "ease-in-out",
      hoverpause: false,
      perView: 9,
      breakpoints: {
        1024: { perView: 2 },
        640: { perView: 1, gap: 36 },
      },
    }).mount();
  
    return () => {
      slider3.destroy();
    };
  }, []);
  

    


  return (
    <div className="w-full bg-black">
      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 ">
        <h1 className="text-orange-500 font- text-lg text-center">
          TECHNOLOGIES
        </h1>
        <h1 className="text-4xl font-bold text-center mt-3 text-white">
          Our Technology Stack and Platforms
        </h1>
        <h1 className="text-lg text-center mb-10 mt-4 text-white">
          Over 1,000 experts with 22+ years of experience in over 50
          cutting-edge technologies
        </h1>
      </div>

   
      <div className="glide-home5 relative w-full overflow-hidden ">
        <div data-glide-el="track">
          <ul className="flex gap-6  ">
           
            <li className="border-2 border-gray-300 text-white rounded-[10px]  px-6 bg-white "><img src="https://Tailwindmix.b-cdn.net/carousel/logos/carousel-logo-image-1.svg" className="m-auto h-20" /></li>
            <li className="border-2 border-gray-300 text-white rounded-[10px]  px-6 bg-white"><img src="https://Tailwindmix.b-cdn.net/carousel/logos/carousel-logo-image-2.svg" className="m-auto h-20" /></li>
            <li className="border-2 border-gray-300 text-white rounded-[10px]  px-6 bg-white"><img src="https://Tailwindmix.b-cdn.net/carousel/logos/carousel-logo-image-2.svg" className="m-auto h-20" /></li>
            <li className="border-2 border-gray-300 text-white rounded-[10px]  px-6 bg-white"><img src="https://Tailwindmix.b-cdn.net/carousel/logos/carousel-logo-image-2.svg" className="m-auto h-20" /></li>
          </ul>
        </div>
      </div>

     
      <div className="glide-home6 relative w-full overflow-hidden">
        <div data-glide-el="track">
          <ul className="flex gap-6">
           
            <li className="border-2 border-gray-300 text-white rounded-[10px]  px-6 bg-white"><img src="https://Tailwindmix.b-cdn.net/carousel/logos/carousel-logo-image-3.svg" className="m-auto h-20" /></li>
            <li className="border-2 border-gray-300 text-white rounded-[10px]  px-6 bg-white"><img src="https://Tailwindmix.b-cdn.net/carousel/logos/carousel-logo-image-4.svg" className="m-auto h-20" /></li>
            <li className="border-2 border-gray-300 text-white rounded-[10px]  px-6 bg-white"><img src="https://Tailwindmix.b-cdn.net/carousel/logos/carousel-logo-image-2.svg" className="m-auto h-20" /></li>
            <li className="border-2 border-gray-300 text-white rounded-[10px]  px-6 bg-white"><img src="https://Tailwindmix.b-cdn.net/carousel/logos/carousel-logo-image-2.svg" className="m-auto h-20" /></li>
          </ul>
        </div>
      </div>

      
      <div className="glide-home7 relative w-full overflow-hidden">
        <div data-glide-el="track">
          <ul className="flex gap-6">
            
            <li className="border-2 border-gray-300 text-white rounded-[10px]  px-6 bg-white"><img src="https://Tailwindmix.b-cdn.net/carousel/logos/carousel-logo-image-5.svg" className="m-auto h-20" /></li>
            <li className="border-2 border-gray-300 text-white rounded-[10px]  px-6 bg-white"><img src="https://Tailwindmix.b-cdn.net/carousel/logos/carousel-logo-image-6.svg" className="m-auto h-20" /></li>
            <li className="border-2 border-gray-300 text-white rounded-[10px]  px-6 bg-white"><img src="https://Tailwindmix.b-cdn.net/carousel/logos/carousel-logo-image-2.svg" className="m-auto h-20" /></li>
            <li className="border-2 border-gray-300 text-white rounded-[10px]  px-6 bg-white"><img src="https://Tailwindmix.b-cdn.net/carousel/logos/carousel-logo-image-2.svg" className="m-auto h-20" /></li>
          </ul>
        </div>
      </div>

      <div className="mt-12 items-center justify-center text-center pb-12">
          <button className="border border-white text-white text-lg sm:text-xl py-3 px-8 sm:px-8 rounded-lg font-semibold hover:bg-orange-600 transition">
          Book a FREE Consultation  → 
          </button>
        </div>

    </div>
  );
};

export default Home5;
