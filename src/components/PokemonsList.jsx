import React, { useState } from "react";
import { useGetSomePokemonsQuery } from "../services/pokemon";
import PokemonItem from "./PokemonItem";

const PokemonsList = () => {
  const [page, setPage] = useState(0);
  const { data, error, isLoading } = useGetSomePokemonsQuery(page);

  console.log(data);

  return (
    <div className="App">
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <ul className="flex flex-wrap">
            {data.results.map((item) => (
              <li key={item.name}>
                <PokemonItem pokemonName={item.name} />
              </li>
            ))}
          </ul>
        </>
      ) : null}
      <div className="flex gap-4">
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
    </div>
  );
};

export default PokemonsList;
