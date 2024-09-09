import React, { useState } from "react";
import { FaRegWindowClose } from "react-icons/fa";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const AddToList = () => {
  const [items, setItems] = useState([]);
  const [mode, setMode] = useState("item-opacity");

  const newRandomNumber = () => {
    return Math.floor(Math.random() * 1000);
  };
  const handleClick = () => {
    setItems([...items, newRandomNumber()]);
  };
  const handleRemove = (value) => {
    setItems(items.filter((item) => item !== value));
  };
  const handleChange = (event) => {
    console.log(event.target.value);

    setMode(event.target.value);
  };
  return (
    <div className="w-8/12 mx-auto flex flex-row gap-4 p-8">
      <div className="w-1/2 flex flex-col gap-4">
        <button
          onClick={handleClick}
          className="bg-green-700 rounded-xl text-white py-2 px-4 w-fit"
        >
          Add new Item (React Transition Group)
        </button>
        <select className="w-96 bg-slate-200 p-4" onChange={handleChange}>
          <option value="item-opacity">Opacity</option>
          <option value="item-side">Slide in</option>
        </select>
      </div>
      <div className="w-1/2">
        <TransitionGroup component="ul" className="flex flex-col gap-4">
          {items.map((item) => (
            <CSSTransition key={item} timeout={500} classNames={mode}>
              <li
                className="py-2 px-4 bg-black text-white rounded-xl flex flex-row justify-between items-center
              "
                key={item}
              >
                <span>{item}</span>
                <FaRegWindowClose
                  className="cursor-pointer"
                  size={20}
                  onClick={() => handleRemove(item)}
                />
              </li>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
    </div>
  );
};

export default AddToList;
