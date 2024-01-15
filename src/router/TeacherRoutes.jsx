import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { Dashboard } from "../pages/teachers/Dashboard";
import { Students } from "../pages/teachers/Students";
import { Config } from "../pages/Config";
import { Project } from "../pages/teachers/Project";
export const TeacherRoutes = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/students" element={<Students />} />
        <Route path="/config" element={<Config />} />
        <Route path="/project/:id" element={<Project />} />

        <Route path="/*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </>
  );
};
