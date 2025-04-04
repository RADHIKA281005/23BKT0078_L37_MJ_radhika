import React from "react";
import "./ProductsCss.css";

const ProductDetails = ({ product, onClose }) => {
  return (
    <div className="product-modal">
      <div className="modal-content">
        <span className="close-btn" onClick={onClose}>&times;</span>
        <img src={product.image} alt={product.name} className="modal-image" />
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p><strong>Price:</strong> ${product.price}</p>
        <button className="btn btn-primary">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetails;
