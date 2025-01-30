// import React from 'react';

// const Portfolio = () => {
//   return (
//     <section id="portfolio" className="py-20 bg-gray-50">
//       <div className="max-w-screen-xl mx-auto px-6 md:px-12 text-center">
//         <h2 className="text-4xl font-bold mb-12">My Projects</h2>

//         {/* Grid for Projects */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
//           {/* Project 1 */}
//           <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
//             <img
//               src="https://via.placeholder.com/300"  // Replace with actual project image
//               alt="Project 1"
//               className="w-full h-48 object-cover rounded-lg mb-6"
//             />
//             <h3 className="text-2xl font-semibold mb-4">Project 1</h3>
//             <p className="text-lg text-gray-600 mb-4">Description of project 1. This project was built using React and Node.js, and showcases a clean, responsive UI with optimized performance.</p>
//             <a
//               href="/"
//               className="text-blue-500 hover:text-blue-600 font-semibold"
//             >
//               View Details
//             </a>
//           </div>

//           {/* Project 2 */}
//           <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
//             <img
//               src="https://via.placeholder.com/300"  // Replace with actual project image
//               alt="Project 2"
//               className="w-full h-48 object-cover rounded-lg mb-6"
//             />
//             <h3 className="text-2xl font-semibold mb-4">Project 2</h3>
//             <p className="text-lg text-gray-600 mb-4">Description of project 2. This project features a dynamic backend powered by Node.js, with a seamless front-end experience built in React.js.</p>
//             <a
//               href="/"
//               className="text-blue-500 hover:text-blue-600 font-semibold"
//             >
//               View Details
//             </a>
//           </div>

//           {/* Project 3 */}
//           <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
//             <img
//               src="https://via.placeholder.com/300"  // Replace with actual project image
//               alt="Project 3"
//               className="w-full h-20 object-cover rounded-lg mb-6"
//             />
//             <h3 className="text-2xl font-semibold mb-4">Project 3</h3>
//             <p className="text-lg text-gray-600 mb-4">Description of project 3. A full-stack web application with advanced features, optimized performance, and intuitive user interfaces.</p>
//             <a
//               href="/"
//               className="text-blue-500 hover:text-blue-600 font-semibold"
//             >
//               View Details
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Portfolio;

import React from "react";
import BankApp from "../Images/BankApp.png";
import ExpenseTracker from "../Images/ExpenseTracker.png";
import InvestmentCalc from "../Images/InvestmentCalculator.png";
import PigGame from "../Images/PigGame.png";
import MovieApp from "../Images/MovieApp.png";
import Portfolio_Am from "../Images/Portfolio_AboutMe.png";
import Portfolio_Img from "../Images/Portfolio_Image.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Project 1",
      image: MovieApp,
      // "https://i.pinimg.com/736x/04/c8/82/04c882a13f88beb79e5acd5917766b2d.jpg",
    },
    {
      id: 2,
      title: "Project 2",
      image: ExpenseTracker,
      // "https://i.pinimg.com/736x/04/c8/82/04c882a13f88beb79e5acd5917766b2d.jpg",
    },
    {
      id: 3,
      title: "Project 3",
      image: InvestmentCalc,
      // "https://i.pinimg.com/736x/04/c8/82/04c882a13f88beb79e5acd5917766b2d.jpg",
    },
    {
      id: 4,
      title: "Project 4",
      image: Portfolio_Img,
      // "https://i.pinimg.com/736x/04/c8/82/04c882a13f88beb79e5acd5917766b2d.jpg",
    },
    {
      id: 5,
      title: "Project 5",
      image: PigGame,
      // "https://i.pinimg.com/736x/04/c8/82/04c882a13f88beb79e5acd5917766b2d.jpg",
    },
    {
      id: 6,
      title: "Project 6",
      image: BankApp,
      // "https://i.pinimg.com/736x/04/c8/82/04c882a13f88beb79e5acd5917766b2d.jpg",
    },
    {
      id: 7,
      title: "Project 7",
      image: Portfolio_Am,
      // "https://i.pinimg.com/736x/04/c8/82/04c882a13f88beb79e5acd5917766b2d.jpg",
    },
  ];

  return (
    <section id="projects" className="py-2 bg-primary text-secondary">
      <div className="mt-8 pt-12  max-w-screen-auto min-h-screen-md mx-auto px-6 md:px-6">
        <h2 className="text-4xl font-bold mb-6 text-center">Projects</h2>

        {/* Grid Layout with Tall and Short Combinations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-primary">
          {/* Project 1 (Tall) */}
          <div className="relative overflow-hidden rounded-md shadow-lg group md:row-span-2">
            <img
              src={projects[0].image}
              alt={projects[0].title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-80"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <h3 className="text-xl sm:text-2xl font-bold">
                {projects[0].title}
              </h3>
            </div>
          </div>

          {/* Project 2 (Short) */}
          <div className="relative overflow-hidden rounded-lg shadow-lg group">
            <img
              src={projects[1].image}
              alt={projects[1].title}
              className="w-full h-[200px] sm:h-[250px] object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <h3 className="text-xl sm:text-2xl font-bold">
                {projects[1].title}
              </h3>
            </div>
          </div>

          {/* Project 3 (Short) */}
          <div className="relative overflow-hidden rounded-lg shadow-lg group">
            <img
              src={projects[2].image}
              alt={projects[2].title}
              className="w-full h-[200px] sm:h-[250px] object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <h3 className="text-xl sm:text-2xl font-bold">
                {projects[2].title}
              </h3>
            </div>
          </div>

          {/* Project 4 (Tall) */}
          <div className="relative overflow-hidden rounded-lg shadow-lg group md:row-span-2">
            <img
              src={projects[3].image}
              alt={projects[3].title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <h3 className="text-xl sm:text-2xl font-bold">
                {projects[3].title}
              </h3>
            </div>
          </div>

          {/* Project 5 (Short) */}
          <div className="relative overflow-hidden rounded-lg shadow-lg group">
            <img
              src={projects[4].image}
              alt={projects[4].title}
              className="w-full h-[200px] sm:h-[250px] object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <h3 className="text-xl sm:text-2xl font-bold">
                {projects[4].title}
              </h3>
            </div>
          </div>

          {/* Project 6 (Short) */}
          <div className="relative overflow-hidden rounded-lg shadow-lg group">
            <img
              src={projects[5].image}
              alt={projects[5].title}
              className="w-full h-[200px] sm:h-[250px] object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <h3 className="text-xl sm:text-2xl font-bold">
                {projects[5].title}
              </h3>
            </div>
          </div>

          {/* Project 7 (Short) */}
          <div className="relative overflow-hidden rounded-lg shadow-lg group">
            <img
              src={projects[6].image}
              alt={projects[6].title}
              className="w-full h-[200px] sm:h-[250px] object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <h3 className="text-xl sm:text-2xl font-bold">
                {projects[6].title}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
