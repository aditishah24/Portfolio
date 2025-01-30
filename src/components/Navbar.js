// import React from 'react';

// const Navbar = () => {
//   return (
//     <nav className="bg-white-800 text-white shadow-md fixed top-0 left-0 w-full z-50">
//       <div className="max-w-screen-xl mx-auto px-6 py-4 flex justify-between items-center">
//         <div className="text-2xl font-bold">My Portfolio</div>
//         <ul className="flex space-x-6">
//           <li><a href="#home" className="hover:text-white-400">Home</a></li>
//           <li><a href="#about" className="hover:text-white-400">About</a></li>
//           <li><a href="#portfolio" className="hover:text-white-400">Portfolio</a></li>
//           <li><a href="#contact" className="hover:text-white-400">Contact</a></li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 shadow-md text-primary bg-secondary">
      <div className="max-w-screen-xl mx-auto px-8 py-6 flex justify-between items-center">
        {/* Portfolio on the left */}
        <div className="text-2xl mr-2font-bold cursor-pointer">
          <a href="#portfolio">Portfolio</a>
        </div>

        {/* Centered menu items */}
        <ul className="hidden md:flex space-x-8 flex-end">
          <li>
            <a
              href="#home"
              className="hover:underline text-primary font-semibold"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:underline text-primary font-semibold"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:underline text-primary font-semibold"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="hover:underline text-primary font-semibold"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#blog"
              className="hover:underline text-primary font-semibold"
            >
              Blogs
            </a>
          </li>
          {/* <li>
            <a href="#features" className="hover:underline text-primary font-semibold">
              Features
            </a>
          </li> */}
          <li>
            <a
              href="#contact"
              className="hover:underline text-primary font-semibold"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white-800 focus:outline-none"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white text-white-800 py-4 px-6">
          <ul className="flex flex-col space-y-4">
            <li>
              <a
                href="#home"
                className="hover:underline text-primary font-semibold"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:underline text-primary font-semibold"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:underline text-primary font-semibold"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="hover:underline text-primary font-semibold"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#blog"
                className="hover:underline text-primary font-semibold"
              >
                Blogs
              </a>
            </li>
            {/* <li>
              <a href="#features" className="hover:underline text-primary font-semibold">
                Features
              </a>
            </li> */}
            <li>
              <a
                href="#contact"
                className="hover:underline text-primary font-semibold"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
