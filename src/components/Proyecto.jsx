import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Proyecto = ({ id, nombre }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get(`/api/items/itemsproject?projectId=${id}`).then((res) => {
      setItems(res.data.msg);
    });
  }, []);

  return (
    <div className="w-80 m-[auto] md:w-100 h-full border border-black shadow-md p-4 seto">
      <h3 className="border-b-2 font-semibold border-b-black h-10 flex items-center px-4 font-nds text-2xl ">
        {nombre}{" "}
        <Link to={`/project/${id}`}>
          <span className="ms-3 i-mdi-pencil"></span>
        </Link>
      </h3>

      <div>
        {items.map((item) => (
          <div
            className="flex justify-between items-center my-2 px-4 py-2 font-semibold rounded-md"
            key={item.id}
          >
            <img
        className="foto bg-black rounded-full h-full aspect-square"
        src={`/pokemons/${item.foto}`}
      ></img>
            <p className="text-md">{item.nom}</p>
            <p className="text-md">{item.percentatge}%</p>
          </div>
        ))}
      </div>
    </div>
  );
};
