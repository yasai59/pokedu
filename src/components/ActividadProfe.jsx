import React from "react";
import { Modal } from "./Modal";
import { SkillSelector } from "./SkillSelector";

export const ActividadProfe = ({ actividad }) => {
  const [name, setName] = React.useState(actividad.nom);
  const [dataInici, setDataInici] = React.useState(actividad.dataInici);
  const [dataFinal, setDataFinal] = React.useState(actividad.dataFinal);

  const [skill, setSkill] = React.useState(null);

  const handleUpdateAct = (e) => {
    e.preventDefault();
    // { activityId, activityDataFinal, activityDataInicio }
  };

  return (
    <div className="flex flex-col items-center">
      <h3 className="text-2xl">
        {actividad.nom}{" "}
        <Modal
          btn={<span className="i-mdi-pencil text-lg text-gray-600"></span>}
          title={"Editar actividad"}
        >
          <form>
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
    </div>
  );
};
