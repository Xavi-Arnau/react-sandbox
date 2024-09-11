import React from "react";

const PersonsSuggestions = ({ suggestions, handleClick }) => {
  return (
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
  );
};

export default PersonsSuggestions;
