import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import SocialMedia from "./SocialMedia";
import Home from "./components/Home";
import Login from "./authenticate/Login";
import Signup from "./authenticate/Signup";
import TermsAndConditions from "./components/TermsAndConditions";
import Analytics from "./components/Analytics";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="termsAndConditions" element={<TermsAndConditions />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="" element={<Home />} />
        </Route>
        <Route path="social" element={<SocialMedia />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
