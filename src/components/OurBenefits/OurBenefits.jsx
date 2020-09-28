import React from "react";
import fastDeliveryIcon from "../../icons/airplanemode_active-24px.svg";
import specialDiscountIcon from "../../icons/iconmonstr-christmas-42.svg";
import moneyReturnsIcon from "../../icons/iconmonstr-award-23.svg";
import highQualityIcon from "../../icons/iconmonstr-trophy-6.svg";

import "../../sass/app.scss";

const OurBenefits = () => {
  return (
    <div className="benefits-section">
      <div className="benefit-box">
        <img
          src={fastDeliveryIcon}
          alt="fastDelivery"
          className="benefits-icon"
        />
        <h4 className="benefits__tertiary-header">Fast Delivery</h4>
        <span>Same day delivery as soon as possible</span>
      </div>
      <div className="benefit-box">
        <img
          src={specialDiscountIcon}
          alt="fastDelivery"
          className="benefits-icon"
        />
        <h4 className="benefits__tertiary-header">Special Discount</h4>
        <span>Get attractive offers daily</span>
      </div>
      <div className="benefit-box">
        <img
          src={moneyReturnsIcon}
          alt="fastDelivery"
          className="benefits-icon"
        />
        <h4 className="benefits__tertiary-header">Money Returns</h4>
        <span>100% Money back guarantee</span>
      </div>
      <div className="benefit-box">
        <img
          src={highQualityIcon}
          alt="fastDelivery"
          className="benefits-icon"
        />
        <h4 className="benefits__tertiary-header">High Quality</h4>
        <span>We have control all stages of manufacturing</span>
      </div>
    </div>
  );
};

export default OurBenefits;
