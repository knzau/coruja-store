import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCurrentUser } from "./redux/user/userSelector";
import { setCurrentUser } from "./redux/user/userActions";
import { selectCollectionsForPreview } from "./redux/shop/shopSelector";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import HeaderSearchBox from "./components/HeaderSearchBox/HeaderSearchBox.jsx";
import Footer from "./components/Footer/Footer";
import Copyright from "./components/Copyright/Copyright";

import HomePage from "./components/Pages/HomePage/HomePage";

import WomensPage from "./components/Pages/WomensPage/WomensPage.jsx";
import MensPage from "./components/Pages/MensPage/MensPage.jsx";
import SignInPage from "./components/Pages/SignInPage/SignInPage";
import MyAccountPage from "./components/Pages/MyAccountPage/MyAccountPage";
import ContactPage from "./components/Pages/ContactPage/ContactPage";
import CheckoutPage from "./components/Pages/CheckoutPage/CheckoutPage";
import WishlistPage from "./components/Pages/WishlistPage/WishlistPage";
import HatsPage from "./components/Pages/HatsPage/HatsPage.jsx";
import ShoesPage from "./components/Pages/ShoesPage/ShoesPage.jsx";

import "./App.css";

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
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
        <HeaderSearchBox />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/men" component={MensPage} />
          <Route path="/women" component={WomensPage} />
          <Route path="/hats" component={HatsPage} />
          <Route path="/sneakers" component={ShoesPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignInPage />
            }
          />
          <Route
            exact
            path="/myaccount"
            render={() =>
              this.props.currentUser === null ? (
                <Redirect to="/" />
              ) : (
                <MyAccountPage />
              )
            }
          />
          <Route path="/iwish" component={WishlistPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route path="/contact-us" component={ContactPage} />
        </Switch>
        <Footer />
        <Copyright />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionsArray: selectCollectionsForPreview,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
