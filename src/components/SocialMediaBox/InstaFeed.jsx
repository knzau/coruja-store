import React from "react";
import InstaImages from "./InstaImages.js";
import InstaPost from "./InstaPost.jsx";
import "./InstaFeedStyles.scss";

const InstaFeed = () => {
  return (
    <div id="instafeed">
      <div className="text-wrapper">
        <p className="home-store">@corujastore</p>
      </div>
      {InstaImages.map(({ id, ...otherSectionData }) => (
        <InstaPost key={id} {...otherSectionData} />
      ))}
    </div>
  );
};

export default InstaFeed;
