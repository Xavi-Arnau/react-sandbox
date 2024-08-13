import React from "react";
import { useGetLocationByNameQuery } from "../services/pokemon";

const PokemonLocations = ({ pokemonName }) => {
  const { data } = useGetLocationByNameQuery(pokemonName);
  //console.log(data);

  return (
    <div>
      <h2 className="font-bold text-xl">Locations</h2>
      {data && data.length > 0 ? (
        <ul>
          {data.map((location) => (
            <li key={location.location_area.name}>
              {location.location_area.name}
            </li>
          ))}
        </ul>
      ) : (
        "Not in the wild"
      )}
    </div>
  );
};

export default PokemonLocations;
