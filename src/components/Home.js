import React from "react";
// import BankApp from "../Images/BankApp.png";
// import ExpenseTracker from "../Images/ExpenseTracker.png";
// import InvestmentCalc from "../Images/InvestmentCalculator.png"
// import PigGame from "../Images/PigGame.png"

const Home = () => {
  return (
    <section id="home" className="bg-primary">
      {/* Grid Section */}
      <div className="py-12 px-6 mt-12 max-w-screen-xl mx-auto">
        {/* Upper Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6">
          <div
            className="h-52 bg-gray-200 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://i.pinimg.com/736x/04/c8/82/04c882a13f88beb79e5acd5917766b2d.jpg')",
            }} // Replace with your image path
          ></div>
          <div
            className="h-48 bg-gray-200 bg-cover bg-center"
            style={{
              backgroundImage:
                // `url(${BankApp})`,
                "url('https://i.pinimg.com/736x/02/09/1f/02091f1db7fca911b13c4e7c07e2b8bb.jpg')",
            }} // Replace with your image path
          ></div>
          <div
            className="h-48 bg-gray-200 bg-cover bg-center"
            style={{
              backgroundImage:
                // `url(${ExpenseTracker})`,
                "url('https://i.pinimg.com/736x/26/ba/1b/26ba1b52160c83194ec5e272f2d48d79.jpg')",
            }} // Replace with your image path
          ></div>
        </div>

        {/* Content Section */}
        <div className="my-4 text-center text-secondary">
          <h2 className="text-3xl font-bold mb-2">Portfolio - Aditi Shah </h2>
          <p className="text-black-600 font-bold text-xl">
            {/* Dive into my creative Era */}
            Software Developer
          </p>
        </div>

        {/* Lower Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6">
          <div
            className="h-48 bg-gray-200 bg-cover bg-center"
            style={{
              backgroundImage:
                // `url(${InvestmentCalc})`,
                "url('https://i.pinimg.com/736x/29/c2/40/29c2406f5cb500c2f3e4a8316fb2014d.jpg')",
            }} // Replace with your image path
          ></div>
          <div
            className="h-48 bg-gray-200 bg-cover bg-center"
            style={{
              backgroundImage:
                // `url(${PigGame})`,
                "url('https://i.pinimg.com/736x/9f/03/be/9f03beb4fadb9282e93b03da90448043.jpg')",
            }} // Replace with your image path
          ></div>
          <div
            className="h-48 bg-gray-200 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://i.pinimg.com/736x/8a/cd/a6/8acda6bfa510223f5a2fe58e7faac7c0.jpg')",
            }} // Replace with your image path
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Home;
