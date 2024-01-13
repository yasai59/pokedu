export const Skill = ({ item }) => {
  return (
    <div className="grid grid-cols-3 w-52 border border-black p-4 m-2 m-auto ">
      <img
        className="foto bg-black rounded-full h-full aspect-square"
        src={`/pokemons/${item.foto}`}
      ></img>
      <div className="nombre mt-2">{item.nom}</div>
      <div className="porcentaje mt-2">{item.percentatge}%</div>
    </div>
  );  
};
