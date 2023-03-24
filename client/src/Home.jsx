import React, { useState } from "react";
import Navbar from "./Navbar";
import Description from "./Description";
import RoundCard from "./RoundCard";
import RotatingIcons from "./RotatingIcons";
import doc from "./static/doctor.avif";
import Border from "./Border";

const Home = ({ user }) => {
  const logout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  let greeting = "";

  const time = new Date().getHours();

  if (time >= 5 && time < 12) greeting = "Morning";
  else if (time >= 12 && time <= 17) greeting = "Afternoon";
  else greeting = "Evening";

  return (
    <div style={{ textAlign: "center", margin: "0rem" }}>
      <Navbar />
      <h1
        style={{
          marginTop: "5rem",
          fontFamily: "sans-serif",
          fontFamily: "Verdana",
          fontSize: "70px",
          color: "#4398bf",
        }}
      >
        Good {greeting} {user.firstName}
      </h1>

      <p
        style={{
          marginTop: "2rem",
          fontFamily: "sans-serif",
          fontFamily: "Verdana",
          fontSize: "25px",
        }}
      >
        Stay Fit, Stay Healthy!
      </p>

      <img
        style={{
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          margin: "3rem auto",
        }}
        src={doc}
        alt="Doc-Img"
      />

      <Border />

      <div>
        <RotatingIcons />
        <Border />
        <div style={{ margin: "5rem auto" }}>
          <RoundCard />
          <RoundCard />
          <RoundCard />
        </div>
        <button
          onClick={logout}
          style={{
            color: "red",
            border: "1px solid gray",
            backgroundColor: "white",
            padding: "0.5rem 1rem",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Home;
