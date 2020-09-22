import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import CollectionPage from "../CollectionPage/CollectionPage";
import { selectCollectionsForPreview } from "../../redux/shop/shopSelector";
import { createStructuredSelector } from "reselect";

import "./HatsPageStyles.scss";

const HatsPage = ({ collections }) => {
  const CollectionItems = Object.values(collections);
  console.log(collections);
  const HatCollectionItems = CollectionItems.filter(
    (CollectionItem) => CollectionItem.title === "Hats"
  );
  return (
    <div>
      <h1 className="page-link">
        <Link to="/" className="LinkStyling">
          <span className="navigate-link">Home </span>
        </Link>
        / Men
      </h1>

      {HatCollectionItems.map(
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

export default connect(mapStateToProps)(HatsPage);
