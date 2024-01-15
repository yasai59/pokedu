import React from "react";
import { Modal } from "./Modal";
import { SkillSelector } from "./SkillSelector";
import { useParams } from "react-router";
import axios from "axios";

export const ActividadProfe = ({ actividad, alumnos }) => {
  const [name, setName] = React.useState(actividad.nom);
  const [dataInici, setDataInici] = React.useState(actividad.dataInici);
  const [dataFinal, setDataFinal] = React.useState(actividad.dataFinal);

  const [skill, setSkill] = React.useState(null);

  console.log(alumnos);

  const { id } = useParams("id");

  const handleUpdateAct = (e) => {
    e.preventDefault();
    // { activityId, activityDataFinal, activityDataInicio }
    const data = {
      activityId: actividad.id,
      activityDataFinal: dataFinal,
      activityDataInicio: dataInici,
    };
    if (skill != null) {
      axios.post("/api/activities/activityPostMassive", {
        activityId: actividad.id,
        projectId: id,
        skillId: skill,
      });
    }
    axios.put("/api/activities", data).then((res) => {});

    // { activityId, projectId, skillId }
  };

  const handleCorregir = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col items-center mb-5">
      <h3 className="text-2xl">
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
              <span className="text-lg">Fecha de inicio: </span>
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
            <p>Skill de la actividad: </p>
            <SkillSelector skill={skill} setSkill={setSkill} />
            <button className="btn mt-5">Modificar actividad</button>
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
          <div className="max-h-96 overflow-y-scroll">
            {alumnos.map((al) => {
              return (
                <div className="flex items-center w-5/6 m-auto justify-between mb-5">
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
