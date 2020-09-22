import React from "react";
import CollectionPage from "../CollectionPage/CollectionPage";
import { createStructuredSelector } from "reselect";
import { selectCollectionsForPreview } from "../../redux/shop/shopSelector.js";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./WomensPageStyles.scss";

const WomensPage = ({ collections }) => {
  const CollectionItems = Object.values(collections);
  const womenCollectionItems = CollectionItems.filter(
    (CollectionItem) => CollectionItem.title === "Women's"
  );

  return (
    <div className="women-page">
      <h1 className="page-link">
        <Link to="/" className="LinkStyling">
          <span className="navigate-link">Home </span>
        </Link>
        / Women
      </h1>

      {womenCollectionItems.map(
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

export default connect(mapStateToProps)(WomensPage);
