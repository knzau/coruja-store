import React from "react";
import sprite from "../../svg-icons/sprite.svg";

import "../../sass/app.scss";

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
            <svg className="footer-social-icon ">
              <use href={sprite + "#icon-twitter-with-circle"}></use>
            </svg>
          </a>
          <a href="#instagram" className="footer-social-link">
            <svg className="footer-social-icon ">
              <use href={sprite + "#icon-instagram-with-circle"}></use>
            </svg>
          </a>
          <a href="#youtube" className="footer-social-link">
            <svg className="footer-social-icon ">
              <use href={sprite + "#icon-youtube-with-circle"}></use>
            </svg>
          </a>
          <a href="#pinterest" className="footer-social-link">
            <svg className="footer-social-icon ">
              <use href={sprite + "#icon-pinterest-with-circle"}></use>
            </svg>
          </a>
        </div>
        <p className="footer-contact">We Work All The Holidays</p>
      </div>
    </div>
  );
};

export default Footer;
