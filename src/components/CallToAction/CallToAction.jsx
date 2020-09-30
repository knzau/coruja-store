import React from "react";
import { Link } from "react-router-dom";
import CustomButton from "../CustomButton/CustomButton";
import sprite from "../../svg-icons/sprite.svg";

import "../../sass/app.scss";

const CallToAction = () => {
  return (
    <div className="cta-section">
      <div className="cta-section__btns">
        <h1 className="hero__header">
          latest drip<br></br>for you
        </h1>
        <div className="cta-btns">
          <Link to="/shop/women">
            <CustomButton className="women-btn effect01">
              Shop Women
            </CustomButton>
          </Link>
          <Link to="shop/men">
            <CustomButton className="men-btn effect01">Shop Men</CustomButton>
          </Link>
        </div>
      </div>

      <div className="social-media-icons">
        <a href="#twitter" className="link">
          <svg className="social-icon">
            <use href={sprite + "#icon-twitter-with-circle"}></use>
          </svg>
        </a>
        <a href="#instagram" className="link">
          <svg className="social-icon">
            <use href={sprite + "#icon-instagram-with-circle"}></use>
          </svg>
        </a>
        <a href="#youtube" className="link">
          <svg className="social-icon">
            <use href={sprite + "#icon-youtube-with-circle"}></use>
          </svg>
        </a>
        <a href="#pinterest" className="link">
          <svg className="social-icon">
            <use href={sprite + "#icon-pinterest-with-circle"}></use>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default CallToAction;
