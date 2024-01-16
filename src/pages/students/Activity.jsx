import axios from "axios";
import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import { UserContext } from "../../context/UserContext";

export const Activity = () => {
  const { id } = useParams();

  const { user } = useContext(UserContext);

  const [proyecto, setProyecto] = useState({
    id: null,
    nom: "No hay proyecto",
  });

  const [skill, setSkill] = useState(undefined);

  const [activity, setActivity] = useState({
    id: null,
    nom: "No hay actividad",
    "data-inici": "0000-00-00",
    "data-final": "0000-00-00",
  });
  useEffect(() => {
    axios.get("/api/activities/activity?activityId=" + id).then((res) => {
      setActivity(res.data.msg);
    });

    axios.get("/api/projects/projectactivity?activityId=" + id).then((res) => {
      setProyecto(res.data.msg);
    });

    axios.get("/api/items/itemactivity?activityid=" + id).then((res) => {
      if (!res.data.msg) return;
      axios.get("/api/items/item?itemId=" + res.data.msg.item).then((res) => {
        console.log(res.data.msg);
        setSkill(res.data.msg);
      });
    });
  }, [user]);

  return (
    <section className="container m-auto min-h-screen">
      <h1 className="text-[4rem] font-bold text-center">{activity.nom}</h1>
      <h2 className="text-3xl font-bold text-center">{proyecto.nom}</h2>
      <article className="grid grid-cols-1 md:grid-cols-2 mt-10">
        <div id="desc" className="border-b-2  md:border-b-0 md:border-r-2 border-black w-full h-[40rem]">
          <h3 className="text-3xl font-bold text-center">Descripción</h3>
          <p className="text-justify p-5">
            {activity.descripcion != "undefined"
              ? activity.descripcion || "No hay descripción"
              : "No hay descripción"}
          </p>
        </div>
        <div id="datos">
          <h2 className="text-3xl font-bold text-center mt-5">
            Skill de la actividad
          </h2>
          {!skill ? (
            <h3 className="text-xl text-center">
              Esta actividad no tiene items
            </h3>
          ) : (
            <div className="mt-10 m-auto p-10">
              <h3 className="text-2xl text-center font-bold mb-10">
                {skill.nom} - {skill.percentatge}%
              </h3>
              <div className="w-full h-20 bg-gray-50 bg-[#6b6961] rounded-3xl">
                <div
                  className="h-20 bg-green-500  rounded-l-3xl"
                  style={{ width: skill.percentatge + "%" }}
                ></div>
              </div>
            </div>
          )}
        </div>
      </article>
    </section>
  );
};
