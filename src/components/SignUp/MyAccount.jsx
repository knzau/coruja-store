import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectwishlistItemsCount } from "../../redux/wishlist/wishlistSelector.js";
import "./MyAccountStyles.scss";

const MyAccount = ({ wishlistItemsCount }) => {
  return (
    <div className="my-account">
      <h1 className="page-link">
        <span className="navigate-link">Home </span>/ Register
      </h1>
      <h1 className="header__my-account">My account</h1>
      <div className="account-details-wrapper">
        <div className="wishlist">
          <h2 className="header-wishlist">Wishlist</h2>
          <p className="text-my-account">
            You currently have {wishlistItemsCount} items in your wishlist.
          </p>
          <Link to="/iwish" className="LinkStyling">
            <CustomButton>View wishlist</CustomButton>
          </Link>
        </div>
        <div className="account-details">
          <h2 className="header-wishlist">Account Details</h2>
          <p className="text-my-account">Welcome your name</p>
          <CustomButton onClick={() => auth.signOut}>Log out</CustomButton>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  wishlistItemsCount: selectwishlistItemsCount,
});

export default connect(mapStateToProps)(MyAccount);
