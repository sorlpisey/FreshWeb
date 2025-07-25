import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Header Section */}
      <div
        className="h-96 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(/images/about.png)` }}
      >
        <div className="container mx-auto text-center px-4">
          <h1 className="text-5xl font-bold text-white" data-aos="fade-down" >About Us</h1>
          <p className="text-lg mt-4 " data-aos="fade-right" data-aos-delay="1000">Our journey, mission, and passion</p>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-16 space-y-20">

        {/* Our Story Section */}
        <section className="grid md:grid-cols-2 gap-10 items-center">
          <div data-aos="fade-right">
            <h2 className="text-3xl font-semibold text-[#477023] mb-4">Our Story</h2>
            <p className="text-gray-700 leading-relaxed">
              Modern Serenity Spa was founded in 2015 with a vision to bring ancient Cambodian wellness
              practices into the modern world. Nestled in the heart of the city, our spa is a retreat where
              peace meets luxury.
            </p>
          </div>
          <img
            src="/images/story.png"
            alt="Our Story"
            data-aos="fade-left"
            className="w-full h-auto rounded-xl shadow-lg object-cover"
          />
        </section>

        {/* Our Philosophy Section */}
        <section className="grid md:grid-cols-2 gap-10 items-center">
          <img
            src="/images/version.png"
            alt="Our Philosophy"
            data-aos="fade-right"
            className="w-full h-auto rounded-xl shadow-lg object-cover"
          />
          <div data-aos="fade-left">
            <h2 className="text-3xl font-semibold text-[#477023] mb-4">Our Philosophy</h2>
            <p className="text-gray-700 leading-relaxed">
              We believe that true beauty and wellness begin within. Our philosophy revolves around harmony—
              balancing the mind, body, and spirit through holistic treatments and natural products.
            </p>
          </div>
        </section>

        {/* Meet Our Team Section */}
        <section className="grid md:grid-cols-2 gap-10 items-center">
          <div data-aos="fade-up-right">
            <h2 className="text-3xl font-semibold text-[#477023] mb-4">Meet Our Team</h2>
            <p className="text-gray-700 leading-relaxed">
              Our team of licensed therapists and spa specialists are passionate about wellness and deeply
              committed to delivering personalized care with excellence and empathy.
            </p>
          </div>
          <img
            src="/images/team.png"
            alt="Our Team"
            data-aos="fade-up-left"
            className="w-full h-auto rounded-xl shadow-lg object-cover"
          />
        </section>
      </main>
    </div>
  );
};

export default About;
