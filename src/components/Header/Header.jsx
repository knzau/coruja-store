import React from "react";
import logo from "../../coruja-logo.png";
import { ReactComponent as ShoppingBagIcon } from "../../icons/shopping_bag-24px.svg";
import { ReactComponent as SearchIcon } from "../../icons/search-24px.svg";
import { ReactComponent as FavouriteIcon } from "../../icons/favorite_border-24px.svg";
import { ReactComponent as PersonIcon } from "../../icons/person_outline-24px.svg";
import { Link } from "react-router-dom";
import "./Header.scss";


function Header ({ currentUser }) {

  return (
    <div className="header">
      <div className="header__nav-menu">
        <ul className="header__nav-menu-items">
          <Link to="/women" className="header-link">
            <li className="nav-menu-item">Women</li>
          </Link>
          <Link to="/men" className="header-link">
            <li className="nav-menu-item">Men</li>
          </Link>
          <Link to="/" className="header-link">
            <li className="nav-menu-item">Shipping</li>
          </Link>
          <Link to="/contact-us" className="header-link">
            <li className="nav-menu-item">Contacts</li>
          </Link>
        </ul>
      </div>
      <div className="logo-box">
        <Link to="/">
          <img src={logo} alt="coruja-logo" className="logo" />
        </Link>
      </div>
      <p className="contact">+444-0101-000</p>
      <div className="account-features">
        <Link to="/shoppingcart">
          <ShoppingBagIcon className="icons shoppingBag" />
        </Link>

        <FavouriteIcon className="icons heart" />
        {currentUser ? (
          <Link to="/myaccount">
            <PersonIcon className="icons myAccount" />
          </Link>
        ) : (
          <Link to="/signin">
            <PersonIcon className="icons person" />
          </Link>
        )}

        <SearchIcon className="icons search" />
      </div>
    </div>
  );
};

export default Header;
