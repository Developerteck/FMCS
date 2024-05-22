import React from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <nav>
      <img src={logo} alt="Logo" className="logo" />
      <ul>
        <li>Home</li>
        <li>Program</li>
        <li>About Us </li>
        <li>Campus</li>
        <li>Testimponial</li>
        <li>
          <button className="btn"> Contact Us </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
