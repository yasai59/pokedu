import React from "react";

export const PhotoPicker = ({ photo, setPhoto, className }) => {
  let img = [];

  for (let i = 1; i <= 1024; i++) {
    img.push(i.toString().padStart(4, "0") + ".png");
  }

  return (
    <div
      className={`overflow-y-scroll ${className} flex flex-wrap gap-2 p-1 justify-center`}
    >
      {img.map((item, index) => {
        return (
          <img
            key={index}
            src={`/pokemons/${item}`}
            alt="avatar"
            className={`w-16 h-16 rounded-lg transform transition-all duration-75 hover:scale-110 ${
              photo === index ? "border-4 border-ceciarmy" : ""
            }`}
            onClick={() => setPhoto(index)}
          />
        );
      })}
    </div>
  );
};
