import React from 'react';
import CustomButton from '../CustomButton/CustomButton';
import { Link } from "react-router-dom";
import "./MyAccountStyles.scss";

const MyAccount = () => {
    return (
      <div className="my-account">
        <h1 className="header-medium">My account</h1>
        <div className="account-details-wrapper">
          <div className="wishlist">
            <h2 className="header-small">Wishlist</h2>
            <p className="text-details">
              `You currently have a couple in your wishlist.`
            </p>
            <Link to="/iwish" className="LinkStyling">
              <CustomButton>View wishlist</CustomButton>
            </Link>
          </div>
                <div className="account-details">
                    <p className="text-details">Welcome your name</p>
                </div>
        </div>
      </div>
    );
};

export default MyAccount;