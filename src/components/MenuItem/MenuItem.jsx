import React from "react";

import { withRouter } from "../../utils";
import { useNavigate, useLocation } from "react-router-dom";
import AnimatedCustomButton from "../AnimatedCustomButton/AnimatedCustomButton";
import "../../sass/app.scss";

const MenuItem = ({ title, imageUrl, linkUrl }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const navUrl = `${location.pathname}shop/${linkUrl}`;

  return (
    <div
      className={`${title} menu-item `}
      onClick={() => {
        navigate(navUrl);
      }}
    >
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="content">
        <AnimatedCustomButton>
          <span>
            {title.toUpperCase()}
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </span>
        </AnimatedCustomButton>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
