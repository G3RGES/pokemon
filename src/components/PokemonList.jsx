import React from "react";

const PokemonList = ({ pokemon }) => {
  return (
    <div>
      {pokemon.map((poke, idx) => (
        <p key={idx}>{poke}</p>
      ))}
    </div>
  );
};

export default PokemonList;
