// src/components/Footer.jsx
import React from "react";
import { FaFacebook,FaSquareInstagram,FaPinterest,FaTiktok,FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Branding */}
        <div>
          <h2 className="text-2xl text-text-[#403d2c] border-b-2 border-gray-300 font-bold mb-3">FRESHH</h2>
          <p className="text-sm mb-2">
            Where wellness meets nature. Rooted in tradition, refined for today.
          </p>
          <p className="text-sm">Since 2010 | Made in Cambodia 🇰🇭</p>
        </div>

        {/* Treatments */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Feature</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-teal-400 transition">Aromatherapy</a></li>
            <li><a href="#" className="hover:text-teal-400 transition">Herbal Massage</a></li>
            <li><a href="#" className="hover:text-teal-400 transition">Detox Facial</a></li>
            <li><a href="#" className="hover:text-teal-400 transition">Reflexology</a></li>
          </ul>
        </div>

        {/* Shop */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Link</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-teal-400 transition">Home</a></li>
            <li><a href="/service/all" className="hover:text-teal-400 transition">service</a></li>
            <li><a href="/blog" className="hover:text-teal-400 transition">Blog</a></li>
            <li><a href="/about" className="hover:text-teal-400 transition">About</a></li>
            <li><a href="/contact" className="hover:text-teal-400 transition">Contact</a></li>
            
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <p className="text-sm mb-1">Phnom Penh, Cambodia</p>
          <p className="text-sm mb-1">+855 975 135 128</p>
          <p className="text-sm mb-4">hello@youremail.com</p>
          <div className="flex space-x-4 text-xl">
            <a href="#" className="text-blue-400 transition"><FaFacebook /></a>
            <a href="#" className="text-red-400 transition"><FaSquareInstagram /></a>
            <a href="#" className=" transition"><FaTiktok/></a>
            <a href="#" className="text-red-400 transition"><FaPinterest/></a>
             <a href="#" className="text-blue-400 transition"><FaTwitter/></a>
           
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        © 2025 FRESHH. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
