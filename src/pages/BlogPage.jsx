import React, { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import AOS from 'aos';
import 'aos/dist/aos.css';

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("/data/blog.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((err) => console.error("Error loading blog data:", err));

     
  }, []);

  return (
    <div>
       <div
        className="h-96 bg-cover bg-center text-center flex items-center justify-center"
        style={{ backgroundImage: `url(/images/blogbanner3.jpg)` }}
      >
        <div className="flex flex-col items-center space-y-4">
        <h1 className=" text-3xl md:text-5xl font-bold " data-aos="fade-down"  data-aos-delay="500">
          Welcome to blog page enjoy the reading!
        </h1>
        <p data-aos="fade-right"  data-aos-delay="1500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum sed labore sunt quae rem, asperiores cumque quia officia? Nemo, dolor.
        </p>
        </div>
      </div>
      <section className="px-5 md:px-20 py-10 bg-gray-50 min-h-screen  " >
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </section>
   </div>
  );
};

export default BlogPage;
