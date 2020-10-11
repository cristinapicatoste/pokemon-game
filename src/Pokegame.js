import React from "react";
import Pokedex from "./Pokedex";
import "./Pokegame.css";

const Pokegame = (props) => {
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

  let player1 = [];
  let player2 = [...pokemon];
  while (player1.length < player2.length) {
    let randomIndex = Math.floor(Math.random() * player2.length);
    let randomPokemon = player2.splice(randomIndex, 1)[0];
    player1.push(randomPokemon);
  }
  const experiencePlayer1 = player1.reduce((a, b) => a + b.base_experience, 0);
  const experiencePlayer2 = player2.reduce((a, b) => a + b.base_experience, 0);

  return (
    <div>
      <h2>Player 1</h2>
      <Pokedex
        pokemon={player1}
        exp={experiencePlayer1}
        isWinner={experiencePlayer1 > experiencePlayer2}
      />
      <h2>Player 2</h2>
      <Pokedex
        pokemon={player2}
        exp={experiencePlayer2}
        isWinner={experiencePlayer2 > experiencePlayer1}
      />
    </div>
  );
};

export default Pokegame;
