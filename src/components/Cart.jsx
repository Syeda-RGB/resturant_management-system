import React from "react";
import "./Cart.css"; // optional styles

const Cart = ({ cart, onClose, onRemove }) => {
  const calculateTotal = () =>
    cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-overlay">
      <div className="cart-container">
        <button className="close-btn" onClick={onClose}>
          ✖
        </button>
        <h2>🛒 Your Cart</h2>

        {cart.length === 0 ? (
          <p>No items in cart</p>
        ) : (
          <ul className="cart-items">
            {cart.map((item, index) => (
              <li key={index} className="cart-item">
                <span>{item.name}</span>
                <span>₹{item.price}</span>
                <button
                  className="remove-btn"
                  onClick={() => onRemove(item.name)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}

        <h3>Total: ₹{calculateTotal()}</h3>
      </div>
    </div>
  );
};

export default Cart;
