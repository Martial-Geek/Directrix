import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = ({ user }) => {
  const logout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };
  return (
    <>
      <Nav>
        <Bars />
        <NavLink to="/docrecm" activeStyle>
          Doctor's Recommendation
        </NavLink>
        <NavLink to="/disease" activeStyle>
          Disease Prediction
        </NavLink>
        {/* Second Nav */}
        {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}

        <button
          onClick={logout}
          style={{
            color: "red",
            border: "none",
            backgroundColor: "transparent",
            padding: "0.5rem 1rem",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
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
