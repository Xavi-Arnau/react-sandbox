import React from "react";
import LocalStorage from "../components/LocalStorage";
import HookFetch from "../components/HookFetch";

const CustomHooks = () => {
  return (
    <div className="mt-20 min-h-screen">
      <h2 className="text-3xl p-8">Custom Hooks</h2>
      <LocalStorage />
      <HookFetch />
    </div>
  );
};

export default CustomHooks;
