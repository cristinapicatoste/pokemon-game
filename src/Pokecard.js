import React from "react";
import "./Pokecard.css";

const img_API =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

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

//sources for imgs: (add 00 to 1-9 and 0 to 10-99)
//https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png
export default Pokecard;

/*
const pokemonList = [
    { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
    { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
    { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
    { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
    { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
    { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
    { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
    { id: 133, name: "Eevee", type: "normal", base_experience: 65 },
  ];

  let ind = pokemonList[Math.floor(Math.random() * pokemonList.length)];
  const { id, name, type, base_experience } = props;

  const pokemonListNewId = () => {
    const less10 = id < 10;
    const less100 = id < 100 && id > 9;
    pokemonList.map(
      (id = () => {
        if (less10) {
          return Number("00" + id.toString());
        }
        if (less100) {
          return Number("0" + id.toString());
        }
      })
    );
  };
  //less10 ? Number('00' + id.toString()) :

  return (
    <div>
      <h3>{pokemonList[ind].id}</h3>
      <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${urlID()}.png" />
    </div>
  );
  */
