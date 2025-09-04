import React from "react";
import "./Footer.css";
import "@fontsource/poppins"; // Defaults to weight 400 (normal)
import "@fontsource/poppins/400.css"; // Specify weight
import "@fontsource/poppins/500.css"; // Medium weight
import "@fontsource/poppins/700.css"; // Bold weight
const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row">
          {/* Logo and About */}
          <div className="col-md-4 footer-about">
           <div className="d-flex ">
  <div className="burger-logo ">
    <img className="Logo" src="/assets/burger1.png" alt="Burger Logo" />
  </div>
  <h5 className="footer-title mb-0">BURGER</h5>
</div>

            <p className="footer-text">
              LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO
              EIUSMOD TEMPOR INCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA
            </p>
            <p className="footer-contact">+91 9876543210</p>
            <p className="footer-contact">mail@gmail.com</p>
            <p className="footer-contact">xyz, anyware rode, sectore 4</p>
          </div>

          {/* Service Links */}
          <div className="col-md-2 footer-links">
            <h6>Service</h6>
            <ul>
              <li>Burger</li>
              <li>Menu</li>
              <li>Hot Items</li>
              <li>About</li>
              <li>Services</li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="col-md-2 footer-links">
            <h6>Follow Us</h6>
            <ul>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Linked In</li>
              <li>Tweeter</li>
              <li>Whatsapp</li>
            </ul>
          </div>

          {/* Subscribe */}
          <div className="col-md-4 footer-subscribe">
            <h6>Subscribe For New Update</h6>
            <form className="d-flex subscribe-form">
              <input
                type="email"
                className="form-control"
                placeholder="Enter Email..."
              />
              <button type="submit" className="arrow-btn">
                →
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="row footer-bottom">
          <div className="col text-end">
  <hr className="footer-line" />
  <p>Burger.Com© All Right Reserve</p>
</div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;

