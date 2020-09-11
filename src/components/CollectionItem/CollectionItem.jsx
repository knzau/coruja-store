import React from "react";
import ShoppingBagCart from "../../icons/shopping-bag-cart.png";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cartAction";

import "./CollectionItemStyles.scss";

const CollectionItem = ({ item, addItem }) => {
  const { imageUrl, name, price } = item;
  return (
    <div className="collection-item">
      <div
        className="collection-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">$ {price}</span>
        <img
          onClick={() => addItem(item) }
          src={ShoppingBagCart}
          alt="shopping-bag"
          id="addCart"
          className="animate__animated animate__bounce"
        />
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null,mapDispatchToProps)(CollectionItem);
