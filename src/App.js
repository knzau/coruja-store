import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import HomePage from "./components/Pages/HomePage/HomePage";
import ShopPage from "./components/Pages/ShopPage/ShopPage.jsx";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={HomePage} />
      <Route path="/shop" component={ShopPage} />
    </div>
  );
}

export default App;
