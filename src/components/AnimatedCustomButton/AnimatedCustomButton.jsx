import React from "react";

import "../../sass/app.scss";

const AnimatedCustomButton = ({ children, ...props }) => {
  return (
    <div className="animated-btn" {...props}>
      <span>{children}</span>
    </div>
  );
};

export default AnimatedCustomButton;
