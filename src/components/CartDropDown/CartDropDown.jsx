import React from "react";
import CustomButton from "../CustomButton/CustomButton";

import "./CartDropDownStyles.scss";
const CartDropDown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items" />
      <CustomButton>Go to checkout </CustomButton>
    </div>
  );
};

export default CartDropDown;
