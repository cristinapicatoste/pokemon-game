import React from "react";
import Pokecard from "./Pokecard";
import "./Pokegame.css";
import createID from "./CreateID";

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

  const newPokemon = createID(pokemon);

  let player1 = [];
  let player2 = [...newPokemon];

  while (player1.length < player2.length) {
    let randomIndex = Math.floor(Math.random() * player2.length);
    let randomPokemon = player2.splice(randomIndex, 1)[0];
    player1.push(randomPokemon);
  }

  const experiencePlayer1 = player1
    .map((pokemon) => pokemon.base_experience)
    .reduce((a, b) => a + b, 0);
  const experiencePlayer2 = player2
    .map((pokemon) => pokemon.base_experience)
    .reduce((a, b) => a + b, 0);
  //let total = experiencePlayer1.reduce((a, b) => a + b, 0);
  let isWinner = experiencePlayer1 > experiencePlayer2;

  let winnerPlayer1;
  let winnerPlayer2;

  if (isWinner) {
    winnerPlayer1 = <h1 className="Pokegame-h1-winner">WINNER!</h1>;
    winnerPlayer2 = <h1 className="Pokegame-h1-loser">LOSER!</h1>;
  } else {
    winnerPlayer1 = <h1 className="Pokegame-h1-loser">LOSER!</h1>;
    winnerPlayer2 = <h1 className="Pokegame-h1-winner">WINNER!</h1>;
  }

  return (
    <div>
      <h2>Player 1</h2>
      <p>
        Total experience: <strong>{experiencePlayer1}</strong>
      </p>
      {winnerPlayer1}
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

      <h2>Player 2</h2>
      <p>
        Total experience: <strong>{experiencePlayer2}</strong>
      </p>
      {winnerPlayer2}
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
      {/* <h1>{isWinner ? "Player 1 wins!" : "Player 2 wins!"}</h1> */}
    </div>
  );
};

export default Pokegame;
