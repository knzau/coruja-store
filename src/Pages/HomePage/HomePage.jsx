import React from "react";
import CallToAction from "../../components/CallToAction/CallToAction";
import Directories from "../../components/Directories/Directories";
import DiscountSales from "../../components/DiscountsSales/DiscountSales";
import OurBenefits from "../../components/OurBenefits/OurBenefits";
import SocialMediaBox from "../../components/SocialMediaBox/SocialMediaBox";
import IGFeed from "../../components/SocialMediaBox/Feed";

const HomePage = () => {
  return (
    <div className="homepage">
      <CallToAction />
      <Directories />
      <DiscountSales />
      <OurBenefits />
      <SocialMediaBox />
      <IGFeed />
    </div>
  );
};

export default HomePage;
