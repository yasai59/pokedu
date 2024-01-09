import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export const Proyecto = ({ id, nombre }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get(`/api/items/itemsproject?projectId=${id}`).then((res) => {
      setItems(res.data.msg);
    });
  }, []);

  return (
    <div className="w-80 h-full border border-black">
      <h3 className="border-b-2 border-b-black h-10 flex items-center ps-5">
        {nombre}{" "}
        <Link to={`/project/${id}`}>
          <span className="ms-3 i-mdi-pencil"></span>
        </Link>
      </h3>

      <div>
        {items.map((item) => {
          return (
            <div
              className="flex justify-between items-center my-2 px-5"
              key={item.id}
            >
              <p>{item.nom}</p>
              <p>{item.percentatge}%</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
