import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import LatestBlogSection from "../components/LatestBlog";

const ServiceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [service, setService] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const [activeTab, setActiveTab] = useState("description");
  const handleBooking = () => {
    navigate(`/booking/${service.id}`, { state: service }); // pass service data via state
  };

  useEffect(() => {
    fetch("/data/service.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((s) => s.id === parseInt(id));
        if (!found) navigate("/not-found");
        else {
          setService(found);
          setMainImage(found.images?.[0] || found.image);
        }
      });
  }, [id]);

  if (!service) return <div className="text-center py-10">Loading...</div>;

  return (
    <section className="px-4 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8">
        {/* Images */}
        <div className="md:col-span-2">
          <div className="w-full h-[400px] md:h-[600px] rounded overflow-hidden shadow relative z-0">
            <img
              src={mainImage}
              alt="Main Service"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex gap-3 mt-4 overflow-x-auto scrollbar-hide">
            {(service.images || [service.image]).map((img, idx) => (
              <button
                key={idx}
                onClick={() => setMainImage(img)}
                className={`w-20 h-20 rounded border-2 ${
                  mainImage === img ? "border-blue-300" : "border-transparent"
                }`}
              >
                <img src={img} alt={`thumb-${idx}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Details */}
        <div className="md:col-span-2 lg:col-span-1 relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold uppercase tracking-wider mb-2 ">
            {service.title}
          </h1>

          {/* Tabs */}
          <div className="flex space-x-6  mb-4 text-sm uppercase font-semibold mt-15">
            <button
              onClick={() => setActiveTab("description")}
              className={`pb-2 transition ${
                activeTab === "description" ? "border-b-2 border-blue-500" : "hover:text-gray-400"
              }`}
            >
              DESCERIPTION
            </button>
            <button
              onClick={() => setActiveTab("product")}
              className={`pb-2 transition ${
                activeTab === "product" ? "border-b-2 border-blue-500" : "hover:text-gray-400"
              }`}
            >
              PRODUCT USE
            </button>
            {/* <button
              onClick={() => setActiveTab("details")}
              className={`pb-2 transition ${
                activeTab === "details" ? "border-b-2 border-blue-500" : "hover:text-gray-400"
              }`}
            >
              Details
            </button> */}
          </div>

          {/* Tab Content */}
          <div className="text-sm leading-relaxed">
            {activeTab === "description" && (
              <p>{service.description}</p>
            )}
            {activeTab === "product" && (
              <p>{service.productuse}</p>
            )}
          </div>

          <p className="mt-6 font-bold text-lg">{service.price} USD</p>

          {/* Duration Buttons */}
          <div className="mt-4">
            <p className="text-sm  mb-2 uppercase">{service.duration}</p>
          </div>

           <button
            onClick={handleBooking}
            className="w-full mt-6 py-3 border border-[#c5c0b4]  hover:bg-white hover:text-black transition cursor-pointer text-[#c5c0b4] font-semibold uppercase tracking-wider rounded hover:shadow-lg">
            BOOK NOW
          </button>
           
          </div>

          
         
      </div>
      <div className="mt-20"><LatestBlogSection/></div>
      
    </section>
  );
};

export default ServiceDetail;
