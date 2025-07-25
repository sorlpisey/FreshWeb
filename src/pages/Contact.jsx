import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaEnvelope, FaGlobe, FaMapMarkerAlt } from "react-icons/fa";
const ContactPage = () => {
  useEffect(() => {
      AOS.init({ duration: 1000, once: true });
    }, []);
  return (
    <div className="bg-white">
      {/* Banner */}
      <div className="relative bg-gray-800 text-white py-20 text-center bg-blend-overlay bg-cover bg-center" style={{ backgroundImage: "url('/your-banner.jpg')" }}>
        <h1 className="text-4xl font-bold " data-aos="fade-down">Contact <span className="Here's to answetext-yellow-400">Us</span></h1>
        <p className="text-lg mt-2" data-aos="fade-right" data-aos-delay="1000">If you have any question ,Feel free to get in touch with us </p>
      </div>

      {/* Main Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10">
        {/* Form */}
        <form className="space-y-4">
          <input type="text" placeholder="Your Name" className="w-full border border-gray-300 p-3 rounded" />
          <input type="email" placeholder="Your Email" className="w-full border border-gray-300 p-3 rounded" />
          <input type="text" placeholder="Subject" className="w-full border border-gray-300 p-3 rounded" />
          <textarea rows="5" placeholder="Your Message" className="w-full border border-gray-300 p-3 rounded"></textarea>
          <button type="submit" className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-6 rounded">Send Message</button>
        </form>

        {/* Contact Info */}
        <div>
          <h2 className="text-2xl  text-[#403d2c] mb-2 ">Contact Us</h2>
          <p className="text-gray-600 text-lg mb-10">Feel free to get in touch with us for any inquiries or assistance. We are always happy to help you.</p>

          <div className="grid md:grid-cols-2 gap-8 text-gray-700 ">
            {/* Phone */}
            <div className="flex items-start space-x-4">
              <FaPhoneAlt className="text-gray-500 text-2xl mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900">Call Us</h4>
                <p>+855 12 345 678</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-4">
              <FaEnvelope className="text-yellow-500 text-2xl mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900">Email Us</h4>
                <p>hello@youremail.com</p>
              </div>
            </div>

            {/* Website */}
            <div className="flex items-start space-x-4">
              <FaGlobe className="text-blue-400 text-2xl mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900">Website</h4>
                <p>www.yourwebsite.com</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start space-x-4">
              <FaMapMarkerAlt className="text-red-500 text-2xl mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900">Address</h4>
                <p>#99 St. 1980, Phnom Penh, Cambodia</p>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          {/*  */}
        </div>
      </div>

      {/* Map Section */}
      <div className="w-full mt-10">
        <iframe
          title="Phnom Penh Map"
          className="w-full h-[400px] grayscale"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15650.617383144842!2d104.90639537704046!3d11.556373840139342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109510f1e560b05%3A0x6f6dd837e9b92f3b!2sPhnom%20Penh!5e0!3m2!1sen!2skh!4v1625259368416!5m2!1sen!2skh"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

    </div>
  );
};

export default ContactPage;
