import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Modal } from "../../components/Modal";
import { Skill } from "../../components/Skill";

export const Project = () => {
  const { id } = useParams("id");
  const [project, setProject] = React.useState({
    id,
    nom: "Cargando...",
    items: [],
  });

  const [user, setUser] = React.useState("");

  const [alumnos, setAlumnos] = React.useState([]);

  useEffect(() => {
    axios.get(`/api/projects/project?projectId=${id}`).then((res) => {
      setProject((prev) => ({ ...prev, nom: res.data.msg.nom }));
    });

    axios.get("/api/items/itemsproject?projectId=" + id).then((res) => {
      setProject((prev) => ({ ...prev, items: res.data.msg }));
    });

    axios.get("/api/users/").then((res) => {
      setAlumnos(res.data.msg);
    });
  }, []);

  console.log(project);

  return (
    <div className="container m-auto">
      <h1 className="text-[5rem] font-bold text-center mt-5">
        <span>{project.nom}</span>
        <span className="i-mdi-pencil text-3xl text-gray-600"></span>
      </h1>
      <h2 className="text-4xl flex items-center mt-5">
        Skills{" "}
        <Modal btn="+ Nuevo" className={"btn ms-5"} title="Crear skill"></Modal>
      </h2>
      <section className="grid grid-cols-4 place-items-center mt-10">
        {project.items.map((item) => (
          <Skill item={item} key={item.id} />
        ))}
      </section>
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
        <Modal btn="+ Nuevo" className={"btn ms-5"} title="Añadir alumno">
          <div>
            <input
              type="text"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              className="input input-bordered w-full"
              placeholder="Buscar alumno 🔍︎"
            />
          </div>
        </Modal>
      </h2>
    </div>
  );
};
