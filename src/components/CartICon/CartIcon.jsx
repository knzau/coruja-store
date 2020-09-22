import React from "react";
import { connect } from "react-redux";
import sprite from "../../svg-icons/sprite.svg";

import { toggleCartHidden } from "../../redux/cart/cartAction";
import { selectCartItemsCount } from "../../redux/cart/cartSelector";
import { createStructuredSelector } from "reselect";

import "../../sass/app.scss";

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <svg className="shopping-icon">
        <use href={sprite + "#icon-shopping-cart"}></use>
      </svg>
      {itemCount ? (     
          <span className="item-count">{itemCount}</span>

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
