import React from "react";
import Feed from "react-instagram-authless-feed";

import "./FeedStyles.scss";

const IGFeed = () => {
  return (
    <div className="feed-container" >
      <div className="text-wrapper-social">
        <p className="coruja-store">@corujastore</p>
      </div>
      <Feed username="ken_nzau" classname="Feeds" classnameLoading="Loading" />
    </div>
  );
};

export default IGFeed;
