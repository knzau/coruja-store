import React from "react";


import CollectionItem from "../../CollectionItem/CollectionItem";
import ProductDetail from "../../ProductDetail/ProductDetail";


import "./CollectionPage.scss";

const CollectionPage = ({ items, title}) => {

  return (
    <div className="collection-page">
      <ProductDetail />
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
