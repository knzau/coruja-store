import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCurrentUser,
  selectCurrentUserName,
} from "../../redux/user/userSelector.js";
import { selectwishlistItemsCount } from "../../redux/wishlist/wishlistSelector.js";
import CustomButton from "../../components/CustomButton/CustomButton";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils.js";

import "../../sass/app.scss";

const MyAccount = ({ wishlistItemsCount, currentUserName, currentUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.signOut();
    navigate("/signin");
  };

  useEffect(() => {
    if (currentUser === null || !currentUser) {
      return navigate("/signin");
    }
  }, [currentUser, navigate]);

  return (
    <div className="my-account">
      <h2 className="page-link">
        <NavLink
          className={({ isActive }) =>
            isActive ? "is-active" : "nav-link LinkStyling"
          }
          to="/"
        >
          Home
        </NavLink>
        / My Account
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
            Welcome {currentUserName && currentUserName?.toUpperCase()}
          </p>
          <CustomButton className="effect01" onClick={handleLogout}>
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
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(MyAccount);
