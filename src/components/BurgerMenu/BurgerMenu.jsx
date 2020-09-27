import React from "react";
import { Link } from "react-router-dom";

import "../../sass/app.scss";

const BurgerMenu = () => {
  return (
    <div class="navigation">
      <input type="checkbox" class="navigation__checkbox" id="navi-toggle" />
      <label for="navi-toggle" class="navigation__button">
        <span class="navigation__icon">&nbsp;</span>
      </label>
      <div class="navigation__background">&nbsp;</div>
      <nav class="navigation__nav">
        <ul class="navigation__list">
          <li class="navigation__item">
            <Link className="navigation__link" to="/women">
              Women
            </Link>
          </li>
          <li class="navigation__item">
            <Link className="navigation__link" to="/men">
              Men
            </Link>
          </li>
          <li class="navigation__item">
            <Link to="/hats" className="navigation__link">
              Hats
            </Link>
          </li>
          <li class="navigation__item">
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
