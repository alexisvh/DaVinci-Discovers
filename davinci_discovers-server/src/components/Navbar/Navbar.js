import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/feed">Feed</NavLink>
            <NavLink to="/login">Log In</NavLink>
        </NavMenu>
      </Nav>
    </>
  );
}

export default Navbar;