import React from "react";
import CollectionPage from "../CollectionPage/CollectionPage";
import { createStructuredSelector } from "reselect";
import { selectCollectionsForPreview } from "../../redux/shop/shopSelector.js";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./MensPageStyle.scss";

const MensPage = ({ collections }) => {
  const CollectionItems = Object.values(collections);
  const MenCollectionItems = CollectionItems.filter(
    (CollectionItem) => CollectionItem.title === "Men's"
  );

  return (
    <div className="men-page">
      <h1 className="page-link">
        <Link to="/" className="LinkStyling">
          <span className="navigate-link">Home </span>
        </Link>
        / Men
      </h1>

      {MenCollectionItems.map(
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

export default connect(mapStateToProps)(MensPage);
