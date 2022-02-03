import React, { useState, useEffect } from "react";

import { Route, Routes } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCurrentUser } from "./redux/user/userSelector";
import { setCurrentUser } from "./redux/user/userActions";
import { selectCollectionsForPages } from "./redux/shop/shopSelector";
import { auth } from "./firebase/firebase.utils";

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

function App({ setCurrentUser, collectionsArray, currentUser }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, [setCurrentUser]);

  // auth.onAuthStateChanged((user) => {
  //   setCurrentUser(user);
  // });

  console.log(currentUser);

  return (
    <div className="App">
      <TopStrip />
      <HeaderSearchBox />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/shop"
          element={<ShopPage loading={loading} setLoading={setLoading} />}
        ></Route>
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/myaccount" element={<MyAccountPage />} />
        <Route path="/iwish" element={<WishlistPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/contact-us" element={<ContactPage />} />
      </Routes>
      <Footer />
      <Copyright />
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionsArray: selectCollectionsForPages,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
