import React, { useEffect, useRef, useState } from "react";
import Flickity from "flickity";
import "flickity/css/flickity.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "./BurgerSlider.css";
import Cart from "./Cart";

const products = [
  { name: "Veg Burger", price: 250, img: "src/assets/Hero_img.png" },
  { name: "Paneer Wrap", price: 200, img: "src/assets/Hero_img.png" },
  { name: "Cheese Pizza", price: 400, img: "src/assets/Hero_img.png" },
  { name: "Sandwich", price: 150, img: "src/assets/Hero_img.png" },
  { name: "Chilly Pasta", price: 300, img: "src/assets/Hero_img.png" },
  { name: "French Fries", price: 120, img: "src/assets/Hero_img.png" },
  { name: "Spring Rolls", price: 180, img: "src/assets/Hero_img.png" },
  { name: "Momos", price: 100, img: "src/assets/Hero_img.png" },
];

const CardSlider = () => {
  const flickityRef = useRef(null);
  const [flickity, setFlickity] = useState(null);

  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  // function to decide how many cells based on screen width
  const getGroupCells = () => {
    if (window.innerWidth >= 1200) return 4; // desktop
    if (window.innerWidth >= 768) return 3;  // tablet
    return 1;                                // mobile
  };

  // Flickity init
  useEffect(() => {
    if (flickityRef.current) {
      const flkty = new Flickity(flickityRef.current, {
        cellAlign: "left",
        contain: true,
        pageDots: true,
        prevNextButtons: true,
        draggable: true,
        groupCells: getGroupCells(),
      });

      setFlickity(flkty);

      // update on resize
      const handleResize = () => {
        flkty.options.groupCells = getGroupCells();
        flkty.resize();
      };

      window.addEventListener("resize", handleResize);

      return () => {
        flkty.destroy();
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  const addToCart = (item) => {
    setCart((prev) => [item, ...prev]);
  };

  const removeFromCart = (name) => {
    setCart((prev) => prev.filter((item) => item.name !== name));
  };

  return (
    <div className="card-slider">
      <div className="carousel" ref={flickityRef}>
        {products.map((item, idx) => (
          <div className="carousel-cell" key={idx}>
            <div className="menu-card">
              <button className="cart-btn" onClick={() => setShowCart(true)}>
                <i className="fa fa-shopping-bag"></i>
              </button>

              <div className="IMG_Design">
                <img src={item.img} alt={item.name} className="menu-img" />
              </div>
              <div className="Content-manage">
                <h3>{item.name}</h3>
                <p className="price">₹{item.price}</p>

                <button className="order-btn" onClick={() => addToCart(item)}>
                  Order Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showCart && (
        <Cart
          cart={cart}
          onClose={() => setShowCart(false)}
          onRemove={removeFromCart}
        />
      )}
    </div>
  );
};

export default CardSlider;
