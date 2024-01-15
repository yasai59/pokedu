import axios from "axios";
import React, { useEffect } from "react";

export const SkillSelector = ({ skill, setSkill }) => {
  const [skills, setSkills] = React.useState([]);

  useEffect(() => {
    axios.get("/api/items").then((res) => {
      setSkills(res.data.msg);
    });
  }, []);

  return (
    <div className="mt-5 grid gap-2 h-40 overflow-y-scroll">
      {skills.map((item) => (
        <button
          type="button"
          key={item.id}
          onClick={() => setSkill(item.id)}
          className={`btn btn-ghost  ${skill == item.id ? "focus" : ""}`}
        >
          <div className="flex items-center justify-between w-[100%]">
            <img
              className="foto bg-black rounded-full h-full aspect-square"
              src={`/pokemons/${item.foto}`}
              alt={`${item.nom} - ${item.percentatge}%`}
            />
            <p class ="text-xl">{item.nom} {item.percentatge}%</p>
          </div>
        </button>
      ))}
    </div>
  );
};
