import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Config } from "../pages/Config";
import { NavBarStudents } from "../components/NavBarStudents";
import { Dashboard } from "../pages/students/Dashboard";
import { Project } from "../pages/students/Project";
import { Activity } from "../pages/students/Activity";

export const StudentRoutes = () => {
  return (
    <>
      <NavBarStudents />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/config" element={<Config />} />
        <Route path="/project/:id" element={<Project />} />
        <Route path="/activity/:id" element={<Activity />} />

        <Route path="/*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </>
  );
};
