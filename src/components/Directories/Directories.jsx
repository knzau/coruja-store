import React from "react";
import SectionsData from "./Directory-data.js";
import MenuItem from "../MenuItem/MenuItem";

import "./DirectoriesStyles.scss";

const Directories = () => {
  return (
    <div className="directory-menu">
      {SectionsData.map(({ id, ...otherSectionData }) => (
        <MenuItem key={id} {...otherSectionData} />
      ))}
    </div>
  );
};

export default Directories;
