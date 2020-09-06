import React, { Component } from "react";
import CollectionPage from "../CollectionPage/CollectionPage";
import { Link } from "react-router-dom";
 
import SHOP_DATA from "./SHOP_DATA.js";

class WomensPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    const WomenCollectionItems = collections.filter(
      (collection) => collection.title === "Women's"
    );
    console.log(WomenCollectionItems);
    console.log(collections);

    return (
      <div className="women-page">
        <h1 className="page-link">
          <Link to="/" className="LinkStyling">
            <span className="navigate-link">Home </span>
          </Link>
          / Women
        </h1>
        {WomenCollectionItems.map(({ id, ...otherCollectionProps }) => (
          <CollectionPage key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default WomensPage;
