import React from "react";
import PokemonPage from "./PokemonPage";

function App() {
  const url = "http://localhost:3001/pokemon";
  return (
    <div className="App">
      <PokemonPage url={url} />
    </div>
  );
}

export default App;
