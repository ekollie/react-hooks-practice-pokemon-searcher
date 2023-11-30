import React, { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ modifiedPokemonList }) {
  return (
    <Card.Group itemsPerRow={6}>
      {modifiedPokemonList.map((pokemon) => {
        return <PokemonCard key={pokemon.id} {...pokemon} />;
      })}
    </Card.Group>
  );
}

export default PokemonCollection;
