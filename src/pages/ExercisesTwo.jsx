import React from "react";
import Nav from "../components/Nav";

export default function ExercisesTwo() {
  return (
    <>
      <Nav />
      <div className="flex items-center justify-center h-screen">
        <button
          className="bg-blue-500 text-white font-bold px-7 py-3  rounded-lg"
          onClick={() => alert("Clicked!")}
        >
          Click me
        </button>
      </div>
    </>
  );
}
