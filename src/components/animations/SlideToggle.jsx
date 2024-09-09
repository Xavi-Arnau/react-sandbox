import React, { useState } from "react";
import AnimateHeight from "react-animate-height";

const SlideToggle = () => {
  const [show, setShow] = useState(true);
  const [height, setHeight] = useState("auto");

  return (
    <div className="w-8/12 mx-auto p-8 flex flex-col gap-4">
      <button
        onClick={() => setShow(!show)}
        className="bg-green-700 rounded-xl text-white py-2 px-4 w-fit"
      >
        Toggle with CSS
      </button>
      <div className="overflow-hidden">
        <div
          className={`${
            show ? "max-h-[500px]" : "max-h-0"
          } transition-all duration-300 bg-red-200 ease-in`}
        >
          <p className="p-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      <button
        onClick={() => setHeight(height === 0 ? "auto" : 0)}
        className="bg-red-700 rounded-xl text-white py-2 px-4 w-fit"
      >
        Toggle with react-animate-height
      </button>
      <AnimateHeight
        id="example-panel"
        duration={500}
        height={height} // see props documentation below
      >
        <div className="bg-yellow-200">
          <p className="p-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </AnimateHeight>
    </div>
  );
};

export default SlideToggle;
