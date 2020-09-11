import React from "react";
import logo from "../../coruja-logo.png";
import CartIcon from "../CartICon/CartIcon";
import CartDropDown from "../CartDropDown/CartDropDown";
import { selectCartHidden } from "../../redux/cart/cartSelector";
import { ReactComponent as SearchIcon } from "../../icons/search-24px.svg";
import { ReactComponent as FavouriteIcon } from "../../icons/favorite_border-24px.svg";
import { ReactComponent as PersonIcon } from "../../icons/person_outline-24px.svg";
import { selectCurrentUser } from "../../redux/user/userSelector.js";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Link } from "react-router-dom";
import "./Header.scss";

function Header({ currentUser, hidden }) {
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
        <CartIcon />
      </div>
      {hidden ? null : <CartDropDown />}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
