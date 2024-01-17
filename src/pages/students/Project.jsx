import axios from "axios";
import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import { UserContext } from "../../context/UserContext";
import { RadialChart } from "react-vis";
import { ActividadAlumno } from "../../components/ActividadAlumno";

const Item = ({ item }) => {
  const { user } = useContext(UserContext);

  const [nota, setNota] = useState("No avaluado");

  useEffect(() => {
    axios
      .get(`/api/grades/item?alumno=${user.id}&item=${item.id}`)
      .then((res) => {
        const nota = res.data.msg?.nota ?? "";
        if (!nota) {
          setNota("");
        } else {
          setNota("Media: " + nota);
        }
      })
      .catch(() => {});
  }, []);

  return (
    <li className="text-lg mb-5">
      <img
        src={`/pokemons/${item.foto}`}
        className="rounded-full inline-block me-2"
      />
      {item.nom} - {item.percentatge}%
      <br />
      {nota}
    </li>
  );
};

export const Project = () => {
  const { id } = useParams();

  const { user } = useContext(UserContext);

  const [project, setProject] = useState({
    id,
    name: "",
    items: [],
    activities: [],
    activeActivity: [],
  });

  const mapAct = (act) => {
    return {
      id_actividad: act.id,
      nombre_actividad: act.nom,
      fecha_inicio: act["data-inici"],
      fecha_final: act["data-final"],
    };
  };

  useEffect(() => {
    axios.get(`/api/projects/project?projectId=${id}`).then((res) => {
      setProject((prev) => ({ ...prev, name: res.data.msg.nom }));
    });

    axios.get(`/api/items/itemsproject?projectId=${id}`).then((res) => {
      setProject((prev) => ({ ...prev, items: res.data.msg }));
    });

    axios.get(`/api/activities/project?projectId=${id}`).then((res) => {
      setProject((prev) => ({
        ...prev,
        activeActivity: res.data.msg
          .filter((act) => {
            return (
              new Date(act["data-inici"]) <= Date.now() &&
              new Date(act["data-final"]) >= Date.now()
            );
          })
          .map(mapAct),
      }));
      setProject((prev) => ({
        ...prev,
        activities: res.data.msg
          .filter((act) => {
            return (
              new Date(act["data-inici"]) <= Date.now() &&
              new Date(act["data-final"]) <= Date.now()
            );
          })
          .map(mapAct),
      }));
    });
  }, [user]);
  const myData = project.items.map((item) => {
    return { angle: Number(item.percentatge), label: item.nom };
  });

  return (
    <div className="container m-auto">
      <h1 className="text-[4rem] font-bold text-center">{project.name}</h1>
      <h2 className="text-5xl font-bold text-center mb-5">
        Skills del proyecto
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center mb-5">
        <ul className="border-2 border-black p-10 rounded-xl mb-10 ">
          {project.items.map((item) => (
            <Item item={item} key={item.id} />
          ))}
        </ul>
        <RadialChart
          data={myData}
          width={400}
          height={400}
          showLabels={true}
          labelsStyle={{
            fontSize: 16,
            fontWeight: "bold",
            fill: "#fff",
            textShadow: "1px 1px 1px #000",
          }}
        />
      </div>
      <h2 className="text-5xl font-bold text-center mb-5">Actividad activa</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-y-10 gap-x-0 w-[100%]  mt-[20px] pb-[20px]">
        {project.activeActivity.map((act) => {
          return <ActividadAlumno actividad={act} key={act.id_actividad} />;
        })}
      </div>

      <h2 className="text-5xl font-bold text-center mt-5">
        Actividades cerradas
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-y-10 gap-x-0 w-[100%]  mt-[20px] pb-[20px]">
        {project.activities.map((act) => {
          return <ActividadAlumno actividad={act} key={act.id_actividad} />;
        })}
      </div>
    </div>
  );
};
