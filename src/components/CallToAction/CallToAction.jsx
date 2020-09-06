import React from "react";
import "./CallToActionStyles.scss";
import ctaBackgroundImage from "../../images/cta-2.png";
import CustomButton from "../CustomButton/CustomButton";

import { ReactComponent as PinterestIcon } from "../../icons/icon-pinterest.svg";
import { ReactComponent as InstagramIcon } from "../../icons/icon-instagram.svg";
import { ReactComponent as YoutubeIcon } from "../../icons/icon-youtube.svg";
import { ReactComponent as TwitterIcon } from "../../icons/icon-twitter.svg";

const CallToAction = () => {
  return (
    <div className="cta-section">
      <h1 className="cta-primary-header">
        latest drip<br></br>for you
      </h1>
      <a href="#shop" className="shop-btn">
        <CustomButton inverted>Shop now</CustomButton>
      </a>
      <div className="social-media-icons">
        <a href="#twitter" className="link">
          <TwitterIcon className="social-icon" />
        </a>
        <a href="#insta" className="link">
          <InstagramIcon className="social-icon" />
        </a>
        <a href="#youtube" className="link">
          <YoutubeIcon className="social-icon" />
        </a>
        <a href="#pinterest" className="link">
          <PinterestIcon className="social-icon" />
        </a>
      </div>
      <div className="cta-bg">
        <img src={ctaBackgroundImage} alt="cta-img" className="cta-bg-img" />
      </div>
    </div>
  );
};

export default CallToAction;
