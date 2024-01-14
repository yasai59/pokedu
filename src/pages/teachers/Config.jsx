import React from "react";
import { PhotoPicker } from "../../components/PhotoPicker";
import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

export const Config = () => {
  const { changePhoto, user } = useContext(UserContext);

  const [photo, setPhoto] = React.useState(Number(user.foto.split(".")[0]) - 1);

  const handleChangePhoto = (e) => {
    changePhoto(`${(photo + 1)?.toString().padStart(4, "0")}.png`);
  };

  return (
    <div className="container m-auto h-screen">
      <h1 className="text-4xl text-center mt-5">Configuración</h1>
      <div>
        <h3 className="text-2xl ml-[5%] lg:ml-[0%]">Foto de perfil</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 border-2 h-96 mt-5 p-5">
          <div>
            <PhotoPicker
              photo={photo}
              setPhoto={setPhoto}
              className="w-full h-[21rem]  border rounded-lg p-2"
            />
          </div>
          <div className="flex flex-col ">
            <h2 className="text-center mb-10 text-4xl font-bold">
              Vista Previa
            </h2>
            <div className="grid md:grid-cols-3 grid-cols-1 place-items-center mb-5">
              <img
                src={`/pokemons/${(photo + 1)
                  ?.toString()
                  .padStart(4, "0")}.png`}
                className="w-24 h-24 rounded-full"
                alt=""
              />
              <img
                src={`/pokemons/${(photo + 1)
                  ?.toString()
                  .padStart(4, "0")}.png`}
                className="w-48 h-48 rounded-full"
                style={{ imageRendering: "pixelated" }}
                alt=""
              />
              <img
                src={`/pokemons/${(photo + 1)
                  ?.toString()
                  .padStart(4, "0")}.png`}
                className="w-48 h-48 rounded-lg"
                style={{ imageRendering: "pixelated" }}
                alt=""
              />
            </div>
            <button
              className="btn btn-primary w-min self-end me-7"
              onClick={handleChangePhoto}
            >
              Cambiar
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};
