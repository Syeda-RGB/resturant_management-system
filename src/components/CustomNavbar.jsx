import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function CustomNavbar() {
  return (
    <nav className="navbar navbar-expand-lg  px-3">

        <div  className="Logo_Par d-flex" >
       <img className="Logo"  src="/assets/burger1.png" alt=" ger Logo"     />
        <span className="ms-2 text-white">Burger</span>
        
        </div>
     

      {/* Toggle Button */}
      <button
        className="navbar-toggler border-0 text-white"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        {/* Replace with your Toggle SVG */}
        <svg
          width="24"
          height="24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="4" width="24" height="2" />
          <rect y="11" width="10" height="2" />
          
        </svg>
      </button>

      {/* Navbar Links */}
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Services
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Contact
            </a>
          </li>
        </ul>
      </div>
     
    </nav>
  );
}
