import React from "react";
import { ReactComponent as PinterestIcon } from "../../icons/icon-pinterest.svg";
import { ReactComponent as InstagramIcon } from "../../icons/icon-instagram.svg";
import { ReactComponent as YoutubeIcon } from "../../icons/icon-youtube.svg";
import { ReactComponent as TwitterIcon } from "../../icons/icon-twitter.svg";

import "./FooterStyles.scss";

const Footer = () => {
  return (
    <div className="footer-section">
      <div className="footer-menu-wrapper">
        <h1 className="header-medium">MENU</h1>
        <ul className="footer-main-menu">
          <li className="nav-menu-item footer-menu-item">Shop</li>
          <li className="nav-menu-item footer-menu-item">Features</li>
          <li className="nav-menu-item footer-menu-item">Sales</li>
          <li className="nav-menu-item footer-menu-item">Contacts</li>
        </ul>
        <ul className="footer-secondary-menu">
          <li className="nav-menu-item footer-menu-item">Help</li>
          <li className="nav-menu-item footer-menu-item">Shipping</li>
          <li className="nav-menu-item footer-menu-item">Privacy Policy</li>
          <li className="nav-menu-item footer-menu-item">Faqs</li>
        </ul>
      </div>
      <div className="footer-contacts-wrapper">
        <h1 className="header-medium">Contacts</h1>
        <p className="footer-contact">hello@corujastore.com</p>
        <p className="footer-contact">+444-0101-000-333</p>
      </div>
      <div className="footer-social-wrapper">
        <h1 className="header-medium">Stay social</h1>
        <div className="footer-social-links">
          <a href="#twitter" className="footer-social-link">
            <TwitterIcon className="footer-social-icon" />
          </a>
          <a href="#insta" className="footer-social-link">
            <InstagramIcon className="footer-social-icon" />
          </a>
          <a href="#youtube" className="footer-social-link">
            <YoutubeIcon className="footer-social-icon" />
          </a>
          <a href="#pinterest" className="footer-social-link">
            <PinterestIcon className="footer-social-icon" />
          </a>
        </div>
        <p className="footer-contact">We Work All The Holidays</p>
      </div>
    </div>
  );
};

export default Footer;
