import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";
import "./style.css";

const Navbar = () => {
  return (
    <>
      <Nav className="container-fluid">
        <NavMenu>
          <div className="topnav">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/feed">Feed</NavLink>
            <NavLink>Profile</NavLink>
            <NavLink to="/login">Log In</NavLink>
          </div>
        </NavMenu>
      </Nav>
    </>
  );
}

export default Navbar;