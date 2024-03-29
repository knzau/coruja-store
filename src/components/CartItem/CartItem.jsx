import React from "react";
import "../../sass/app.scss";

const CartItem = ({ item: { imageUrl, price, name, brand, quantity } }) => {
  return (
    <div className="cart-item">
      <img src={imageUrl} alt="item-img" />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
