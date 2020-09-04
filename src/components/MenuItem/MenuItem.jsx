import React from "react";
import { withRouter } from "react-router-dom";
import "./MenuItemStyles.scss";

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
        <h1 className="menu-title">{title.toUpperCase()}</h1>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
