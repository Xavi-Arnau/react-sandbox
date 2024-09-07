import React, { useState } from "react";
import axios from "axios";

const Persons = () => {
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  async function fetchData() {
    try {
      if (search.length > 2) {
        const response = await axios.get(
          `https://express-actors.netlify.app/.netlify/functions/api/actor?search=${search}`
        );
        console.log(response.data);
        setSuggestions(response.data);
        setShowSuggestions(true);
      }
    } catch (error) {
      console.error(error);
    }
  }

  const handleChange = (event) => {
    setSearch(event.target.value);
    fetchData();
  };

  const handleClick = (item) => {
    setSearch(item.name);
    setSuggestions([]);
    setShowSuggestions(false);
  };

  return (
    <div className="w-8/12 mx-auto mt-8 p-10">
      <input
        className="w-full bg-slate-100 p-4"
        onChange={handleChange}
        type="text"
        name=""
        id=""
        placeholder="Type your search here..."
        value={search}
      />
      <div>
        {showSuggestions ? (
          <ul className=" bg-slate-200 shadow-xl z-20">
            {suggestions.map((item) => (
              <li
                onClick={() => handleClick(item)}
                className="hover:bg-slate-800 hover:text-white p-2 px-4 cursor-pointer"
                key={item.id}
              >
                {item.name}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
};

export default Persons;
