import React from "react";
import { connect } from "react-redux";
import { toggleSearchFieldHidden } from "../../redux/shop/shopActions.js";
import sprite from "../../svg-icons/sprite.svg";
import "../../sass/app.scss";

const SearchIcon = ({ toggleSearchFieldHidden }) => {
  return (
    <div className="search-icon-wrapper" onClick={toggleSearchFieldHidden}>
      <svg className="search-icon">
        <use href={sprite + "#icon-search"}></use>
      </svg>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleSearchFieldHidden: () => dispatch(toggleSearchFieldHidden()),
});

export default connect(null, mapDispatchToProps)(SearchIcon);
