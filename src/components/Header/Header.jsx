import React from "react";
import logo from "../../coruja-logo.png";
import CartIcon from "../CartICon/CartIcon";
import CartDropDown from "../CartDropDown/CartDropDown";
import ProfileIcon from "../ProfileIcon/ProfileIcon";
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
              className={({ isActive }) =>
                isActive ? "is-active" : "nav-link"
              }
              to="/shop/women"
            >
              Women
            </NavLink>
          </li>
          <li className="nav-menu-item">
            <NavLink
              to="/shop/men"
              className={({ isActive }) =>
                isActive ? "is-active" : "nav-link"
              }
            >
              Men
            </NavLink>
          </li>
          <li className="nav-menu-item">
            <NavLink
              to="/contact-us"
              className={({ isActive }) =>
                isActive ? "is-active" : "nav-link"
              }
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
            <ProfileIcon className="icons" />
          </Link>
        ) : (
          <Link to="/signin">
            <ProfileIcon className="icons" />
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
