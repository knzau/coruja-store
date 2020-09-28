import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import CollectionPage from "../CollectionPage/CollectionPage";
import { selectCollectionsForPreview } from "../../redux/shop/shopSelector.js";
import { createStructuredSelector } from "reselect";

import "../../sass/app.scss";

const ShoesPage = ({ collections }) => {
  const CollectionItems = Object.values(collections);
  console.log(collections);
  const shoeCollectionItems = CollectionItems.filter(
    (CollectionItem) => CollectionItem.title === "Sneakers"
  );
  return (
    <div>
      <h1 className="page-link">
        <Link to="/" className="LinkStyling">
          <span className="navigate-link">Home </span>
        </Link>
        / Shoes
      </h1>

      {shoeCollectionItems.map(
        ({ id, items, title, ...otherCollectionProps }) => (
          <CollectionPage
            key={id}
            items={items}
            title={title}
            {...otherCollectionProps}
          />
        )
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(ShoesPage);
