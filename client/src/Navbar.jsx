import React from "react";
import { Nav, Bars, NavBtn, NavBtnLink } from "./NavbarElements";

const Navbar = ({ user }) => {
  const logout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };
  return (
    <>
      <Nav>
        <Bars />
        <NavBtn>
          <NavBtnLink to="/docrecm" activeStyle>
            Doctor's Recommendation
          </NavBtnLink>
        </NavBtn>
        <NavBtn>
          <NavBtnLink to="/disease" activeStyle>
            Disease Prediction
          </NavBtnLink>
        </NavBtn>
        <NavBtn>
          <NavBtnLink to="/">Home Page</NavBtnLink>
        </NavBtn>
        <NavBtn>
          <NavBtnLink to="/test">Test Page</NavBtnLink>
        </NavBtn>
        <button
          onClick={logout}
          style={{
            cursor: "pointer",
            transition: "all 0.2s ease-in-out",
            position: "absolute",
            right: "4rem",
            alignSelf: "center",
            fontFamily: "Verdana",
            fontFamily: "sans-serif",
            fontSize: "18px",
            color: "white",
            border: "none",
            backgroundColor: "transparent",
            padding: "0.5rem 1rem",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </Nav>
    </>
  );
};

export default Navbar;
