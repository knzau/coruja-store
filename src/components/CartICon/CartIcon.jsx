import React from "react";
import { connect } from "react-redux";

import { toggleCartHidden } from "../../redux/cart/cartAction";

import { selectCartItemsCount } from "../../redux/cart/cartSelector";
import { ReactComponent as ShoppingIcon } from "../../icons/shopping_bag-24px.svg";
import { createStructuredSelector } from "reselect";
import "./CartIconStyles.scss";

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      {itemCount ? (
        <div className="cart-itemcount-wrapper">
          <span className="item-count">{itemCount}</span>
        </div>
      ) : null}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
