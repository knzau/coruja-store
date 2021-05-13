import React from "react";
import Feed from "react-instagram-authless-feed";

import "../../sass/app.scss";

const IGFeed = () => {
  return (
    <div className="feed-container">
      <div className="social-media-box">
        <p className="header-small">Share your style with</p>
        <h1 className="header-medium">#Corujastore</h1>
      </div>
      <div className="text-wrapper-social">
        <p className="coruja-store">@corujastore</p>
      </div>
      <Feed username="ken_nzau" className="Feeds" classNameLoading="Loading" />
    </div>
  );
};

export default IGFeed;
