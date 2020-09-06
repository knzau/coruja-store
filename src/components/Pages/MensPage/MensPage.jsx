import React, { Component } from "react";
import CollectionPage from "../CollectionPage/CollectionPage";
import { Link } from "react-router-dom";
import "./MensPageStyle.scss";

import SHOP_DATA from "../WomensPage/SHOP_DATA";

class MensPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;

    const MenCollectionItems = collections.filter(
      (collection) => collection.title === "Men's"
    );
    console.log(MenCollectionItems);
    console.log(collections);

    return (
      <div className="men-page">
        <h1 className="page-link">
          <Link to="/" className="LinkStyling">
            <span className="navigate-link">Home </span>
          </Link>
          / Men
        </h1>

        {MenCollectionItems.map(({ id, ...otherCollectionProps }) => (
          <CollectionPage key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default MensPage;
