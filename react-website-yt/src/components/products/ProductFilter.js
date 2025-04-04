import React from "react";
import "./ProductsCss.css";

const ProductFilter = ({ categories, selectedCategory, onCategoryChange }) => {
  return (
    <div className="product-filter">
      <h3>Filter by Category</h3>
      <select value={selectedCategory} onChange={(e) => onCategoryChange(e.target.value)}>
        <option value="all">All</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>{category}</option>
        ))}
      </select>
    </div>
  );
};

export default ProductFilter;
