import React from "react";
import { withRouter } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../../redux/cart/cartSelector";
import { connect } from "react-redux";
import CheckOutItem from "../../CheckOutItem/CheckOutItem";
import CustomButton from "../../CustomButton/CustomButton";
import "./CheckoutPageStyles.scss";

const CheckoutPage = ({ cartItems, total, history }) => {
  return (
    <div className="checkout-page">
      {cartItems.length ? (
        <div className="shopping-cart-wrapper">
          <h1 className="header-medium">Your cart</h1>
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
            <div className="header-block">
              <span>Remove</span>
            </div>
          </div>
          {cartItems.map((cartItem) => (
            <CheckOutItem key={cartItem.id} cartItem={cartItem} />
          ))}

          <div className="total">
            <span>Total: ${total}</span>
          </div>
        </div>
      ) : (
        <div className="empty-cart-wrapper">
          <h1 className="empty-message">Your Cart</h1>
            <span>Your cart is currently empty.</span>
            
          <CustomButton onClick={ () => history.push('/')}>&#8592; continue shopping</CustomButton>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});
export default withRouter(connect(mapStateToProps)(CheckoutPage));
