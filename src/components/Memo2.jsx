import React, { useCallback, useState, useMemo } from "react";
import MemoButton2 from "./Memo/MemoButton2";

const Memo2 = () => {
  const [value, setValue] = useState(0);

  const onClick = useCallback(() => {
    setValue((prev) => prev + 1);
  }, []);

  const buttonAttr = useMemo(
    () => ({
      title: "Button with Memo",
      disabled: false,
    }),
    []
  );

  console.log("State2: ", value);
  return (
    <div className="p-8">
      <h2 className="text-3xl p-4">useMemo on an Object</h2>
      <MemoButton2 onClick={onClick} buttonAttr={buttonAttr} />
    </div>
  );
};

export default Memo2;
