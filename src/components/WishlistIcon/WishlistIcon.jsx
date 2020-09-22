import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectwishlistItemsCount } from "../../redux/wishlist/wishlistSelector.js";
import sprite from "../../svg-icons/sprite.svg";

import "../../sass/app.scss";

const WishlistIcon = ({ wishlistItemsCount }) => {
  return (
    <div className="wishlist-icon-container">
      <svg className="heart-icon">
        <use href={sprite + "#icon-heart-outlined"}></use>
      </svg>
      {wishlistItemsCount ? (
        <span className="wishlist-count">{wishlistItemsCount}</span>
      ) : null}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  wishlistItemsCount: selectwishlistItemsCount,
});

export default connect(mapStateToProps)(WishlistIcon);
