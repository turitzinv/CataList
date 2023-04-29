import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {

  // const linkStyles = {
  //   display: "inline-block",
  //   width: "110px",
  //   padding: "5px",
  //   margin: "5px",
  //   background: "rgb(30, 124, 105)",
  //   textDecoration: "none",
  //   color: "white",
  //   fontWeight: "bold",
  //   fontSize: "20px",
  // }

  return (
    <div>
      <NavLink id="home-navbar" to="/">
        Home
      </NavLink>
      <NavLink id="mylists-navbar" to="/lists">
        My Lists
      </NavLink>
      <NavLink id="login-navbar" to="/login">
        Login
      </NavLink>
    </div>
  );
};

export default NavBar;
