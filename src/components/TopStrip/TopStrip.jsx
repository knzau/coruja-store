import React from "react";
import sprites from "../../svg-icons/sprites.svg";

import "../../sass/app.scss";

const TopStrip = () => {
  return (
    <div className="top-strip">
      <span>
        <svg className="top-strip__icon">
          <use href={sprites + "#icon-email"}></use>
        </svg>
        contact@mail.com
      </span>
      <span>
        <svg className="top-strip__icon">
          <use href={sprites + "#icon-phone"}></use>
        </svg>
        +00100020003000
      </span>
      <span className="push-left">USA</span>
      <span>Sign in or Register</span>
    </div>
  );
};

export default TopStrip;
