import React from "react";
import Pokedex from "./Pokedex";
import Pokecard from "./Pokecard";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>POKECARD GAME</h1>
        <Pokedex />
      </header>
    </div>
  );
};

export default App;
