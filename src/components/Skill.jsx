export const Skill = ({ item }) => {
  return (
    <div className="grid grid-cols-3 w-52 bg-slate-400 place-items-center p-2">
      <img
        className="foto bg-black rounded-full h-full aspect-square"
        src={`/pokemons/${item.foto}`}
      ></img>
      <div className="nombre">{item.nom}</div>
      <div className="porcentaje">{item.percentatge}%</div>
    </div>
  );
};
