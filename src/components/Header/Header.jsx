import React from "react";
import logo from "../../coruja-logo.png";
import CartIcon from "../CartICon/CartIcon";
import CartDropDown from "../CartDropDown/CartDropDown";
import  SearchIcon  from "../SearchIcon/SearchIcon";
import { ReactComponent as PersonIcon } from "../../icons/person_outline-24px.svg";
import WishlistIcon from "../WishlistIcon/WishlistIcon";
import { selectCurrentUser } from "../../redux/user/userSelector.js";
import { selectCartHidden } from "../../redux/cart/cartSelector";
import { Link } from "react-router-dom";
import "./Header.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

const Header = ( { currentUser, hidden }) => {

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
            <div className="account-features">
              {currentUser ? (
                <Link to="/myaccount">
                  <WishlistIcon />
                </Link>
              ) : (
                <Link to="/signin">
                  <WishlistIcon />
                </Link>
              )}
              {currentUser ? (
                <Link to="/myaccount">
                  <PersonIcon className="icons myAccount" />
                </Link>
              ) : (
                <Link to="/signin">
                  <PersonIcon className="icons person" />
                </Link>
              )}
              <SearchIcon
                className="icons search"
              />
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
