import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Loader from "react-spinners/CircleLoader";
import MoviesSuggestions from "./MoviesSuggestions";

const Movies = () => {
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    console.log(search);

    async function fetchData() {
      try {
        setIsLoading(true);
        if (search.length > 2 && inputRef.current === document.activeElement) {
          const response = await axios.get(
            `https://express-actors.netlify.app/.netlify/functions/api/movie?search=${search}`
          );
          console.log(response.data);
          setSuggestions(response.data);
          setShowSuggestions(true);
        }
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    }
    fetchData();
  }, [search]);

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleClick = (item) => {
    setSearch(item.title);
    setSuggestions([]);
    setShowSuggestions(false);
  };

  return (
    <div className="w-8/12 mx-auto mt-8 p-10">
      <input
        ref={inputRef}
        className="w-full bg-slate-100 p-4"
        onChange={handleChange}
        type="text"
        name=""
        id=""
        placeholder="Type your search here..."
        value={search}
      />
      {isLoading ? (
        <div className="flex justify-center p-4">
          <Loader
            loading={true}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div>
          {showSuggestions ? (
            <MoviesSuggestions
              suggestions={suggestions}
              handleClick={handleClick}
            />
          ) : null}
        </div>
      )}
    </div>
  );
};

export default Movies;
