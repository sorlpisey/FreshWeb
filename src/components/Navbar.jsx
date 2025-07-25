import React, { useState, useEffect } from 'react';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null);
  // const [locations, setLocations] = useState([]);
  const [categories, setCategories] = useState([]);

  const toggleMobileDropdown = (menuName) => {
    setMobileDropdownOpen((prev) => (prev === menuName ? null : menuName));
  };

  useEffect(() => {
    // fetch('/data/location.json')
    //   .then((res) => res.json())
    //   .then((data) => setLocations(data))
    //   .catch((err) => console.error("Failed to load locations", err));

    fetch('/data/category.json')
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error("Category load error", err));
  }, []);

  return (
    <nav className="bg-white border-b-2 border-gray-200 sticky top-0 z-50 py-3" >
      <div className="lg:px-30 px-5 py-3 flex items-center justify-between relative">

        {/* Mobile Menu Icon (left on mobile) */}
        <div className="lg:hidden order-1">
          <button onClick={() => setMenuOpen(true)}>
            <svg className="md:w-10 md:h-10 w-8 h-8 mt-3 text-[#477023]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 6h13M4 12h26M5 18h13" />
            </svg>
          </button>
        </div>

        {/* Logo - centered on mobile, left on large screens */}
        <div className="md:text-3xl text-xl font-bold text-[#403d2c] border-b-2 border-gray-400 
                        absolute left-1/2 transform -translate-x-1/2
                        lg:static lg:transform-none lg:order-none">
          FRESHH
        </div>

        {/* Desktop Nav Links (hidden on mobile) */}
        <div className="hidden lg:flex gap-10   items-center order-2 ">
          <a href="/" className="text-gray-700 hover:text-black font-medium border-b-2 border-transparent hover:border-black">HOME</a>
        

          {/* <div className="relative group">
            <button className="flex items-center gap-1 text-gray-700 hover:text-black font-medium border-b-2 border-transparent hover:border-black">
              OUR LOCATION
            </button>
            <div className="absolute mt-2 bg-white shadow-lg rounded-md p-4 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition duration-300 min-w-[250px]">
              <ul>
                {locations.map((loc) => (
                  <li key={loc.id}>
                    <a href={`/location/${loc.slug}`} className="block hover:text-gray-500 py-2 text-uppercase">
                      {loc.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div> */}

          <div className="relative group">
            <button className="flex items-center gap-1 text-gray-700 hover:text-black font-medium border-b-2 border-transparent hover:border-black">
              OUR SERVICES
            </button>
            <div className="absolute mt-2 bg-white shadow-lg rounded-md p-4 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition duration-300 min-w-[250px]">
              <ul>
                <li> <a href="/service/all" className="block py-2 hover:text-gray-500">ALL MENU </a></li>
                {categories.map((cat) => (
                  <li key={cat.id}>
                    <a href={`/service/${cat.slug}`} className="block py-2 hover:text-gray-500 uppercase">
                      {cat.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <a href="/blog" className="text-gray-700 hover:text-black font-medium border-b-2 border-transparent hover:border-black">BLOG</a>
          <a href="/about" className="text-gray-700 hover:text-black font-medium border-b-2 border-transparent hover:border-black">ABOUT US</a>
          <a href="/contact" className="text-gray-700 hover:text-black font-medium border-b-2 border-transparent hover:border-black">CONTACT</a>
        </div>

        {/* Right Icons */}
        <div className="flex items-center space-x-2 order-3">
          <FaUser className="md:text-2xl text-xl text-gray-600 cursor-pointer" />
          
           <a href="/cart" className="md:text-2xl text-xl text-gray-600 cursor-pointer"> <FaShoppingCart/> </a>
        </div>
      </div>

      {/* Mobile Slide-In Menu */}
      <div className={`fixed top-0 left-0 w-full h-full bg-stone-200 shadow-lg z-50 transform transition-transform duration-300 ease-in-out lg:hidden
          ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-4 ">
          <button onClick={() => setMenuOpen(false)} className="mb-4">
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <a href="/" className="block px-2 py-2  font-medium text-gray-700 border-b-1 border-gray-400">HOME</a>



          {/* OUR SERVICES dropdown */}
          <div>
            <button
              onClick={() => toggleMobileDropdown("services")}
              className="w-full flex justify-between px-2 py-2 font-medium text-gray-700 border-b-1 border-gray-400"
            >
              OUR SERVICES
              <FiChevronDown className={`transition-transform ${mobileDropdownOpen === "services" ? "rotate-180" : ""}`} />
            </button>
            {mobileDropdownOpen === "services" && (
              <div className="px-4 py-2 bg-gray-50 text-gray-500">
                <ul>
                <a href="/service/all" className="block py-2 hover:text-black">ALL MENU</a>
                {categories.map((cat) => (
                  <li key={cat.id} >
                    <a href={`/service/${cat.slug}`} className="block py-2 hover:text-black uppercase">
                    {cat.name}
                    </a>
                  </li>
                  
                ))}
                </ul>
              </div>
            )}
          </div>

          <a href="/blog" className="block px-2 py-2 font-medium text-gray-700 border-b-1 border-gray-400 ">BLOG</a>
          <a href="/about" className=" block px-2 text-gray-700 py-2 font-medium border-b-1 border-gray-400">ABOUT US</a>
          <a href="/contact" className="block px-2 py-2 font-medium text-gray-700 border-b-1 border-gray-400">CONTACT</a>
        </div>
      </div>

      {/* Backdrop */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40 lg:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;
