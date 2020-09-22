import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUserName } from "../../redux/user/userSelector.js";
import { selectwishlistItemsCount } from "../../redux/wishlist/wishlistSelector.js";
import CustomButton from "../../components/CustomButton/CustomButton";
import { Link } from "react-router-dom";
import "./MyAccountPageStyles.scss";
import { auth } from "../../firebase/firebase.utils.js";

const MyAccount = ({ wishlistItemsCount, currentUserName }) => {
  return (
    <div className="my-account">
      <h2 className="page-link">
        <Link to="/" className="LinkStyling">
          <span className="navigate-link">Home </span>
        </Link>
        / Your cart
      </h2>
      <div className="header-account-wrapper">
        <h1 className="header-account">My account </h1>
      </div>
      <div className="account-details-wrapper">
        <div className="wishlist">
          <h2 className="header-wishlist">Wishlist</h2>
          {wishlistItemsCount ? (
            <p className="text-my-account">
              You currently have {wishlistItemsCount} items in your wishlist.
            </p>
          ) : (
            <p className="text-my-account">
              You currently have no items in your wishlist.
            </p>
          )}
          <Link to="/iwish" className="LinkStyling">
            <CustomButton className="effect01">View wishlist</CustomButton>
          </Link>
        </div>
        <div className="account-details">
          <h2 className="header-wishlist">Account Details</h2>
          <p className="text-my-account">
            Welcome {currentUserName.toUpperCase()}
          </p>
          <CustomButton className="effect01" onClick={() => auth.signOut()}>
            Log out
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  wishlistItemsCount: selectwishlistItemsCount,
  currentUserName: selectCurrentUserName,
});

export default connect(mapStateToProps)(MyAccount);
