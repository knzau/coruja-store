import React from "react";
import { Route, Routes } from "react-router-dom";
import { withRouter } from "../../utils";
import { connect } from "react-redux";
import LoadSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import CollectionPage from "../CollectionPage/CollectionPage";
import { firestore } from "../../firebase/firebase.utils.js";
import { convertCollectionSnapshotToMap } from "../../firebase/firebase.utils.js";
import { updateCollections } from "../../redux/shop/shopActions.js";

const CollectionPageWithSpinner = LoadSpinner(CollectionPage);

class ShopPage extends React.Component {
  unsubscribeFromSnapshot = null;
  state = {
    loading: true,
  };
  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");
    console.log(collectionRef);

    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(
      async (snapshot) => {
        const collectionsMap = convertCollectionSnapshotToMap(snapshot);
        console.log(collectionsMap);
        updateCollections(collectionsMap);
        this.setState({ loading: false });
      }
    );
  }

  render() {
    const { location } = this.props;
    const { loading } = this.state;

    return (
      <div>
        <div className="shop-page">
          <Routes>
            <Route
              path={`${location?.path}/:collectionId`}
              render={(props) => (
                <CollectionPageWithSpinner isLoading={loading} {...props} />
              )}
            />
          </Routes>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

export default withRouter(connect(null, mapDispatchToProps)(ShopPage));
