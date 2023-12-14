import React from "react";
import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { LoginPage } from "../pages/LoginPage";
export const AppRoutes = () => {
  const { user, token } = useContext(UserContext);

  const logged = user && token;

  return (
    <Routes>
      {logged ? (
        <>
          {/* TODO: rutas privadas */}
          <Route path="/dashboard" element={<h1>Dashboard</h1>} />
          <Route path="/profile" element={<h1>Profile</h1>} />
        </>
      ) : (
        <>
          {/* TODO: Rutas públicas */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/*" element={<Navigate to="/login" />} />
        </>
      )}
    </Routes>
  );
};
