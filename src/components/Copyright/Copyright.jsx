import React from "react";
import "./CopyrightStyles.scss";
import { ReactComponent as MastercardLogo } from "../../icons/mastercard.svg";
import { ReactComponent as PaypalLogo } from "../../icons/paypal.svg";
import { ReactComponent as VisaLogo } from "../../icons/visa.svg";  

const Copyright = () => {
  return (
    <div className="copyright-section">
      <p className="copyright-text">Copyright &#169; All Rights Reserved.</p>
      <div className="payment-platforms">
        <MastercardLogo className="payment-logo" />
        <PaypalLogo className="payment-logo" />
        <VisaLogo className="payment-logo" />
      </div>
    </div>
  );
};

export default Copyright;
