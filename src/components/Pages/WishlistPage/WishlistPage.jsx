import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Link } from "react-router-dom";
import { selectwishlistItems, selectwishlistItemsCount } from "../../../redux/wishlist/wishlistSelector";
import CollectionItem from "../../CollectionItem/CollectionItem";
import "./WishlistPageStyles.scss";

const WishlistPage = ({ wishListItems, wishlistItemsCount }) => {
  return (
    <div className="collection-page">
      <h2 className="page-link">
        <Link to="/" className="LinkStyling">
          <span className="navigate-link">Home </span>
        </Link>
        / Women
      </h2>
      <div className="header-wishlist-wrapper">
        <h1 className="header-wishlist">my wishlist</h1>
      </div>
      {wishlistItemsCount ? (
        <div className="collection-items">
          {wishListItems.map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <p className="text-details-wishlist">No Items!</p>
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  wishListItems: selectwishlistItems,
  wishlistItemsCount: selectwishlistItemsCount,
});

export default connect(mapStateToProps)(WishlistPage);
