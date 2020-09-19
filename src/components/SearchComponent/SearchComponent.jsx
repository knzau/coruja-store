import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { toggleSearchFieldHidden } from "../../redux/shop/shopActions";
import { searchCollections } from "../../redux/shop/shopActions.js";
import FormInput from "../FormInput/FormInput";
import { selectSearchHidden } from "../../redux/shop/shopSelector";

import "./SearchComponentStyles.scss";

const SearchComponent = ({ searchCollections, toggleSearchFieldHidden }) => {
  const handleSearchChange = (e) => {
    const searchInput = e.target.value;
    console.log(searchInput);
    return searchCollections(searchInput);
  };

  return (
    <div className="search-component">
      <FormInput
        type="search"
        name="search"
        id="search"
        placeholder="Search"
        onChange={handleSearchChange}
      />
      <div
        className="close-search-btn"
        onClick={(event) => {
          toggleSearchFieldHidden();
        }}
      >
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  searchCollections: (searchInput) => dispatch(searchCollections(searchInput)),
  toggleSearchFieldHidden: () => dispatch(toggleSearchFieldHidden()),
});

const mapStateToProps = createStructuredSelector({
  searchFieldhidden: selectSearchHidden,
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchComponent);
