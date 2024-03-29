import React from "react";
import { Modal } from "./Modal";
import { SkillSelector } from "./SkillSelector";
import { useParams } from "react-router";
import axios from "axios";
import Swal from "sweetalert2";
import { useRef } from "react";

export const ActividadProfe = ({ actividad, alumnos }) => {
  const [name, setName] = React.useState(actividad.nom);
  const [dataInici, setDataInici] = React.useState(actividad.dataInici);
  const [dataFinal, setDataFinal] = React.useState(actividad.dataFinal);
  const [desc, setDesc] = React.useState(actividad.descripcion);

  const container = useRef(null);

  const [skill, setSkill] = React.useState(null);
  let oSkill;

  const { id } = useParams("id");

  React.useEffect(() => {
    axios
      .get("/api/items/itemactivity?activityid=" + actividad.id)
      .then((res) => {
        setSkill(res.data.msg?.item ?? null);
        oSkill = res.data.msg?.item;
      });
  }, []);

  const handleUpdateAct = (e) => {
    e.preventDefault();
    let err = false;
    // { activityId, activityDataFinal, activityDataInicio }
    const data = {
      activityId: actividad.id,
      activityDataFinal: dataFinal.toISOString().split("T")[0],
      activityDataInicio: dataInici.toISOString().split("T")[0],
      activityDescripcion: desc,
    };
    if (skill != null && skill != oSkill) {
      axios
        .post("/api/activities/activityPostMassive", {
          activityId: actividad.id,
          projectId: id,
          skillId: skill,
        })
        .then(() => {
          document.dispatchEvent(new CustomEvent("updateProject"));
        })
        .catch(() => {
          err = true;
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "La skill no se ha podido añadir (la actividad no se ha modificado)",
          });
        });
    }
    if (!err) {
      axios.put("/api/activities", data).then((res) => {
        Swal.fire({
          title: "Actividad modificada",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });
      });
    }

    document.dispatchEvent(new CustomEvent("closeModal"));
  };

  const handleCorregir = (e) => {
    e.preventDefault();

    const inputs = container.current.querySelectorAll(".alumno");
    let data = {};
    inputs.forEach((input) => {
      data[input.dataset.alumno] = input.querySelector("input").value;
    });
    // comprobarr la validez de todas las notas
    Object.keys(data).forEach((key) => {
      if (Number(data[key]) < 0 || Number(data[key]) > 10) {
        return Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Las notas tienen que estar entre 0 y 10!",
        });
      }

      // -1 significa no corregido
      if (data[key] == "") {
        data[key] = "-1";
      }

      if (isNaN(data[key])) {
        return Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Las notas tienen que ser un número!",
        });
      }
    });

    axios
      .put("/api/grades/massive", { activityId: actividad.id, marks: data })
      .then((res) => {
        document.dispatchEvent(new CustomEvent("updateProject"));
        document.dispatchEvent(new CustomEvent("closeModal"));
        Swal.fire({
          icon: "success",
          title: "Notas guardadas",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDeleteAct = (e) => {
    e.preventDefault();
    document.dispatchEvent(new CustomEvent("closeModal"));
    Swal.fire({
      title: "¿Estás seguro?",
      text: "Esta acción no se puede deshacer",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, bórralo",
      cancelButtonText: "No, cancelar",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete("/api/activities?activityId=" + actividad.id).then(() => {
          document.dispatchEvent(new CustomEvent("updateProject"));
        });
      }
    });
  };

  return (
    <div className="flex flex-col items-center mb-5 w-80 m-[auto] md:w-100 h-full border border-black shadow-md p-4 ">
      <h3 className="text-2xl border-b border-black text-center w-[100%] mb-[30px]">
        {actividad.nom}{" "}
        <Modal
          btn={<span className="i-mdi-pencil text-lg text-gray-600"></span>}
          title={"Editar actividad"}
        >
          <form onSubmit={handleUpdateAct}>
            <label>
              <span className="text-lg">Nombre de la actividad: </span>
              <br />
              <input
                type="text"
                className="input input-bordered"
                placeholder="e.j nginx"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <br />
            {/* inputs para fecha de inicio y fin */}
            <label>
              <span className="text-lg ">Fecha de inicio: </span>
              <br />
              <input
                type="date"
                className="input input-bordered"
                placeholder="e.j nginx"
                value={dataInici.toISOString().split("T")[0]}
                onChange={(e) => setDataInici(new Date(e.target.value))}
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
                value={dataFinal.toISOString().split("T")[0]}
                onChange={(e) => setDataFinal(new Date(e.target.value))}
              />
            </label>
            <br />
            <label>
              <span className="text-lg">Descripción de la actividad: </span>
              <br />
              <textarea
                className="textarea h-24 textarea-bordered resize-none w-full mt-5"
                placeholder="Descripción de la actividad"
                value={desc ?? ""}
                onChange={(e) => setDesc(e.target.value)}
              />
            </label>
            <br />
            <p>Skill de la actividad: </p>
            <SkillSelector skill={skill} setSkill={setSkill} />
            <button className="btn mt-5">Modificar actividad</button>
            <button
              className="btn mt-5 ms-5"
              role="button"
              onClick={handleDeleteAct}
            >
              Eliminar actividad
            </button>
          </form>
        </Modal>
      </h3>
      <p className="text-xl">
        Fecha de inicio: {actividad.dataInici.getDate()}/
        {actividad.dataInici.getMonth() + 1}/{actividad.dataInici.getFullYear()}
      </p>
      <p className="text-xl">
        Fecha de fin: {actividad.dataFinal.getDate()}/
        {actividad.dataFinal.getMonth() + 1}/{actividad.dataFinal.getFullYear()}
      </p>
      <Modal btn={"Corregir"} title="Corregir actividad" className="btn mt-5">
        <form onSubmit={handleCorregir}>
          <div className="max-h-96 overflow-y-scroll" ref={container}>
            {alumnos.map((al) => {
              return (
                <div
                  className="flex items-center w-5/6 m-auto justify-between mb-5 alumno"
                  data-alumno={al.id}
                  key={al.id}
                >
                  <p className="text-xl">{al.nom}</p>
                  <input
                    type="number"
                    className="input input-bordered w-1/4"
                    placeholder="Nota"
                    max={10}
                    min={0}
                  />
                </div>
              );
            })}

            <button className="btn mt-5">Corregir</button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
