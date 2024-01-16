import axios from "axios";
import React from "react";
import { useState } from "react";

export const TitleChange = ({ project, setProject }) => {
  const [edit, setEdit] = useState(false);

  const handleEditName = (e) => {
    setEdit(false);
    axios.put("/api/projects", {
      projectId: project.id,
      projectName: project.nom,
    });
  };

  const title = (
    <h2 className="text-[4rem] font-bold text-center mt-5">
      <span>{project.nom}</span>
      <span
        className="i-mdi-pencil text-3xl text-gray-600"
        onClick={() => {
          setEdit(true);
          inputRef.current.focus();
        }}
      ></span>
    </h2>
  );

  const input = (
    <input
      type="text"
      className="text-[4rem] font-bold text-center mt-5 m-auto nintendo bg-transparent"
      placeholder="e.j nginx"
      value={project.nom}
      autoFocus
      onBlur={handleEditName}
      onChange={(e) => setProject({ ...project, nom: e.target.value })}
    />
  );

  return edit ? input : title;
};
