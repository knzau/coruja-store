import React from "react";
import { connect } from "react-redux";
import CustomButton from "../CustomButton/CustomButton";
import HeartIcon from "../../icons/icons8-heart-144.png";
import { addItem } from "../../redux/cart/cartAction";
import { closeProductDetailModal } from "../../redux/collectionItemDetail/collectionItemAction.js";
import { addItemWishlist } from "../../redux/wishlist/wishlistActions";
import {
  selectProductDetail,
  selectModalOpen,
} from "../../redux/collectionItemDetail/collectionItemSelector";

import "./ProductDetailStyles.scss";
import { createStructuredSelector } from "reselect";

const ProductDetail = ({
  productDetailItem,
  modalOpen,
  closeProductDetailModal,
  addItem,
  addItemWishlist,
}) => {
  const { imageUrl, price, name } = productDetailItem;
  console.log(productDetailItem);
  console.log(modalOpen);

  if (modalOpen === false) {
    return null;
  } else {
    return (
      <div id="popup" className="popup">
        <div className="popup__content">
          <div className="popup__left-box">
            <img className="product-img" src={imageUrl} alt="product-img" />
          </div>
          <div className="popup__right-box">
            <span
              onClick={() => closeProductDetailModal(productDetailItem[0])}
              className="popup__close"
            >
              &times;
            </span>
            <h1 className="header-medium">{name}</h1>
            <p className="text-details">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic a
              praesentium adipisci dolorem earum. Asperiores, similique!
            </p>
            <div className="price-wrapper">
              <h1 className="price">$ {price}</h1>
              <span className="available">
                <ion-icon name="checkmark-outline"></ion-icon> Available
              </span>
            </div>
            <div className="button-wrapper">
              <CustomButton
                onClick={() => addItem(productDetailItem)}
                className="effect01"
              >
                Add to bag
              </CustomButton>
              <img
                src={HeartIcon}
                alt="heart"
                className="wishlist-btn"
                onClick={() => addItemWishlist(productDetailItem)}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
};

const mapStateToProps = () =>
  createStructuredSelector({
    productDetailItem: selectProductDetail,
    modalOpen: selectModalOpen,
  });

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  addItemWishlist: (item) => dispatch(addItemWishlist(item)),
  closeProductDetailModal: (item) => dispatch(closeProductDetailModal(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
