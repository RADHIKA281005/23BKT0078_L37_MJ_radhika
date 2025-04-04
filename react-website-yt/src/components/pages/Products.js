import React, { useState } from "react";
import ProductList from "../products/ProductList";
import ProductFilter from "../products/ProductFilter";
import  '../products/ProductsCss.css';

const categories = ["Electronics", "Clothing", "Accessories"];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <div className="products-container">
      <h1>Our Products</h1>
      <ProductFilter categories={categories} selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />
      <ProductList category={selectedCategory} />
    </div>
  );
};

export default Products;
