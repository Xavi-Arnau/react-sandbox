import React from "react";
import { useEffect, useState } from "react";

const Scroll = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  function handleScrollPercentage() {
    const howMuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercentage((howMuchScrolled / height) * 100);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <div className=" top-[80px] z-10 h-[20px] w-full bg-lime-800">
      <div
        className="h-[20px] bg-yellow-200"
        style={{ width: `${scrollPercentage}%` }}
      ></div>
    </div>
  );
};

export default Scroll;
