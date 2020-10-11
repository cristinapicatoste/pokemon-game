const createID = (arrayPokemon) => {
  const newPokemon = arrayPokemon.map((pokemonObject) => {
    if (pokemonObject.id < 10) {
      return { ...pokemonObject, id: "00" + pokemonObject.id };
    }
    if (pokemonObject.id > 9 && pokemonObject.id < 100) {
      return { ...pokemonObject, id: "0" + pokemonObject.id };
    } else {
      return { ...pokemonObject, id: pokemonObject.id.toString() };
    }
  });
  return newPokemon;
};

export default createID;
