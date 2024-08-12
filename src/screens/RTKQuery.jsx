import React from "react";
import PokemonItem from "../components/PokemonItem";
import PokemonsList from "../components/PokemonsList";

const RTKQuery = () => {
  return (
    <div className="mt-20">
      <h1>RTKQuery</h1>
      <PokemonItem pokemonName={"bulbasaur"} />
      <PokemonsList />
    </div>
  );
};

export default RTKQuery;
