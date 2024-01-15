import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Modal } from "../../components/Modal";
import { Skill } from "../../components/Skill";
import Swal from "sweetalert2";
import { ActividadProfe } from "../../components/ActividadProfe";

export const Project = () => {
  const { id } = useParams("id");
  const [project, setProject] = React.useState({
    id,
    nom: "Cargando...",
    items: [],
    alumnos: [],
    actividades: [],
  });

  const [user, setUser] = React.useState("");

  const [alumnos, setAlumnos] = React.useState([]);

  const [addList, setAddList] = React.useState([]);

  const [update, setUpdate] = React.useState(false);

  document.addEventListener("updateProject", () => {
    setUpdate((prev) => !prev);
  });

  useEffect(() => {
    axios.get(`/api/projects/project?projectId=${id}`).then((res) => {
      setProject((prev) => ({ ...prev, nom: res.data.msg.nom }));
    });

    axios.get("/api/items/itemsproject?projectId=" + id).then((res) => {
      setProject((prev) => ({ ...prev, items: res.data.msg }));
    });

    axios.get("/api/users/usersproject?projectId=" + id).then((res) => {
      setProject((prev) => ({ ...prev, alumnos: res.data.msg }));
    });

    axios.get("/api/activities/project?projectId=" + id).then((res) => {
      axios.get("/api/activities/project?projectId=" + id).then((res) => {
        setProject((prev) => ({
          ...prev,
          actividades: res.data.msg.map((act) => {
            let newAct = {
              id: act.id,
              nom: act.nom,
              dataInici: new Date(act["data-inici"]),
              dataFinal: new Date(act["data-final"]),
            };

            return newAct;
          }),
        }));
      });
    });

    axios.get("/api/users/students").then((res) => {
      setAlumnos(res.data.msg);
    });
  }, [update]);

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

  const handelAddAct = (e) => {
    e.preventDefault();
    // {activityName, activityDataInici, activityDataFinal, activityProjectId}
    const activityName = e.target[0].value;
    const activityDataInici = e.target[1].value;
    const activityDataFinal = e.target[2].value;
    const activityProjectId = id;
    // comprobar fechas
    if (activityDataInici > activityDataFinal) {
      document.dispatchEvent(new CustomEvent("closeModal"));
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "La fecha de inicio no puede ser mayor que la de fin!",
      });
      return;
    }
    // comprobar nombre
    if (activityName.length < 3) {
      document.dispatchEvent(new CustomEvent("closeModal"));
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "El nombre de la actividad es demasiado corto!",
      });
      return;
    }
    // enviar datos
    axios
      .post("/api/activities", {
        activityName,
        activityDataInici,
        activityDataFinal,
        activityProjectId,
      })
      .then(() => {
        document.dispatchEvent(new CustomEvent("closeModal"));
        Swal.fire({
          icon: "success",
          title: "Actividad añadida",
          showConfirmButton: false,
          timer: 1500,
        });
        axios.get("/api/activities/project?projectId=" + id).then((res) => {
          setProject((prev) => ({
            ...prev,
            actividades: res.data.msg.map((act) => {
              let newAct = {
                id: act.id,
                nom: act.nom,
                dataInici: new Date(act["data-inici"]),
                dataFinal: new Date(act["data-final"]),
              };

              return newAct;
            }),
          }));
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
  };

  return (
    <div className="container m-auto min-h-screen">
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
        <Modal btn="+ Nuevo" className={"btn ms-5"} title="Crear actividad">
          <form onSubmit={handelAddAct}>
            <label>
              <span className="text-lg">Nombre de la actividad: </span>
              <br />
              <input
                type="text"
                className="input input-bordered"
                placeholder="e.j nginx"
              />
            </label>
            <br />
            {/* inputs para fecha de inicio y fin */}
            <label>
              <span className="text-lg">Fecha de inicio: </span>
              <br />
              <input
                type="date"
                className="input input-bordered"
                placeholder="e.j nginx"
              />
            </label>
            <br />
            <label>
              <span className="text-lg">Fecha de fin: </span>
              <br />
              <input
                type="date"
                className="input input-bordered"
                placeholder="e.j nginx"
              />
            </label>
            <br />
            <button className="btn mt-5">Añadir actividad</button>
          </form>
        </Modal>
      </h2>
      <section className="grid grid-cols-4 place-items-center mt-10">
        {project.actividades.map((actividad) => (
          <ActividadProfe
            actividad={actividad}
            alumnos={project.alumnos}
            key={actividad.id}
          />
        ))}
      </section>
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
          <div
            className="flex flex-col items-center hover:bg-[#ff1f1f79] rounded-lg p-5 cursor-pointer"
            onClick={() => {
              axios.delete(
                `/api/userprojects?user=${alumno.id}&projecte=${id}`
              );
              setUpdate((prev) => !prev);
            }}
            key={alumno.id}
          >
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
