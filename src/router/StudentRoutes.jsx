import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Config } from "../pages/Config";
import { NavBarStudents } from "../components/NavBarStudents";
import { Dashboard } from "../pages/students/Dashboard";
export const StudentRoutes = () => {
  return (
    <>
      <NavBarStudents />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/students" element={<h1>Students</h1>} />
        <Route path="/config" element={<Config />} />
        <Route path="/project/:id" element={<h1>Project</h1>} />

        <Route path="/*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </>
  );
};
