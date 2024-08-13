import React from "react";
import PokemonItem from "../components/PokemonItem";
import PokemonsList from "../components/PokemonsList";

const RTKQuery = () => {
  return (
    <div className="mt-20">
      <h1 className="text-red-800 text-4xl font-bold mb-4">Some pokemons</h1>

      <PokemonsList />
    </div>
  );
};

export default RTKQuery;
