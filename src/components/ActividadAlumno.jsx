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
        if (!res.data.msg) return;
        axios.get("/api/items/item?itemId=" + res.data.msg.item).then((res) => {
          setSkill(res.data.msg);
        });
      });
  }, []);

  return (
    <Link to={`/activity/${actividad.id_actividad}`}>
      <div className="w-80 border border-black m-auto">
        <h3 className="text-3xl text-center">{actividad.nombre_actividad}</h3>
        <p className="text-xl text-center">Fecha de inicio:</p>
        <p className="text-xl text-center ">
          {fechaInicio.getDate()}/{fechaInicio.getMonth() + 1}/
          {fechaInicio.getFullYear()}
        </p>
        <p className="text-xl text-center">Fecha de fin:</p>
        <p className="text-xl text-center">
          {fechaFin.getDate()}/{fechaFin.getMonth() + 1}/
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
