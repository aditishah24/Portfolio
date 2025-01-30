import React, { useState } from "react";
import aditiImg from "../Images/Aditi Shah.png";

const About = () => {
  const slides = [
    {
      id: 1,
      title: "Do things with love",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      additionalInfo:
        "Est qui eos quasi ratione nostrum excepturi id recusandae fugit omnis ullam pariatur itaque nisi voluptas impedit Quo suscipit omnis iste velit maxime.",
      img: "https://i.pinimg.com/736x/26/ba/1b/26ba1b52160c83194ec5e272f2d48d79.jpg",
    },
    {
      id: 2,
      title: "Achieve More with Ease",
      description:
        "Streamline your workflows and boost your productivity effortlessly.",
      additionalInfo:
        "Get tools that are designed to help you stay ahead and excel in what you do.",
      img: "https://i.pinimg.com/736x/9f/03/be/9f03beb4fadb9282e93b03da90448043.jpg",
    },
    {
      id: 3,
      title: "Innovate for Tomorrow",
      description:
        "Empowering you to create and innovate with the best solutions.",
      additionalInfo:
        "Turn your ideas into reality with powerful tools and efficient support.",
      img: "https://i.pinimg.com/736x/8a/cd/a6/8acda6bfa510223f5a2fe58e7faac7c0.jpg",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="about" className="py-2 bg-primary">
      {/* About Section */}
      <div className="mt-4 flex justify-center items-center p-5">
        <div className="mt-16 pt-8 mb-4  w-full bg-secondary shadow-lg rounded-lg border border-gray-200 relative">
          <div className=" max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-[4fr,2fr] gap-6 items-center p-6">
            {/* Left Section (Text Content) */}
            <div className="text-left">
              <h1 className="text-2xl font-bold text-primary mb-4">
                About Aditi
              </h1>
              <p className="text-lg text-primary mb-4">
                Hi, I’m Aditi Shah, a Frontend Developer dedicated to crafting
                beautiful and intuitive user experiences. With a strong
                foundation in React.js, Tailwind CSS, and modern JavaScript
                frameworks, I specialize in building responsive, user-friendly
                websites and applications.
              </p>
              <p className="text-lg text-primary">
                My passion lies in transforming ideas into digital solutions
                that are not only visually appealing but also functional and
                efficient. I thrive on collaboration, constantly learning, and
                staying updated with the latest industry trends. Whether it’s
                developing a portfolio site, an interactive application, or
                enhancing a digital brand presence, I am committed to delivering
                high-quality results.
                <br />
                <br />
                Let’s collaborate to bring your ideas to life and create
                something truly impactful!
              </p>
            </div>

            {/* Right Section (Image) */}
            <div className="relative">
              <div className="absolute top-[-15rem] right-[-2.2rem]">
                <div className="rounded-lg overflow-hidden">
                  <img
                    src={aditiImg}
                    alt="Aditi"
                    className="object-cover w-[600px] md:w-[600px] lg:w-[600px] rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="mt-2 pt-6 py-2 bg-primary text-secondary">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          {/* Header */}
          <div className="text-center mb-6 text-secondary">
            <h2 className="text-4xl font-bold  ">Features</h2>
            <p className="mt-4">
              Explore the powerful features that take your business to the next
              level.
            </p>
          </div>

          {/* Feature Section */}
          <div className="flex flex-col md:flex-row items-center gap-8 relative">
            {/* Image Section */}
            <div className="md:w-1/2 relative h-200 w-200">
              <img
                src={slides[currentSlide].img}
                alt={slides[currentSlide].title}
                className="rounded-lg shadow-lg object-cover w-[600px] h-[400px]"
              />
            </div>

            {/* Arrows */}
            <div className="absolute  pr-12 inset-y-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-between gap-4">
              <button
                onClick={handlePrev}
                className="bg-black text-primary mr-1 w-12 h-12 flex items-center justify-center rounded-full shadow-lg hover:bg-black-700 transition duration-200"
              >
                &#8249;
              </button>
              <button
                onClick={handleNext}
                className="bg-black text-primary w-12 h-12 flex items-center justify-center rounded-full shadow-lg hover:bg-black-700 transition duration-200"
              >
                &#8250;
              </button>
            </div>

            {/* Text Section */}
            <div className="ml-4 pl-6 md:w-1/2 text-center md:text-left">
              <h3 className="text-2xl font-bold">
                {slides[currentSlide].title}
              </h3>
              <p className="mt-4 text-secondary">
                {slides[currentSlide].description}
              </p>
              <p className="mt-2 text-secondary">
                {slides[currentSlide].additionalInfo}
              </p>
              {/* <button className="mt-6 px-6 py-3 text-white bg-black-600 hover:bg-black-700 rounded-lg shadow-md transition duration-200">
                Learn More
              </button> */}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;
