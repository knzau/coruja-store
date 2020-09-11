import React from "react";

import MenuItem from "../MenuItem/MenuItem";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directorySelector";

import "./DirectoriesStyles.scss";

const Directories = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionData }) => (
        <MenuItem key={id} {...otherSectionData} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directories);
