import React from "react";
import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { LoginPage } from "../pages/LoginPage";
import { TeacherRoutes } from "./TeacherRoutes";
import { StudentRoutes } from "./StudentRoutes";
export const AppRoutes = () => {
  const { user, token } = useContext(UserContext);

  const logged = user && token;

  return (
    <Routes>
      {logged ? (
        <>
          {user.tipus === "TEACHER_ROLE" ? (
            <Route path="/*" element={<TeacherRoutes />} />
          ) : (
            <Route path="/*" element={<StudentRoutes />} />
          )}
        </>
      ) : (
        <>
          {/* Tienes que logearte obligatoriamente */}
          <Route path="/login" element={<LoginPage />} />
          {/* Si no estás logeado, te redirige al login */}
          <Route path="/*" element={<Navigate to="/login" />} />
        </>
      )}
    </Routes>
  );
};
