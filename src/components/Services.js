import React from "react";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Development",
      description:
        "Crafting seamless and scalable front-end solutions tailored to bring your ideas to life. I specialize in building robust, efficient, and modern web applications.",
      icon: <i className="fas fa-code text-xl text-secondary"></i>, // Development icon
    },
    {
      id: 2,
      title: "Design",
      description:
        "Designing intuitive and visually appealing interfaces that enhance user experience. I focus on creating responsive and engaging designs with attention to detail.",
      icon: <i className="fas fa-pencil-alt text-xl text-secondary"></i>, // Design icon
    },
    {
      id: 3,
      title: "E-Commerce",
      description:
        "Building dynamic and conversion-focused E-Commerce platforms that deliver exceptional shopping experiences. My expertise ensures fast, secure, and user-friendly online stores.",
      icon: <i className="fas fa-shopping-cart text-xl text-secondary"></i>, // E-Commerce icon
    },
  ];

  return (
    <section id="services" className="py-2 bg-primary text-secondary">
      <div className="mt-8 pt-12 max-w-7xl mx-auto px-6 md:px-6">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center mb-6">Services</h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="border rounded-lg shadow-md p-8 m-6 text-center transition-transform hover:scale-95"
            >
              {/* Service Icon */}
              <div className="mb-6 flex justify-center">{service.icon}</div>

              {/* Service Title */}
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>

              {/* Service Description */}
              <p className="leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
