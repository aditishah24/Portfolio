import React from "react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-primary py-12 ">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* About Section */}
        <div>
          <h3 className="text-2xl font-semibold  mb-4">Let's Evolve</h3>
          <p>
            Bringing your vision to life with modern and responsive web
            development tailored to your needs. Reach out to collaborate on
            creating impactful digital experiences.
          </p>
        </div>

        {/* Navigation Section */}
        <div className="ml-12">
          <h3 className="text-lg font-semibold  mb-4 ">Languages</h3>
          <ul className="space-y-2">
            <li>
              {/* className="hover:text-white-800 */}

              <a href="/">HTML5</a>
            </li>
            <li>
              <a href="/">CSS3</a>
            </li>
            <li>
              <a href="/">JavaScript</a>
            </li>
            <li>
              <a href="/">Bootstrap</a>
            </li>
            <li>
              <a href="/">React Js/Next Js</a>
            </li>
          </ul>
        </div>

        {/* Services Section */}
        <div>
          <h3 className="text-lg font-semibold text-white-800 mb-4">
            Services
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-white-800">
                Website Design
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-white-800">
                E-Commerce
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-white-800">
                Layouts for User interfaces
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-white-800">
                Website Development
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-semibold text-white-800 mb-4">Contact</h3>
          {/* <address className="not-italic">
            <p>
            Address to be added if required</p>
            <p>+91 123 4567 889</p> */}
            {/* <p>+1 (123)-456-7890</p> */}
            <p>reachoutaditishah@gmail.com</p>
          {/* </address> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
