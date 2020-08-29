import React from "react";
import { NavLink } from "react-router-dom";

const SignedInLinks = () => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/upload">New Poem</NavLink>
      </li>
      <li>
        <NavLink to="/signin">Log Out</NavLink>
      </li>
      <li>
        <NavLink to="/profile" className="btn btn-floating teal darken-1">
          KB
        </NavLink>
      </li>
    </ul>
  );
};

export default SignedInLinks;
