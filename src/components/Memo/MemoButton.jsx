import React, { useRef, memo } from "react";

const MemoButton = memo(({ onClick }) => {
  const counterRef = useRef(0);
  console.log("Memo1 Button Render...", counterRef.current);
  counterRef.current += 1;
  return (
    <div className="row">
      <button
        onClick={onClick}
        className=" bg-green-700 text-white py-2 px-4 rounded-lg"
      >
        Default Button
      </button>

      <div>Rendered {counterRef.current} times</div>
    </div>
  );
});

export default MemoButton;
