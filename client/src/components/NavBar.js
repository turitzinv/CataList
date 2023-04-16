import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {

  const linkStyles = {
    display: "inline-block",
    width: "140px",
    padding: "5px 5px",
    margin: "5px 5px 5px",
    background: "rgb(30, 124, 105)",
    textDecoration: "none",
    color: "white",
    fontWeight: "bold",
    fontSize: "20px"
  }

  return (
    <div>
      <NavLink style={linkStyles} to="/">
        Home
      </NavLink>
      <NavLink style={linkStyles} to="/lists">
        My Lists
      </NavLink>
    </div>
  );
};

export default NavBar;
