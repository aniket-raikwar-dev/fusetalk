import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import SplashScreen from "../pages/SplashScreen";
import Login from "../pages/Login";
import Home from "../pages/Home";

const AppRoutes = () => {
  //   const isAuthenticated = localStorage.getItem("fusetalk_user");

  return (
    <Routes>
      <Route path="/" element={<SplashScreen />} />
      <Route path="/login" element={<Login />} />
      {/* <Route
        path="/home"
        element={isAuthenticated ? <Home /> : <Navigate to="/login" replace />}
      /> */}
    </Routes>
  );
};

export default AppRoutes;
