import React from "react";
import { Link } from "react-router-dom";
import { Modal } from "../../components/Modal";

export const Dashboard = () => {
  return (
    <div className="container m-auto pt-10">
      <div>
        <h2 className="text-4xl">Alumnes</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-20">
          <Link to="/login" className="text-3xl text-center p-10 bg-gray-400">
            Gestionar
          </Link>
          <Link to="/login" className="text-3xl text-center p-10 bg-gray-400">
            Crear
          </Link>
          <Link to="/login" className="text-3xl text-center p-10 bg-gray-400">
            Importar
          </Link>
          <Link to="/login" className="text-3xl text-center p-10 bg-gray-400">
            Exportar
          </Link>
        </div>
      </div>
      <h2 className="text-4xl mt-16">
        Proyectos
        <Link
          to="/login"
          className="text-3xl text-center p-2 pt-1 bg-gray-400 ms-10"
        >
          + Nuevo
        </Link>
        <Modal />
      </h2>
    </div>
  );
};
