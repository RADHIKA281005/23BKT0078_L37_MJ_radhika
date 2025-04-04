import React from "react";
import "./Cart.css";

const Cart = ({ cartItems, onRemove }) => {
  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? <p>Your cart is empty.</p> : (
        cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <span>{item.name} - ${item.price}</span>
            <button onClick={() => onRemove(item.id)}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
