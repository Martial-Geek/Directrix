import React, { useState, useEffect } from "react";
import DataComp from "./DataComp";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import Test from "./Test";
import { Button } from "@mui/material";
import Dis from "./Dis";
import Description from "./Description";
import RoundCard from "./RoundCard";

function App() {
  const [user, setUser] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("user");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });

  // const [ profile, setProfile ] = useState([]);
  const [profile, setProfile] = useState(null);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });

  useEffect(() => {
    if (user) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          setProfile(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  // log out function to log the user out of google and set the profile array to null

  const logOut = () => {
    googleLogout();
    setUser(null);
    setProfile(null);
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setUser(user);
    }
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div style={{ textAlign: "center" }}>
              <h2>React Google Login</h2>
              <br />
              <br />
              {profile ? (
                <div>
                  <img src={profile.picture} alt="user image" />
                  <h3>User Logged in</h3>
                  <p>Welcome! {profile.name}</p>
                  <p>Email Address: {profile.email}</p>
                  <br />
                  <br />
                  <Button variant="contained" onClick={logOut}>
                    Log out
                  </Button>
                </div>
              ) : (
                <Button variant="contained" onClick={() => login()}>
                  Sign in with Google 🚀{" "}
                </Button>
              )}
              <Description />
              <div>
                <RoundCard />
                <RoundCard />
                <RoundCard />
              </div>
            </div>
          }
        />
        <Route path="/disease" element={profile && <Dis />} />
        <Route path="/ndata" element={profile && <DataComp />} />
        <Route path="/test" element={profile && <Test />} />
      </Routes>
    </Router>
  );
}

export default App;
