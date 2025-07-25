import React, { useEffect, useState } from "react";
import ServiceCard from "./ServicesCard"; // 👈 Your card component
import AOS from "aos";
import "aos/dist/aos.css";

const FeaturedServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800,
      once: true, // Only animate once when scrolling down
    });

    // Load services
    fetch("/data/service.json")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.error("Failed to load services", err));
  }, []);

  const featuredServices = services.filter((service) => service.featured);

  return (
    <div className="md:px-30 px-5 py-10 mt-10">
      <h2
        className="lg:text-3xl md:text-3xl text-xl text-[#403d2c] mb-8"
        data-aos="fade-up"
      >
        FEATURED SERVICES
        <span className="block mt-1 w-30 border-b-4 border-[#477023]"></span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {featuredServices.map((service, index) => (
          <div key={service.id} data-aos="zoom-in" data-aos-delay={index * 100}>
            <ServiceCard service={service} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedServices;
