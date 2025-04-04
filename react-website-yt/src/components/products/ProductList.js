import React, { useState } from "react";
import ProductCard from "./ProductCard";
import ProductDetails from "./ProductDetails";
import "./ProductsCss.css";

const products = [
  { id: 1, name: "Suitcase", price: 699, image: "/images/suitcase.jpg", description: "Latest 5G smartphone with high-end specs." },
  { id: 2, name: "NeckPillow", price: 999, image: "/images/pillow.jpg", description: "Ultra-lightweight laptop with powerful performance." },
  { id: 3, name: "Smartwatch", price: 199, image: "/images/watch.jpg", description: "Stay connected with this sleek smartwatch." }
];

const ProductList = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onViewDetails={setSelectedProduct} />
      ))}
      {selectedProduct && <ProductDetails product={selectedProduct} onClose={() => setSelectedProduct(null)} />}
    </div>
  );
};

export default ProductList;
