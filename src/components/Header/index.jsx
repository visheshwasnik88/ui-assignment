import React from "react";
import logo from "../../assets/images/logo.png";
import vector from '../../assets/images/Vector.png';
import "../../styles/Header/index.css";

const Header = () => {
  return (
    <header className="header__wrapper">
      <div className="header__content">
        <div className="header__logo">
          <img src={logo} alt="Logo" className="logo" />
          <h3 className="logo__text">Central Texas Fly Fishing</h3>
        </div>

        <nav className="header__nav">
          <ul className="header__nav-list">
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
            <li><img className="menu-icon" src={vector} alt="Menu" /></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
