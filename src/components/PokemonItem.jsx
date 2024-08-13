import React from "react";
import { useGetPokemonByNameQuery } from "../services/pokemon";
import Loader from "react-spinners/CircleLoader";

const PokemonItem = ({ pokemonName }) => {
  const { data, error, isLoading } = useGetPokemonByNameQuery(pokemonName);

  //console.log(data);

  return (
    <div className="App">
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>
          <Loader
            loading={isLoading}
            size={30}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </>
      ) : data ? (
        <>
          <h3 className="text-2xl font-bold text-green-500">
            {data.species.name}
          </h3>
          <img src={data.sprites.front_shiny} alt={data.species.name} />
        </>
      ) : null}
    </div>
  );
};

export default PokemonItem;
