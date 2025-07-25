import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ServiceCard from "../components/ServicesCard";
import CategorySection from "../components/CategorySection";
import AOS from 'aos';
import 'aos/dist/aos.css';

const ServicePage = () => {
  const { slug } = useParams(); // "all" or "facial-massage"
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/data/category.json")
      .then((res) => res.json())
      .then(setCategories);

    fetch("/data/service.json")
      .then((res) => res.json())
      .then(setServices);

      AOS.init({ duration: 1000, once: true });
  }, []);

  const getCategoryId = () => {
    const category = categories.find((cat) => cat.slug === slug);
    return category ? category.id : null;
  };

  const filteredServices =
    slug === "all"
      ? services
      : services.filter((service) => service.category_id === getCategoryId());

  const getCategoryName = () => {
    if (slug === "all") return "All Services";
    const cat = categories.find((c) => c.slug === slug);
    return cat ? cat.name : "Services";
  };

  const handleCategorySelect = (selectedSlug) => {
    navigate(`/service/${selectedSlug}`);
  };

  return (
    <section className="px-4 lg:px-20 py-10 bg-stone-100" >
      {/* Title and Category Filter Row */}
      <div className="flex flex-col  md:items-center md:justify-between mb-10 gap-4" data-aos="fade-right">
        <h2 className="text-3xl font-bold text-left">{getCategoryName()}</h2>
        <CategorySection
          categories={categories}
          selectedSlug={slug}
          onSelect={handleCategorySelect}
          
        />
      </div>

      {/* Services */}
      {filteredServices.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"data-aos="fade-up" >
          {filteredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No services found.</p>
      )}
    </section>
  );
};

export default ServicePage;
