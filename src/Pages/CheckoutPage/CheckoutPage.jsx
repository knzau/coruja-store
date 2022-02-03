import React from "react";
import { NavLink } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cartSelector.js";
import { selectCurrentUser } from "../../redux/user/userSelector.js";
import { connect } from "react-redux";
import CheckOutItem from "../../components/CheckOutItem/CheckOutItem";
import CustomButton from "../../components/CustomButton/CustomButton";
import { withRouter } from "../../utils.js";
import StripeCheckoutButton from "../../components/StripeCheckoutButton/StripeCheckoutButton";

import "../../sass/app.scss";

const CheckoutPage = ({ cartItems, total, history }) => {
  return (
    <div className="checkout-page">
      <h2 className="page-link">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "is-active" : "nav-link LinkStyling"
          }
        >
          <span className="navigate-link">Home </span>
        </NavLink>
        / Your cart
      </h2>
      <div className="header-checkout-wrapper">
        <h1 className="header-wishlist">Your Cart </h1>
      </div>
      {cartItems.length ? (
        <div className="shopping-cart-wrapper">
          <div className="checkout-header">
            <div className="header-block">
              <span>Product</span>
            </div>
            <div className="header-block">
              <span>Description</span>
            </div>
            <div className="header-block">
              <span>Quantity</span>
            </div>
            <div className="header-block">
              <span>Price</span>
            </div>
            <div className="header-block total-header">
              <span>Total</span>
            </div>
            <div className="header-block remove">
              <span>Remove</span>
            </div>
          </div>
          {cartItems.map((cartItem) => (
            <CheckOutItem key={cartItem.id} cartItem={cartItem} />
          ))}

          <div className="total">
            <span>Total: ${total.toFixed(2)}</span>
          </div>

          <div className="test-warning">
            *Please use the following test credit card for payments*
            <br />
            4242 4242 4242 4242 - Exp: 01/21 - CVV: 123
          </div>
          <CustomButton
            className="custom-btn"
            onClick={() => history.push("/")}
          >
            &#8592; continue shopping
          </CustomButton>
          <StripeCheckoutButton price={total} />
        </div>
      ) : (
        <div className="empty-cart-wrapper">
          <span>Your cart is currently empty.</span>
          <CustomButton className="effect01" onClick={() => history.push("/")}>
            &#8592; continue shopping
          </CustomButton>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
  currentUser: selectCurrentUser,
});
export default withRouter(connect(mapStateToProps)(CheckoutPage));
