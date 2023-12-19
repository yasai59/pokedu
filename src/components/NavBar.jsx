import React from "react";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export const NavBar = () => {
  const { user } = useContext(UserContext);
  console.log(user);

  return (
    <nav className="bg-primary p-5 border-b-2 border-black">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold flex items-center">
          <img src="/assets/default_user.png" className="w-14" alt="" />
          <p className="ms-5">{user.nom}</p>
        </div>
        <ul className="flex space-x-4">
          <li className="text-white">Home</li>
          <li className="text-white">About</li>
          <li className="text-white">Contact</li>
        </ul>
      </div>
    </nav>
  );
};
