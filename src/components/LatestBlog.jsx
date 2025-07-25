import { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const LatestBlogSection = () => {
  const [blogs, setBlogs] = useState([]);

   useEffect(() => {
      AOS.init({ duration: 1000, once: true });
    }, []);

  useEffect(() => {
    fetch("/data/blog.json")
      .then((res) => res.json())
      .then((data) => {
        // sort latest first
        const sorted = data.sort((a, b) => new Date(b.date) - new Date(a.date));
        setBlogs(sorted.slice(0, 3)); // show top 3
      });
  }, []);

  return (
    <section className=" pt-10">
      <h2 className="lg:text-3xl md:text-3xl text-xl text-[#403d2c] mb-8 "  data-aos="fade-right">
          OUR BLOG
        <span className="block  mt-1 w-20 border-b-4 border-[#477023]"></span>
      </h2>


      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" >
        {blogs.map((blog,index) => (
          <div key={blog.id} className="overflow-hidden" data-aos="fade-up"
              data-aos-delay={index * 100}>
            {/* Image or Video */}
            {blog.image && (
              <img src={blog.image} alt={blog.title} className="w-full h-100 object-cover hover:scale-105 transition duration-300" />
            )}
            {/* {blog.video && (
              <video controls className="w-full h-150 object-cover">
                <source src={blog.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )} */}

            {/* Blog content */}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">{blog.title}</h3>
              <p className="text-gray-600 text-sm mt-1">{blog.excerpt}</p>
              <p className="text-xs text-gray-400 mt-2">{new Date(blog.date).toDateString()}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestBlogSection;
