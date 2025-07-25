import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LuMapPin } from "react-icons/lu";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import AOS from 'aos';
import 'aos/dist/aos.css';

const LocationSection = () => {
  const [branches, setBranches] = useState([]);

  useEffect(() => {
      AOS.init({ duration: 1000, once: true });
    }, []);
  
  useEffect(() => {
    fetch("/data/location.json")
      .then((res) => res.json())
      .then(setBranches)
      .catch((error) => console.error("Error loading location data:", error));
  }, []);

  return (
    <section className="md:px-30 px-5 py-10 mt-10" id="location">
      <div>
        <h2 className="lg:text-3xl md:text-3xl text-xl text-[#403d2c] mb-8" data-aos="fade-right">
          OUR LOCATION
          <span className="block mt-1 w-20 border-b-4 border-[#477023]"></span>
        </h2>

        {branches.length > 0 && (
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            
             // ✅ enable loop only when more than 3
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              // 1024: { slidesPerView: 4 } // ✅ Show 3 cards on large screens
            }}
            
          >
            {branches.map((branch) => (
              <SwiperSlide key={branch.id}>
                <div className="overflow-hidden transition bg-white shadow-lg rounded  border-b-4 border-gray-300 ">
                  <img
                    src={branch.image}
                    alt={branch.name}
                    className="w-full h-100 object-cover hover:scale-105 transition duration-300"
                  />
                  <div className="p-5">
                    <h3 className="text-xl font-semibold text-gray-800">
                      {branch.name}
                    </h3>
                    <p className="text-gray-600 mt-1">{branch.address}</p>
                    <a
                      href={branch.maplink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-600 text-sm mt-2 inline-flex items-center gap-2 hover:underline"
                    >
                      <LuMapPin /> View Map
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
};

export default LocationSection;
