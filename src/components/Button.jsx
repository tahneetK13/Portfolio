import React from "react";

export default function Button({ children }) {
  return (
    <div className="group relative inline-block">
      <div className="absolute -inset-0.5 animate-tilt bg-gradient-to-r from-pink-600 to-purple-700 opacity-80 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200" />
      <button className="btn relative rounded-md bg-white py-3 px-8 transition duration-200 group-hover:bg-slate-100">
        {children}
      </button>
    </div>
  );
}
