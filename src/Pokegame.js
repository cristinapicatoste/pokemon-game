import React from "react";
import Pokecard from "./Pokecard";
import "./Pokegame.css";

const Pokegame = () => {
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
      return { ...pokemonObject, id: pokemonObject.id.toString() };
    }
  });

  let player1 = [];
  let player2 = [...newPokemon];

  while (player1.length < player2.length) {
    let randomIndex = Math.floor(Math.random() * player2.length);
    let randomPokemon = player2.splice(randomIndex, 1)[0];
    player1.push(randomPokemon);
  }

  console.log(player2);
  console.log(player1);

  return (
    <div>
      <h3>Player 1</h3>
      <div className="Pokegame-container">
        {player1.map((pokemon) => (
          <Pokecard
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name}
            type={pokemon.type}
            exp={pokemon.base_experience}
          />
        ))}
      </div>
      <h3>Player 2</h3>
      <div className="Pokegame-container">
        {player2.map((pokemon) => (
          <Pokecard
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name}
            type={pokemon.type}
            exp={pokemon.base_experience}
          />
        ))}
      </div>
    </div>
  );
};

export default Pokegame;
