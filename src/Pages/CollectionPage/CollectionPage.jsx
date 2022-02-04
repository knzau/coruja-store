import React from "react";
import { selectProductDetail } from "../../redux/collectionItemDetail/collectionItemSelector.js";
import { selectCollection } from "../../redux/shop/shopSelector.js";
import { connect } from "react-redux";
import { withRouter } from "../../utils.js";
import { NavLink } from "react-router-dom";
import CollectionItem from "../../components/CollectionItem/CollectionItem";
import ProductDetail from "../../components/ProductDetail/ProductDetail";

import "../../sass/app.scss";

const CollectionPage = ({ collection, productDetailItem, router }) => {
  const { items, title } = collection || {};

  return (
    <div className="collection-page">
      <h1 className="page-link">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "is-active" : "nav-link LinkStyling"
          }
        >
          <span className="navigate-link">Home </span>
        </NavLink>
        / {title.toUpperCase()}
      </h1>

      {productDetailItem ? <ProductDetail /> : null}
      <h1 className="collection-title">{title} collection</h1>
      <div className="collection-items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.router.params?.collectionId)(state),
  productDetailItem: selectProductDetail,
});

export default withRouter(connect(mapStateToProps)(CollectionPage));
