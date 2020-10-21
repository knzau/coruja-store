import React from "react";
import { connect } from "react-redux";
import {
  clearItemFromCart,
  addItem,
  removeItem,
} from "../../redux/cart/cartAction";
import "../../sass/app.scss";

const CheckOutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-container">
      <div className="image-container checkout-item">
        <img src={imageUrl} alt="" className="item" />
      </div>
      <div className="name checkout-item">
        <span>{name}</span>
      </div>
      <div className="quantity checkout-item">
        <div className="arrow" onClick={() => removeItem(cartItem)}>
          &lt;
        </div>
        <div className="value">
          <span>{quantity}</span>
        </div>
        <div className="arrow" onClick={() => addItem(cartItem)}>
          &gt;
        </div>
      </div>
      <div className="price checkout-item">
        <span>$ {price.toFixed(2)}</span>
      </div>
      <div className="total-price checkout-item">
        <span>$ {(price * quantity).toFixed(2)}</span>
      </div>

      <div
        className="remove-button checkout-item"
        onClick={() => clearItem(cartItem)}
      >
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckOutItem);
