import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Modal } from "../../components/Modal";

export const Project = () => {
  const { id } = useParams("id");
  const [project, setProject] = React.useState({ id, nom: "Cargando..." });
  useEffect(() => {
    axios.get(`/api/projects/project?projectId=${id}`).then((res) => {
      console.log(res.data);
      setProject((prev) => (prev.nom = res.data.msg));
    });
  }, []);

  return (
    <div className="container m-auto">
      <h1 className="text-[5rem] font-bold text-center mt-5">
        <span contentEditable>{project.nom}</span>
        <span className="i-mdi-pencil text-3xl text-gray-600"></span>
      </h1>
      <h2 className="text-4xl flex items-center mt-5">
        Skills{" "}
        <Modal btn="+ Nuevo" className={"btn ms-5"} title="Crear skill"></Modal>
      </h2>
      <h2 className="text-4xl flex items-center mt-5">
        Actividades{" "}
        <Modal
          btn="+ Nuevo"
          className={"btn ms-5"}
          title="Crear actividad"
        ></Modal>
      </h2>
      <h2 className="text-4xl flex items-center mt-5">
        Alumnos{" "}
        <Modal
          btn="+ Nuevo"
          className={"btn ms-5"}
          title="Añadir alumno"
        ></Modal>
      </h2>
    </div>
  );
};
