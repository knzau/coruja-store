import React from "react";

import "../CustomButton/CustomButton";
import "./SocialMediaBoxStyle.scss";

const SocialMediaBox = () => {
  return (
    <div className="social-media-box">
      <p className="header-small">Share your style with</p>
      <h1 className="header-medium">#Corujastore</h1>
      <button className="btn-subscribe">subscribe</button>
    </div>
  );
};

export default SocialMediaBox;
