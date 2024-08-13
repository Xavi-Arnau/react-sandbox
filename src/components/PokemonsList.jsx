import React, { useState } from "react";
import { useGetSomePokemonsQuery } from "../services/pokemon";
import PokemonItem from "./PokemonItem";
import PokemonLocations from "./PokemonLocations";

const PokemonsList = () => {
  const [page, setPage] = useState(0);
  const { data, error, isLoading } = useGetSomePokemonsQuery(page);

  return (
    <div className="App">
      <div className="flex gap-4 mb-4">
        <button
          className="py-2 px-4 bg-green-500 text-white rounded-xl"
          onClick={() => setPage(page === 0 ? 0 : page - 1)}
        >
          Prev
        </button>
        <button
          className="py-2 px-4 bg-blue-500 text-white rounded-xl"
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <ul className="flex flex-wrap gap-4">
            {data.results.map((item) => (
              <li
                className="w-1/4 bg-blue-100 rounded-xl p-4 flex flex-col gap-4"
                key={item.name}
              >
                <PokemonItem pokemonName={item.name} />
                <PokemonLocations pokemonName={item.name} />
              </li>
            ))}
          </ul>
        </>
      ) : null}
    </div>
  );
};

export default PokemonsList;
