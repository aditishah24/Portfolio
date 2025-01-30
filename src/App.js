// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import "./components/main.css"; // Common CSS file
// import Home from "./components/Home"; // Home Component
// import About from "./components/About";
// import Experience from "./components/Experience";

// const App = () => {
//   return (
//     <Router>
//       <header>
//         <h2 className="logo">
//           Portfo<span>lio</span>
//         </h2>
//         <ul className="navbar">
//           <li>
//             <Link to="/">Home</Link> {/* Use Link for navigation */}
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           <li>
//             <Link to="/experience">Experience</Link>
//           </li>
//           <li>
//             <Link to="/skills">Skills</Link>
//           </li>
//           <li>
//             <Link to="/achievement">Achievements</Link>
//           </li>
//           <li>
//             <Link to="/projects">Projects</Link>
//           </li>
//           <li>
//             <Link to="/contact">Contact</Link>
//           </li>
//         </ul>
//       </header>

//       <Routes>
//         {/* Define routes for different pages */}
//         <Route path="/" element={<Home />} />
//         {/* Add more routes for other components */}
//         <Route path="/about" element={<About />} />
//         <Route path="/experience" element={<Experience />} />
//         <Route path="/skills" element={<div>Skills Page</div>} />
//         <Route path="/achievement" element={<div>Achievements Page</div>} />
//         <Route path="/projects" element={<div>Projects Page</div>} />
//         <Route path="/contact" element={<div>Contact Page</div>} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;

import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Blog from "./components/Blog";
// import Features from './components/Feature';

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Services />
      <Blog />
      {/* <Features /> */}
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
