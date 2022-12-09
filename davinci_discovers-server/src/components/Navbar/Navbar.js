import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";
import "./style.css";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <div className="container-fluid">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/feed">Feed</NavLink>
            <NavLink to="/profile">Profile</NavLink>
            <NavLink to="/login">Log In</NavLink>
          </div>
        </NavMenu>
      </Nav>
    </>
  );
}

export default Navbar;