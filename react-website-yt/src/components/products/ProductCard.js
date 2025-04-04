import React from "react";
import "./ProductsCss.css";

const ProductCard = ({ product, onViewDetails }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button className="btn btn-primary" onClick={() => onViewDetails(product)}>
        View Details
      </button>
    </div>
  );
};

export default ProductCard;
