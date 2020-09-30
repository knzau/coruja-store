import React from "react";
import logo from "../../coruja-logo.png";
import CartIcon from "../CartICon/CartIcon";
import CartDropDown from "../CartDropDown/CartDropDown";
import WishlistIcon from "../WishlistIcon/WishlistIcon";
import { selectCurrentUser } from "../../redux/user/userSelector.js";
import { selectCartHidden } from "../../redux/cart/cartSelector";
import { Link, NavLink } from "react-router-dom";
import "../../sass/app.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

const Header = ({ currentUser, hidden }) => {
  return (
    <div className="header">
      <BurgerMenu className="burger-menu" />
      <nav className="header__nav">
        <ul className="header__nav-menu-items">
          <li className="nav-menu-item">
            <NavLink
              className="nav-link"
              activeClassName="is-active"
              to="/shop/women"
            >
              Women
            </NavLink>
          </li>
          <li className="nav-menu-item">
            <NavLink
              to="/shop/men"
              activeClassName="is-active"
              className="nav-link"
            >
              Men
            </NavLink>
          </li>
          <li className="nav-menu-item">
            <NavLink
              to="/contact-us"
              activeClassName="is-active"
              className="nav-link"
            >
              Contacts
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="logo-box">
        <Link to="/">
          <img src={logo} alt="coruja-logo" className="logo" />
        </Link>
      </div>
      <div className="account-features">
        {currentUser ? (
          <Link to="/myaccount">
            <WishlistIcon className="icons" />
          </Link>
        ) : (
          <Link to="/signin">
            <WishlistIcon className="icons" />
          </Link>
        )}

        <CartIcon className="icons" />
      </div>
      {hidden ? null : <CartDropDown />}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});
export default connect(mapStateToProps)(Header);
