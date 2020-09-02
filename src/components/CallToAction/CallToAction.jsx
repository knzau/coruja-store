import React from "react";
import "./CallToActionStyles.scss";
import ctaBackgroundImage from "../../images/cta-2.png";
import CustomButton from "../CustomButton/CustomButton";

import instaIcon from "../../icons/icon-instagram.svg";
import pinterestIcon from "../../icons/icon-pinterest.svg";
import youtubeIcon from "../../icons/icon-youtube.svg";
import twitterIcon from "../../icons/icon-twitter.svg";

const CallToAction = () => {
  return (
    <div className="cta-section">
      <h1 className="primary-header">Ideal everyday</h1>
      <a href="#shop" className="btn shop-btn">
        <CustomButton>Shop the collection</CustomButton>
      </a>
      <div className="social-media-icons">
        <a href="#twitter" className="link">
          <img src={twitterIcon} alt="social-icon" className="social-icon" />
        </a>{" "}
        <a href="#insta" className="link">
          <img src={instaIcon} alt="social-icon" className="social-icon" />
        </a>{" "}
        <a href="#youtube" className="link">
          <img src={youtubeIcon} alt="social-icon" className="social-icon" />
        </a>{" "}
        <a href="#pinterest" className="link">
          <img src={pinterestIcon} alt="social-icon" className="social-icon" />
        </a>{" "}
      </div>
      <div className="cta-bg">
        <img src={ctaBackgroundImage} alt="cta-img" className="cta-bg-img" />
      </div>
    </div>
  );
};

export default CallToAction;
