import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Proyecto } from "./Proyecto";

export const ProyectoStudents = ({ id, nombre }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get(`/api/items/itemsproject?projectId=${id}`).then((res) => {
      setItems(res.data.msg);
    });
  }, []);

  return (
    <div className="w-80 m-[auto] md:w-100 h-full border border-black shadow-md p-4 seto">
      <Link to={`/project/${id}`}>
        <h3 className="border-b-2 border-b-black h-10 flex items-center px-4 font-noto">
          {nombre}
        </h3>
      </Link>

      <div>
        {items.map((item) => (
          <div
            className="flex justify-between items-center my-2 px-4 py-2  rounded-md"
            key={item.id}
          >
            <img
              className="foto bg-black rounded-full h-full aspect-square"
              src={`/pokemons/${item.foto}`}
            ></img>
            <p className="text-sm">{item.nom}</p>
            <p className="text-sm">{item.percentatge}%</p>
          </div>
        ))}
      </div>
    </div>
  );
};
