import React from "react";
import logo from "../../coruja-logo.png";
import shoppingBagIcon from "../../icons/shopping_bag-24px.svg";
import searchIcon from "../../icons/search-24px.svg";
import favouriteIcon from "../../icons/favorite_border-24px.svg";
import personIcon from "../../icons/person_outline-24px.svg";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header__nav-menu">
        <ul className="header__nav-menu-items">
          <li className="nav-menu-item">Shop</li>
          <li className="nav-menu-item">Sales</li>
          <li className="nav-menu-item">Shipping</li>
          <li className="nav-menu-item">Contacts</li>
        </ul>
      </div>
      <div className="logo-box">
        <img src={logo} alt="coruja-logo" className="logo" />
      </div>
      <p className="contact">+444-0101-000</p>
      <div className="account-features">
        <img className="icons search" src={searchIcon} alt="bag" />
        <img className="icons heart" src={favouriteIcon} alt="bag" />
        <img className="icons person" src={personIcon} alt="bag" />
        <img className="icons shoppingBag" src={shoppingBagIcon} alt="bag" />
      </div>
    </div>
  );
};

export default Header;
