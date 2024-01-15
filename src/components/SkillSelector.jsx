import axios from "axios";
import React from "react";
import { useEffect } from "react";

export const SkillSelector = ({ skill, setSkill }) => {
  const [skills, setSkills] = React.useState([]);

  useEffect(() => {
    axios.get("/api/items").then((res) => {
      setSkills(res.data.msg);
    });
  }, []);

  return (
    <div className="mt-5 grid gap-2 h-40 overflow-y-scroll">
      {skills.map((item) => {
        return (
          <button
            type="button"
            key={item.id}
            onClick={() => setSkill(item.id)}
            className={`btn btn-ghost ${skill == item.id ? "focus" : ""}`}
          >
            {item.nom}
          </button>
        );
      })}
    </div>
  );
};
