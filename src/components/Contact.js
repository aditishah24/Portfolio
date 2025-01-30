import React from "react";

const Contact = () => {
  return (
    <section id="contact" className=" bg-primary text-secondary">
      <div className="max-h-3xl border-2 py-2 rounded-lg flex flex-col items-center">
        {/* Header Section */}
        <h1 className="mt-8 pt-12 text-3xl font-bold mt-4">Contact Info</h1>

        {/* Contact Info */}
        <div className="flex flex-wrap justify-center items-center mt-4 gap-12">
          <div className="text-center">
            {/* Using Font Awesome icon */}
            <i className="fas fa-map-marker-alt text-xl mb-4 text-secondary"></i>
            <p className="text-secondary-600">
              401 Abhishek App. Bhatththa Paldi, <br /> Ahmedabad, Gujarat,
              INDIA
            </p>
          </div>
          <div className="text-center">
            <i className="fas fa-phone-alt text-xl mb-4 text-secondary"></i>
            <p className="text-secondary-600">+91 997 9244 229</p>
          </div>
          <div className="text-center">
            <i className="fas fa-envelope text-xl mb-4 text-secondary"></i>
            <p className="text-secondary-600">reachoutaditishah@gmail.com</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-primary text-secondary shadow-lg rounded-lg p-8 mt-8 w-full max-w-3xl mb-6">
          <h2 className="text-xl font-bold mb-6">Contact Form</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4 text-secondary">
            <input
              type="text"
              placeholder="First Name"
              className="bg-primary p-3 border border-secondary-300 rounded"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="bg-primary p-3 border border-secondary-300 rounded"
            />
            <input
              type="email"
              placeholder="Email"
              className="bg-primary p-3 border border-secondary-300 rounded col-span-1 md:col-span-2"
            />
            <input
              type="text"
              placeholder="Subject"
              className="bg-primary p-3 border border-secondary-300 rounded col-span-1 md:col-span-2"
            />
            <textarea
              rows="4"
              placeholder="Write your notes or questions here..."
              className="bg-primary p-3 border border-secondary-300 rounded col-span-1 md:col-span-2"
            ></textarea>
            <button
              type="submit"
              className="bg-secondary text-primary py-2 rounded text-center whitespace-nowrap"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
