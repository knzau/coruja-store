import React from "react";
import Header from "../Header/Header";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectSearchHidden } from "../../redux/shop/shopSelector";
import SearchComponent from "../SearchComponent/SearchComponent";

import "./HeaderSearchBoxStyles.scss";


const HeaderSearchBox = ({ searchFieldhidden }) => {
  return (
    <div className="header-search-box">
      {searchFieldhidden ? <Header /> : <SearchComponent />}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  searchFieldhidden: selectSearchHidden,
});
export default connect(mapStateToProps)(HeaderSearchBox);
