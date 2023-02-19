import React from "react";
import { NavLink } from "react-router-dom";

const LinkNav = (props) => {
    const {label, clicked, classes, toPath} = props;
  return (
    <NavLink
      to={toPath}
      onClick={clicked}
      className={classes}
    >
      {label}
    </NavLink>
  );
};

export default LinkNav;
