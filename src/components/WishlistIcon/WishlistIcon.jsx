import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectwishlistItemsCount } from "../../redux/wishlist/wishlistSelector.js";
import { ReactComponent as FavouriteIcon } from "../../icons/favorite_border-24px.svg";

import "./WishlistIconStyles.scss";

const WishlistIcon = ({ wishlistItemsCount }) => {
    return (
      <div className="wishlist-count-circle">
            <span className="wishlist-count">{wishlistItemsCount}</span>
             <FavouriteIcon className="heart-icon" />
      </div>
    );
};

const mapStateToProps = createStructuredSelector({
  wishlistItemsCount: selectwishlistItemsCount,
});

export default connect(mapStateToProps)(WishlistIcon);
