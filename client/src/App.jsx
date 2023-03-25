import React, { useState, useEffect } from "react";
import DataComp from "./pages/DataComp";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Test from "./Test";
import Dis from "./Dis";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";

function App() {
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
        <Route path="/disease" element={<Dis />} />
        <Route path="/docrecm" element={<DataComp />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </Router>
  );
}

export default App;
