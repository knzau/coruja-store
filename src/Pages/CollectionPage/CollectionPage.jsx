import React from "react";
import { selectProductDetail } from "../../redux/collectionItemDetail/collectionItemSelector.js";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import CollectionItem from "../../components/CollectionItem/CollectionItem";
import ProductDetail from "../../components/ProductDetail/ProductDetail";

import "../../sass/app.scss";

const CollectionPage = ({ items, title, productDetailItem }) => {
  return (
    <div className="collection-page">
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

const mapStateToProps = createStructuredSelector({
  productDetailItem: selectProductDetail,
});

export default connect(mapStateToProps)(CollectionPage);
