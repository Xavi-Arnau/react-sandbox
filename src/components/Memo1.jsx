import React, { useCallback, useState } from "react";
import MemoButton from "./Memo/MemoButton";

const Memo1 = () => {
  const [value, setValue] = useState(0);

  const onClick = useCallback(() => {
    setValue((prev) => prev + 1);
  }, []);

  console.log("State1: ", value);
  return (
    <div className="p-8">
      <h2 className="text-3xl p-4">useCallback on an function</h2>
      <MemoButton onClick={onClick} />
    </div>
  );
};

export default Memo1;
