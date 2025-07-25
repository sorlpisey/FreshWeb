import React from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Link } from "react-router-dom";
import 'swiper/css';
import 'swiper/css/pagination';

const ServiceCard = ({ service }) => {
  const navigate = useNavigate();

  const handleBooking = () => {
    navigate(`/booking/${service.id}`, { state: service }); // pass service data via state
  };

  return (
    <div className="overflow-hidden bg-white  rounded transform transition-all duration-300 hover:-translate-y-2 hover:scale-100 hover:shadow-2xl border-b-4 border-gray-300">
      {/* Image Slider */}
      <Link to={`/services/${service.id}`} >
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        pagination={{ clickable: true }}
        className="w-full h-80"
        
      >
        {service.images.map((img, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={img}
              alt={`slide-${idx}`}
              className="w-full h-80 object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
</Link>
      {/* Text Content */}
      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
        <p className="text-gray-600 mt-1">{service.description}</p>
        <div className="flex justify-between items-center mt-3">
          <div className="text-sm text-gray-500">
            {service.duration} | {service.price}
          </div>
          <button
            onClick={handleBooking}
            className="px-4 py-2 text-sm bg-gray-600 text-white rounded hover:bg-gray-700 transition cursor-pointer"
          >
            Book Now
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default ServiceCard;
