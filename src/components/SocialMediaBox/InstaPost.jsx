import React from "react";
import "./InstaPostStyles.scss";

const InstaPost = ({ imageUrl }) => {
  return (
      <div class="image-wrapper">
        <div class="image-item insta-page">
          <a class="image insta-image" href={imageUrl}>
            <img alt="insta-img" src={imageUrl} />
          </a>
        </div>
      </div>
  );
};

export default InstaPost;
