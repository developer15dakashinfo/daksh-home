import React, { useEffect } from "react";
import Glide from "@glidejs/glide";

export default function Home2() {
  useEffect(() => {
    const slider = new Glide(".glide-09", {
      type: "carousel",
      autoplay: 1,
      animationDuration: 18500,
      animationTimingFunc: "linear",
      perView: 9,
      classes: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
      breakpoints: {
        1024: {
          perView: 2,
        },
        640: {
          perView: 1,
          gap: 36,
        },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <>
      <div className="flex justify-center pb-10 ">
      <h1 className="text-2xl sm:text-3xl font-bold text-center mt-6 sm:mt-20 flex flex-wrap justify-center">
      Partnered with Startups and
      <span className="text-blue-400 px-2">Fortune 500</span> Companies!
    </h1>
      </div>
      <div className="glide-09 relative w-full overflow-hidden">
        {/* <!-- Slides --> */}
        <div data-glide-el="track">
          <ul className="whitespace-no-wrap gap-4 flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
            <li className="border rounded-4 p-0">
              <img
                src="https://Tailwindmix.b-cdn.net/carousel/logos/carousel-logo-image-1.svg"
                className="m-auto h-20 max-h-full w-auto max-w-full"
              />
            </li>
            <li className="border rounded-4 p-0">
              <img
                src="https://Tailwindmix.b-cdn.net/carousel/logos/carousel-logo-image-2.svg"
                className="m-auto h-20 max-h-full w-auto max-w-full"
              />
            </li>
            <li className="border rounded-4 p-0">
              <img
                src="https://Tailwindmix.b-cdn.net/carousel/logos/carousel-logo-image-3.svg"
                className="m-auto h-20 max-h-full w-auto max-w-full"
              />
            </li>
            <li className="border rounded-4 p-0">
              <img
                src="https://Tailwindmix.b-cdn.net/carousel/logos/carousel-logo-image-4.svg"
                className="m-auto h-20 max-h-full w-auto max-w-full"
              />
            </li>
            <li className="border rounded-4 p-0">
              <img
                src="https://Tailwindmix.b-cdn.net/carousel/logos/carousel-logo-image-5.svg"
                className="m-auto h-20 max-h-full w-auto max-w-full"
              />
            </li>
            <li className="border rounded-4 p-0">
              <img
                src="https://Tailwindmix.b-cdn.net/carousel/logos/carousel-logo-image-6.svg"
                className="m-auto h-20 max-h-full w-auto max-w-full"
              />
            </li>
          </ul>
        </div>
      </div>
      {/*<!-- End Testimonial carousel --> */}
    </>
  );
}
