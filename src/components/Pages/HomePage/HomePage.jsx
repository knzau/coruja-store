import React from "react";
import Header from "../../Header/Header";
import CallToAction from "../../CallToAction/CallToAction";
import Directories from "../../Directories/Directories";
import DiscountSales from "../../DiscountsSales/DiscountSales";
import OurBenefits from "../../OurBenefits/OurBenefits";
import SocialMediaBox from "../../SocialMediaBox/SocialMediaBox";

const HomePage = () => {
  return (
    <div className="homepage">
      <Header />
      <CallToAction />
      <Directories />
      <DiscountSales />
      <OurBenefits />
      <SocialMediaBox />
    </div>
  );
};

export default HomePage;
