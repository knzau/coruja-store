import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./components/Pages/HomePage/HomePage";
import WomensPage from "./components/Pages/WomensPage/WomensPage.jsx";
import MensPage from "./components/Pages/MensPage/MensPage.jsx";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Copyright from "./components/Copyright/Copyright";
import SignInPage from "./components/Pages/SignInPage/SignInPage";
import SignUpPage from "./components/Pages/SignInPage/SignUpPage";
import MyAccountPage from "./components/Pages/MyAccountPage/MyAccountPage";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import ContactPage from "./components/Pages/ContactPage/ContactPage";

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = createUserProfileDocument(userAuth);

        (await userRef).onSnapshot((snapShot) => {
          this.setState(
            {
              currentUser: {
                id: snapShot.id,
                ...snapShot.data(),
              },
            }
          );
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/women" component={WomensPage} />
          <Route path="/men" component={MensPage} />
          <Route path="/signin" component={SignInPage} />
          <Route path="/register" component={SignUpPage} />
          <Route path="/myaccount" component={MyAccountPage} />
          <Route path="/contact-us" component={ContactPage} />
        </Switch>
        <Footer />
        <Copyright />
      </div>
    );
  }
}
export default App;
