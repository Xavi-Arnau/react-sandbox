import React from "react";

const MoviesSuggestions = ({ suggestions, handleClick }) => {
  return (
    <ul className=" bg-slate-200 shadow-xl z-20">
      {suggestions.map((item) => (
        <li
          onClick={() => handleClick(item)}
          className="hover:bg-slate-800 hover:text-white p-2 px-4 cursor-pointer flex flex-row gap-8 items-center"
          key={item._id}
        >
          <div>
            <img src={item.pic} className="object-cover w-20" alt="" />
          </div>
          <div>{item.year}</div>
          <div>{item.title}</div>
        </li>
      ))}
    </ul>
  );
};

export default MoviesSuggestions;
