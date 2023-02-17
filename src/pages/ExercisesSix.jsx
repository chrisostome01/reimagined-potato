import React, { useState } from "react";
import CustomComponent from "../components/CustomComponent";
import Nav from "../components/Nav";

export default function ExercisesSix() {
  const [animal, _] = useState([
    "🐶 dog",
    "🐱 cat",
    "🐔 chicken",
    "🐮 cow",
    "🐏 sheep",
    "🏇 horse",
  ]);
  return (
    <>
      <Nav />
      <div className="flex items-center justify-center h-screen flex-col">
        {animal.map((value) => {
          return <CustomComponent value={value} />;
        })}
      </div>
    </>
  );
}
