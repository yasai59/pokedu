import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { Dashboard } from "../pages/teachers/Dashboard";
import { Students } from "../pages/teachers/Students";
export const TeacherRoutes = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/students" element={<Students />} />
        <Route path="/config" element={<h1>config</h1>} />
        <Route path="/project/:id" element={<h1>Project</h1>} />

        <Route path="/*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </>
  );
};
