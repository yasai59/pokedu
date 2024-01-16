import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export const ActividadAlumno = ({ actividad }) => {
  const fechaInicio = new Date(actividad.fecha_inicio);
  const fechaFin = new Date(actividad.fecha_final);

  const [skill, setSkill] = React.useState({
    id: undefined,
    nom: "No hay skill",
    percentatge: 0,
    foto: "0001.png",
  });

  useEffect(() => {
    axios
      .get("/api/items/itemactivity?activityid=" + actividad.id_actividad)
      .then((res) => {
        axios.get("/api/items/item?itemId=" + res.data.msg.item).then((res) => {
          setSkill(res.data.msg);
        });
      });
  }, []);

  return (
    <Link to={`/activity/${skill.id}`}>
      <div className="w-80 border border-black">
        <h3 className="text-3xl text-center">{actividad.nombre_actividad}</h3>
        <p className="text-xl">
          Fecha de inicio: {fechaInicio.getDate()}/{fechaInicio.getMonth() + 1}/
          {fechaInicio.getFullYear()}
        </p>
        <p className="text-xl">
          Fecha de fin: {fechaFin.getDate()}/{fechaFin.getMonth() + 1}/
          {fechaFin.getFullYear()}
        </p>
        <p className="text-xl text-center font-bold my-2">Skill</p>
        <div className="flex justify-between p-5">
          <img
            src={`/pokemons/${skill.foto}`}
            alt=""
            className="w-10 rounded-full"
          />
          <p className="text-xl">{skill.nom}</p>
          <p className="text-xl">{skill.percentatge}%</p>
        </div>
      </div>
    </Link>
  );
};
