import React from "react";
import Pokegame from "./components/Pokegame";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-h1">POKECARD GAME</h1>
        <Pokegame />
      </header>
    </div>
  );
};

export default App;
