import React from "react";
import { Link } from "react-router-dom";
import { Modal } from "../../components/Modal";
import axios from "axios";
import Swal from "sweetalert2";
import { useState } from "react";
import { useEffect } from "react";
import { Proyecto } from "../../components/Proyecto.jsx";
import "../../fonts.css";
import { PhotoPicker } from "../../components/PhotoPicker.jsx";
import { Skill } from "../../components/Skill.jsx";

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
    const users = convertToJson(e.target.elements[0].value);
    e.target.elements[0].value = "";
    // valoramos que el formato sea correcto
    try {
      JSON.parse(users);
    } catch (e) {
      return Swal.fire({
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

  const [photo, setPhoto] = useState(0);
  const [skills, setSkills] = useState([]);

  const handleAddSkill = (e) => {
    e.preventDefault();
    const skill = e.target.elements[0].value;
    const percentatge = e.target.elements[1].value;
    const foto = photo.toString().padStart(4, "0") + ".png";

    axios
      .post("/api/items", {
        itemName: skill,
        itemPercentatge: percentatge,
        itemFoto: foto,
      })
      .then((res) => {
        setUpdate(!update);
        Swal.fire({
          icon: "success",
          title: "Skill añadida",
          showConfirmButton: false,
          timer: 1500,
        });

        // clear the form
        e.target.elements[0].value = "";
        e.target.elements[1].value = "";
        setPhoto(0);
      });

    document.dispatchEvent(new CustomEvent("closeModal"));

    // itemName, itemPercentatge, itemFoto
  };

  function convertToCSV(objArray) {
    const items = objArray;
    const replacer = (key, value) => (value === null ? "" : value); // specify how you want to handle null values here
    const header = Object.keys(items[0]);
    const csv = [
      header.join(","), // header row first
      ...items.map((row) =>
        header
          .map((fieldName) => JSON.stringify(row[fieldName], replacer))
          .join(",")
      ),
    ].join("\r\n");

    return csv;
  }

  function convertToJson(csv) {
    const lines = csv.split("\n");
    const result = [];
    const headers = lines[0].split(",");
    for (let i = 1; i < lines.length; i++) {
      const obj = {};
      const currentline = lines[i].split(",");
      for (let j = 0; j < headers.length; j++) {
        obj[headers[j]] = currentline[j].slice(1, -1);
      }
      result.push(obj);
    }

    return JSON.stringify(result); //JavaScript object
  }

  const updateAll = () => {
    axios
      .get("/api/projects")
      .then((res) => {
        setProyectos(res.data.msg);
      })
      .catch((err) => {
        console.log(err);
      });

    axios.get("/api/users/").then((res) => {
      exportTextArea.current.value = convertToCSV(res.data.msg);
    });

    axios.get("/api/items").then((res) => {
      setSkills(res.data.msg);
    });
  };

  document.addEventListener("updateProject", () => {
    updateAll();
  });

  useEffect(() => {
    updateAll();
  }, [update]);

  return (
    <div className="container m-auto pt-10">
      <div>
        <h2 className="text-5xl font-nds font-bold  text-center md:text-left">
          Alumnes
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-4  md:grid-cols-2 lg:gap-10 mt-20 gap-5">
          <Link
            to="/students"
            className="text-3xl text-center p-4 big1 font-aldrich rounded-[15px] w-60 m-auto"
          >
            Gestionar
          </Link>
          <Modal
            btn={"Crear"}
            className="text-3xl text-center p-4 big2 font-aldrich rounded-[15px] w-60 m-auto"
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
            className="text-3xl text-center p-4 big1 font-aldrich rounded-[15px] w-60 m-auto"
            btn={"Importar"}
            title={"Importar usuarios"}
          >
            <form onSubmit={handleImportUsers}>
              <textarea className="textarea textarea-bordered resize-none w-full h-96"></textarea>
              <button className="btn btn-primary mt-5">
                Importar <span className="i-material-symbols-save"></span>
              </button>
            </form>
          </Modal>
          <Modal
            className="text-3xl text-center p-4 big2 font-aldrich rounded-[15px] w-60 m-auto"
            title={"Exportar usuarios"}
            btn={"Exportar"}
          >
            <textarea
              className="textarea textarea-bordered resize-none w-full h-96"
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
      <h2 className="text-5xl mt-16 flex items-center font-nds font-bold pl-[20%] md:pl-[0px]">
        Proyectos
        <Modal
          title="Añadir Proyecto"
          btn="+ Nuevo"
          className="btn ms-10 bg-[#5abd8b]"
        >
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
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-center pt-10">
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
      <h2 className="text-5xl mt-16 flex items-center font-nds font-bold pl-[30%] md:pl-[0px]">
        Skills
        <Modal
          title="Añadir Skill"
          btn="+ Nuevo"
          className="btn ms-10 bg-[#5abd8b]"
        >
          <form onSubmit={handleAddSkill}>
            <div className="flex justify-between">
              <input
                type="text"
                placeholder="Introduce el nombre de la skill"
                className="input input-bordered w-full max-w-xs"
              />
              <input
                type="number"
                placeholder="Introduce el porcentaje"
                className="input input-bordered w-full max-w-xs ms-5 mb-5"
              />
            </div>
            <PhotoPicker photo={photo} setPhoto={setPhoto} className={"h-52"} />
            <button className="btn mt-5">Añadir</button>
          </form>
        </Modal>
      </h2>
      <div className="grid lg:grid-cols-3  md:grid-cols-2 grid-cols-1 gap-y-10 w-[80%] mx-auto mt-[20px] pb-[20px]  ">
        {skills.map((skill) => (
          <Skill item={skill} key={skill.id} />
        ))}
      </div>
    </div>
  );
};
