import axios from "axios";
import React from "react";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { useEffect } from "react";
import { ProyectoStudents } from "../../components/ProyectoStudents";
import { ActividadAlumno } from "../../components/ActividadAlumno";

export const Dashboard = () => {
  const { user } = useContext(UserContext);

  const [projects, setProjects] = React.useState([]);

  const [activeActivities, setActiveActivities] = React.useState([]);

  useEffect(() => {
    axios.get("/api/projects/projectuser?userId=" + user.id).then((res) => {
      setProjects(res.data.msg);
    });

    axios
      .get("/api/activities/currentActivitysUser?userId=" + user.id)
      .then((res) => {
        setActiveActivities(res.data);
      });
  }, [user]);

  return (
    <section className="container m-auto h-screen">
      <h2 className="text-[4rem] text-center font-bold my-10">Mis proyectos</h2>
      <article
        id="projects"
        className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-center pt-10"
      >
        {projects.map((project) => {
          return (
            <ProyectoStudents
              id={project.id}
              nombre={project.nom}
              key={project.id}
            />
          );
        })}
      </article>
      <h2 className="text-[4rem] text-center font-bold my-10">
        Mis actividades activas
      </h2>
      <article id="active-activities">
        {activeActivities.map((activity) => {
          return (
            <ActividadAlumno actividad={activity} key={activity.id_actividad} />
          );
        })}
      </article>
    </section>
  );
};
