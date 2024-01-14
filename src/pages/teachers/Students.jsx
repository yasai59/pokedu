import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Swal from "sweetalert2";
import { Modal } from "../../components/Modal";
import { StudentCard } from "../../components/StudentCard";

export const Students = () => {
  const [students, setStudents] = useState([]);
  const [update, setUpdate] = useState(false);

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

  useEffect(() => {
    axios
      .get("/api/users/students")
      .then((res) => {
        setStudents(res.data.msg);
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "No se ha podido cargar los alumnos",
        });
      });
  }, [update]);

  return (
    <div className="container m-auto h-screen">
      <h1 className="text-center text-4xl mt-5">
        Alumnos <br />
        <Modal title="Añadir alumno" btn="+ Nuevo" className="btn bg-[#5abd8b]">
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
      </h1>

      {/* TODO: boton de añadir alumno */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mt-20 ml-[33%] md:ml-[0%]">
        {students.map((student) => {
          return (
            <StudentCard
              student={student}
              key={student.id}
              setUpdate={setUpdate}
            />
          );
        })}
      </div>
    </div>
  );
};
