import React from "react";
import Header from "../../Header/Header";
import CallToAction from "../../CallToAction/CallToAction";
import Directories from "../../Directories/Directories";
import DiscountSales from "../../DiscountsSales/DiscountSales";

const HomePage = () => {
  return (
    <div className="homepage">
      <Header />
      <CallToAction />
      <Directories />
      <DiscountSales />
    </div>
  );
};

export default HomePage;
