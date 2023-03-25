import React, { useState } from "react";
import Navbar from "../components/Navbar";
import RoundCard from "../components/RoundCard";
import doc from "../static/doctor.avif";
import Border from "../components/Border";
import Icons from "../components/Icons";

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
          fontFamily: "'Pacifico', cursive",
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
        <Icons />
        <Border />
        <div
          style={{
            margin: "8rem auto",
            display: "flex",
            justifyContent: "space-around",
            width: "75%",
          }}
        >
          <RoundCard
            title="Self Diagnosis"
            class="fa-solid fa-viruses"
            des="Self Diagnosis at your fingertips."
          />

          <RoundCard
            title="Doctor Recommendation"
            class="fa-solid fa-stethoscope"
            des="Helps you to easily predict your disease."
          />

          <RoundCard
            title="Easy To Use"
            class="fa-solid fa-user"
            des="User Friendly and easy to use."
          />
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
