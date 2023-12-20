import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { Dashboard } from "../pages/teachers/Dashboard";
export const TeacherRoutes = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/students" element={<h1>Students</h1>} />
        <Route path="/config" element={<h1>config</h1>} />
        <Route path="/project/:id" element={<h1>Project</h1>} />

        <Route path="/*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </>
  );
};