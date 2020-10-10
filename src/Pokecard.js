import React from "react";
import "./Pokecard.css";

const img_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

const Pokecard = (props) => {
  const { id, name, type, exp } = props;
  let imgSrc = `${img_API}${id}.png`;
  return (
    <div className="Pokecard-container">
      <h1>{name}</h1>
      <img src={imgSrc} alt={name}></img>
      <p>Type: {type}</p>
      <p>Exp: {exp}</p>
    </div>
  );
};

export default Pokecard;
