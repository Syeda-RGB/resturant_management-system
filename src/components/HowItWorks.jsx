import React from "react";
import "./HowItWorks.css";

function HowItWorks() {
  return (
    <section className="how-it-works">
      <div className="container text-center">
        <h2 className="section-title">— HOW DOES IT WORKS —</h2>
        <div className="row justify-content-center">
          
          {/* Card 1 */}
          <div className="col-lg-4 col-md-6 col-12 mb-4">
            <div className="work-card">
              <div className="icon-box">
                <img src="src/assets/breakfast.png" alt="Choose Meals" />
              </div>
              <h3>Choose Your Meals</h3>
              <p>
                Lorem Ipsum Dolor Sit Amet,
                Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor
              </p>
              <span className="arrow">→</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-lg-4 col-md-6 col-12 mb-4">
            <div className="work-card">
              <div className="icon-box">
                <img src="src/assets/breakfast(1) 1 (1).png" alt="Track Order" />
              </div>
              <h3>Track Order</h3>
              <p>
                Lorem Ipsum Dolor Sit Amet,
                Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor
              </p>
              <span className="arrow">→</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-lg-4 col-md-6 col-12 mb-4">
            <div className="work-card">
              <div className="icon-box">
                <img src="src/assets/breakfast.png" alt="Collect Order" />
              </div>
              <h3>Collect Order</h3>
              <p>
                Lorem Ipsum Dolor Sit Amet,
                Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor
              </p>
              <span className="arrow">→</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
