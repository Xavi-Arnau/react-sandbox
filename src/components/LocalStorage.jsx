import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const LocalStorage = () => {
  const [bg, setBg] = useLocalStorage("buttonBg", "bg-red-600");

  const handleClick = (value) => {
    setBg(value);
  };

  return (
    <div>
      <h3 className={`text-2xl p-4 text-white ${bg}`}>Local Storage Hook</h3>
      <div className="p-8 flex flex-row gap-8">
        <button
          className="p-8 bg-red-600 rounded-xl text-white text-2xl"
          onClick={() => handleClick("bg-red-600")}
        >
          Red bg
        </button>
        <button
          className="p-8 bg-green-600 rounded-xl text-white text-2xl"
          onClick={() => handleClick("bg-green-600")}
        >
          Green bg
        </button>
      </div>
    </div>
  );
};

export default LocalStorage;
