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

  const [activity, setActivity] = useState({
    id: null,
    nom: "No hay actividad",
    "data-inici": "0000-00-00",
    "data-final": "0000-00-00",
  });
  useEffect(() => {
    axios.get("/api/activities/activity?activityId=" + id).then((res) => {
      setActivity(res.data.msg);
      console.log(res.data.msg);
    });
  }, [user]);

  return (
    <section className="container m-auto min-h-screen">
      <h1 className="text-[4rem] font-bold text-center">{activity.nom}</h1>
      <h2 className="text-3xl font-bold text-center">Nombre proyecto</h2>
      <article className="grid grid-cols-2 mt-10">
        <div
          id="desc"
          className="border-r-2 border-black w-full h-[40rem]"
        ></div>
        <div id="datos"></div>
      </article>
    </section>
  );
};
