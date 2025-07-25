import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const OfferCard = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });

    fetch("/data/category.json")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error("Failed to load services", err));
  }, []);

  return (
    <section className="md:px-30 px-5 py-16 bg-[#f8f8f2]" id="offers">
      <h2
        className="text-[#403d2c] text-3xl mb-12 relative inline-block"
        data-aos="fade-up"
      >
        OUR OFFER
        <span className="block mt-2 w-20 border-b-4 border-[#477023]"></span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {categories.map((cat, index) => {
          const categorySlug = cat.slug.toLowerCase().replace(/\s+/g, "-");

          return (
            <Link
              to={`/service/${categorySlug}`}
              key={cat.id}
              className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="relative">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#403d2c] mb-2 group-hover:text-[#477023] transition">
                  {cat.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  Enjoy the best {cat.name.toLowerCase()} experience with our top-rated staff and quality products.
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default OfferCard;
