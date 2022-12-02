import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  background-color: #333;
  overflow: hidden;
  align-items: center;
`;

export const NavLink = styled(Link)`
  font-family: 'Jost';
  color: #f2f2f2;
  text-align: center;
  padding: 5px 30px;
  text-decoration: none;
  font-size: 13px;
  float: left;
  cursor: pointer;
  &.active {
    background-color: gray;
    color: white;
  }
  &.hover{
    background-color: #ddd;
    color: black;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
`;
