import React from "react";
import CollectionItem from "../../CollectionItem/CollectionItem";

import "./CollectionPage.scss";

const CollectionPage = ({ title, items }) => {
 
  return (
    <div className="collection-page">
      <h1 className="collection-title">{title} collection</h1>
      <div className="collection-items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;
