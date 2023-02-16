import React, { useState } from "react";
import Nav from "../components/Nav"

export default function ExercisesFive() {
  const [animal, _] = useState([
    "dog",
    "cat",
    "chicken",
    "cow",
    "sheep",
    "horse",
  ]);
  return (
    <>
      <Nav />
      <div className="flex gap-9 items-center justify-center h-screen">
        <ul className="list-disc">
          {animal.map((value) => {
            return (
              <li>
                {value}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
