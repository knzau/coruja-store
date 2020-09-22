import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import CollectionPage from "../CollectionPage/CollectionPage";
import { firestore } from "../../firebase/firebase.utils.js";
import { convertCollectionSnapshotToMap } from "../../firebase/firebase.utils.js";
import { updateCollections } from "../../redux/shop/shopActions.js";

class ShopPage extends Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");

    collectionRef.onSnapshot(async (snapshot) => {
      const collectionsMap = convertCollectionSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
    });
  }

  render() {
    const { match } = this.props;
    return (
      <div>
        <div className="shop-page">
          <Route
            path={`${match.path}/:collectionId`}
            component={CollectionPage}
          />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
