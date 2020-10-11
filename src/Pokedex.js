import React from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

const Pokedex = (props) => {
  const { isWinner, pokemon, exp } = props;
  let winner;
  if (isWinner) {
    winner = <h1 className="Pokedex-h1-winner">WINNER!</h1>;
  } else {
    winner = <h1 className="Pokedex-h1-loser">LOSER!</h1>;
  }

  return (
    <div>
      <p>
        Total experience: <strong>{exp}</strong>
      </p>
      {winner}
      <div className="Pokedex-container">
        {pokemon.map((pokemon) => (
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

export default Pokedex;
