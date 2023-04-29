import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {

  // const linkStyles = {
  //   display: "inline-block",
  //   width: "140px",
  //   padding: "5px",
  //   margin: "5px",
  //   background: "rgb(30, 124, 105)",
  //   textDecoration: "none",
  //   color: "white",
  //   fontWeight: "bold",
  //   fontSize: "20px"
  // }

  return (
    <div>
      <NavLink class="navbar" to="/">
        Home
      </NavLink>
      <NavLink class="navbar" to="/lists">
        My Lists
      </NavLink>
      <NavLink class="navbar" to="/login">
        Login
      </NavLink>
    </div>
  );
};

export default NavBar;
