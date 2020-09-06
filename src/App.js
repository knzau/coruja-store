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

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/women" component={WomensPage} />
          <Route path="/men" component={MensPage} />
          <Route path="/signin" component={SignInPage} />
        </Switch>
        <Footer />
        <Copyright />
      </div>
    );
  }
}
export default App;
