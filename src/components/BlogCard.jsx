import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {

  useEffect(() => {
      AOS.init({ duration: 1000, once: true });
    }, []);

  return (
    <div className="flex flex-col md:flex-row gap-6 bg-white overflow-hidden mb-8 container mx-auto" data-aos="fade-up">
      <img src={blog.image} alt={blog.title} className="w-full md:w-1/3 h-80 object-cover hover:scale-105 transition duration-300" />
            {/* {blog.image && (
              <img src={blog.image} alt={blog.title} className="w-150 h-100 object-cover" />
            )}
            {blog.video && (
              <video controls autoPlay muted loop className="w-150 h-100 object-cover ">
                <source src={blog.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )} */}
      <div className="md:w-2/3 text-left py-5">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">{blog.title}</h2>
        <p className="text-gray-600 mb-4">{blog.excerpt}</p>
        <p className="text-xs text-gray-400 mt-2">{new Date(blog.date).toDateString()}</p>
      </div>
    </div>
  );
};

export default BlogCard;
