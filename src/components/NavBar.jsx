import React from "react";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  const { user, logout } = useContext(UserContext);

  const [photo, setPhoto] = React.useState("/assets/default_user.png");

  React.useEffect(() => {
    if (user?.foto) {
      setPhoto(`/pokemons/${user.foto}`);
    }
  }, [user]);

  return (
    <nav className="bg-primary p-5 border-b-2 border-black">
      <div className="container mx-auto flex justify-between items-center flex-col md:flex-row">
        <div className="text-white font-bold flex items-center ">
          <NavLink to="/config">
            <img src={`${photo}`} className="w-14 rounded-full" alt="" />
          </NavLink>
          <p className="ms-5 font-nds text-2xl">{user.nom}</p>
        </div>
        <ul className="flex space-x-4">
          <li className="text-white font-nds md:text-2xl text-4xl">
            <NavLink to="/dashboard">Inicio</NavLink>
          </li>
          <li className="text-white font-nds md:text-2xl text-4xl">
            <NavLink to="/students">Alumnos</NavLink>
          </li>
          <li className="text-white font-nds md:text-2xl text-4xl">
            <NavLink to="/login" onClick={logout}>
              Cerrar sesión
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
