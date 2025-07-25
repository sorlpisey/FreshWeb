import React from "react";

const CategorySection = ({ categories, selectedSlug, onSelect }) => {
  return (
    <div className="flex gap-3 overflow-x-auto  flex-nowrap justify-start">
      {/* All button */}
      <button
        onClick={() => onSelect("all")}
        className={`px-5 py-2 rounded-full border text-sm font-medium transition whitespace-nowrap ${
          selectedSlug === "all"
            ? "bg-gray-700 text-white"
            : "bg-white border-gray-500  hover:bg-gray-400 hover:text-white hover:border-gray-400"
        }`}
      >
        All
      </button>

      {/* Category buttons */}
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onSelect(cat.slug)}
          className={`px-5 py-1 rounded-full border text-sm font-medium transition whitespace-nowrap ${
            selectedSlug === cat.slug
              ? "bg-gray-700 text-white"
              : "bg-white border-gray-500  hover:bg-gray-400 hover:text-white hover:border-gray-400"
          }`}
        >
          {cat.name}
        </button>
      ))}
    </div>
  );
};

export default CategorySection;
