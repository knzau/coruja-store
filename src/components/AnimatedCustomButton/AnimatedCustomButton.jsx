import React from "react";

import "./AnimatedCustomButtonStyles.scss";

const AnimatedCustomButton = ({ children, ...props }) => {
  return (
    <div className="animated-btn" {...props}>
      <span>{children}</span>
    </div>
  );
};

export default AnimatedCustomButton;
