import React, { useState, useEffect } from "react";
import DataComp from "./DataComp";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import { googleLogout, useGoogleLogin } from "@react-oauth/google";
// import axios from "axios";
import Test from "./Test";
// import { Button } from "@mui/material";
import Dis from "./Dis";
import Description from "./Description";
import RoundCard from "./RoundCard";
import Landing from "./Landing";
import Login from "./Login";
import Signup from "./Signup";
import Home from "./Home";

function App() {
  // const [user, setUser] = useState(() => {
  //   // getting stored value
  //   const saved = localStorage.getItem("user");
  //   const initialValue = JSON.parse(saved);
  //   return initialValue || "";
  // });

  // // const [ profile, setProfile ] = useState([]);
  // const [profile, setProfile] = useState(null);

  // const login = useGoogleLogin({
  //   onSuccess: (codeResponse) => setUser(codeResponse),
  //   onError: (error) => console.log("Login Failed:", error),
  // });

  // useEffect(() => {
  //   if (user) {
  //     axios
  //       .get(
  //         `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
  //         {
  //           headers: {
  //             Authorization: `Bearer ${user.access_token}`,
  //             Accept: "application/json",
  //           },
  //         }
  //       )
  //       .then((res) => {
  //         console.log(res);
  //         setProfile(res.data);
  //       })
  //       .catch((err) => console.log(err));
  //   }
  // }, [user]);

  // // log out function to log the user out of google and set the profile array to null

  // const logOut = () => {
  //   googleLogout();
  //   setUser(null);
  //   setProfile(null);
  // };

  // useEffect(() => {
  //   localStorage.setItem("user", JSON.stringify(user));
  // }, [user]);

  // useEffect(() => {
  //   const user = JSON.parse(localStorage.getItem("user"));
  //   if (user) {
  //     setUser(user);
  //   }
  // }, []);

  const [user, setUser] = useState({});

  useEffect(() => {
    const theUser = localStorage.getItem("user");

    if (theUser && !theUser.includes("undefined")) {
      setUser(JSON.parse(theUser));
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={user.email ? <Navigate to="/home" /> : <Landing />}
        />
        <Route
          path="/signup"
          element={user.email ? <Navigate to="/home" /> : <Signup />}
        />
        <Route
          path="/login"
          element={user.email ? <Navigate to="/home" /> : <Login />}
        />
        <Route
          path="/home"
          element={user.email ? <Home user={user} /> : <Navigate to="/" />}
        />
        <Route
          path="/hom"
          element={
            <div style={{ textAlign: "center" }}>
              <Navbar />
              {/* <h2>React Google Login</h2>
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
              )} */}
              <Description />
              <div>
                <RoundCard />
                <RoundCard />
                <RoundCard />
              </div>
            </div>
          }
        />
        {/* <Route path="/disease" element={profile && <Dis />} />
        <Route path="/ndata" element={profile && <DataComp />} />
        <Route path="/test" element={profile && <Test />} /> */}
        <Route path="/disease" element={<Dis />} />
        <Route path="/docrecm" element={<DataComp />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </Router>
  );
}

export default App;
