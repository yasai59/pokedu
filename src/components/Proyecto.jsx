import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export const Proyecto = ({ id, nombre }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get(`/api/items/itemsproject?projectId=${id}`).then((res) => {
      console.log(res.data.msg);
      setItems(res.data.msg);
    });
  }, []);

  return (
    <div className="w-80 h-full border border-black">
      <h3 className="border-b-2 border-b-black h-10 flex items-center ps-5">
        {nombre}
      </h3>

      <div>
        {items.map((item) => {
          return (
            <div className="flex justify-between items-center my-2 px-5">
              <p>{item.nom}</p>
              <p>{item.percentatge}%</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
