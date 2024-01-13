import React from "react";
import { PhotoPicker } from "../../components/PhotoPicker";

export const Config = () => {
  const [photo, setPhoto] = React.useState(null);

  return (
    <div className="container m-auto">
      <h1 className="text-4xl text-center mt-5">Configuración</h1>
      <div>
        <h3 className="text-2xl">Foto de perfil</h3>
        <div className="grid grid-cols-2 border-2 h-96 mt-5 p-5">
          <div>
            <PhotoPicker
              photo={photo}
              setPhoto={setPhoto}
              className="w-full h-[21rem] bg-white border rounded-lg p-2"
            />
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
