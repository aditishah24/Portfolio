// import React, { useState } from "react";

// const Features = () => {
//   const slides = [
//     {
//       id: 1,
//       title: "Do things with love",
//       description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//       additionalInfo:
//         "Est qui eos quasi ratione nostrum excepturi id recusandae fugit omnis ullam pariatur itaque nisi voluptas impedit Quo suscipit omnis iste velit maxime.",
//       img: "https://via.placeholder.com/600x400",
//     },
//     {
//       id: 2,
//       title: "Achieve More with Ease",
//       description:
//         "Streamline your workflows and boost your productivity effortlessly.",
//       additionalInfo:
//         "Get tools that are designed to help you stay ahead and excel in what you do.",
//       img: "https://via.placeholder.com/600x400/ddd",
//     },
//     {
//       id: 3,
//       title: "Innovate for Tomorrow",
//       description:
//         "Empowering you to create and innovate with the best solutions.",
//       additionalInfo:
//         "Turn your ideas into reality with powerful tools and efficient support.",
//       img: "https://via.placeholder.com/600x400/aaa",
//     },
//   ];

//   const [currentSlide, setCurrentSlide] = useState(0);

//   const handlePrev = () => {
//     setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
//   };

//   const handleNext = () => {
//     setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
//   };

//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-6 md:px-8">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-bold text-blue-600">Our Features</h2>
//           <p className="mt-4 text-gray-500">
//             Explore the powerful features that take your business to the next level.
//           </p>
//         </div>

//         {/* Feature Section */}
//         <div className="flex flex-col md:flex-row items-center gap-8 relative">
//           {/* Image Section */}
//           <div className="md:w-1/2 relative">
//             <img
//               src={slides[currentSlide].img}
//               alt={slides[currentSlide].title}
//               className="rounded-lg shadow-lg object-cover w-full h-auto"
//             />
//           </div>

//           {/* Arrows */}
//           <div className="absolute mr-2 pr-12 inset-y-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-between gap-3">
//             <button
//               onClick={handlePrev}
//               className="bg-blue-600 mr-1 text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg hover:bg-blue-700 transition duration-200"
//             >
//               &#8249;
//             </button>
//             <button
//               onClick={handleNext}
//               className="bg-blue-600 text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg hover:bg-blue-700 transition duration-200"
//             >
//               &#8250;
//             </button>
//           </div>

//           {/* Text Section */}
//           <div className="ml-4 pl-6 md:w-1/2 text-center md:text-left">
//             <h3 className="text-2xl font-bold text-blue-600">
//               {slides[currentSlide].title}
//             </h3>
//             <p className="mt-4 text-gray-600">{slides[currentSlide].description}</p>
//             <p className="mt-2 text-gray-600">{slides[currentSlide].additionalInfo}</p>
//             <button className="mt-6 px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md transition duration-200">
//               Learn More
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Features;
