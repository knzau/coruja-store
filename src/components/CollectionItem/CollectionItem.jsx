import React from "react";
import ShoppingBagCart from "../../icons/shopping-bag-cart.png";
import DeleteIcon from "../../icons/icons8-delete-512.png";
import HeartIcon from "../../icons/icons8-heart-144.png";
import { withRouter } from "../../utils";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cartAction";
import { openCollectionItem } from "../../redux/collectionItemDetail/collectionItemAction.js";
import {
  addItemWishlist,
  removeWishlistItem,
} from "../../redux/wishlist/wishlistActions";

import "./ScaleUpAnimation.scss";
import "../../sass/app.scss";

const CollectionItem = ({
  item,
  addItem,
  addItemWishlist,
  removeWishlistItem,
  match,
  openCollectionItem,
}) => {
  const { imageUrl, name, price } = item;
  return (
    <div className="collection-item-wrapper">
      <div className="collection-item">
        <div
          onClick={() => {
            openCollectionItem(item);
          }}
          className="collection-image"
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
        <div className="heart-icon-wrapper">
          {match.url === "/iwish" ? (
            <img
              src={DeleteIcon}
              alt="close"
              className="wishlist-btn"
              onClick={() => removeWishlistItem(item)}
            />
          ) : (
            <img
              src={HeartIcon}
              alt="heart"
              onClick={() => addItemWishlist(item)}
              className="wishlist-btn"
            />
          )}
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
              className="wishlist-btn"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  addItemWishlist: (item) => dispatch(addItemWishlist(item)),
  removeWishlistItem: (item) => dispatch(removeWishlistItem(item)),
  openCollectionItem: (item) => dispatch(openCollectionItem(item)),
});

export default withRouter(connect(null, mapDispatchToProps)(CollectionItem));
