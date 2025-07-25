
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function HeroVideo() {
  useEffect(() => {
      AOS.init({ duration: 1000, once: true });
    }, []);

  return (
    <div className="relative w-full h-[700px] overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover brightness-50"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/video/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex items-center text-white z-20">
        <div className="max-w-6xl md:px-20 px-10">
          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 animate-fade-in" data-aos="fade-right" >
            Rejuvenate Your Body & Mind
          </h2>
          <p className="text-base md:text-lg text-gray-100 mb-6 max-w-4xl animate-fade-in delay-150" data-aos="fade-right"  data-aos-delay="1500">
            Escape to serenity and indulge in a luxurious spa experience designed to restore balance and peace.
          </p>
          <a
          data-aos="fade-right"
           data-aos-delay="2000"
            href="#booking"
            className="inline-block bg-blue-800 hover:bg-blue-900 text-white font-semibold px-6 py-3 rounded-full transition animate-fade-in delay-300"
          >
            Book an Appointment
          </a>
        </div>
      </div>
    </div>
  );
} 

export default HeroVideo;
