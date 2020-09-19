import React from "react";
import { connect } from "react-redux";
import { ReactComponent as SearchIconSVG } from "../../icons/search-24px.svg";
import { toggleSearchFieldHidden } from "../../redux/shop/shopActions.js";
import "./SearchIconStyles.scss";

const SearchIcon = ({ toggleSearchFieldHidden }) => {
  return (
    <div className="search-icon-wrapper" onClick={toggleSearchFieldHidden}>
      <SearchIconSVG />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleSearchFieldHidden: () => dispatch(toggleSearchFieldHidden()),
});

export default connect(null, mapDispatchToProps)(SearchIcon);
