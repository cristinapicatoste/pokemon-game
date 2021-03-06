const pokemon = [
  { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
  { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
  { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
  { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
  { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
  { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
  { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
  { id: 133, name: "Eevee", type: "normal", base_experience: 65 },
];

const newPokemon = pokemon.map((pokemonObject) => {
  if (pokemonObject.id < 10) {
    return { ...pokemonObject, id: "00" + pokemonObject.id };
  }
  if (pokemonObject.id > 9 && pokemonObject.id < 100) {
    return { ...pokemonObject, id: "0" + pokemonObject.id };
  } else {
    return pokemonObject.id.toString();
  }
});

console.log(newPokemon);

//   pokemonList.map(
//     (id = () => {
//       if (less10) {
//         return Number("00" + id.toString());
//       }
//       if (less100) {
//         return Number("0" + id.toString());
//       }
//     })
console.log(0 + "00");
