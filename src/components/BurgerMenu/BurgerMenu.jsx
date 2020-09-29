import React from "react";
import { Link } from "react-router-dom";

import "../../sass/app.scss";

const BurgerMenu = () => {
  return (
    <div className="navigation">
      <input
        type="checkbox"
        className="navigation__checkbox"
        id="navi-toggle"
      />
      <label htmlFor="navi-toggle" className="navigation__button">
        <span className="navigation__icon">&nbsp;</span>
      </label>
      <div className="navigation__background">&nbsp;</div>
      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item">
            <Link className="navigation__link" to="/women">
              Women
            </Link>
          </li>
          <li className="navigation__item">
            <Link className="navigation__link" to="/men">
              Men
            </Link>
          </li>
          <li className="navigation__item">
            <Link to="/hats" className="navigation__link">
              Hats
            </Link>
          </li>
          <li className="navigation__item">
            <Link className="navigation__link" to="/sneakers">
              Sneakers
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default BurgerMenu;
