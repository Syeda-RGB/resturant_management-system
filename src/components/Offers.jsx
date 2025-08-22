import React from "react";
import "./Offers.css";

function Offers() {
  return (
    <section className="offer-section">
      <div className="container">
        <div className="row align-items-center">
          {/* Left: copy */}
          <div className="col-12 col-lg-5">
            <div className="Main_offer_content">
              <p className="eyebrow">Get Up To</p>
              <h1 className="discount"><span>50%</span> OFF</h1>
              <p className="sub">On Your 2 Order's</p>
              <button className="Offers_but">Order Now</button>
            </div>
          </div>

          {/* Right: artwork */}
          <div className="col-12 col-lg-7">
            <div className="Images_content">
              <div className="artboard">
                {/* main plate/burgers image */}
                <img className="burger-plate" src="src/assets/Burger.png" alt="Burgers" />

                {/* optional extra assets (add only if you have them) */}
                {/* <img className="fries" src="src/assets/Fries.png" alt="Fries" /> */}
                {/* <img className="drink" src="src/assets/Drink.png" alt="Drink" /> */}

                {/* doodles */}
                <img className="doodle-arrow" src="src/assets/Vector_3.png" alt="" />
                {/* <img className="doodle-squiggle" src="src/assets/Vector_4.png" alt="" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Offers;
