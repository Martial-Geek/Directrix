import React, { useState } from "react";
import Navbar from "./Navbar";
import Description from "./Description";
import RoundCard from "./RoundCard";
import RotatingIcons from "./RotatingIcons";

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
      <h1>
        Good {greeting} {user.firstName}
      </h1>

      <p>
        You are viewing this page because you are logged in or you just signed
        up
      </p>

      <div>
        <RotatingIcons />
        {/* <Description /> */}
        <div>
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
