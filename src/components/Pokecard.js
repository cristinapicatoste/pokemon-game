import React from "react";
import "./Pokecard.css";

const img_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";
let idToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);

const Pokecard = (props) => {
  const { id, name, type, exp } = props;
  let imgSrc = `${img_API}${idToThree(id)}.png`;
  return (
    <div className="Pokecard-container">
      <h3>{name}</h3>
      <img className="Pokecard-img" src={imgSrc} alt={name}></img>
      <p className="Pokecard-features">Type: {type}</p>
      <p className="Pokecard-features">Exp: {exp}</p>
    </div>
  );
};

export default Pokecard;
