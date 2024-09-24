import React, { useRef, memo } from "react";

const MemoButton2 = memo(({ onClick, buttonAttr }) => {
  const counterRef = useRef(0);
  console.log("Memo2 Button Render...", counterRef.current);
  counterRef.current += 1;
  return (
    <div className="row">
      <button
        onClick={onClick}
        className=" bg-blue-700 text-white py-2 px-4 rounded-lg"
        disabled={buttonAttr.disabled}
      >
        {buttonAttr.title}
      </button>

      <div>Rendered {counterRef.current} times</div>
    </div>
  );
});

export default MemoButton2;
