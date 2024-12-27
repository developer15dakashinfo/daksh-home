// import React, { useState, useEffect } from "react";

// const testimonials = [
//   {
//     description:
//       "DakshInfo Soft Solutions delivered a high-quality software solution for our business. Their team was professional, responsive, and always on time. We couldn’t have asked for a better partner for our digital transformation journey.",
//     name: "Tiago Blauth",
//     location: "Porto Alegre, Brazil",
//     avatar:
//       "https://media.gettyimages.com/id/1317804578/photo/one-businesswoman-headshot-smiling-at-the-camera.jpg?s=612x612&w=gi&k=20&c=tFkDOWmEyqXQmUHNxkuR5TsmRVLi5VZXYm3mVsjee0E=",
//   },
//   {
//     description:
//       "The team at DakshInfo exceeded our expectations. From understanding our requirements to executing the project with precision, they were fantastic every step of the way.",
//     name: "Jitesh Assudani",
//     location: "Dubai, United Arab Emirates",
//     avatar:
//       "https://media.gettyimages.com/id/1317804578/photo/one-businesswoman-headshot-smiling-at-the-camera.jpg?s=612x612&w=gi&k=20&c=tFkDOWmEyqXQmUHNxkuR5TsmRVLi5VZXYm3mVsjee0E=",
//   },
//   {
//     description:
//       "DakshInfo Soft Solutions transformed our website into a modern, user-friendly platform. We’ve seen an increase in traffic and conversions since the redesign.",
//     name: "Mohit Ubana",
//     location: "Ajmer, India",
//     avatar:
//       "https://media.gettyimages.com/id/1317804578/photo/one-businesswoman-headshot-smiling-at-the-camera.jpg?s=612x612&w=gi&k=20&c=tFkDOWmEyqXQmUHNxkuR5TsmRVLi5VZXYm3mVsjee0E=",
//   },
//   {
//     description:
//       "DakshInfo Soft Solutions transformed our website into a modern, user-friendly platform. We’ve seen an increase in traffic and conversions since the redesign.",
//     name: "Mohit Ubana",
//     location: "Ajmer, India",
//     avatar:
//       "https://media.gettyimages.com/id/1317804578/photo/one-businesswoman-headshot-smiling-at-the-camera.jpg?s=612x612&w=gi&k=20&c=tFkDOWmEyqXQmUHNxkuR5TsmRVLi5VZXYm3mVsjee0E=",
//   },
//   {
//     description:
//       "DakshInfo Soft Solutions transformed our website into a modern, user-friendly platform. We’ve seen an increase in traffic and conversions since the redesign.",
//     name: "Mohit sharama",
//     location: "Ajmer, India",
//     avatar:
//       "https://media.gettyimages.com/id/1317804578/photo/one-businesswoman-headshot-smiling-at-the-camera.jpg?s=612x612&w=gi&k=20&c=tFkDOWmEyqXQmUHNxkuR5TsmRVLi5VZXYm3mVsjee0E=",
//   },
// ];

// const groupTestimonials = (testimonials, groupSize) => {
//   const groups = [];
//   for (let i = 0; i < testimonials.length; i += groupSize) {
//     groups.push(testimonials.slice(i, i + groupSize));
//   }
//   return groups;
// };

// const TestimonialSlider = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const groupedTestimonials = groupTestimonials(testimonials, 3);

//   const nextSlide = () => {
//     setCurrentIndex(
//       (prevIndex) => (prevIndex + 1) % groupedTestimonials.length
//     );
//   };

//   const prevSlide = () => {
//     setCurrentIndex(
//       (prevIndex) =>
//         (prevIndex - 1 + groupedTestimonials.length) %
//         groupedTestimonials.length
//     );
//   };

//   useEffect(() => {
//     const timer = setInterval(nextSlide, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className="w-full bg-white pb-20">
//       <div className="max-w-screen-xl mx-auto p-5 sm:p-8 md:p-10">
//         <h1 className=" text-blue-400 font-medium text-lg text-center">
//           TESTIMONIAL
//         </h1>
//         <h1 className="text-4xl font-bold text-center mt-3 text-black">
//           What Saying Our Customers
//         </h1>
//         <p className="text-lg text-center mt-4 text-black">
//           Be inspired by our clients' journeys as we overcome challenges and
//           achieve success together.
//         </p>
//       </div>
//       <div className="relative w-full max-w-6xl mx-auto p-6 overflow-hidden h-80">
//         <div
//           className="flex transition-transform duration-1000 h-full"
//           style={{
//             transform: `translateX(-${currentIndex * 100}%)`,
//           }}
//         >
//           {groupedTestimonials.map((group, index) => (
//             <div
//               key={index}
//               className="min-w-full grid grid-cols-3 gap-3 h-full"
//             >
//               {group.map((testimonial, i) => (
//                 <div
//                   key={i}
//                   className="p-4 border rounded-lg shadow-md h-full flex flex-col justify-between"
//                 >
//                   <img
//                     src="https://oxygentogo.com/wp-content/uploads/2017/05/blockquote.png"
//                     alt="Quote"
//                     height={40}
//                     width={40}
//                     className="mb-3"
//                   />
//                   <p className="text-sm text-gray-600 flex-grow">
//                     {testimonial.description}
//                   </p>
//                   <div className="flex items-center ">
//                     <img
//                       src={testimonial.avatar}
//                       alt={testimonial.name}
//                       className="w-10 h-8 rounded-full mr-4"
//                     />
//                     <div>
//                       <h4 className="font-bold text-gray-800 text-sm">
//                         {testimonial.name}
//                       </h4>
//                       <p className="text-xs text-gray-500">
//                         {testimonial.location}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ))}
//         </div>

//         <button
//           onClick={prevSlide}
//           className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-blue-400 text-white p-2 rounded-full hover:bg-gray-600"
//         >
//           ❮
//         </button>
//         <button
//           onClick={nextSlide}
//           className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-blue-400 text-white p-2 rounded-full hover:bg-gray-600"
//         >
//           ❯
//         </button>

//         <div className="absolute bottom-1 left-0 right-0 flex justify-center space-x-2">
//           {groupedTestimonials.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentIndex(index)}
//               className={`w-3 h-3 rounded-full ${
//                 index === currentIndex
//                   ? "bg-blue-400"
//                   : "bg-gray-400 hover:bg-gray-600"
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );  
// };

// export default TestimonialSlider;


import React, { useState, useEffect } from "react";

const testimonials = [
  {
    description:
      "DakshInfo Soft Solutions delivered a high-quality software solution for our business. Their team was professional, responsive, and always on time. We couldn’t have asked for a better partner for our digital transformation journey.",
    name: "Tiago Blauth",
    location: "Porto Alegre, Brazil",
    avatar:
      "https://media.gettyimages.com/id/1317804578/photo/one-businesswoman-headshot-smiling-at-the-camera.jpg?s=612x612&w=gi&k=20&c=tFkDOWmEyqXQmUHNxkuR5TsmRVLi5VZXYm3mVsjee0E=",
  },
  {
    description:
      "The team at DakshInfo exceeded our expectations. From understanding our requirements to executing the project with precision, they were fantastic every step of the way.",
    name: "Jitesh Assudani",
    location: "Dubai, United Arab Emirates",
    avatar:
      "https://media.gettyimages.com/id/1317804578/photo/one-businesswoman-headshot-smiling-at-the-camera.jpg?s=612x612&w=gi&k=20&c=tFkDOWmEyqXQmUHNxkuR5TsmRVLi5VZXYm3mVsjee0E=",
  },
  {
    description:
      "DakshInfo Soft Solutions transformed our website into a modern, user-friendly platform. We’ve seen an increase in traffic and conversions since the redesign.",
    name: "Mohit Ubana",
    location: "Ajmer, India",
    avatar:
      "https://media.gettyimages.com/id/1317804578/photo/one-businesswoman-headshot-smiling-at-the-camera.jpg?s=612x612&w=gi&k=20&c=tFkDOWmEyqXQmUHNxkuR5TsmRVLi5VZXYm3mVsjee0E=",
  },
  {
    description:
      "DakshInfo Soft Solutions transformed our website into a modern, user-friendly platform. We’ve seen an increase in traffic and conversions since the redesign.",
    name: "Mohit Ubana",
    location: "Ajmer, India",
    avatar:
      "https://media.gettyimages.com/id/1317804578/photo/one-businesswoman-headshot-smiling-at-the-camera.jpg?s=612x612&w=gi&k=20&c=tFkDOWmEyqXQmUHNxkuR5TsmRVLi5VZXYm3mVsjee0E=",
  },
  {
    description:
      "DakshInfo Soft Solutions transformed our website into a modern, user-friendly platform. We’ve seen an increase in traffic and conversions since the redesign.",
    name: "Mohit sharama",
    location: "Ajmer, India",
    avatar:
      "https://media.gettyimages.com/id/1317804578/photo/one-businesswoman-headshot-smiling-at-the-camera.jpg?s=612x612&w=gi&k=20&c=tFkDOWmEyqXQmUHNxkuR5TsmRVLi5VZXYm3mVsjee0E=",
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1) % Math.ceil(testimonials.length / 3)
    );
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + Math.ceil(testimonials.length / 3)) %
        Math.ceil(testimonials.length / 3)
    );
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    // <div className="w-full bg-white pb-20">
    //   <div className="max-w-screen-xl mx-auto p-5 sm:p-8 md:p-10">
    //     <h1 className=" text-blue-400 font-medium text-lg text-center">
    //       TESTIMONIAL
    //     </h1>
    //     <h1 className="text-4xl font-bold text-center mt-3 text-black">
    //       What Saying Our Customers
    //     </h1>
    //     <p className="text-lg text-center mt-4 text-black">
    //       Be inspired by our clients' journeys as we overcome challenges and
    //       achieve success together.
    //     </p>
    //   </div>
    //   <div className="relative w-full max-w-6xl mx-auto p-6 overflow-hidden h-80">
    //     <div
    //       className="flex transition-transform duration-1000 h-full gap-[8px]"
    //       style={{
    //         transform: `translateX(-${currentIndex * 33.33}%)`,
    //       }}
    //     >
    //       {testimonials.map((testimonial, index) => (
    //         <div
    //           key={index}
    //           className="min-w-[33.33%] flex items-start text-left justify-center p-4 border rounded-lg shadow-md h-full "
    //         >
    //           <div className="flex flex-col items-center justify-center text-center">
    //             <img
    //               src="https://oxygentogo.com/wp-content/uploads/2017/05/blockquote.png"
    //               alt="Quote"
    //               height={40}
    //               width={40}
    //               className="mb-3"
    //             />
    //             <p className="text-sm text-gray-600">{testimonial.description}</p>
    //             <div className="flex items-center justify-center mt-4">
    //               <img                    src={testimonial.avatar}
    //                 alt={testimonial.name}
    //                 className="w-12 h-12 rounded-full mr-4"
    //               />
    //               <div>
    //                 <h4 className="font-bold text-gray-800 text-sm">
    //                   {testimonial.name}
    //                 </h4>
    //                 <p className="text-xs text-gray-500">
    //                   {testimonial.location}
    //                 </p>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       ))}
    //     </div>

    //     <button
    //       onClick={prevSlide}
    //       className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-blue-400 text-white p-2 rounded-full hover:bg-gray-600"
    //     >
    //       ❮
    //     </button>
    //     <button
    //       onClick={nextSlide}
    //       className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-blue-400 text-white p-2 rounded-full hover:bg-gray-600"
    //     >
    //       ❯
    //     </button>

    //     <div className="absolute bottom-1 left-0 right-0 flex justify-center space-x-2">
    //       {Array.from({ length: Math.ceil(testimonials.length / 3) }).map(
    //         (_, index) => (
    //           <button
    //             key={index}
    //             onClick={() => setCurrentIndex(index)}
    //             className={`w-3 h-3 rounded-full ${
    //               index === currentIndex
    //                 ? "bg-blue-400"
    //                 : "bg-gray-400 hover:bg-gray-600"
    //             }`}
    //           />
    //         )
    //       )}
    //     </div>
    //   </div>
    // </div>

    <div className="w-full bg-white pb-20">
  <div className="max-w-screen-xl mx-auto p-5 sm:p-8 md:p-10">
    <h1 className="text-blue-400 font-medium text-lg text-center">
      TESTIMONIAL
    </h1>
    <h1 className="text-2xl md:text-4xl font-bold text-center mt-3 text-black">
      What Saying Our Customers
    </h1>
    <p className="text-base md:text-lg text-center mt-4 text-black">
      Be inspired by our clients' journeys as we overcome challenges and
      achieve success together.
    </p>
  </div>
  <div className="relative w-full max-w-6xl mx-auto p-4 md:p-6 overflow-hidden h-96 md:h-80">
    <div
      className="flex transition-transform duration-1000 h-full gap-2 md:gap-[8px]"
      style={{
        transform: `translateX(-${currentIndex * 100 / 3}%)`,
      }}
    >
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className="min-w-[100%] md:min-w-[33.33%] flex items-start text-left justify-center p-4 border rounded-lg shadow-md h-full"
        >
          <div className="flex flex-col items-center justify-center text-center">
            <img
              src="https://oxygentogo.com/wp-content/uploads/2017/05/blockquote.png"
              alt="Quote"
              height={40}
              width={40}
              className="mb-3"
            />
            <p className="text-sm text-gray-600">{testimonial.description}</p>
            <div className="flex items-center justify-center mt-4">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h4 className="font-bold text-gray-800 text-sm">
                  {testimonial.name}
                </h4>
                <p className="text-xs text-gray-500">{testimonial.location}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>

    <button
      onClick={prevSlide}
      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-blue-400 text-white p-2 rounded-full hover:bg-gray-600"
    >
      ❮
    </button>
    <button
      onClick={nextSlide}
      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-blue-400 text-white p-2 rounded-full hover:bg-gray-600"
    >
      ❯
    </button>

    <div className="absolute bottom-1 left-0 right-0 flex justify-center space-x-2">
  {Array.from({
    length: Math.ceil(testimonials.length / (window.innerWidth < 768 ? 1 : 3)),
  }).map((_, index) => (
    <button
      key={index}
      onClick={() => setCurrentIndex(index)}
      className={`w-3 h-3 rounded-full ${
        index === currentIndex
          ? "bg-blue-400"
          : "bg-gray-400 hover:bg-gray-600"
      }`}
    />
  ))}
</div>

  </div>
</div>


  );
};

export default TestimonialSlider;
