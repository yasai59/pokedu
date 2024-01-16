import { useState } from "react";
import { Modal } from "./Modal";
import { PhotoPicker } from "./PhotoPicker";
import axios from "axios";

export const Skill = ({ item }) => {
  const [skill, setSkill] = useState({
    nom: item.nom,
    percentatge: item.percentatge,
  });

  const [photo, setPhoto] = useState(Number(item.foto.split(".")[0]) - 1);

  const btn = (
    <div className="grid grid-cols-3 w-52 border border-black p-4 m-auto sand ">
      <img
        className="foto bg-black rounded-full h-full aspect-square"
        src={`/pokemons/${item.foto}`}
      ></img>
      <div className="nombre mt-2">{item.nom}</div>
      <div className="porcentaje mt-2">{item.percentatge}%</div>
    </div>
  );

  const handleUpdateSkill = (e) => {
    e.preventDefault();
    axios
      .put("/api/items", {
        itemId: item.id,
        itemNom: skill.nom,
        itemPercentatge: skill.percentatge,
        itemFoto: (photo + 1).toString().padStart(4, "0") + ".png",
      })
      .then(() => {
        document.dispatchEvent(new CustomEvent("updateProject"));
      });
    document.dispatchEvent(new CustomEvent("closeModal"));
  };

  const handleDeleteSkill = (e) => {
    e.preventDefault();
    axios.delete("/api/items?itemId=" + item.id).then(() => {
      document.dispatchEvent(new CustomEvent("updateProject"));
    });
    document.dispatchEvent(new CustomEvent("closeModal"));
  };

  return (
    <Modal btn={btn} title={item.nom}>
      <form onSubmit={handleUpdateSkill}>
        <label>
          <span className="text-lg">Nombre de la habilidad: </span>
          <br />
          <input
            type="text"
            className="input input-bordered"
            placeholder="e.j nginx"
            value={skill.nom}
            onChange={(e) => setSkill({ ...skill, nom: e.target.value })}
          />
        </label>
        <br />
        <label>
          <span className="text-lg">Porcentaje de la habilidad: </span>
          <br />
          <input
            type="text"
            className="input input-bordered"
            placeholder="e.j nginx"
            value={skill.percentatge}
            onChange={(e) =>
              setSkill({ ...skill, percentatge: e.target.value })
            }
          />
        </label>
        <br />
        <PhotoPicker photo={photo} setPhoto={setPhoto} className="h-52" />
        <button className="btn mt-5">Modificar item</button>
        <button
          className="btn mt-5 ms-5"
          role="button"
          onClick={handleDeleteSkill}
        >
          Eliminar item
        </button>
      </form>
    </Modal>
  );
};
