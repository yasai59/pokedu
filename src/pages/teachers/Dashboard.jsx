import React from "react";
import { Link } from "react-router-dom";
import { Modal } from "../../components/Modal";
import axios from "axios";
import Swal from "sweetalert2";
import { useState } from "react";
import { useEffect } from "react";
import { Proyecto } from "../../components/Proyecto.jsx";

export const Dashboard = () => {
  const [proyectos, setProyectos] = useState([]);
  const [update, setUpdate] = useState(false);

  const handleAddProject = (e) => {
    e.preventDefault();
    const titulo = e.target.elements[0].value;

    axios
      .post("/api/projects", { projectName: titulo })
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Proyecto añadido",
          showConfirmButton: false,
          timer: 1500,
        });
        setUpdate(!update);
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "No se ha podido añadir el proyecto",
        });
      });

    e.target.elements[0].value = "";

    // dispatch the event to close the modal
    document.dispatchEvent(new CustomEvent("closeModal"));
  };

  useEffect(() => {
    axios
      .get("/api/projects")
      .then((res) => {
        setProyectos(res.data.msg);
      })
      .catch((err) => {
        // TODO: handle error when loading projects
        console.log(err);
      });
  }, [update]);

  return (
    <div className="container m-auto pt-10">
      <div>
        <h2 className="text-4xl">Alumnes</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-20">
          <Link
            to="/students"
            className="text-3xl text-center p-10 bg-gray-400"
          >
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
      <h2 className="text-4xl mt-16 flex items-center">
        Proyectos
        <Modal title="Añadir Proyecto" btn="+ Nuevo" className="ms-10">
          <form onSubmit={handleAddProject}>
            <div className="flex justify-between">
              <input
                type="text"
                placeholder="Introduce el nombre del proyecto"
                className="input input-bordered w-full max-w-xs"
              />
              <button className="btn ms-5">Añadir</button>
            </div>
          </form>
        </Modal>
      </h2>
      <div className="grid gap-10 grid-cols-4 items-center pt-10">
        {proyectos.map((proyecto) => {
          return (
            <Proyecto
              id={proyecto.id}
              nombre={proyecto.nom}
              key={proyecto.id}
            />
          );
        })}
      </div>
    </div>
  );
};
