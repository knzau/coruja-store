import React from "react";

import { withRouter } from "react-router-dom";
import AnimatedCustomButton from "../AnimatedCustomButton/AnimatedCustomButton";
import "../../sass/app.scss";

const MenuItem = ({ title, imageUrl, history, linkUrl, match }) => {
  return (
    <div
      className={`${title} menu-item `}
      onClick={() => {
        history.push(`${match.url}${linkUrl}`);
        console.log(match.url);
      }}
    >
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="content">
        <AnimatedCustomButton>
          <span>
            {title.toUpperCase()}{" "}
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </span>
        </AnimatedCustomButton>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
