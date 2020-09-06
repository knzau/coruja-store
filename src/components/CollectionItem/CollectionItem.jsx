import React from 'react';
import ShoppingBagCart  from "../../icons/shopping-bag-cart.png";

import "./CollectionItemStyles.scss";

const CollectionItem = ({ item }) => {
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
            src={ShoppingBagCart}
            alt="shopping-bag"
            id="addCart"
            className="animate__animated animate__bounce"
          />
        </div>
      </div>
    );
};

export default CollectionItem;