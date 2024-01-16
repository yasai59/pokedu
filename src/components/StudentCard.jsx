import React from "react";
import { Modal } from "./Modal";
import { useState } from "react";
import axios from "axios";

export const StudentCard = ({ student, setUpdate }) => {
  const [nombre, setNombre] = useState(student.nom);
  const [usuario, setUsuario] = useState(student.user);
  const [password, setPassword] = useState("");

  const handleDeleteStudent = (id, e) => {
    axios.delete("/api/users?userId=" + id).then(() => {
      setUpdate((prev) => !prev);
    });
    document.dispatchEvent(new CustomEvent("closeModal"));
  };
  const handleUpdateStudent = (id, e) => {
    e.preventDefault();
    // clear the password input
    e.target.elements[2].value = "";
    axios
      .put(`/api/users/`, {
        userId: id,
        user: usuario,
        pass: password,
        nom: nombre,
      })
      .then(() => {
        setUpdate((prev) => !prev);
        document.dispatchEvent(new CustomEvent("closeModal"));
      });
  };

  return (
    <Modal
      foto={student.foto}
      btn={student.nom}
      title={student.nom}
      key={student.id}
      className="btn btn-outline "
    >
      <form
        className="[&>div]:flex [&>div]:justify-between [&>div]:items-center"
        onSubmit={(e) => {
          handleUpdateStudent(student.id, e);
        }}
      >
        <div className="mb-4">
          <label htmlFor="name">Nombre completo</label>
          <input
            type="text"
            name="name"
            id="name"
            className="ms-5 input input-bordered"
            value={nombre}
            onChange={(e) => {
              setNombre(e.target.value);
            }}
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
            value={usuario}
            onChange={(e) => {
              setUsuario(e.target.value);
            }}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="dejala en blanco para no cambiarla"
            className="ms-5 input input-bordered"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button type="submit" className="btn btn-primary me-5">
          Actualizar
        </button>
        <button
          className="btn btn-error"
          onClick={(e) => handleDeleteStudent(student.id, e)}
          type="button"
        >
          Borrar Alumno
        </button>
      </form>
    </Modal>
  );
};
