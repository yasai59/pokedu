import React from "react";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  const { user, logout } = useContext(UserContext);

  return (
    <nav className="bg-primary p-5 border-b-2 border-black">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold flex items-center">
          <NavLink to="/config">
            <img src="/assets/default_user.png" className="w-14" alt="" />
          </NavLink>
          <p className="ms-5 font-nds text-2xl">{user.nom}</p>
        </div>
        <ul className="flex space-x-4">
          <li className="text-white font-nds text-2xl">
            <NavLink to="/dashboard">Inicio</NavLink>
          </li>
          <li className="text-white font-nds text-2xl">
            <NavLink to="/students">Alumnos</NavLink>
          </li>
          <li className="text-white font-nds text-2xl">
            <NavLink to="/login" onClick={logout}>
              Cerrar sesión
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
