import React from "react";
import ShoppingBagCart from "../../icons/shopping-bag-cart.png";
import heartIcon from "../../icons/icons8-heart-144.png";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cartAction";
import {
  addItemWishlist,
  removeWishlistItem,
} from "../../redux/wishlist/wishlistActions";

import "./CollectionItemStyles.scss";
import CustomButton from "../CustomButton/CustomButton";

const CollectionItem = ({ item, addItem, addItemWishlist, history, match }) => {
  const { imageUrl, name, price } = item;
  return (
    <div className="collection-item-wrapper">
      <div className="collection-item">
        <div
          className="collection-image"
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
        <div className="heart-icon-wrapper">
          <img
            onClick={() => addItemWishlist(item)}
            src={heartIcon}
            alt="hearticon"
            className="wishlist-btn"
          />
        </div>

        <div className="collection-footer">
          <span className="name">{name}</span>
          <span className="price">$ {price}</span>
          <div className="shopping-bag-wrapper">
            <img
              onClick={() => addItem(item)}
              src={ShoppingBagCart}
              alt="shopping-bag"
              id="addCart"
              className="animate__animated animate__bounce"
            />
          </div>
        </div>
      </div>
      {match.url === "/iwish" ? (
        <CustomButton onClick={() => removeWishlistItem(item)}>
          Remove
        </CustomButton>
      ) : null}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  addItemWishlist: (item) => dispatch(addItemWishlist(item)),
  removeWishlistItem: (item) => dispatch(removeWishlistItem(item)),
});

export default withRouter(connect(null, mapDispatchToProps)(CollectionItem));
