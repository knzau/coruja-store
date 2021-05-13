import React from "react";
import CallToAction from "../../components/CallToAction/CallToAction";
import Directories from "../../components/Directories/Directories";
import DiscountSales from "../../components/DiscountsSales/DiscountSales";
import OurBenefits from "../../components/OurBenefits/OurBenefits";

const HomePage = () => {
  return (
    <div className="homepage">
      <CallToAction />
      <Directories />
      <DiscountSales />
      <OurBenefits />
    </div>
  );
};

export default HomePage;
