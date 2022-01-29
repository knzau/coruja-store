import React, { Component } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCurrentUser } from "./redux/user/userSelector";
import { setCurrentUser } from "./redux/user/userActions";
import { selectCollectionsForPages } from "./redux/shop/shopSelector";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import HeaderSearchBox from "./components/HeaderSearchBox/HeaderSearchBox.jsx";
import Footer from "./components/Footer/Footer";
import Copyright from "./components/Copyright/Copyright";

import HomePage from "./Pages/HomePage/HomePage.jsx";
import ShopPage from "./Pages/ShopPage/ShopPage.jsx";
import SignInPage from "./Pages/SignInPage/SignInPage";
import MyAccountPage from "./Pages/MyAccountPage/MyAccountPage";
import ContactPage from "./Pages/ContactPage/ContactPage";
import CheckoutPage from "./Pages/CheckoutPage/CheckoutPage.jsx";
import WishlistPage from "./Pages/WishlistPage/WishlistPage";

import "./sass/app.scss";
import TopStrip from "./components/TopStrip/TopStrip";

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser, collectionsArray } = this.props;
    console.log(collectionsArray);
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = createUserProfileDocument(userAuth);

        (await userRef).onSnapshot((snapShot) => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <TopStrip />
        <HeaderSearchBox />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Navigate replace to="/" />
              ) : (
                <SignInPage />
              )
            }
          />
          <Route
            exact
            path="/myaccount"
            render={() =>
              this.props.currentUser === null ? (
                <Navigate replace to="/" />
              ) : (
                <MyAccountPage />
              )
            }
          />
          <Route path="/iwish" element={<WishlistPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/contact-us" element={<ContactPage />} />
        </Routes>
        <Footer />
        <Copyright />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionsArray: selectCollectionsForPages,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
