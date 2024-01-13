import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Modal } from "../../components/Modal";
import { Skill } from "../../components/Skill";
import Swal from "sweetalert2";

export const Project = () => {
  const { id } = useParams("id");
  const [project, setProject] = React.useState({
    id,
    nom: "Cargando...",
    items: [],
    alumnos: [],
  });

  const [user, setUser] = React.useState("");

  const [alumnos, setAlumnos] = React.useState([]);

  const [addList, setAddList] = React.useState([]);

  const [alumnosProyecto, setAlumnosProyecto] = React.useState([]);

  useEffect(() => {
    axios.get(`/api/projects/project?projectId=${id}`).then((res) => {
      setProject((prev) => ({ ...prev, nom: res.data.msg.nom }));
    });

    axios.get("/api/items/itemsproject?projectId=" + id).then((res) => {
      console.log(res.data.msg);
      setProject((prev) => ({ ...prev, items: res.data.msg }));
    });

    axios.get("/api/users/usersproject?projectId=" + id).then((res) => {
      setProject((prev) => ({ ...prev, alumnos: res.data.msg }));
    });

    axios.get("/api/users/students").then((res) => {
      setAlumnos(res.data.msg);
    });
  }, []);

  const selectStudent = (id) => {
    if (addList.includes(id)) {
      setAddList(addList.filter((item) => item !== id));
    } else {
      setAddList((prev) => [...prev, id]);
    }
  };

  const handleAddStudents = (e) => {
    axios
      .post("/api/userprojects/multiple", {
        userprojectProjecte: id,
        userprojectAlumnes: addList,
      })
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Alumnos añadidos",
          showConfirmButton: false,
          timer: 1500,
        });
        axios.get("/api/users/usersproject?projectId=" + id).then((res) => {
          setProject((prev) => ({ ...prev, alumnos: res.data.msg }));
        });
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Algo ha ido mal!",
          footer: `<p>${err.response.data.error}</p>`,
        });
      });

    setAddList([]);

    document.dispatchEvent(new CustomEvent("closeModal"));
  };

  return (
    <div className="container m-auto">
      <h1 className="text-[5rem] font-bold text-center mt-5">
        <span>{project.nom}</span>
        <span className="i-mdi-pencil text-3xl text-gray-600"></span>
      </h1>
      <h2 className="text-4xl flex items-center mt-5">Skills </h2>
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
              className="input input-bordered w-full mb-5"
              placeholder="Buscar alumno 🔍︎"
            />
            <div className="h-96 overflow-y-scroll">
              {alumnos
                .filter(
                  (alumno) =>
                    alumno.nom.toLowerCase().includes(user.toLowerCase()) ||
                    alumno.user.toLowerCase().includes(user.toLowerCase())
                )
                .map((alumno) => (
                  <button
                    key={alumno.id}
                    className={`btn btn-outline me-5 ${
                      addList.includes(alumno.id) ? "bg-ceciarmy" : ""
                    }`}
                    onClick={() => {
                      selectStudent(alumno.id);
                    }}
                  >
                    <img
                      src={`/pokemons/${alumno.foto ?? "0001.png"}`}
                      className={`w-10 h-10 rounded-full`}
                    />
                    {alumno.user}
                  </button>
                ))}
            </div>
            <button className="btn mt-5" onClick={handleAddStudents}>
              Añadir alumnos
            </button>
          </div>
        </Modal>
      </h2>
      <section className="grid grid-cols-4 place-items-center mt-10">
        {project.alumnos.map((alumno) => (
          <div className="flex flex-col items-center" key={alumno.id}>
            <img
              src={`/pokemons/${alumno.foto ?? "0001.png"}`}
              className="w-24 h-24 rounded-full"
            />
            <p className="text-xl">{alumno.user}</p>
          </div>
        ))}
      </section>
    </div>
  );
};
