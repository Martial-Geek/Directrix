import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />

        <NavMenu>
          <NavLink to="/ndata" activeStyle>
            Node Data
          </NavLink>
          <NavLink to="/disease" activeStyle>
            Disease
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/">Home Page</NavBtnLink>
        </NavBtn>
        <NavBtn>
          <NavBtnLink to="/test">Test Page</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
