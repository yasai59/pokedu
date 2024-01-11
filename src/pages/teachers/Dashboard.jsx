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
  const exportTextArea = React.useRef();

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

  const handleAddStudent = (e) => {
    e.preventDefault();
    const name = e.target.elements[0].value;
    const username = e.target.elements[1].value;
    const password = e.target.elements[2].value;

    // clear the form
    e.target.elements[0].value = "";
    e.target.elements[1].value = "";
    e.target.elements[2].value = "";

    axios.post("/api/users", {
      userUser: username,
      userPass: password,
      userName: name,
      userType: "STUDENT_ROLE",
    });

    setUpdate(!update);

    document.dispatchEvent(new CustomEvent("closeModal"));
  };

  const handleImportUsers = (e) => {
    e.preventDefault();
    const users = e.target.elements[0].value;
    e.target.elements[0].value = "";
    // valoramos que el formato sea correcto
    try {
      JSON.parse(users);
    } catch (e) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "El formato no es correcto",
      });
    }

    axios
      .post("/api/users/importusers", { usersArray: users })
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Usuarios importados",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((e) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "No se ha podido importar los usuarios",
        });
      });

    document.dispatchEvent(new CustomEvent("closeModal"));
  };

  const handleAddSkill = (e) => {
    e.preventDefault();
    const skill = e.target.elements[0].value;
    // itemName, itemPercentatge, itemFoto
  };

  useEffect(() => {
    axios
      .get("/api/projects")
      .then((res) => {
        setProyectos(res.data.msg);
      })
      .catch((err) => {
        console.log(err);
      });

    axios.get("/api/users/").then((res) => {
      exportTextArea.current.value = JSON.stringify(res.data.msg);
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
          <Modal
            btn={"Crear"}
            className="text-3xl text-center p-10 bg-gray-400"
            title={"Crear Alumno"}
          >
            <form
              onSubmit={handleAddStudent}
              className="text-base text-left [&>div]:flex [&>div]:justify-between [&>div]:items-center"
            >
              <div className="mb-4">
                <label htmlFor="name">Nombre completo</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="ms-5 input input-bordered"
                />
              </div>
              {/* inputs for: Nombre de usuario, contraseña y foto */}
              <div className="mb-4">
                <label htmlFor="username">Nombre de usuario</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="ms-5 input input-bordered"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password">Contraseña</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="ms-5 input input-bordered"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Añadir
              </button>
            </form>
          </Modal>
          <Modal
            className="text-3xl text-center p-10 bg-gray-400"
            btn={"Importar"}
            title={"Importar usuarios"}
          >
            <form onSubmit={handleImportUsers}>
              <textarea className="textarea textarea-primary resize-none w-full h-96"></textarea>
              <button className="btn btn-primary mt-5">
                Importar <span className="i-material-symbols-save"></span>
              </button>
            </form>
          </Modal>
          <Modal
            className="text-3xl text-center p-10 bg-gray-400"
            title={"Exportar usuarios"}
            btn={"Exportar"}
          >
            <textarea
              className="textarea textarea-primary resize-none w-full h-96"
              ref={exportTextArea}
              readOnly
            ></textarea>
            {/* boton de copiar */}
            <button
              className="btn btn-primary mt-5"
              onClick={() => {
                navigator.clipboard.writeText(exportTextArea.current.value);
              }}
            >
              Copiar <span className="i-bxs-copy-alt"></span>
            </button>
          </Modal>
        </div>
      </div>
      <h2 className="text-4xl mt-16 flex items-center">
        Proyectos
        <Modal title="Añadir Proyecto" btn="+ Nuevo" className="btn ms-10">
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
      <h2 className="text-4xl mt-16 flex items-center">
        Skills
        <Modal title="Añadir Skill" btn="+ Nuevo" className="btn ms-10">
          <form onSubmit={handleAddSkill}>
            <div className="flex justify-between">
              <input
                type="text"
                placeholder="Introduce el nombre del skill"
                className="input input-bordered w-full max-w-xs"
              />
              <input type="number" placeholder="Introduce el " />
              <button className="btn ms-5">Añadir</button>
            </div>
          </form>
        </Modal>
      </h2>
    </div>
  );
};
