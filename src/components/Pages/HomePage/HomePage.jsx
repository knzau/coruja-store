import React from "react";
import CallToAction from "../../CallToAction/CallToAction";
import Directories from "../../Directories/Directories";
import DiscountSales from "../../DiscountsSales/DiscountSales";
import OurBenefits from "../../OurBenefits/OurBenefits";
import SocialMediaBox from "../../SocialMediaBox/SocialMediaBox";
import IGFeed from "../../SocialMediaBox/Feed";

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
