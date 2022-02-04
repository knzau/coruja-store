import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import { connect } from "react-redux";
import { firestore } from "../../firebase/firebase.utils.js";
import { convertCollectionSnapshotToMap } from "../../firebase/firebase.utils.js";
import { updateCollections } from "../../redux/shop/shopActions.js";
import CollectionPage from "../CollectionPage/CollectionPage.jsx";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner.jsx";
import axios from "axios";

const CollectionPageWithSpinner = LoadingSpinner(CollectionPage);

function ShopPage({ updateCollections }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      if (loading) {
        const collectionRef = await firestore.collection("collections");
        collectionRef.onSnapshot((snapshot) => {
          const collectionsMap = convertCollectionSnapshotToMap(snapshot);
          updateCollections(collectionsMap);
          console.log(collectionsMap);

          setLoading(false);
        });
      }
    })();

    return () => {
      setLoading(false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div className="shop-page">
        <Routes>
          <Route
            path=":collectionId"
            element={<CollectionPageWithSpinner isLoading={loading} />}
          />
        </Routes>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
